import React from 'react';
import './index.css';

// SVG Icons
const PhoneIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const WhatsAppIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const InstagramIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FacebookIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const ShieldCheckIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>;
const TruckIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
const GemIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9"></polygon><polygon points="11 3 13 3 15 9 9 9"></polygon><line x1="6" y1="3" x2="9" y2="9"></line><line x1="18" y1="3" x2="15" y2="9"></line><line x1="22" y1="9" x2="2" y2="9"></line><line x1="12" y1="22" x2="9" y2="9"></line><line x1="12" y1="22" x2="15" y2="9"></line></svg>;
const HeadphonesIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>;
const CrownIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="2 20 22 20 20 9 16 13 12 6 8 13 4 9 2 20"></polygon></svg>;
const ArrowRightIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const MapPinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const SpoolIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12v2H6z"></path>
    <path d="M7 6h10v12H7z"></path>
    <path d="M6 18h12v2H6z"></path>
    <line x1="7" y1="9" x2="17" y2="9" stroke="white" strokeWidth="0.5"></line>
    <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="0.5"></line>
    <line x1="7" y1="15" x2="17" y2="15" stroke="white" strokeWidth="0.5"></line>
  </svg>
);

export default function App() {
  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <PhoneIcon /> <span>0694569123</span>
          </div>
          <div className="top-bar-item">
            <InstagramIcon /> <span>Broderieouazzane</span>
          </div>
        </div>
        <div className="top-bar-right">
          <WhatsAppIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-icon">B</div>
          <div className="logo-text">
            <h2>Broderie Ouazzane</h2>
            <p>coopérative Al-Borhane</p>
          </div>
        </div>
        <div className="nav-links">
          <a href="#" className="active">Accueil</a>
          <a href="#">Nos créations</a>
          <a href="#">Sur mesure</a>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
        </div>
        <button className="btn-primary" onClick={() => window.open('https://wa.me/212694569123?text=Bonjour,%20je%20souhaite%20commander%20vos%20broderies.', '_blank')}>
          <WhatsAppIcon /> Commander
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Les plus belles <span className="serif">broderies artisanales</span></h1>
          <p>Découvrez nos créations uniques et faites la différence avec un travail de qualité.</p>
          <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '16px' }}>
            Découvrir nos créations <ArrowRightIcon />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/hero_embroidery_1785360243227.png" alt="Broderie artisanale" />
        </div>
      </header>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon"><ShieldCheckIcon /></div>
          <h4>Qualité garantie</h4>
          <p>Fils et finitions haut de gamme</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><TruckIcon /></div>
          <h4>Livraison rapide</h4>
          <p>Partout au Maroc</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><GemIcon /></div>
          <h4>Savoir-faire artisanal</h4>
          <p>Un travail unique</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><HeadphonesIcon /></div>
          <h4>Service client</h4>
          <p>À votre écoute</p>
        </div>
      </section>

      {/* Creations */}
      <section className="creations">
        <h2 className="section-title">Nos créations</h2>
        <div className="title-separator">
          <CrownIcon />
        </div>
        <div className="creations-grid">
          {[
            { img: "caftan_1785360256452.png", title: "Caftans" },
            { img: "djellaba_1785360268335.png", title: "Djellabas" },
            { img: "cushion_1785360277965.png", title: "Coussins" },
            { img: "tablecloth_1785360290005.png", title: "Nappes" },
            { img: "custom_embroidery_1785360299799.png", title: "Broderie sur mesure" }
          ].map((item, index) => (
            <div className="creation-card" key={index}>
              <img src={`/images/${item.img}`} alt={item.title} className="creation-img" />
              <div className="creation-info">
                <h4>{item.title}</h4>
                <button className="btn-icon"><ArrowRightIcon /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-left">
          <div className="cta-icon">
            <SpoolIcon />
          </div>
          <div className="cta-text">
            <h2>Une idée ? Un projet ?</h2>
            <p>Nous réalisons vos broderies sur mesure, selon vos envies.</p>
          </div>
        </div>
        <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '16px' }} onClick={() => window.open('https://wa.me/212694569123?text=Bonjour,%20je%20souhaite%20commander%20vos%20broderies.', '_blank')}>
          <WhatsAppIcon /> Commander maintenant
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon">B</div>
              <div className="logo-text">
                <h2>Broderie Ouazzane</h2>
              </div>
            </div>
            <p className="footer-desc">Votre boutique spécialisée en broderie artisanale, pour des créations uniques et élégantes.</p>
            <div className="footer-socials">
              <WhatsAppIcon />
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Nos créations</a></li>
              <li><a href="#">Sur mesure</a></li>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact</h3>
            <div className="footer-contact-item">
              <InstagramIcon /> <span>Broderieouazzane</span>
            </div>
            <div className="footer-contact-item">
              <PhoneIcon /> <span>0694569123</span>
            </div>
            <div className="footer-contact-item">
              <MapPinIcon /> <span>Ouazzane, Maroc</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Broderie Ouazzane. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
