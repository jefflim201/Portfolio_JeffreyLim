function Contact({ id, contact }) {
  const Resume = contact?.Resume || contact?.Resume || ''
  const GitHub = contact?.GitHub || ''
  const primaryLabel = contact?.primaryCtaLabel || 'Email'
  const secondaryLabel = contact?.secondaryCtaLabel || 'Call'

  return (
    <section id={id} className="contact hero" aria-labelledby="contact-title">
      <h1 id="contact-title">{contact.title || 'Contact'}</h1>
      
      <p> I'm currently seeking engineering opportunities and would love to connect with you.</p>
      <p> Jeffrey Lim </p>
      <a href="mailto:jeff.lim.2001@gmail.com">jeff.lim.2001@gmail.com</a>
      <p> 416-707-2234 </p>
      <div className="hero-actions">
        {Resume ? (
          <a className="btn btn-primary" href={Resume} target="_blank" rel="noopener noreferrer">
            {primaryLabel}
          </a>
        ) : null}
        {GitHub? (
          <a className="btn btn-primary" href={GitHub} target="_blank" rel="noopener noreferrer">
            {secondaryLabel}
          </a>
        ) : null}
        {contact.linkedin ? (
          <a className="btn btn-primary" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedinLabel || 'LinkedIn'}
          </a>
        ) : null}
      </div>
      
    </section>
  )
}

export default Contact
