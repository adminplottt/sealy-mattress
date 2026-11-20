# Sealy Mattress - React.js Landing Page

A scalable and production-ready React.js project setup using Vite, Tailwind CSS, and ESLint.

## Tech Stack

- **Framework:** [React.js](https://react.dev/) (v19)
- **Bundler & Dev Server:** [Vite](https://vite.dev/) (v6)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Linting:** [ESLint](https://eslint.org/) (v9 Flat Config)
- **Language:** JavaScript (ESNext)

## Project Structure

```text
├── public/
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   │
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Import Alias

The project is configured with a path alias for clean imports:
- `@/*` points to `./src/*`

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### 3. Build for Production

```bash
npm run build
```

The production output will be generated in the `dist` directory.

### 4. Lint Project Files

```bash
npm run lint
```

### 5. Preview Production Build

```bash
npm run preview
```
