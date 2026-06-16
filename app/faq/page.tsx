import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `FAQ - McBrex Lifesciences`,
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
    <div class="breadcrumb-nav"><a href="/">Home</a> <span>/</span> FAQ</div>
  </div>
</section>

<div class="page-content">
  <div class="container" style="max-width:900px;">
    <h2 style="text-align:center;margin-bottom:8px;">Frequently Asked Questions</h2>
    <p class="section-subtitle">Find answers to common questions about McBrex Lifesciences.</p>
    <div style="margin-bottom:32px;">
      <h3 style="color:#D92323;margin-bottom:16px;">Products</h3>
      <div class="faq-item active">
        <div class="faq-question">What quality certifications do your products have? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">All our products are manufactured in WHO-GMP certified facilities and comply with ISO 9001:2015 standards. We ensure complete quality documentation for every batch.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-question">How can I get the complete product list? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">You can request our complete product list by filling out the enquiry form on our website or contacting us directly at +91 8264040991.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-question">Do you offer third-party manufacturing? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">Yes, we offer third-party manufacturing services through our network of WHO-GMP certified manufacturing partners.</div></div>
      </div>
    </div>
    <div style="margin-bottom:32px;">
      <h3 style="color:#D92323;margin-bottom:16px;">Franchise</h3>
      <div class="faq-item">
        <div class="faq-question">What is PCD Pharma Franchise? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">PCD (Propaganda Cum Distribution) Pharma Franchise is a business model where we grant monopoly rights to distributors for marketing our products in their designated territory.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-question">What promotional inputs do you provide? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">We provide visual aids, product catalogs, MR bags, sample kits, prescription pads, and other promotional materials to our franchise partners at no additional cost.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-question">What is the minimum investment required? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">The investment varies based on the division and territory. Contact us for detailed investment requirements and expected returns.</div></div>
      </div>
    </div>
    <div style="margin-bottom:32px;">
      <h3 style="color:#D92323;margin-bottom:16px;">Orders & Delivery</h3>
      <div class="faq-item">
        <div class="faq-question">What is the minimum order quantity? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">The minimum order quantity varies by product. Generally, we accept orders starting from one full box pack.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-question">How long does delivery take? <i class="fas fa-chevron-down"></i></div>
        <div class="faq-answer"><div class="faq-answer-inner">Delivery typically takes 3-7 business days depending on the location. We work with reliable logistics partners to ensure timely delivery.</div></div>
      </div>
    </div>
    <div style="padding:24px;background:#F5F5F5;border-radius:8px;text-align:center;">
      <h3 style="margin-bottom:12px;">Still Have Questions?</h3>
      <p style="color:#666666;margin-bottom:16px;">Our team is happy to help. Reach out to us directly.</p>
      <a href="/contact" class="btn btn-primary">Contact Us</a>
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
