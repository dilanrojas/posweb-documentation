import { allElements } from "./OnThisPage"
import { useEffect, useState } from "react"

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
  </svg>
)

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg>
)

export default function NextPrevPage({ pathname }) {
  const [prevPageHref, setPrevPageHref] = useState(null)
  const [nextPageHref, setNextPageHref] = useState(null)
  const [prevPageTitle, setPrevPageTitle] = useState(null)
  const [nextPageTitle, setNextPageTitle] = useState(null)

  function setNextPrevPage(arr) {
    let currentIndex = arr.findIndex(el => el.href === pathname);
    let prevPageID = currentIndex > 0 ? currentIndex - 1 : null;
    let nextPageID = currentIndex < arr.length - 1 ? currentIndex + 1 : null;
  
    if (prevPageID !== null) {
      setPrevPageHref(arr[prevPageID].href)
      setPrevPageTitle(arr[prevPageID].label)
    }
    
    if (nextPageID !== null) {
      setNextPageHref(arr[nextPageID].href)
      setNextPageTitle(arr[nextPageID].label)
    }
  }

  useEffect(() => {
    setNextPrevPage(allElements)
  }, []); 

  return (
    <nav className="next-prev-nav">
      {prevPageHref && (
        <div className="paginator prev-page">
          <a
            href={prevPageHref}
            aria-label={`Ir a la página anterior: ${prevPageTitle}`}
          >
            <span className="prev-page-icon paginator-icon">
              <PrevIcon />
            </span>
            <div className="paginator-content">
              <span className="paginator-indicator">Anterior</span>
              <span className="paginator-title">{prevPageTitle}</span>
            </div>
          </a>
        </div>
      )}

      {nextPageHref && (
        <div className="paginator next-page">
          <a
            href={nextPageHref}
            aria-label={`Ir a la siguiente página: ${nextPageTitle}`}
          >
            <div className="paginator-content">
              <span className="paginator-indicator">Siguiente</span>
              <span className="paginator-title">{nextPageTitle}</span>
            </div>
            <span className="next-icon paginator-icon">
              <NextIcon />
            </span>
          </a>
        </div>
      )}
    </nav>
  )
}