# MELI

Frontend Mercadolibre search application.
Once you open the app, after a register the service worker, it will be able offline.
You can make a search using the input in the navbar. After that, it will show you the first 4 most relevant items related with that search. If you click one of them, it will redirect you to the item details.
Smooth UX, routes were built with the back button in mind.

# Contents

1. [Installation](#Installation)
2. [Technologies](#Technologies)
3. [Features](#features)
4. [Screenshots](#screenshots)
5. [Feedback](#feedback)

## Installation

pnpm
```
pnpm i
pnpm build
pnpm preview
```

npm
```
npm i
npm run build
npm run preview
```

## Technologies

**Client:** react, typescript, framer-motion, tailwindcss, eslint, prettier, swr

## Features

- Search a product
- See product details

## Screenshots

### Search

![Edit](/public/docs/search.gif)

### No items found

![Edit](/public/docs/noitems.gif)

### Product Details

![Search](/public/docs/details.gif)

If you found something, create an issue to discuss it.
