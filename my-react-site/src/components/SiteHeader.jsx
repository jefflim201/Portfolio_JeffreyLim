import { useState, useEffect, useRef } from 'react';

function SiteHeader({ homeLabel, links, onHomeClick }) {
  const [isTop, setTop] = useState(true);
  const observerTarget = useRef(null);

  useEffect(() => {
    // Create an observer that triggers when our target pixel enters/leaves the top of the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If entry.isIntersecting is true, the top pixel is visible (we are at the top)
        setTop(entry.isIntersecting);
      },
      { threshold: [0] } // Trigger immediately at the boundary
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return (
    <>
      {/* Invisible anchor at the absolute top of the page layout */}
      <div 
        ref={observerTarget} 
        style={{ position: 'absolute', top: 0, left: 0, height: '1px', width: '1px', pointerEvents: 'none' }} 
      />
      
      <header 
        className={`site-header ${isTop ? 'scrollUp' : 'scrollDown'}`}
        style={{ position: 'sticky', top: 0, zIndex: 1000 }}
      >
        <div className="site-header-inner">
          <a className="home-link" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
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
    </>
  );
}

export default SiteHeader;