function SiteFooter({ id, footer }) {
  return (
    <footer id={id} className="site-footer">
      <small>{footer?.text ?? 'Built with React and Vite'}</small>
    </footer>
  )
}

export default SiteFooter
