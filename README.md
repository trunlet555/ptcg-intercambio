# Intercambio de Cartas TCG (estático)

Este proyecto es un prototipo 100% estático para una plataforma de intercambio de cartas TCG. No requiere backend ni dependencias adicionales.

## Cómo probarlo localmente

1. **Clonar o descargar** este repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Servir los archivos con un servidor estático:
   - Con Python 3: `python3 -m http.server 8000`
   - Con Node 18+: `npx serve .`
   - O usa la extensión **Live Server** de tu editor.
4. Visita `http://localhost:8000` (o el puerto que corresponda) en tu navegador.

> También puedes abrir directamente `index.html` en el navegador, pero usar un servidor local evita problemas con la carga de imágenes remotas o rutas relativas.

## Estructura

- `index.html`: maquetación principal y secciones (landing, catálogo, perfiles, matches, mapa, FAQ).
- `styles.css`: estilos responsivos con tema claro/oscuro y tarjetas.
- `script.js`: datos simulados, renderizado dinámico y lógica básica de filtros.

## Despliegue en GitHub Pages

1. Sube o confirma el contenido en la rama principal.
2. Activa **GitHub Pages** para la rama principal en la carpeta raíz.
3. La web quedará accesible en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.
