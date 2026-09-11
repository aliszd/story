# Vercel Deployment

This project is configured for Vercel + Vite.

## GitHub + Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose Add New → Project and import the repository.
3. Framework: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

`vercel.json` already contains the SPA rewrite so direct routes do not 404.

## Local check
```bash
npm install
npm run build
npm run preview
```

## Audio
Place the supplied song at:
`public/audio/Time-in-a-Bottle.mp3`

Browsers can block autoplay. The site starts safely and allows audio after a user interaction.
