import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Therapeutics - McBrex Lifesciences`,
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
    <div class="breadcrumb-nav"><a href="/">Home</a> <span>/</span> Therapeutics</div>
  </div>
</section>

<div class="page-content">
  <div class="container">
    <div class="search-bar">
      <input type="text" placeholder="Search therapeutic areas...">
      <button><i class="fas fa-search"></i></button>
    </div>
    <p class="section-subtitle">Browse our pharmaceutical products organized by therapeutic category.</p>
    <div class="grid-3">

      <a href="/therapeutics/analgesics" class="category-card" data-search="Analgesics">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Analgesics</h3>
      </a>


      <a href="/therapeutics/antacid" class="category-card" data-search="Antacid">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antacid</h3>
      </a>


      <a href="/therapeutics/antibacterials" class="category-card" data-search="Antibacterials">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antibacterials</h3>
      </a>


      <a href="/therapeutics/antibiotic" class="category-card" data-search="Antibiotic">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antibiotic</h3>
      </a>


      <a href="/therapeutics/anticancer" class="category-card" data-search="Anticancer">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Anticancer</h3>
      </a>


      <a href="/therapeutics/anticoagulant" class="category-card" data-search="Anticoagulant">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Anticoagulant</h3>
      </a>


      <a href="/therapeutics/antidepressant" class="category-card" data-search="Antidepressant">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antidepressant</h3>
      </a>


      <a href="/therapeutics/antidiabetic" class="category-card" data-search="Antidiabetic">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antidiabetic</h3>
      </a>


      <a href="/therapeutics/antidiarrheal" class="category-card" data-search="Antidiarrheal">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antidiarrheal</h3>
      </a>


      <a href="/therapeutics/antiepileptic" class="category-card" data-search="Antiepileptic">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antiepileptic</h3>
      </a>


      <a href="/therapeutics/antifungals" class="category-card" data-search="Antifungals">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antifungals</h3>
      </a>


      <a href="/therapeutics/antihistamines" class="category-card" data-search="Antihistamines">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antihistamines</h3>
      </a>


      <a href="/therapeutics/anti-inflammatories" class="category-card" data-search="Anti-Inflammatories">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Anti-Inflammatories</h3>
      </a>


      <a href="/therapeutics/antipsychotic" class="category-card" data-search="Antipsychotic">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antipsychotic</h3>
      </a>


      <a href="/therapeutics/antipyretics" class="category-card" data-search="Antipyretics">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antipyretics</h3>
      </a>


      <a href="/therapeutics/antispasmodic" class="category-card" data-search="Antispasmodic">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antispasmodic</h3>
      </a>


      <a href="/therapeutics/antiviral" class="category-card" data-search="Antiviral">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Antiviral</h3>
      </a>


      <a href="/therapeutics/asthma" class="category-card" data-search="Asthma">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Asthma</h3>
      </a>


      <a href="/therapeutics/cardiology" class="category-card" data-search="Cardiology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Cardiology</h3>
      </a>


      <a href="/therapeutics/cardiovascular" class="category-card" data-search="Cardiovascular">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Cardiovascular</h3>
      </a>


      <a href="/therapeutics/cold-and-cough" class="category-card" data-search="Cold and Cough">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Cold and Cough</h3>
      </a>


      <a href="/therapeutics/dental" class="category-card" data-search="Dental">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Dental</h3>
      </a>


      <a href="/therapeutics/dermatology" class="category-card" data-search="Dermatology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Dermatology</h3>
      </a>


      <a href="/therapeutics/diabetic" class="category-card" data-search="Diabetic">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Diabetic</h3>
      </a>


      <a href="/therapeutics/endocrinology" class="category-card" data-search="Endocrinology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Endocrinology</h3>
      </a>


      <a href="/therapeutics/gastroenterology" class="category-card" data-search="Gastroenterology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Gastroenterology</h3>
      </a>


      <a href="/therapeutics/general-otc" class="category-card" data-search="General and OTC Medicines">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>General and OTC Medicines</h3>
      </a>


      <a href="/therapeutics/gynecology" class="category-card" data-search="Gynecology and Fertility">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Gynecology and Fertility</h3>
      </a>


      <a href="/therapeutics/hepatology" class="category-card" data-search="Hepatology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Hepatology</h3>
      </a>


      <a href="/therapeutics/hypertension" class="category-card" data-search="Hypertension/Blood Pressure">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Hypertension/Blood Pressure</h3>
      </a>


      <a href="/therapeutics/immunology" class="category-card" data-search="Immunology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Immunology</h3>
      </a>


      <a href="/therapeutics/laxatives" class="category-card" data-search="Laxatives">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Laxatives</h3>
      </a>


      <a href="/therapeutics/nephrology" class="category-card" data-search="Nephrology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Nephrology</h3>
      </a>


      <a href="/therapeutics/neurology" class="category-card" data-search="Neurology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Neurology</h3>
      </a>


      <a href="/therapeutics/nutraceuticals" class="category-card" data-search="Nutraceuticals, Multivitamins and Multiminerals">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Nutraceuticals, Multivitamins and Multiminerals</h3>
      </a>


      <a href="/therapeutics/oncology" class="category-card" data-search="Oncology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Oncology</h3>
      </a>


      <a href="/therapeutics/ophthalmology" class="category-card" data-search="Ophthalmology">
        <div class="category-card-icon"><i class="fas fa-heartbeat"></i></div>
        <h3>Ophthalmology</h3>
      </a>

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
