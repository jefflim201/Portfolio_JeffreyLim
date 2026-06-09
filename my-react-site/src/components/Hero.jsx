function Hero({ id, hero }) {
  return (
    <section id={id} className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 id="hero-title">{hero.title}</h1>
      <br></br>
      <p className="subtitle">{hero.subtitle}</p>
      <br></br>
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>Python (Machine Learning)</li>
        <li>Statistical Analysis (Excel/MATLAB/SPSS)</li>
        <li>Biomechanics</li>
        <li>Designing Test Fixtures</li>
        <li>Designing Test Fixtures</li>
        <li>Designing Test Fixtures</li>
        <li>Designing Test Fixtures</li>
        <li>Designing Test Fixtures</li>
      </ul>
      <br></br>
      
      <div className="hero-actions">
        <a href="#portfolio" 
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {hero.primaryCta || 'See Work'}
        </a>
      </div>
    </section>
  )
}

export default Hero
