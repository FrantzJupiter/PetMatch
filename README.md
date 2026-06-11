# PetMatch

Protótipo de uma plataforma de adoção responsável desenvolvido para a
**ONG Bazar Pet**.

O PetMatch busca aproximar pessoas interessadas em adotar de cães e gatos que
procuram um novo lar. A proposta é apresentar cada animal por meio de sua
história e personalidade, tornando a descoberta simples, acolhedora e
responsável.

## Objetivo do protótipo

O projeto demonstra a jornada inicial de um adotante:

1. Conhecer os animais disponíveis.
2. Visualizar informações e histórias individuais.
3. Demonstrar interesse em uma adoção.
4. Ser encaminhado para o contato com a ONG.

O sistema não conclui uma adoção automaticamente. A decisão e o acompanhamento
continuam sob responsabilidade da ONG Bazar Pet.

## Estado atual

- Identidade visual e estrutura responsiva da aplicação.
- Navegação principal inicial.
- Modelo tipado para os dados dos animais.
- Dados simulados de cães e gatos.

Nesta etapa, os dados são locais e não existe integração com banco de dados,
autenticação ou serviços externos.

## Tecnologias

- React
- TypeScript
- Vite
- Lucide React
- ESLint

## Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O endereço local será exibido no terminal pelo Vite.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

- `dev`: inicia o ambiente de desenvolvimento.
- `build`: verifica o TypeScript e gera a versão de produção.
- `lint`: analisa a qualidade do código.
- `preview`: executa localmente a versão de produção.

## Estrutura principal

```text
src/
|-- data/       # Dados simulados usados pelo protótipo
|-- types/      # Tipos e contratos do domínio
|-- App.tsx     # Estrutura principal da interface
|-- index.css   # Estilos globais
`-- main.tsx    # Inicialização da aplicação
```

## Próximas etapas

- Criar o card de apresentação dos animais.
- Permitir avançar entre os pets disponíveis.
- Exibir o perfil detalhado de cada animal.
- Simular o fluxo de interesse em adoção.
