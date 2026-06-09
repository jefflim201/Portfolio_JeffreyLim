import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'
import { siteContent } from './data/siteContent'
import React from 'react';
import SidebarNav from './components/SidebarNav';
import './App.css'

function App() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    

    <div className="site-shell">
      <SiteHeader
        brand={siteContent.nav.brand}
        homeLabel={siteContent.nav.homeLabel}
        links={siteContent.nav.links}
        onHomeClick={handleHomeClick}
      />

      <main>
        <div className="scroll-section">
          <Hero id="about" hero={siteContent.hero} />
        </div>
        <div className="scroll-section">
          <Portfolio id="portfolio" items={siteContent.portfolioItems} header={siteContent.portfolioHeader} />
        </div>
        
        <div className="scroll-section">
          <Contact id="contact" contact={siteContent.contact} />
        </div>
      </main>
      <SidebarNav links={siteContent.nav.links} />
      <SiteFooter footer={siteContent.footer} />
    </div>
  )
}

export default App
