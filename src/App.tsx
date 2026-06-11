import { useState } from 'react'
import { Heart, Home, X } from 'lucide-react'
import PetCard from './components/PetCard'
import { pets } from './data/pets'

type View = 'discovery' | 'favorites'

function App() {
  const [currentPetIndex, setCurrentPetIndex] = useState(0)
  const [favoritePetIds, setFavoritePetIds] = useState<number[]>([])
  const [activeView, setActiveView] = useState<View>('discovery')

  const currentPet = pets[currentPetIndex]
  const nextPet = pets[(currentPetIndex + 1) % pets.length]
  const favoritePets = pets.filter((pet) => favoritePetIds.includes(pet.id))
  const isCurrentPetFavorite = favoritePetIds.includes(currentPet.id)

  function moveCurrentPetToEnd() {
    setCurrentPetIndex((currentIndex) => (currentIndex + 1) % pets.length)
  }

  function favoriteCurrentPet() {
    setFavoritePetIds((currentIds) =>
      currentIds.includes(currentPet.id)
        ? currentIds
        : [...currentIds, currentPet.id],
    )
    moveCurrentPetToEnd()
  }

  function removeFavorite(petId: number) {
    setFavoritePetIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== petId),
    )
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <button
          className="brand"
          type="button"
          aria-label="PetMatch - página inicial"
          onClick={() => setActiveView('discovery')}
        >
          <span className="brand__mark" aria-hidden="true">
            <Heart fill="currentColor" />
          </span>

          <span className="brand__text">
            <strong>PetMatch</strong>
            <small>ONG Bazar Pet</small>
          </span>
        </button>

        {activeView === 'discovery' && (
          <div className="app-header__discovery">
            <span>Adoção responsável</span>
            <strong>Descubra seu novo amigo</strong>
          </div>
        )}

        <span className="app-header__message">Adote com amor</span>
      </header>

      <main className="app-content">
        {activeView === 'discovery' ? (
          <>
            <p className="discovery-count" aria-live="polite">
              {currentPetIndex + 1} de {pets.length} animais disponíveis
            </p>

            <div className="pet-deck">
              <PetCard key={`preview-${nextPet.id}`} pet={nextPet} isPreview />
              <PetCard
                key={`current-${currentPet.id}`}
                pet={currentPet}
                onFavorite={favoriteCurrentPet}
                onSkip={moveCurrentPetToEnd}
              />
            </div>

            <div className="match-actions">
              <button
                className="match-action match-action--skip"
                type="button"
                aria-label={`Ver outro animal e colocar ${currentPet.name} no fim da fila`}
                title="Ver outro animal"
                onClick={moveCurrentPetToEnd}
              >
                <X aria-hidden="true" />
              </button>

              <button
                className={`match-action match-action--favorite${isCurrentPetFavorite ? ' is-favorite' : ''}`}
                type="button"
                aria-label={`Favoritar ${currentPet.name}`}
                title="Adicionar aos favoritos"
                onClick={favoriteCurrentPet}
              >
                <Heart
                  aria-hidden="true"
                  fill={isCurrentPetFavorite ? 'currentColor' : 'none'}
                />
              </button>
            </div>
          </>
        ) : (
          <section className="favorites-view">
            <header className="favorites-view__header">
              <p className="discovery-intro__eyebrow">Sua seleção</p>
              <h1>Animais favoritos</h1>
              <p>
                Reveja com calma os animais que mais combinaram com você.
              </p>
            </header>

            {favoritePets.length > 0 ? (
              <ul className="favorites-list">
                {favoritePets.map((pet) => (
                  <li className="favorite-pet" key={pet.id}>
                    <img src={pet.imageUrl} alt={`${pet.name}, ${pet.breed}`} />

                    <div className="favorite-pet__content">
                      <div>
                        <h2>{pet.name}</h2>
                        <p>
                          {pet.breed} · Porte {pet.size} · {pet.age}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label={`Remover ${pet.name} dos favoritos`}
                        title="Remover dos favoritos"
                        onClick={() => removeFavorite(pet.id)}
                      >
                        <Heart fill="currentColor" aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="favorites-empty">
                <Heart aria-hidden="true" />
                <h2>Nenhum favorito ainda</h2>
                <p>
                  Use o coração durante a descoberta para guardar um animal.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveView('discovery')}
                >
                  Conhecer animais
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      <nav className="bottom-navigation" aria-label="Navegação principal">
        <button
          className={`bottom-navigation__item${activeView === 'discovery' ? ' is-active' : ''}`}
          type="button"
          onClick={() => setActiveView('discovery')}
        >
          <Home aria-hidden="true" />
          <span>Início</span>
        </button>

        <button
          className={`bottom-navigation__item${activeView === 'favorites' ? ' is-active' : ''}`}
          type="button"
          onClick={() => setActiveView('favorites')}
        >
          <span className="bottom-navigation__icon">
            <Heart aria-hidden="true" />
            {favoritePets.length > 0 && (
              <span className="bottom-navigation__badge">
                {favoritePets.length}
              </span>
            )}
          </span>
          <span>Favoritos</span>
        </button>
      </nav>
    </div>
  )
}

export default App
