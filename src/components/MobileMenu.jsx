import { useState, useRef, useEffect } from 'react'

const OpenIcon = () => (
  <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export default function MobileMenu() {
  
  const mobileButton = useRef(null)
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [isScrollLocked, setIsScrollLocked] = useState(false)
  function handleScroll() {
    setIsScrollLocked(prev => !prev)
    isScrollLocked
      ? mobileButton.current.classList.remove('no-scroll')
      : mobileButton.current.classList.add('no-scroll')
  }
  

  function handleClick() {
    setIsExpanded(prev => !prev)
    handleScroll()

    document.querySelector('.primary-nav').classList.toggle('show')
    if (document.querySelector('.sidebar')) {
      document.querySelector('.sidebar').classList.toggle('show')
    }
  }

  useEffect(() => {
    const breakpoint = 1080

    function handleResize() {
      if (window.innerWidth > breakpoint) {
        setIsExpanded(false)
        setIsScrollLocked(false)
        mobileButton.current.classList.remove('no-scroll')
        document.querySelector('.primary-nav')?.classList.remove('show')
        document.querySelector('.sidebar')?.classList.remove('show')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <button className="sm-menu button" onClick={handleClick} aria-expanded={isExpanded} ref={mobileButton}>
      <div className="open-icon"><OpenIcon /></div>
      <div className="close-icon"><CloseIcon /></div>
    </button>
  )
}
