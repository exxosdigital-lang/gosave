import { ArrowRight, ShieldCheck } from 'lucide-react'
import catalogHeroImage from '../assets/images/gosave-hero.jpg'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="page-container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">CV. Senia Mandiri Jaya · GOSAVE</span>
          <h1>Safety Equipment untuk Kerja yang Lebih Aman</h1>
          <p className="hero-description">
            Solusi kebutuhan safety equipment dan industrial products untuk
            proyek, konstruksi, manufaktur, workshop, dan aktivitas teknis.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#products">
              Lihat Produk <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contact">
              Request Quotation
            </a>
          </div>
          <div className="hero-assurance">
            <ShieldCheck size={19} aria-hidden="true" />
            <span>Safety &amp; industrial products untuk kebutuhan B2B</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-catalog-image"
            src={catalogHeroImage}
            alt="Produk safety GOSAVE dari katalog"
            fetchPriority="high"
          />
          <div className="hero-visual-note">
            <span className="hero-note-mark" aria-hidden="true" />
            <span>Safety equipment &amp; industrial products</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
