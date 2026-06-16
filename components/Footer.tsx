import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img
              src="/assets/logo.jpg"
              alt="McBrex Lifesciences"
              style={{ height: 50, marginBottom: 16 }}
            />
            <p className="footer-desc">
              McBrex Lifesciences - your trusted partner in pharmaceuticals.
              Delivering 552+ WHO-GMP certified products across 6 divisions since 2018.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100091566522828" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://twitter.com/McbrexLife" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.youtube.com/@mcbrexlifesciences" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube" />
              </a>
              <a href="https://www.instagram.com/mcbrexlifescience/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/products">Products</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/career">Career</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/apply-job">Apply Job</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms</Link>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Our Divisions</h4>
            <div className="footer-links">
              <Link href="/divisions/mcbrex-lifesciences">Mcbrex Lifesciences</Link>
              <Link href="/divisions/cardiwin-lifecare">Cardiwin Lifecare</Link>
              <Link href="/divisions/optibrex-lifesciences">Optibrex Lifesciences</Link>
              <Link href="/divisions/criticine-care">Criticine Care</Link>
              <Link href="/divisions/gynox-remedies">Gynox Remedies</Link>
              <Link href="/divisions/curicine-healthcare">Curicine Healthcare</Link>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Address</h4>
            <div className="footer-contact-item">
              <i className="fas fa-phone" />
              <div>
                <a href="tel:+918264040991">+91 8264040991</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope" />
              <div>
                <a href="mailto:info@mcbrexlifesciences.com">info@mcbrexlifesciences.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt" />
              <div>SCO 866, NAC, Manimajra, Chandigarh, India - 160101</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
