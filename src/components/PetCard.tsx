import { useRef, useState } from 'react'
import { Heart, HeartPulse, X } from 'lucide-react'
import type { Pet } from '../types/pet'

interface PetCardProps {
  pet: Pet
  isPreview?: boolean
  onFavorite?: () => void
  onSkip?: () => void
}

const swipeThreshold = 90
const exitAnimationDuration = 240

function PetCard({
  pet,
  isPreview = false,
  onFavorite,
  onSkip,
}: PetCardProps) {
  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const isHorizontalGesture = useRef(false)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    if (isPreview || isExiting || event.button !== 0) return

    pointerStart.current = { x: event.clientX, y: event.clientY }
    isHorizontalGesture.current = false
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (!pointerStart.current || isPreview || isExiting) return

    const distanceX = event.clientX - pointerStart.current.x
    const distanceY = event.clientY - pointerStart.current.y

    if (
      !isHorizontalGesture.current &&
      Math.abs(distanceY) > Math.abs(distanceX)
    ) {
      setIsDragging(false)
      pointerStart.current = null
      return
    }

    if (Math.abs(distanceX) > 8) {
      isHorizontalGesture.current = true
      setDragX(distanceX)
    }
  }

  function finishSwipe(direction: 'left' | 'right') {
    const exitDistance =
      Math.max(window.innerWidth, document.documentElement.clientWidth) * 1.2

    setIsExiting(true)
    setIsDragging(false)
    setDragX(direction === 'right' ? exitDistance : -exitDistance)

    window.setTimeout(() => {
      if (direction === 'right') {
        onFavorite?.()
      } else {
        onSkip?.()
      }
    }, exitAnimationDuration)
  }

  function handlePointerEnd() {
    if (!pointerStart.current || isPreview || isExiting) return

    pointerStart.current = null
    isHorizontalGesture.current = false
    setIsDragging(false)

    if (Math.abs(dragX) >= swipeThreshold) {
      finishSwipe(dragX > 0 ? 'right' : 'left')
      return
    }

    setDragX(0)
  }

  const rotation = Math.max(-10, Math.min(10, dragX / 24))
  const actionOpacity = Math.min(1, Math.abs(dragX) / swipeThreshold)
  const cardId = `${pet.id}-${isPreview ? 'preview' : 'current'}`

  return (
    <article
      className={[
        'pet-card',
        isPreview ? 'pet-card--preview' : 'pet-card--active',
        isDragging ? 'is-dragging' : '',
        isExiting ? 'is-exiting' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        isPreview
          ? undefined
          : {
              transform: `translateX(${dragX}px) rotate(${rotation}deg)`,
            }
      }
      aria-hidden={isPreview || undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      {!isPreview && (
        <>
          <span
            className="pet-card__swipe-label pet-card__swipe-label--skip"
            style={{ opacity: dragX < 0 ? actionOpacity : 0 }}
          >
            <X aria-hidden="true" />
            Ver depois
          </span>
          <span
            className="pet-card__swipe-label pet-card__swipe-label--favorite"
            style={{ opacity: dragX > 0 ? actionOpacity : 0 }}
          >
            <Heart fill="currentColor" aria-hidden="true" />
            Favoritar
          </span>
        </>
      )}

      <div className="pet-card__image-wrapper">
        <img
          className="pet-card__image"
          src={pet.imageUrl}
          alt={isPreview ? '' : `${pet.name}, ${pet.breed}`}
          draggable={false}
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

        <section
          className="pet-card__story"
          aria-labelledby={`story-${cardId}`}
        >
          <h3 id={`story-${cardId}`}>A história de {pet.name}</h3>
          <p>{pet.story}</p>
        </section>

        <section
          className="pet-card__temperament"
          aria-labelledby={`temperament-${cardId}`}
        >
          <h3 id={`temperament-${cardId}`}>Temperamento</h3>
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
