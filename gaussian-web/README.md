# Gaussian Language Website

This is the official website for the Gaussian programming language, a scripting language designed for game development experiments.

## Features

- Modern, responsive design with Apple-inspired UI
- Interactive VantaJS clouds background effect
- Comprehensive documentation with syntax highlighting
- Download section for the language interpreter and tools
- Mobile-friendly layout

## Tech Stack

- React
- React Router for navigation
- Styled Components for styling
- Framer Motion for animations
- VantaJS for the 3D background effect
- Three.js for 3D rendering

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gaussian-language/website.git
cd website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Project Structure

```
gaussian-web/
├── public/                # Public assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── styles/            # Global styles
│   ├── App.js             # Main App component with routing
│   └── index.js           # Entry point
└── package.json
```

## Customization

### Logo

Replace the file at `public/gaussian-logo.png` with your own logo. The logo should ideally be:
- PNG format with transparency
- At least 256x256 pixels
- Have a color scheme that matches the site's blue palette

### Background

The VantaJS clouds background can be customized in the `src/components/VantaBackground.js` file. You can modify:
- Sky color
- Cloud color
- Sun color and effects
- Movement speed and sensitivity

## Deployment

Build the production-ready application:

```bash
npm run build
# or
yarn build
```

The build output will be in the `build` directory, which can be deployed to any static hosting service like GitHub Pages, Netlify, Vercel, or Amazon S3.

## License

[MIT License](LICENSE)
