Most important thing to revise from this 
how to install these ui libraries that comes from outer space

for example Shadcn

(for init of vite project)
npm create vite@latest

(for installing of tailwind css)
npm install tailwindcss @tailwindcss/vite

(for importin gtailwind in projects css)
@import "tailwindcss";

Edit tsconfig.json file to this 
(this adds alias for @(btw good))
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}


Edit tsconfig.app.json file
(need to edit this too to like this)

{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

now Update vite.config.ts
run this 

npm install -D @types/node

vite.config.ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
    },
  },
})



then finally 

npx shadcn@latest init



adding components 

npx shadcn@latest add button

and u must fix all other bugs by yourself (tadda)(i know there are many others)