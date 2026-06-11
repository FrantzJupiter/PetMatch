import { Heart, Home, MessageCircle } from 'lucide-react'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <a className="brand" href="/" aria-label="PetMatch - página inicial">
          <span className="brand__mark" aria-hidden="true">
            <Heart fill="currentColor" />
          </span>

          <span className="brand__text">
            <strong>PetMatch</strong>
            <small>ONG Bazar Pet</small>
          </span>
        </a>

        <span className="app-header__message">Adote com amor</span>
      </header>

      <main className="app-content">
        <section className="discovery-intro">
          <p className="discovery-intro__eyebrow">Adoção responsável</p>
          <h1>Descubra seu novo amigo</h1>
          <p>Conheça histórias de animais que estão esperando por um lar.</p>
        </section>
      </main>

      <nav className="bottom-navigation" aria-label="Navegação principal">
        <a className="bottom-navigation__item is-active" href="/">
          <Home aria-hidden="true" />
          <span>Início</span>
        </a>

        <a className="bottom-navigation__item" href="#interesses">
          <MessageCircle aria-hidden="true" />
          <span>Interesses</span>
        </a>
      </nav>
    </div>
  )
}

export default App
