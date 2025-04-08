# 🧭 Pokémon Explorer

A sleek and responsive web app to explore Pokémon using [PokeAPI](https://pokeapi.co/), built with modern tools like **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## 🛠 Tech Stack

- **Next.js** 15.2.4
- **TypeScript**
- **Tailwind CSS**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

---

## 🔐 Environment Setup

Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_POKI_API=https://pokeapi.co/api/v2/pokemon
```

---

## 🧪 Running the Dev Server

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Features

- 🏠 **Homepage**: Displays a list of Pokémon (20 at a time).
- ➕ **Load More**: Dynamically fetch and display more Pokémon.
- 🔍 **Search**: Find Pokémon by their **name**.
- 📄 **Details Page**: Navigate to `/pokemon/[name]` for a dedicated Pokémon page showing:
  - Pokémon Image
  - ID
  - Types (with color-coded badges)
  - Abilities (up to 4)
  - Base Stats (with progress bars)
  - Moves (up to 4)

---

## 📦 Production

To create a production build:

```bash
npm run build
npm start
```

---

> Built with ❤️ using Next.js, TypeScript & Tailwind CSS.

```

Let me know if you want this saved as a `.md` file or want to add things like screenshots, deployment info, or GitHub badges!
```
