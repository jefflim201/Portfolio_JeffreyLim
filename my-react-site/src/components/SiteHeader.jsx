function SiteHeader({ brand, homeLabel, links, onHomeClick }) {
  return (
    <header className="site-header"
    style={{ position: 'sticky', top: 0, zIndex: 1000}}>
      <div className="site-header-inner">
        <a  className="home-link" onClick={onHomeClick}>
          {homeLabel}
        </a>

        <nav aria-label="Main navigation" className="site-nav">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        
      </div>
    </header>
  )
}

export default SiteHeader
