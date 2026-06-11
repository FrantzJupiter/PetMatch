import type { Pet } from '../types/pet'

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Thor',
    species: 'Cão',
    breed: 'Vira-lata',
    age: '3 anos',
    size: 'Médio',
    imageUrl:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85',
    story:
      'Thor foi resgatado após um período de abandono. Com os cuidados da equipe, recuperou a confiança e se tornou um companheiro alegre, que adora brincar e estar perto de pessoas.',
    temperament: ['Dócil', 'Brincalhão', 'Sociável', 'Carinhoso'],
    healthStatus: 'Vacinado e castrado',
    rescueDate: 'Janeiro de 2025',
    location: {
      organization: 'ONG Bazar Pet',
      city: 'Juiz de Fora',
      state: 'MG',
    },
  },
  {
    id: 2,
    name: 'Luna',
    species: 'Gato',
    breed: 'Sem raça definida',
    age: '2 anos',
    size: 'Pequeno',
    imageUrl:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85',
    story:
      'Luna chegou ainda filhote e cresceu cercada pelo carinho dos voluntários. É curiosa, tranquila e gosta de observar tudo antes de se aproximar para pedir carinho.',
    temperament: ['Curiosa', 'Tranquila', 'Independente', 'Carinhosa'],
    healthStatus: 'Vacinada e castrada',
    rescueDate: 'Agosto de 2024',
    location: {
      organization: 'ONG Bazar Pet',
      city: 'Juiz de Fora',
      state: 'MG',
    },
  },
  {
    id: 3,
    name: 'Bento',
    species: 'Cão',
    breed: 'Vira-lata',
    age: '5 anos',
    size: 'Grande',
    imageUrl:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=85',
    story:
      'Bento viveu por muito tempo nas ruas até ser acolhido pela ONG. Apesar do passado difícil, é gentil, paciente e se adapta muito bem à companhia de outros cães.',
    temperament: ['Gentil', 'Paciente', 'Companheiro', 'Sociável'],
    healthStatus: 'Vacinado, castrado e vermifugado',
    rescueDate: 'Março de 2024',
    location: {
      organization: 'ONG Bazar Pet',
      city: 'Juiz de Fora',
      state: 'MG',
    },
  },
  {
    id: 4,
    name: 'Mel',
    species: 'Gato',
    breed: 'Sem raça definida',
    age: '1 ano',
    size: 'Pequeno',
    imageUrl:
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=85',
    story:
      'Mel foi encontrada com seus irmãos e recebeu cuidados desde os primeiros meses de vida. É cheia de energia, adora brinquedos e rapidamente faz amizade com quem chega.',
    temperament: ['Ativa', 'Divertida', 'Sociável', 'Curiosa'],
    healthStatus: 'Vacinada e castrada',
    rescueDate: 'Novembro de 2025',
    location: {
      organization: 'ONG Bazar Pet',
      city: 'Juiz de Fora',
      state: 'MG',
    },
  },
  {
    id: 5,
    name: 'Nino',
    species: 'Cão',
    breed: 'Vira-lata',
    age: '7 anos',
    size: 'Pequeno',
    imageUrl:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=85',
    story:
      'Nino é um cão maduro e muito afetuoso, resgatado depois que sua antiga família não pôde mais cuidar dele. Prefere ambientes tranquilos e companhia constante.',
    temperament: ['Calmo', 'Afetuoso', 'Leal', 'Tranquilo'],
    healthStatus: 'Vacinado e castrado',
    rescueDate: 'Fevereiro de 2025',
    location: {
      organization: 'ONG Bazar Pet',
      city: 'Juiz de Fora',
      state: 'MG',
    },
  },
]
