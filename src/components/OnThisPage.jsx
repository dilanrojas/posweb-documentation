import { adminElements, adminBranchElements } from "@consts/adminElements"
import { cashierElements } from "@consts/cashierElements"
import { useEffect, useRef, useState } from "react"

export const allElements = adminElements.concat(adminBranchElements, cashierElements)

export default function OnThisPage({ pathname }) {
  const onThisPageRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(null)
  const [activeIndex, setActiveIndex] = useState('')

  const toTop = () => {
    window.location.hash = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const updateCurrentPage = () => {
      setCurrentPage(allElements.find(element => element.href === pathname))
    }

    updateCurrentPage()
    
    const updateIndex = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const position = section.getBoundingClientRect()
        if (position.top >= 0 && position.top <= 130) {
          const onScreenIndex = [...onThisPageRef.current.querySelectorAll('.this-page-item')].find(item => item.href.includes(section.id))
          if (onScreenIndex) {
            setActiveIndex(onScreenIndex.href)
          }
        }
      })
    }

    window.addEventListener('scroll', updateIndex)
    window.addEventListener('hashchange', updateIndex)
    return () => {
      window.removeEventListener('scroll', updateIndex)
      window.removeEventListener('hashchange', updateIndex)
    }
  }, [])

  useEffect(() => {
    const onThisPageItems = onThisPageRef.current.querySelectorAll('.this-page-item')
    const activeItem = [...onThisPageItems].find(item => item.href === activeIndex)
    if (activeItem) {
      onThisPageRef.current.querySelector('.this-page-item-active')?.classList.remove('this-page-item-active')
      activeItem.classList.add('this-page-item-active')
    }
  }, [activeIndex])

  return (
    <div className="on-this-page-wrapper">
      <aside className="on-this-page" ref={onThisPageRef}>
        <h3>En esta página</h3>
        <nav>
          <ul>
            <li>
              <a onClick={toTop} aria-roledescription="buton" className='this-page-item'>
                Inicio
              </a>
            </li>

            {currentPage?.items?.map(({ label, href, subItems }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`this-page-item ${activeIndex === href ? 'this-page-item-active' : ''}`}
                  >
                  {label}
                </a>
                {subItems && subItems.length > 0 && (
                  <ul className="sub-index">
                    {subItems.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className={`this-page-item ${activeIndex === href ? 'this-page-item-active' : ''}`}
                          >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}