function FeatureGrid({ id, features }) {
  return (
    <section id={id} className="feature-section" aria-labelledby="feature-title">
      <h2 id="feature-title">{features.title}</h2>
      <div className="feature-grid">
        {features.items.map((item) => (
          <article className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid
