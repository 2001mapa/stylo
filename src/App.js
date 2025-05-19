import React from 'react';
import './App.css';
import fondo from './assets/Fondo.PNG';

function App() {
  return (
    <div 
      className="app-wrapper"
      style={{ 
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="app-overlay"></div>
      
      <div className="app-container">
        <h1 className="main-title">STYLO</h1>
        
        <div className="linktree-container">
          {/* Catálogo */}
          <a href="https://wa.me/c/584142163088" className="link-card catalog">
            <div className="items">
              <span role="img" aria-label="cap">🧢</span>
              <span role="img" aria-label="bag">👜</span>
            </div>
            <p>Catálogo</p>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/+584142163088" className="link-card whatsapp">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp"
              className="social-icon"
            />
            <p>Contáctanos</p>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/styloimportadora?igsh=MTV6a3g0ZTRmcXh4Yg==" className="link-card instagram">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
              alt="Instagram"
              className="social-icon"
            />
            <p>Síguenos</p>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@jesusgonzalez6271?_t=ZS-8wE8DolXyDA&_r=1" className="link-card tiktok">
            <img 
              src="https://unpkg.com/ionicons@7.1.0/dist/svg/logo-tiktok.svg" 
              alt="TikTok"
              className="social-icon"
            />
            <p>TikTok</p>
          </a>
        </div>
      </div>
      
      <footer className="site-footer">
        <p className="footer-text">© {new Date().getFullYear()} STYLO</p>
        <div className="footer-links">
          <a href="/terminos">Términos y condiciones</a>
          <a href="/privacidad">Política de privacidad</a>
        </div>
      </footer>
    </div>
  );
}

export default App;