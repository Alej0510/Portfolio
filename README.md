# Alejandro Cardona — Portfolio

Portfolio personal construido con **Astro**, diseño oscuro con acento teal.

## 🚀 Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar el build
npm run preview
```

## 📁 Estructura

```
src/
  components/
    Nav.astro        — Navegación fija con menú móvil
    Hero.astro       — Sección principal con código animado
    About.astro      — Sobre mí, idiomas, educación
    Skills.astro     — Grid de habilidades con barras
    Projects.astro   — Tarjetas de proyectos
    Contact.astro    — Formulario + datos de contacto
    Footer.astro     — Pie de página
  layouts/
    Layout.astro     — Layout base con fuentes y estilos globales
  pages/
    index.astro      — Página principal
public/
  favicon.svg
```

## 🎨 Diseño

- **Fuentes**: Syne (display) + DM Sans (body)
- **Colores**: Negro profundo + Teal (#00BCD4) como acento
- **Estética**: Dark editorial, minimalista con detalles técnicos

## 🛠 Personalización

Para agregar proyectos reales, edita el array `projects` en `src/components/Projects.astro`.

Para cambiar información de contacto, edita `src/components/Contact.astro`.

## 🌐 Deploy

Compatible con Vercel, Netlify, Cloudflare Pages y cualquier servicio de hosting estático.
