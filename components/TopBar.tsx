export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="top-bar-left">
            <a href="tel:+918264040991">
              <i className="fas fa-phone" /> +91 8264040991
            </a>
            <span className="top-bar-sep">|</span>
            <a href="mailto:info@mcbrexlifesciences.com">
              <i className="fas fa-envelope" /> info@mcbrexlifesciences.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
