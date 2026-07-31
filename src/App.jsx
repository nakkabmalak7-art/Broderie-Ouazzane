import React, { useState, useEffect } from 'react';
import './index.css';
import { FiExternalLink } from 'react-icons/fi';

// --- ICONS ---
const PhoneIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const WhatsAppIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const WhatsAppOfficialIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
const InstagramIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TikTokIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>;
const ArrowRightIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const ArrowLeftIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const MapPinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const ShieldCheckIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>;
const TruckIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
const GemIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9"></polygon><polygon points="11 3 13 3 15 9 9 9"></polygon><line x1="6" y1="3" x2="9" y2="9"></line><line x1="18" y1="3" x2="15" y2="9"></line><line x1="22" y1="9" x2="2" y2="9"></line><line x1="12" y1="22" x2="9" y2="9"></line><line x1="12" y1="22" x2="15" y2="9"></line></svg>;
const HeadphonesIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>;
const CrownIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="2 20 22 20 20 9 16 13 12 6 8 13 4 9 2 20"></polygon></svg>;
const SpoolIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h12v2H6z"></path><path d="M7 6h10v12H7z"></path><path d="M6 18h12v2H6z"></path><line x1="7" y1="9" x2="17" y2="9" stroke="white" strokeWidth="0.5"></line><line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="0.5"></line><line x1="7" y1="15" x2="17" y2="15" stroke="white" strokeWidth="0.5"></line></svg>;
const DiamondIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{opacity: 0.5}}><polygon points="12 2 22 12 12 22 2 12"></polygon></svg>;
const ScissorsIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>;
const FabricIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const RulerIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><line x1="6" y1="12" x2="6" y2="16"></line><line x1="10" y1="12" x2="10" y2="16"></line><line x1="14" y1="12" x2="14" y2="16"></line><line x1="18" y1="12" x2="18" y2="16"></line></svg>;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [settingsData, setSettingsData] = useState({});
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/data/settings.json').then(r => r.json()),
      fetch('/data/categories.json').then(r => r.json()),
      fetch('/data/products.json').then(r => r.json()),
    ]).then(([settings, categories, products]) => {
      setSettingsData(settings);
      setCategoriesData(categories.map(cat => ({
        ...cat,
        products: products.filter(p => p.category_id === cat.id)
      })));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return null;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setSelectedCategory(null);
    setSelectedProduct(null);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const openWhatsApp = (e, text) => {
    if (e) e.preventDefault();
    window.open(`https://wa.me/${settingsData.whatsapp_number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    window.scrollTo(0,0);
  };

  const handleProductClick = (product, category) => {
    setSelectedCategory(category);
    setSelectedProduct(product);
    window.scrollTo(0,0);
  };

  const goBackToHome = () => {
    setSelectedCategory(null);
    setSelectedProduct(null);
    window.scrollTo(0,0);
  };

  const goBackToCategory = () => {
    setSelectedProduct(null);
    window.scrollTo(0,0);
  };

  return (
    <div className="app-container">
      {/* Top Bar (Info Banner style) */}
      <div className="top-banner-elegant">
        <div className="banner-item"><GemIcon /> <span>Des broderie unique pour vous.</span></div>
        
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={goBackToHome} style={{cursor: 'pointer'}}>
          <img src="/logo.jpg" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <h2>Broderie Ouazzane</h2>
          </div>
        </div>
        <div className="nav-links">
          <a href="#accueil" onClick={(e) => scrollToSection(e, 'accueil')} className={!selectedCategory && !selectedProduct ? "active" : ""}>Accueil</a>
          <a href="#creations" onClick={(e) => scrollToSection(e, 'creations')} className={selectedCategory ? "active" : ""}>Nos créations</a>
          <a href="#sur-mesure" onClick={(e) => scrollToSection(e, 'sur-mesure')}>Sur mesure</a>
          <a href="#a-propos" onClick={(e) => scrollToSection(e, 'a-propos')}>À propos</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
        <button className="btn-primary" onClick={(e) => openWhatsApp(e, 'Bonjour, je souhaite commander sur WhatsApp.')}>
          <WhatsAppIcon /> Commander sur WhatsApp
        </button>
      </nav>

      {/* --- CONDITIONAL RENDERING --- */}
      {selectedProduct && selectedCategory ? (
        // PRODUCT DETAILS VIEW
        <div className="view-container">
          <div className="breadcrumbs-bar">
            <button className="btn-text-back" onClick={goBackToCategory}>
              <ArrowLeftIcon /> Retour
            </button>
            <div className="breadcrumbs-path">
              <span onClick={goBackToHome}>Accueil</span> / <span onClick={goBackToCategory}>{selectedCategory.title}</span> / <span className="current">{selectedProduct.title}</span>
            </div>
          </div>

          <div className="product-details-elegant">
            <div className="product-gallery-elegant">
              <span className="badge-nouveau">Nouveau</span>
              <button className="slider-btn left"><ArrowLeftIcon /></button>
              <img src={selectedProduct.img} alt={selectedProduct.title} className="main-img-elegant" />
              <button className="slider-btn right"><ArrowRightIcon /></button>
              <div className="thumbnails-elegant">
                {selectedProduct.thumbs.map((thumb, idx) => (
                  <img key={idx} src={thumb} alt="thumb" className={`thumb-img ${idx === 0 ? 'active' : ''}`} />
                ))}
              </div>
            </div>

            <div className="product-info-elegant">
              <div className="cat-subtitle">{selectedCategory.title.toUpperCase()}</div>
              <h1 className="product-title-elegant">{selectedProduct.title}</h1>
              <p className="product-ref">Référence : {selectedProduct.ref}</p>
              
              <div className="product-price-elegant">{selectedProduct.price}</div>
              <div className="separator-diamond"><DiamondIcon /></div>
              
              <p className="product-desc-elegant" style={{ whiteSpace: 'pre-wrap' }}>
                {selectedProduct.description}
              </p>

              <div className="product-features-list">
                <h4>Caractéristiques</h4>
                <ul>
                  <li><ScissorsIcon /> Broderie artisanale réalisée à la main</li>
                  <li><FabricIcon /> Tissu haut de gamme, confortable et résistant</li>
                  <li><RulerIcon /> Disponible en plusieurs tailles et couleurs</li>
                  <li><MapPinIcon /> Fabrication artisanale à Ouazzane, Maroc</li>
                </ul>
              </div>

              <div className="product-actions-elegant">
                <button className="btn-primary full-width" onClick={(e) => openWhatsApp(e, `Bonjour, je souhaite commander l'article: ${selectedProduct.title} (${selectedProduct.ref})`)}>
                  <WhatsAppOfficialIcon /> Commander sur WhatsApp
                </button>
                <button className="btn-outline full-width" onClick={goBackToCategory}>
                  <ArrowLeftIcon /> Retour aux {selectedCategory.title}
                </button>
              </div>
            </div>
          </div>

          <div className="similar-products">
            <h3>Produits similaires</h3>
            <div className="separator-diamond"><DiamondIcon /></div>
            <div className="similar-products-grid">
              <button className="slider-btn-small left"><ArrowLeftIcon /></button>
              {selectedCategory.products.map((prod, idx) => (
                <div className="similar-card" key={idx} onClick={() => handleProductClick(prod, selectedCategory)}>
                  <img src={prod.img} alt={prod.title} />
                  <div className="similar-info">
                    <h5>{prod.title}</h5>
                    <div className="similar-bottom">
                      <span className="similar-price">{prod.price}</span>
                      <button className="btn-icon-small" onClick={(e) => { e.stopPropagation(); openWhatsApp(e, `Bonjour, je veux commander: ${prod.title}`); }}><WhatsAppIcon /></button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="slider-btn-small right"><ArrowRightIcon /></button>
            </div>
          </div>
        </div>

      ) : selectedCategory ? (
        // CATEGORY VIEW
        <div className="view-container">
          <div className="breadcrumbs-bar">
            <button className="btn-text-back" onClick={goBackToHome}>
              <ArrowLeftIcon /> Retour
            </button>
            <div className="breadcrumbs-path">
              <span onClick={goBackToHome}>Accueil</span> / <span className="current">{selectedCategory.title}</span>
            </div>
          </div>
          
          <div className="category-header">
            <h2>{selectedCategory.title}</h2>
            <div className="separator-diamond"><DiamondIcon /></div>
            <p>Découvrez notre collection de {selectedCategory.title.toLowerCase()} artisanaux.</p>
          </div>

          <div className="category-grid">
            {selectedCategory.products.map((prod, idx) => (
              <div className="category-product-card" key={idx} onClick={() => handleProductClick(prod, selectedCategory)}>
                <img src={prod.img} alt={prod.title} />
                <div className="category-product-info">
                  <h5>{prod.title}</h5>
                  <div className="category-product-bottom">
                    <span className="category-product-price">{prod.price}</span>
                    <button className="btn-icon-small" onClick={(e) => { e.stopPropagation(); openWhatsApp(e, `Bonjour, je veux commander: ${prod.title}`); }}><WhatsAppIcon /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      ) : (
        // MAIN PAGE CONTENT
        <>
          <header className="hero" id="accueil">
            <div className="hero-content">
              <h1>{settingsData.hero_heading}</h1>
              <p>{settingsData.hero_subheading}</p>
              <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '16px' }} onClick={(e) => scrollToSection(e, 'creations')}>
                Découvrir nos créations <ArrowRightIcon />
              </button>
            </div>
            <div className="hero-image">
              <img src={settingsData.hero_image} alt="Broderie artisanale" />
            </div>
          </header>

          <section className="features" id="a-propos">
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

          <section className="creations" id="creations">
            <h2 className="section-title">Nos Catégories</h2>
            <div className="title-separator">
              <CrownIcon />
            </div>
            <div className="creations-grid">
              {categoriesData.map((cat, index) => (
                <div className="creation-card" key={index} onClick={() => handleCategoryClick(cat)}>
                  <img src={cat.img} alt={cat.title} className="creation-img" style={{ cursor: 'pointer' }} />
                  <div className="creation-info" style={{ cursor: 'pointer' }}>
                    <h4>{cat.title}</h4>
                    <button className="btn-icon"><ArrowRightIcon /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cta" id="sur-mesure">
            <div className="cta-left">
              <div className="cta-icon">
                <img src={settingsData.cta_image} alt="Sur mesure" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
              <div className="cta-text">
                <h2>{settingsData.cta_heading}</h2>
                <p>{settingsData.cta_text}</p>
              </div>
            </div>
            <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '16px' }} onClick={(e) => openWhatsApp(e, 'Bonjour, je souhaite réaliser un projet de broderie sur mesure.')}>
              <WhatsAppIcon /> Commander maintenant
            </button>
          </section>
        </>
      )}

      {/* Trust Badges Footer Banner */}
      <div className="trust-banner">
        <div className="trust-item">
          <TruckIcon />
          <div>
            <strong>Livraison rapide</strong>
            <p>partout au Maroc</p>
          </div>
        </div>
        <div className="trust-item">
          <GemIcon />
          <div>
            <strong>Broderie 100% artisanale</strong>
            <p>faite à la main</p>
          </div>
        </div>
        <div className="trust-item">
          <ShieldCheckIcon />
          <div>
            <strong>Paiement à la livraison</strong>
            <p>simple et sécurisé</p>
          </div>
        </div>
        <div className="trust-item">
          <HeadphonesIcon />
          <div>
            <strong>Service client disponible</strong>
            <p>7j/7</p>
          </div>
        </div>
      </div>

      <footer className="footer" id="contact">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="Logo" className="logo-img" />
              <div className="logo-text">
                <h2>Broderie Ouazzane</h2>
              </div>
            </div>
            <p className="footer-desc">Votre boutique spécialisée en broderie artisanale, pour des créations uniques et élégantes.</p>
            <div className="footer-socials">
              <a href={`https://wa.me/${settingsData.whatsapp_number}`} target="_blank" rel="noreferrer" style={{color: 'inherit'}}><WhatsAppIcon /></a>
              <a href={settingsData.instagram_link} target="_blank" rel="noreferrer" style={{color: 'inherit'}}><InstagramIcon /></a>
              <a href={settingsData.tiktok_link} target="_blank" rel="noreferrer" style={{color: 'inherit'}}><TikTokIcon /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#accueil" onClick={(e) => scrollToSection(e, 'accueil')}>Accueil</a></li>
              <li><a href="#creations" onClick={(e) => scrollToSection(e, 'creations')}>Nos créations</a></li>
              <li><a href="#sur-mesure" onClick={(e) => scrollToSection(e, 'sur-mesure')}>Sur mesure</a></li>
              <li><a href="#a-propos" onClick={(e) => scrollToSection(e, 'a-propos')}>À propos</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact</h3>
            <div className="footer-contact-item">
              <a href={settingsData.instagram_link} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit'}}>
                <InstagramIcon /> <span>{settingsData.instagram_handle}</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <a href={settingsData.tiktok_link} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit'}}>
                <TikTokIcon /> <span>{settingsData.tiktok_handle}</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <a href={`https://wa.me/${settingsData.whatsapp_number}`} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit'}}>
                <WhatsAppOfficialIcon /> <span>{settingsData.phone_number}</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <MapPinIcon /> <span>{settingsData.location}</span>
              <a href={settingsData.maps_link} target="_blank" rel="noreferrer" title="Voir sur Google Maps" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '8px', opacity: 0.7 }}><FiExternalLink size={14} /></a>
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
