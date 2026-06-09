import React, { useRef } from 'react'

function Portfolio({ id = 'portfolio-bar', items, header }) {
  const containerRef = useRef(null)
  const defaultItems = Array.from({ length: 6 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    description: 'Short description of the project.',
  }))
  const list = items && items.length ? items.slice(0, 6) : defaultItems

  return (
    <section id={id} className="feature-section portfolio" aria-labelledby={`${id}-title`}>
      <div className="portfolio-header">
        {header?.eyebrow ? <div className="eyebrow">{header.eyebrow}</div> : null}
        <h1 id={`${id}-title`}>{header?.title || 'Portfolio'}</h1>
        {header?.subtitle ? <p className="portfolio-subtitle">{header.subtitle}</p> : null}
      </div>

      <div className="carousel-wrap">
        <button
          type="button"
          className="nav-arrow left"
          aria-label="Scroll left"
          onClick={() => {
            const itemWidth = containerRef.current?.querySelector('.carousel-item')?.clientWidth || 300
            containerRef.current?.scrollBy({ left: -itemWidth, behavior: 'smooth' })
          }}
        >
          ‹
        </button>

        <div
          ref={containerRef}
          className="carousel"
          tabIndex={0}
          role="listbox"
          aria-label="Portfolio items"
        >
          {list.map((it, idx) => {
            const isExternalLink = typeof it.link === 'string' && it.link.startsWith('http');
            const isHashScroll = typeof it.link === 'string' && it.link.startsWith('#');
            const handleItemNavigation = () => {
              if(!it.link || it.link === '#') return; // No link, do nothing
              if (isHashScroll) {
                document.querySelector(it.link)?.scrollIntoView({ behavior: 'smooth' });
              } else if (isExternalLink) {
                window.open(it.link, "_blank", "noopener,noreferrer");
              }
              else {
                const fileLink = new URL(it.link, window.location.origin).href;
                window.open(fileLink, "_blank", "noopener,noreferrer");
              }
            };

          return (
            <article
              key={idx}
              className="carousel-item"
              role="option"
              aria-setsize={list.length}
              aria-posinset={idx + 1}
              tabIndex={0} /* Makes it keyboard focusable */
              onClick={() => window.open(it.link, "_blank", "noopener,noreferrer")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(it.link, "_blank", "noopener,noreferrer");
                }
            }}
            >
              <div className="card-content">
                <h3>{it.title}</h3>
                <p>{it.description}</p>
              </div>
            </article>
          );
        })}
        </div>

        <button
          type="button"
          className="nav-arrow right"
          aria-label="Scroll right"
          onClick={() => {
            const itemWidth = containerRef.current?.querySelector('.carousel-item')?.clientWidth || 300
            containerRef.current?.scrollBy({ left: itemWidth, behavior: 'smooth' })
          }}
        >
          ›
        </button>
      </div>
      {header?.ctaLabel && header?.ctaHref ? (
          <div className="portfolio-cta-wrap">
            <a className="btn btn-primary portfolio-cta" href={header.ctaHref}>
              {header.ctaLabel}
            </a>
          </div>
        ) : null}
    </section>
  )
}

export default Portfolio
