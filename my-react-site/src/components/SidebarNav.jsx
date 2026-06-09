import React, { useState, useEffect } from 'react';
import './SidebarNav.css';

const SidebarNav = ({ links }) => {
  const [activeHash, setActiveHash] = useState(links[0]?.href || '');

  const handleDotClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveHash(href);
    }
  };

    useEffect(() => {
    const timer = setTimeout(() => {
        const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -20% 0px',
        threshold: 0.2,
        };

        const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
            }
        });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        links.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, 100); // 100ms macro-task delay ensures elements exist in the DOM layer

    return () => clearTimeout(timer);
    }, [links]);

  return (
    <nav className="sidebar-dot-nav" aria-label="Side dot navigation">
      {links.map((link) => (
        <button
          key={link.href}
          onClick={(e) => handleDotClick(e, link.href)}
          className={`sidebar-dot ${activeHash === link.href ? 'active' : ''}`}
          title={link.label}
          aria-label={`Scroll to ${link.label}`}
        />
      ))}
    </nav>
  );
};

export default SidebarNav;