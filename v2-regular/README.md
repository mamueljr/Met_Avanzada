<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/18oCOC8f07lwbLmFBmHMuEPgvWZpjnd5C

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

# Instrucciones de desarrollo (rápidas)

Este archivo contiene los comandos básicos para trabajar con el proyecto localmente.

## Desarrollo (hot-reload)

Abre PowerShell y ejecuta:

```powershell
cd "d:\Documentos\test codigo\v2"
npm install   # solo la primera vez
npm run dev
```

Vite servirá la app (por defecto en `http://localhost:5173`).

## Comprobar tipos (opcional)

```powershell
npx tsc --noEmit
```

## Build de producción y preview

```powershell
npm run build
npm run preview
```

## Notas

- Si cambias `vite.config.*`, `package.json` o instalas/eliminaste dependencias, reinicia el servidor (`Ctrl+C` y `npm run dev`).
- Usa la URL que muestre la terminal si el puerto por defecto está en uso.
