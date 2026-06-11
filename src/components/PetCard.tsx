import { useRef } from 'react'
import { HeartPulse } from 'lucide-react'
import type { Pet } from '../types/pet'

interface PetCardProps {
  pet: Pet
  onFavorite?: () => void
  onSkip?: () => void
}

const minimumSwipeDistance = 60

function PetCard({ pet, onFavorite, onSkip }: PetCardProps) {
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    const touch = event.changedTouches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    if (!touchStart.current) return

    const touch = event.changedTouches[0]
    const distanceX = touch.clientX - touchStart.current.x
    const distanceY = touch.clientY - touchStart.current.y

    touchStart.current = null

    if (
      Math.abs(distanceX) < minimumSwipeDistance ||
      Math.abs(distanceX) <= Math.abs(distanceY)
    ) {
      return
    }

    if (distanceX > 0) {
      onFavorite?.()
      return
    }

    onSkip?.()
  }

  return (
    <article
      className="pet-card"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="pet-card__image-wrapper">
        <img
          className="pet-card__image"
          src={pet.imageUrl}
          alt={`${pet.name}, ${pet.breed}`}
        />
        <span className="pet-card__organization">
          {pet.location.organization}
        </span>
      </div>

      <div className="pet-card__content">
        <header className="pet-card__header">
          <div>
            <p className="pet-card__species">{pet.species}</p>
            <h2>{pet.name}</h2>
            <p className="pet-card__summary">
              {pet.breed} · Porte {pet.size} · {pet.age}
            </p>
          </div>

          <span className="pet-card__health" title={pet.healthStatus}>
            <HeartPulse aria-hidden="true" />
            <span>{pet.healthStatus}</span>
          </span>
        </header>

        <section className="pet-card__story" aria-labelledby={`story-${pet.id}`}>
          <h3 id={`story-${pet.id}`}>A história de {pet.name}</h3>
          <p>{pet.story}</p>
        </section>

        <section
          className="pet-card__temperament"
          aria-labelledby={`temperament-${pet.id}`}
        >
          <h3 id={`temperament-${pet.id}`}>Temperamento</h3>
          <ul>
            {pet.temperament.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default PetCard
