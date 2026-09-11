# پسری که به ستاره نرسید — Interactive Storybook

A standalone React + TypeScript + Vite digital storybook in Persian (RTL).

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Audio
Place the local audio file at:
`public/audio/Time-in-a-Bottle.mp3`

The browser starts audio muted because autoplay with sound is commonly blocked. The music button enables it and the preference is stored in localStorage.

## Architecture
- Central story state and route-free 10-page book
- Framer Motion page turns
- Keyboard + swipe navigation
- Bookmark table of contents
- Reusable ambient stars / clouds / interactions
- Rebuild-the-garden mini sequence
- localStorage progress/audio preference
- reduced-motion support
- Responsive mobile-specific composition
