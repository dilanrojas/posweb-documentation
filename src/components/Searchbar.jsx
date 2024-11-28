import { useRef, useState } from 'react'
import { adminElements, adminBranchElements } from '@consts/adminElements'
import { cashierElements } from '@consts/cashierElements'

const SearchIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" className="align-middle me-3 text-gray-30 shrink-0 group-betterhover:hover:text-gray-70">
    <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
)

const ResultIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/>
  </svg>
)

function Result({ label, href, onClick }) {
  return (
    <a role="list-item" href={href} className="result-item" onClick={onClick}>
      <div className="icon">
        <ResultIcon />
      </div>
      <span>{label}</span>
    </a>
  )
}

export default function Searchbar() {

  const searchbox = useRef(null)
  const searchInput = useRef(null)
  const searchbar = useRef(null)
  const searchboxContent = useRef(null)
  const [searchResults, setSearchResults] = useState({
    adminResults: [],
    adminBranchResults: [],
    cashierResults: [],
  })
  
  function cleanResults() {    
    setSearchResults({
      adminResults: [],
      adminBranchResults: [],
      cashierResults: [],
    })
  }
  
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }
  
  function searchItems(elements, query) {
    const normalizedQuery = removeAccents(query.toLowerCase()) 
    return elements.flatMap(element => {
      const results = [] 
      
      const normalizedLabel = removeAccents(element.label?.toLowerCase() || '') 
      const elementMatch = normalizedLabel.includes(normalizedQuery) 
  
      if (elementMatch) {
        results.push({
          label: element.label,
          href: element.href,
        }) 
        
        element.items?.forEach(item => {
          results.push({
            label: `${element.label} | ${item.label}`,
            href: `${element.href}${item.href}`,
          }) 
  
          item.subItems?.forEach(subItem => {
            results.push({
              label: `${element.label} | ${item.label} | ${subItem.label}`,
              href: `${element.href}${subItem.href}`,
            }) 
          }) 
        }) 
      } else {
        element.items?.forEach(item => {
          const normalizedItemLabel = removeAccents(item.label?.toLowerCase() || '') 
          if (normalizedItemLabel.includes(normalizedQuery)) {
            results.push({
              label: `${element.label} | ${item.label}`,
              href: `${element.href}${item.href}`,
            })

            item.subItems?.forEach(subItem => {
              results.push({
                label: `${element.label} | ${item.label} | ${subItem.label}`,
                href: `${element.href}${subItem.href}`
              })
            })
          }
  
          item.subItems?.forEach(subItem => {
            const normalizedSubItemLabel = removeAccents(subItem.label?.toLowerCase() || '') 
            if (normalizedSubItemLabel.includes(normalizedQuery)) {
              results.push({
                label: `${element.label} | ${item.label} | ${subItem.label}`,
                href: `${element.href}${subItem.href}`,
              }) 
            }
          }) 
        }) 
      }
  
      return results 
    }) 
  }
  
  
  function handleSearch(event) {
    const query = event.target.value 
    if (query === '') {
      cleanResults()
    } else {
      setSearchResults({
        adminResults: searchItems(adminElements, query),
        adminBranchResults: searchItems(adminBranchElements, query),
        cashierResults: searchItems(cashierElements, query),
      })
    }
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeSearchbox() 
      document.removeEventListener('keydown', handleEscapeKey) 
    }
  }

  function handleClickOutside(event) {
    if (!searchbar.current.contains(event.target) && !searchboxContent.current.contains(event.target)) {
      closeSearchbox()
      document.removeEventListener('click', handleClickOutside)
    }
  }
  
  function closeSearchbox() {
    searchbox.current.classList.remove('open')
    searchInput.current.value = ''
    searchbox.current.classList.remove('no-scroll')
    cleanResults()
  }
  
  function openSearchbox() {
    searchbox.current.classList.add('open')
    searchInput.current.focus()
    searchbox.current.classList.add('no-scroll')
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
  }

  return (
    <>
      <button className="searchbar" ref={searchbar} onClick={openSearchbox} aria-roledescription="searchbar">
        <SearchIcon />
        <span>Buscar</span>
      </button>

      <div className="doc-search-wrapper" ref={searchbox}>
        <div className="doc-search wrapper" ref={searchboxContent}>
          <div className="searchbox">
            <SearchIcon />
            <input
              ref={searchInput}
              type="text"
              placeholder="Buscar documentos"
              onChange={handleSearch}
              name="searchbox"
              id="searchbox-input"
              autoComplete="off"
            />
            <span className="search-cancel" onClick={closeSearchbox}>
              Cancelar
            </span>
          </div>
          <div className="search-results" role="list">
            {searchResults.adminResults.length > 0 && (
              <div>
                <h1>Administrador</h1>
                {searchResults.adminResults.map((result, index) => (
                  <Result
                    key={index}
                    label={result.label}
                    href={result.href}
                    onClick={closeSearchbox}
                  />
                ))}
              </div>
            )}

            {searchResults.adminBranchResults.length > 0 && (
              <div>
                <h1>Administrador - Sucursal</h1>
                {searchResults.adminBranchResults.map((result, index) => (
                  <Result
                    key={index}
                    label={result.label}
                    href={result.href}
                    onClick={closeSearchbox}
                  />
                ))}
              </div>
            )}

            {searchResults.cashierResults.length > 0 && (
              <div>
                <h1>Cajero</h1>
                {searchResults.cashierResults.map((result, index) => (
                  <Result
                    key={index}
                    label={result.label}
                    href={result.href}
                    onClick={closeSearchbox}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
