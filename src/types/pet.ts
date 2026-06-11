export type PetSpecies = 'Cão' | 'Gato'

export type PetSize = 'Pequeno' | 'Médio' | 'Grande'

export interface Pet {
  id: number
  name: string
  species: PetSpecies
  breed: string
  age: string
  size: PetSize
  imageUrl: string
  story: string
  temperament: string[]
  healthStatus: string
  rescueDate: string
  location: {
    organization: string
    city: string
    state: string
  }
}
