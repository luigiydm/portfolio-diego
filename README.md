# Diego Rago - Portfolio

Portfolio minimalista estilo Adobe Portfolio para Diego Rago, pixel artist, character designer y comic artist de Argentina con 5+ años de experiencia.

## 🎨 Características

- **Diseño Adobe Portfolio Style** - Sidebar fijo izquierdo + grid masonry dinámico
- **100% Responsive** - Mobile-first con hamburger menu
- **Lightbox integrado** - Click en cualquier imagen/GIF/video para ver full screen
- **Social Links** - Fiverr, LinkedIn, Email integrados
- **Hover effects sutiles** - Solo zoom, sin overlays pesados
- **Página About completa** - Bio, stats, skills, services
- **100% Vanilla** - HTML, CSS y JavaScript puro (sin frameworks)

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html              # Home con masonry grid
├── about.html              # Página About con bio y skills
├── mondongo.html           # Proyecto 1: Mondongo RPG
├── fighting.html           # Proyecto 2: Fighting Game
├── minita-casita.html      # Proyecto 3: Minita Casita
├── css/
│   └── style.css           # Estilos minimalistas Adobe Portfolio
├── js/
│   └── main.js             # Lightbox, mobile menu, interactions
└── assets/
    ├── mondongo/           # 8 archivos (GIFs, PNGs, MP4)
    ├── fighting/           # 9 archivos (GIFs, MP4)
    └── minita-casita/      # 10 archivos (GIFs, MP4)
```

## 🎯 Diseño Inspirado en Adobe Portfolio

### Home Page
- **Sidebar izquierdo fijo (280px)** con:
  - Logo "DIEGO RAGO" + tagline "PORTFOLIO"
  - Navegación vertical (WORK / ABOUT / CONTACT)
  - Social links con iconos (Fiverr, LinkedIn, Email)
- **Masonry grid** con imágenes de diferentes tamaños
- **Hover zoom sutil** sin overlays
- **Responsive**: en mobile, sidebar se convierte en hamburger menu

### Project Pages
- Hero grande con video o GIF principal
- Info del proyecto (título + categoría + descripción)
- Gallery grid con todos los assets
- Navegación prev/next entre proyectos
- Mismo sidebar en todas las páginas

### About Page
- Foto de perfil circular (200px) ✓ Incluida
- Stats: 5+ años / 1,243 reviews / 4.9★ Fiverr rating
- Bio completa de Diego
- Skills grid: Pixel Art, Character Design, Comic Art, etc.
- Tools & Software
- Services ofrecidos

## 🚀 Cómo Usar

### Opción 1: Servidor local (recomendado)

```bash
# Con Python 3
cd portfolio
python -m http.server 8000

# Con Node.js (npx)
npx serve portfolio

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: Abrir directamente

Simplemente abre `index.html` en tu navegador (algunas features pueden no funcionar sin servidor).

## 🌐 Deploy

### Vercel (Gratis - Recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy desde la carpeta portfolio
cd portfolio
vercel
```

Sigue las instrucciones (presiona Enter para aceptar defaults).

### Netlify (Gratis)

1. Arrastra la carpeta `portfolio` a netlify.com/drop
2. Listo!

### AWS S3 + CloudFront

1. Crea un bucket S3 con Static Website Hosting
2. Sube todos los archivos del portfolio
3. Configura permisos públicos
4. (Opcional) Configura CloudFront para CDN

## ✏️ Personalización

### Cambiar nombre y branding

En todos los archivos HTML, busca y reemplaza:
```html
<h1 class="brand-name">DIEGO RAGO</h1>
<p class="brand-tagline">PORTFOLIO</p>
```

### Actualizar social links

En el sidebar de cada HTML:
```html
<a href="https://es.fiverr.com/diegorago138">...</a>
<a href="https://www.linkedin.com/in/diego-rago">...</a>
<a href="mailto:contact@diegorago.com">...</a>
```

### Cambiar colores

En `css/style.css`, modifica las variables CSS:
```css
:root {
    --color-bg: #ffffff;          /* Fondo principal */
    --color-text: #191919;        /* Texto principal */
    --color-text-light: #666666;  /* Texto secundario */
    --color-border: #e8e8e8;      /* Bordes */
    --sidebar-width: 280px;       /* Ancho del sidebar */
}
```

### Cambiar tamaños del masonry grid

En `index.html`, las clases determinan el tamaño:
```html
<a href="..." class="masonry-item large">    <!-- 1:1 cuadrado -->
<a href="..." class="masonry-item medium">   <!-- 4:3 horizontal -->
<a href="..." class="masonry-item tall">     <!-- 3:4 vertical -->
<a href="..." class="masonry-item wide">     <!-- 16:9 panorámico -->
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (sidebar 280px, grid 2 columnas)
- **Tablet**: 768px - 1200px (sidebar 240px, grid 2 columnas)
- **Mobile**: < 768px (hamburger menu, grid 1 columna)

## 🛠️ Tecnologías

- HTML5 Semantic
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript (ES6+)
- SVG Icons (inline)

## 📝 Features Destacadas

### Masonry Grid
- Diferentes aspect ratios para variedad visual
- Gap de 24px (16px en mobile)
- Hover zoom con cubic-bezier transition

### Lightbox
- Funciona con imágenes, GIFs y videos
- Cierra con ESC, click fuera o botón X
- Videos con controls y autoplay

### Mobile Menu
- Hamburger button autogenerado con JS
- Slide-in animation desde la izquierda
- Cierra al click fuera o en un link

### Navigation
- Active state automático según página actual
- Underline animation en links activos
- Smooth scroll para anchors

## 🎯 Diferencias vs Portfolio Original

### Mejoras implementadas:
✅ Sidebar fijo izquierdo (más profesional)
✅ Grid masonry dinámico (más visual)
✅ Hover zoom sutil sin overlay pesado
✅ Página About completa con stats
✅ Social links integrados
✅ Mobile menu responsive
✅ Branding más fuerte ("DIEGO RAGO")
✅ Más espaciado y respiración visual

## 🔄 Próximas Mejoras (Opcionales)

- [ ] Formulario de contacto funcional
- [ ] Filtros por categoría (Characters / Animation / Environments)
- [ ] Scroll reveal animations
- [ ] Dark mode toggle
- [ ] Lazy loading de imágenes
- [ ] Google Analytics
- [ ] SEO meta tags completos

## 👤 About Diego Rago

**Pixel Artist • Character Designer • Comic Artist**

- 🇦🇷 Based in Argentina
- ⭐ 4.9/5 rating on Fiverr (1,243 reviews)
- 📊 5 stars: 1,147 | 4 stars: 78 | 3 stars: 11 | 2 stars: 7
- 🎮 5+ years in the industry
- 💬 Communication: 4.9 | Quality: 4.9 | Value: 4.9

**Specializations:**
- 2D Animation
- Pixel Art
- Character Design
- Comic Art
- Game Sprites
- Visual Storytelling

**Links:**
- Fiverr: https://es.fiverr.com/diegorago138
- LinkedIn: https://www.linkedin.com/in/diego-rago
- Email: contact@diegorago.com

