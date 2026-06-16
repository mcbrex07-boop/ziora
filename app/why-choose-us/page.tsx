import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Why Choose Us - McBrex Lifesciences`,
  description: `McBrex Lifesciences - Trusted pharmaceutical company since 2018. WHO-GMP certified products.`,
}

export default function Page() {
  const html = `<!-- Top Bar -->
<div class="top-bar">
  <div class="container">
    <div class="flex items-center justify-between">
      <div class="top-bar-left">
        <a href="tel:+918264040991"><i class="fas fa-phone"></i> +91 8264040991</a>
        <span class="top-bar-sep">|</span>
        <a href="mailto:info@mcbrexlifesciences.com"><i class="fas fa-envelope"></i> info@mcbrexlifesciences.com</a>
      </div>
    </div>
  </div>
</div>
<!-- Header -->
<header class="header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="header-logo">
        <img src="/assets/logo.jpg" alt="McBrex Lifesciences">
      </a>
      <nav class="header-nav">
        <a href="/" class="">Home</a>
            <div class="dropdown">
              <button class="dropdown-toggle">About Us <i class="fas fa-chevron-down"></i></button>
              <div class="dropdown-menu">
                <div class="dropdown-header">About Us</div>
                <a href="/about">Who We Are</a><a href="/board-of-directors">Board of Directors</a><a href="/landing-page">Landing Page</a><a href="/social-responsibility">Social Responsibility</a><a href="/quality">Quality</a><a href="/why-choose-us">Why Choose Us</a>
                
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-toggle">Products <i class="fas fa-chevron-down"></i></button>
              <div class="dropdown-menu">
                <div class="dropdown-header">Products</div>
                <a href="/products">All Products</a><a href="/products/tablets">Tablets</a><a href="/products/capsules">Capsules</a><a href="/products/drops">Drops</a><a href="/products/inhaler">Inhaler</a><a href="/products/injection">Injection</a><a href="/products/tooth-paste">Tooth Paste</a><a href="/products/nasal-spray">Nasal Spray</a><a href="/products/tetra-pack">Tetra Pack</a><a href="/products/suspension">Suspension</a><a href="/products/cream">Cream</a><a href="/products/dry-syrup">Dry Syrup</a><a href="/products/dusting-powder">Dusting Powder</a><a href="/products/ear-drops">Ear Drops</a><a href="/products/eye-drops">Eye Drops</a>
                <div class="dropdown-divider"></div><a href="/products">View All Products &rarr;</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-toggle">Therapeutics <i class="fas fa-chevron-down"></i></button>
              <div class="dropdown-menu">
                <div class="dropdown-header">Therapeutics</div>
                <a href="/therapeutics">All Therapeutics</a><a href="/therapeutics/analgesics">Analgesics</a><a href="/therapeutics/antacid">Antacid</a><a href="/therapeutics/antibacterials">Antibacterials</a><a href="/therapeutics/antibiotic">Antibiotic</a><a href="/therapeutics/anticancer">Anticancer</a><a href="/therapeutics/anticoagulant">Anticoagulant</a><a href="/therapeutics/antidepressant">Antidepressant</a><a href="/therapeutics/antidiabetic">Antidiabetic</a><a href="/therapeutics/antidiarrheal">Antidiarrheal</a><a href="/therapeutics/antiepileptic">Antiepileptic</a><a href="/therapeutics/antifungals">Antifungals</a><a href="/therapeutics/antihistamines">Antihistamines</a><a href="/therapeutics/anti-inflammatories">Anti-Inflammatories</a><a href="/therapeutics/antipsychotic">Antipsychotic</a>
                <div class="dropdown-divider"></div><a href="/therapeutics">View All Therapeutics &rarr;</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-toggle">Molecules <i class="fas fa-chevron-down"></i></button>
              <div class="dropdown-menu">
                <div class="dropdown-header">Molecules</div>
                <a href="/molecules">All Molecules</a><a href="/molecules/acebrophylline">Acebrophylline</a><a href="/molecules/aceclofenac">Aceclofenac</a><a href="/molecules/acetylcysteine">Acetylcysteine</a><a href="/molecules/acyclovir">Acyclovir</a><a href="/molecules/acotiamide">Acotiamide</a><a href="/molecules/adapalene">Adapalene</a><a href="/molecules/s-adenosyl-methionine">S-Adenosyl Methionine</a><a href="/molecules/albendazole">Albendazole</a><a href="/molecules/alfuzosin">Alfuzosin</a><a href="/molecules/l-alanyl-l-glutamine">L-Alanyl-L-Glutamine</a><a href="/molecules/allylestrenol">Allylestrenol</a><a href="/molecules/alpha-ketoanalogues">Alpha Ketoanalogues</a><a href="/molecules/alpha-lipoic-acid">Alpha Lipoic Acid</a><a href="/molecules/alpha-beta-arteether">Alpha-Beta Arteether</a>
                <div class="dropdown-divider"></div><a href="/molecules">View All Molecules &rarr;</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-toggle">Blogs <i class="fas fa-chevron-down"></i></button>
              <div class="dropdown-menu">
                <div class="dropdown-header">Blogs</div>
                <a href="/blog">Blog</a><a href="/state-wise-blog">State Wise Blog</a><a href="/district-wise-blog">District Wise Blog</a>
                
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-toggle">Divisions <i class="fas fa-chevron-down"></i></button>
              <div class="dropdown-menu">
                <div class="dropdown-header">Divisions</div>
                <a href="/divisions">All Divisions</a><a href="/divisions/mcbrex-lifesciences">Mcbrex Lifesciences</a><a href="/divisions/cardiwin-lifecare">Cardiwin Lifecare</a><a href="/divisions/optibrex-lifesciences">Optibrex Lifesciences</a><a href="/divisions/criticine-care">Criticine Care</a><a href="/divisions/gynox-remedies">Gynox Remedies</a><a href="/divisions/curicine-healthcare">Curicine Healthcare</a>
                
              </div>
            </div><a href="/career" class="">Career</a><a href="/customer-reviews" class="">Customer Reviews</a><a href="/contact" class="">Contact</a>
        <a href="#" class="btn btn-primary" data-enquiry>Enquiry</a>
      </nav>
      <button class="mobile-menu-btn"><i class="fas fa-bars"></i></button>
    </div>
  </div>
</header>
<!-- Mobile Menu -->
<div class="mobile-overlay"></div>
<div class="mobile-menu">
  <div class="mobile-menu-header">
    <img src="/assets/logo.jpg" alt="McBrex Lifesciences">
    <button class="mobile-menu-close"><i class="fas fa-times"></i></button>
  </div>
  <nav class="mobile-menu-nav">
    <a href="/">Home</a>
            <button class="mobile-dropdown-btn">About Us <i class="fas fa-chevron-down"></i></button>
            <div class="mobile-submenu">
              <a href="/about">Who We Are</a><a href="/board-of-directors">Board of Directors</a><a href="/landing-page">Landing Page</a><a href="/social-responsibility">Social Responsibility</a><a href="/quality">Quality</a><a href="/why-choose-us">Why Choose Us</a>
              
            </div>
            <button class="mobile-dropdown-btn">Products <i class="fas fa-chevron-down"></i></button>
            <div class="mobile-submenu">
              <a href="/products">All Products</a><a href="/products/tablets">Tablets</a><a href="/products/capsules">Capsules</a><a href="/products/drops">Drops</a><a href="/products/inhaler">Inhaler</a><a href="/products/injection">Injection</a><a href="/products/tooth-paste">Tooth Paste</a><a href="/products/nasal-spray">Nasal Spray</a><a href="/products/tetra-pack">Tetra Pack</a><a href="/products/suspension">Suspension</a><a href="/products/cream">Cream</a><a href="/products/dry-syrup">Dry Syrup</a><a href="/products/dusting-powder">Dusting Powder</a><a href="/products/ear-drops">Ear Drops</a><a href="/products/eye-drops">Eye Drops</a><a href="/products/eye-ear-drop">Eye/Ear Drops</a><a href="/products/gargle">Gargle</a><a href="/products/gel">Gel</a><a href="/products/gum-paint">Gum Paint</a><a href="/products/herbal-syrup">Herbal Syrup</a>
              <a href="/products">View All &rarr;</a>
            </div>
            <button class="mobile-dropdown-btn">Therapeutics <i class="fas fa-chevron-down"></i></button>
            <div class="mobile-submenu">
              <a href="/therapeutics">All Therapeutics</a><a href="/therapeutics/analgesics">Analgesics</a><a href="/therapeutics/antacid">Antacid</a><a href="/therapeutics/antibacterials">Antibacterials</a><a href="/therapeutics/antibiotic">Antibiotic</a><a href="/therapeutics/anticancer">Anticancer</a><a href="/therapeutics/anticoagulant">Anticoagulant</a><a href="/therapeutics/antidepressant">Antidepressant</a><a href="/therapeutics/antidiabetic">Antidiabetic</a><a href="/therapeutics/antidiarrheal">Antidiarrheal</a><a href="/therapeutics/antiepileptic">Antiepileptic</a><a href="/therapeutics/antifungals">Antifungals</a><a href="/therapeutics/antihistamines">Antihistamines</a><a href="/therapeutics/anti-inflammatories">Anti-Inflammatories</a><a href="/therapeutics/antipsychotic">Antipsychotic</a><a href="/therapeutics/antipyretics">Antipyretics</a><a href="/therapeutics/antispasmodic">Antispasmodic</a><a href="/therapeutics/antiviral">Antiviral</a><a href="/therapeutics/asthma">Asthma</a><a href="/therapeutics/cardiology">Cardiology</a>
              <a href="/therapeutics">View All &rarr;</a>
            </div>
            <button class="mobile-dropdown-btn">Molecules <i class="fas fa-chevron-down"></i></button>
            <div class="mobile-submenu">
              <a href="/molecules">All Molecules</a><a href="/molecules/acebrophylline">Acebrophylline</a><a href="/molecules/aceclofenac">Aceclofenac</a><a href="/molecules/acetylcysteine">Acetylcysteine</a><a href="/molecules/acyclovir">Acyclovir</a><a href="/molecules/acotiamide">Acotiamide</a><a href="/molecules/adapalene">Adapalene</a><a href="/molecules/s-adenosyl-methionine">S-Adenosyl Methionine</a><a href="/molecules/albendazole">Albendazole</a><a href="/molecules/alfuzosin">Alfuzosin</a><a href="/molecules/l-alanyl-l-glutamine">L-Alanyl-L-Glutamine</a><a href="/molecules/allylestrenol">Allylestrenol</a><a href="/molecules/alpha-ketoanalogues">Alpha Ketoanalogues</a><a href="/molecules/alpha-lipoic-acid">Alpha Lipoic Acid</a><a href="/molecules/alpha-beta-arteether">Alpha-Beta Arteether</a><a href="/molecules/aluminium-hydroxide">Aluminium Hydroxide</a><a href="/molecules/ambroxol">Ambroxol</a><a href="/molecules/amikacin">Amikacin</a><a href="/molecules/amisulpride">Amisulpride</a><a href="/molecules/amitriptyline">Amitriptyline</a>
              <a href="/molecules">View All &rarr;</a>
            </div>
            <button class="mobile-dropdown-btn">Blogs <i class="fas fa-chevron-down"></i></button>
            <div class="mobile-submenu">
              <a href="/blog">Blog</a><a href="/state-wise-blog">State Wise Blog</a><a href="/district-wise-blog">District Wise Blog</a>
              
            </div>
            <button class="mobile-dropdown-btn">Divisions <i class="fas fa-chevron-down"></i></button>
            <div class="mobile-submenu">
              <a href="/divisions">All Divisions</a><a href="/divisions/mcbrex-lifesciences">Mcbrex Lifesciences</a><a href="/divisions/cardiwin-lifecare">Cardiwin Lifecare</a><a href="/divisions/optibrex-lifesciences">Optibrex Lifesciences</a><a href="/divisions/criticine-care">Criticine Care</a><a href="/divisions/gynox-remedies">Gynox Remedies</a><a href="/divisions/curicine-healthcare">Curicine Healthcare</a>
              
            </div><a href="/career">Career</a><a href="/customer-reviews">Customer Reviews</a><a href="/contact">Contact</a>
  </nav>
</div>

<!-- Breadcrumb -->
<section class="breadcrumb-section">
  <div class="container">
    <h1 class="breadcrumb-title">Home</h1>
    <div class="breadcrumb-nav"><a href="/">Home</a> <span>/</span> <a href="/about">About Us</a> <span>/</span> Why Choose Us</div>
  </div>
</section>

<div class="page-content">
  <div class="container">
    <p class="section-subtitle">Discover why healthcare professionals and distributors across India trust McBrex Lifesciences.</p>
    <div class="grid-2" style="gap:24px;">
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-shield-alt"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">ISO &amp; WHO-GMP Certified Products</h3>
          <p style="color:#666666;">Every product in our portfolio is manufactured in WHO-GMP certified facilities and meets ISO 9001:2015 quality standards. We ensure complete documentation and batch traceability for all products.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-flask"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">High-Quality Pharmaceutical Range</h3>
          <p style="color:#666666;">Our portfolio includes 201+ products across tablets, capsules, injections, syrups, ointments, and more, covering all major therapeutic categories.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-handshake"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">Ethical Business Practices</h3>
          <p style="color:#666666;">Transparency and integrity guide every business decision. We believe in building trust through honest communication and fair dealings with all partners.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-heart"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">Trusted Healthcare Partnerships</h3>
          <p style="color:#666666;">With 568+ satisfied clients, we have built a reputation for reliability and excellence. Our partners stay with us because we deliver on our promises.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-map-marked-alt"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">Nationwide Distribution Support</h3>
          <p style="color:#666666;">Our efficient logistics network ensures timely delivery of products across all states in India. We maintain adequate inventory to meet demand consistently.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-rupee-sign"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">Competitive Pricing</h3>
          <p style="color:#666666;">We offer attractive pricing and profit margins to our franchise partners, making it a lucrative business opportunity with low investment.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-clock"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">Timely Delivery</h3>
          <p style="color:#666666;">We understand the importance of consistent supply in healthcare. Our streamlined processes ensure your orders are fulfilled promptly.</p>
        </div>
      </div>
      <div class="card" style="padding:32px;display:flex;gap:20px;align-items:flex-start;">
        <div class="icon-box-circle" style="margin:0;flex-shrink:0;"><i class="fas fa-headset"></i></div>
        <div>
          <h3 style="margin-bottom:8px;">PCD Pharma Franchise Support</h3>
          <p style="color:#666666;">From promotional inputs to marketing guidance, we provide comprehensive support to help our franchise partners succeed in their territory.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="/assets/logo.jpg" alt="McBrex Lifesciences" class="footer-logo" style="height:50px;margin-bottom:16px;">
        <p class="footer-desc">McBrex Lifesciences - your trusted partner in the world of pharmaceuticals. Delivering high-quality, WHO-GMP certified products since 2018.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100091566522828" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/McbrexLife" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/@mcbrexlifesciences" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/mcbrexlifescience/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div>
        <h4 class="footer-heading">Company</h4>
        <div class="footer-links">
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/products">Products</a>
          <a href="/career">Career</a>
          <a href="/faq">FAQ</a>
          <a href="/apply-job">Apply Job</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
        </div>
      </div>
      <div>
        <h4 class="footer-heading">Our Divisions</h4>
        <div class="footer-links">
          <a href="/divisions/mcbrex-lifesciences">Mcbrex Lifesciences</a><a href="/divisions/cardiwin-lifecare">Cardiwin Lifecare</a><a href="/divisions/optibrex-lifesciences">Optibrex Lifesciences</a><a href="/divisions/criticine-care">Criticine Care</a><a href="/divisions/gynox-remedies">Gynox Remedies</a><a href="/divisions/curicine-healthcare">Curicine Healthcare</a>
        </div>
      </div>
      <div>
        <h4 class="footer-heading">Address</h4>
        <div class="footer-contact-item">
          <i class="fas fa-phone"></i>
          <div><a href="tel:+918264040991">+91 8264040991</a></div>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-envelope"></i>
          <div><a href="mailto:info@mcbrexlifesciences.com">info@mcbrexlifesciences.com</a></div>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>351, 2nd Floor, Industrial Area, Phase-2, Panchkula-134113</div>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-clock"></i>
          <div>Monday - Saturday</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      Copyright &copy; 2024 McBrex Lifesciences. All rights reserved.
    </div>
  </div>
</footer>
<!-- Bottom Fixed Bar -->
<div class="bottom-bar">
  <a href="tel:+918264040991"><i class="fas fa-phone"></i> Call Us</a>
  <a href="https://wa.me/918264040991"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  <a href="#" data-enquiry><i class="fas fa-envelope"></i> Send Enquiry</a>
</div>
<!-- Enquiry Modal -->
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h3 class="modal-title">Send Enquiry</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" required>
        </div>
        <div class="form-group">
          <label>Division</label>
          <select required>
            <option value="">Select Division</option>
            <option>Mcbrex General</option>
            <option>Gynox Gynae</option>
            <option>Cardiwin Cardio Diabetic</option>
            <option>Criticine Care Critical Injectables</option>
            <option>Optibrex General</option>
            <option>Curicine General</option>
          </select>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Submit Enquiry</button>
      </form>
    </div>
  </div>
</div>
`;
  
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
