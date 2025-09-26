# Portfolio XP

Este proyecto es un portafolio web interactivo con la apariencia y experiencia de usuario de Windows XP, construido con React y Vite.

## Características principales

- Escritorio con íconos clásicos de Windows XP
- Ventanas arrastrables y redimensionables para cada sección (Sobre mí, Proyectos, Contacto)
- Barra de tareas y menú inicio funcionales
- Diseño responsive y fiel a la estética XP
- Código modular y fácil de mantener

## Estructura del proyecto

- `src/components/` — Componentes principales (Escritorio, Iconos, Ventanas, Barra de tareas, Menú inicio)
- `src/hooks/useDraggable.js` — Hook para arrastrar ventanas
- `src/assets/` — Recursos gráficos
- `public/` — Archivos públicos

## Instalación y uso

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Personalización

- Edita los íconos, textos y enlaces en `src/App.jsx` para adaptar el portafolio a tu perfil.
- Puedes agregar más ventanas o secciones siguiendo la estructura de los componentes.

## Créditos

- Inspirado en la interfaz de Windows XP
- Íconos de [win98icons.alexmeub.com](https://win98icons.alexmeub.com/)

---

Desarrollado con [React](https://react.dev/) + [Vite](https://vitejs.dev/)
