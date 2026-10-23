# Inventario de Oportunidades de Cambios Pequeños (Inspección Real del Proyecto)

Este documento recoge todas las oportunidades de mejora reales detectadas tras analizar exhaustivamente los archivos del repositorio **Luxe Glow Cosmetics** (`index.html`, `pages/*.html`, `components/**/*.html`, `css/**/*.css`, `data/*.json` y `js/**/*.js`).

No se ha inventado ninguna ruta ni componente: cada elemento listado existe en el código actual. De este inventario se han seleccionado las tareas distribuidas entre Adriana y Jamile para los 15 días, dejando también registradas oportunidades adicionales de reserva.

---

## 1. Hojas de Estilo CSS (`css/`)

### Cambio 01 — Corregir color de fondo estridente y espaciado del Footer
- **Nombre de la mejora:** Restaurar fondo blanco/crema y padding superior/inferior en `.luxe-footer`.
- **Archivo exacto y ruta:** `css/components/footer/footer.css` (líneas 6–12).
- **Elemento que se modificará:** Regla `.luxe-footer`.
- **Cambio concreto que debe realizarse:** Reemplazar `background: rgb(255, 60, 0);` por `background: var(--color-white);` y cambiar `padding: 1rem 0 0rem;` por `padding: 3rem 0 1.5rem;`.
- **Resultado esperado:** El pie de página deja de verse rojo/naranja fluorescente y recupera la estética limpia de la marca en todas las páginas del sitio.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo (si la compañera trabaja en `index.css` e `index.html`).
- **Forma de comprobar que funciona:** Abrir `index.html` en Live Server, desplazarse al final de la página y verificar que el fondo del footer es blanco con espaciado holgado.
- **Asignación en el plan:** Jamile — Día 01 (Tarea 1).

### Cambio 02 — Añadir color de marca en el logotipo del Footer y mejorar contraste en hover
- **Nombre de la mejora:** Definir color borgoña en `.luxe-footer-brand` y ajustar `.luxe-footer-link:hover`.
- **Archivo exacto y ruta:** `css/components/footer/footer.css` (líneas 14–20 y 41–45).
- **Elemento que se modificará:** Reglas `.luxe-footer-brand` y `.luxe-footer-link:hover, .luxe-footer-link:focus-visible`.
- **Cambio concreto que debe realizarse:** En la línea 18 (actualmente en blanco dentro de `.luxe-footer-brand`) añadir `color: var(--color-burgundy);`. En la línea 43, cambiar `color: var(--color-gold-light);` por `color: var(--color-burgundy);`.
- **Resultado esperado:** El texto «Luxe» del footer luce en tono borgoña (en lugar del azul de enlace por defecto) y los enlaces del footer mantienen alto contraste al pasar el cursor sobre el fondo blanco.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo (mismo archivo que Cambio 01, asignado a la misma persona en el mismo día).
- **Forma de comprobar que funciona:** Pasar el cursor sobre los enlaces de «Enlaces» y «Ayuda» en el footer y verificar que cambian a color borgoña legible.
- **Asignación en el plan:** Jamile — Día 01 (Tarea 2).

### Cambio 03 — Eliminar regla CSS duplicada en subtítulo de Inicio
- **Nombre de la mejora:** Limpiar propiedad `font-size` duplicada en `.home-section-subtitle`.
- **Archivo exacto y ruta:** `css/pages/index.css` (líneas 6–10).
- **Elemento que se modificará:** Regla `.home-section-subtitle`.
- **Cambio concreto que debe realizarse:** Eliminar la línea 9 (`font-size:larger;`) para que se respete `font-size: 0.84rem;` definida en la línea 8.
- **Resultado esperado:** El subtítulo «Nuestra Selección Elegante» en `index.html` recupera su proporción tipográfica refinada de `0.84rem`.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo (exclusivo de `css/pages/index.css`).
- **Forma de comprobar que funciona:** Inspeccionar el texto sobre el título «Productos Destacados» en `index.html` y verificar que tiene tamaño `0.84rem`.
- **Asignación en el plan:** Adriana — Día 01 (Tarea 2).

### Cambio 04 — Corregir fondo `aqua` y borde rojo de la cinta de garantías en Inicio
- **Nombre de la mejora:** Armonizar fondo y borde de `.home-info-banner`.
- **Archivo exacto y ruta:** `css/pages/index.css` (líneas 12–17).
- **Elemento que se modificará:** Regla `.home-info-banner`.
- **Cambio concreto que debe realizarse:** Cambiar `background-color: aqua;` por `background-color: var(--color-white);` y cambiar `border: 1px solid rgba(255, 47, 0, 0.85);` por `border: 1px solid rgba(212, 175, 55, 0.25);`.
- **Resultado esperado:** La sección de garantías («Envío Express Gratis», «100% Dermatológico», «Garantía de Satisfacción») luce un fondo blanco elegante con borde dorado suave en vez de celeste chillón.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo (mismo archivo que Cambio 03, realizado por Adriana en Día 01).
- **Forma de comprobar que funciona:** Recargar `index.html` y comprobar que el bloque inferior de tres garantías tiene fondo blanco y borde dorado sutil.
- **Asignación en el plan:** Adriana — Día 01 (Tarea 3).

### Cambio 05 — Corregir fondo rojizo y borde verde de la barra de navegación principal
- **Nombre de la mejora:** Restaurar estética crema/dorada en `.luxe-navbar`.
- **Archivo exacto y ruta:** `css/components/header/header.css` (líneas 24–31).
- **Elemento que se modificará:** Regla `.luxe-navbar`.
- **Cambio concreto que debe realizarse:** Cambiar `background: rgba(184, 48, 48, 0.94);` por `background: rgba(255, 253, 251, 0.94);` y cambiar `border-bottom: 1px solid rgba(55, 212, 120, 0.22);` por `border-bottom: 1px solid rgba(212, 175, 55, 0.22);`.
- **Resultado esperado:** La barra de navegación superior recupera su fondo crema translúcido (`backdrop-filter: blur(12px)`) permitiendo leer perfectamente los enlaces oscuros y el logotipo borgoña.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo (archivo independiente `header.css`).
- **Forma de comprobar que funciona:** Abrir cualquier página del sitio y verificar que el menú superior tiene fondo claro translúcido y línea inferior dorada.
- **Asignación en el plan:** Jamile — Día 02 (Tarea 1).

### Cambio 06 — Ajustar imagen del banner Atelier en Nosotros
- **Nombre de la mejora:** Mejorar altura mínima y borde divisorio de `.nosotros-atelier-img`.
- **Archivo exacto y ruta:** `css/pages/nosotros.css` (líneas 67–72).
- **Elemento que se modificará:** Regla `.nosotros-atelier-img`.
- **Cambio concreto que debe realizarse:** Cambiar `min-height: 280px;` por `min-height: 310px;` y añadir `border-right: 1px solid rgba(212, 175, 55, 0.2);`.
- **Resultado esperado:** La fotografía del Atelier Botánico en `pages/nosotros.html` gana presencia visual y una separación dorada sutil respecto al bloque de texto.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/nosotros.html` y revisar el banner «El Atelier Luxe Glow».
- **Asignación en el plan:** Adriana — Día 02 (Tarea 3).

### Cambio 07 — Mejorar contraste del título del Carrusel Principal
- **Nombre de la mejora:** Añadir sombra suave de legibilidad en `.luxe-carousel-title`.
- **Archivo exacto y ruta:** `css/components/carousel/carousel.css` (líneas 98–105).
- **Elemento que se modificará:** Regla `.luxe-carousel-title`.
- **Cambio concreto que debe realizarse:** Añadir la propiedad `text-shadow: 0 2px 12px rgba(253, 246, 244, 0.65);` al final de `.luxe-carousel-title`.
- **Resultado esperado:** Los títulos principales de las 4 diapositivas destacan con mayor nitidez sobre el velo degradado del carrusel.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Observar las 4 diapositivas del carrusel en `index.html`.
- **Asignación en el plan:** Adriana — Día 05 (Tarea 3).

### Cambio 08 — Añadir transición interactiva a las tarjetas de información de Contacto
- **Nombre de la mejora:** Suavizar el hover en `.contact-info-item`.
- **Archivo exacto y ruta:** `css/pages/contacto.css` (líneas 25–34).
- **Elemento que se modificará:** Regla `.contact-info-item`.
- **Cambio concreto que debe realizarse:** Añadir `transition: var(--transition);` dentro de `.contact-info-item`.
- **Resultado esperado:** Los bloques de dirección, teléfono y correo en `pages/contacto.html` mantienen consistencia de transición con el resto del sistema de diseño.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Inspeccionar `.contact-info-item` en `pages/contacto.html`.
- **Asignación en el plan:** Jamile — Día 05 (Tarea 3).

### Cambio 09 — Refinar iconos de activos en la página de Ingredientes
- **Nombre de la mejora:** Ajustar dimensiones y borde de `.ingrediente-icon`.
- **Archivo exacto y ruta:** `css/pages/ingredientes.css` (líneas 46–58).
- **Elemento que se modificará:** Regla `.ingrediente-icon`.
- **Cambio concreto que debe realizarse:** Cambiar `width: 56px; height: 56px;` por `width: 60px; height: 60px;` y `border: 1px dashed var(--color-gold);` por `border: 1.5px solid rgba(212, 175, 55, 0.45);`.
- **Resultado esperado:** Los iconos circulares de las 6 familias de activos en `pages/ingredientes.html` lucen un borde continuo dorado más limpio y uniforme.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/ingredientes.html` y verificar el borde continuo de los iconos de cada tarjeta.
- **Asignación en el plan:** Jamile — Día 06 (Tarea 2).

### Cambio 10 — Mejorar contenedor de imagen en la Tarjeta de Producto
- **Nombre de la mejora:** Ajustar altura y borde inferior de `.luxe-product-card__media`.
- **Archivo exacto y ruta:** `css/components/product-card/product-card.css` (líneas 25–30).
- **Elemento que se modificará:** Regla `.luxe-product-card__media`.
- **Cambio concreto que debe realizarse:** Cambiar `height: 265px;` por `height: 275px;` y añadir `border-bottom: 1px solid rgba(212, 175, 55, 0.18);`.
- **Resultado esperado:** Las fotografías de productos en Inicio y Tienda cuentan con mejor encuadre vertical y una línea divisoria sutil.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Ver las tarjetas de producto en `index.html` y `pages/tienda.html`.
- **Asignación en el plan:** Adriana — Día 06 (Tarea 2).

### Cambio 11 — Unificar borde de iconos en tarjetas de Envíos
- **Nombre de la mejora:** Cambiar borde discontinuo a continuo en `.policy-icon`.
- **Archivo exacto y ruta:** `css/pages/envios.css` (líneas 43–55).
- **Elemento que se modificará:** Regla `.policy-icon`.
- **Cambio concreto que debe realizarse:** Reemplazar `border: 1px dashed var(--color-gold);` por `border: 1.5px solid var(--color-gold);`.
- **Resultado esperado:** Los iconos de «Envío Express», «Devolución 30 Días» y «Pago Seguro» muestran un acabado más limpio.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/envios.html` y revisar los tres círculos superiores.
- **Asignación en el plan:** Adriana — Día 07 (Tarea 3).

### Cambio 12 — Espaciado entre elementos del acordeón de FAQ
- **Nombre de la mejora:** Aumentar separación vertical en `.accordion-luxe .accordion-item`.
- **Archivo exacto y ruta:** `css/pages/faq.css` (líneas 58–64).
- **Elemento que se modificará:** Regla `.accordion-luxe .accordion-item`.
- **Cambio concreto que debe realizarse:** Cambiar `margin-bottom: 0.75rem;` por `margin-bottom: 1rem;`.
- **Resultado esperado:** Las preguntas del acordeón en `pages/faq.html` respiran mejor visualmente.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/faq.html` y comprobar el espacio entre cada pregunta.
- **Asignación en el plan:** Jamile — Día 07 (Tarea 3).

### Cambio 13 — Sombra en citas destacadas del Diario y borde lateral en consejos de Ritual
- **Nombre de la mejora:** Realzar `.article-highlight-box` en `diario.css` y `.tip-box` en `ritual.css`.
- **Archivos exactos y rutas:** `css/pages/diario.css` (líneas 134–142) y `css/pages/ritual.css` (líneas 78–83).
- **Elementos que se modificarán:** `.article-highlight-box` y `.tip-box`.
- **Cambios concretos:** Añadir `box-shadow: var(--shadow-sm);` en `.article-highlight-box` (`diario.css`) y `border-left: 4px solid var(--color-gold);` en `.tip-box` (`ritual.css`).
- **Resultado esperado:** Mayor jerarquía visual tanto en el lector de artículos del Diario como en los consejos prácticos de Ritual.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo (archivos distintos).
- **Forma de comprobar que funciona:** Abrir un artículo en `pages/diario.html` y revisar las tarjetas en `pages/ritual.html`.
- **Asignación en el plan:** Jamile — Día 08 (Tarea 3) y Adriana — Día 08 (Tarea 3).

### Cambio 14 — Ajuste de variables globales en `variables.css` y utilidades en `base.css` (Conflicto controlado Día 10 y cierre Día 15)
- **Nombre de la mejora:** Refinar `--color-burgundy-hover`, `--shadow-sm` y `.divider-gold`.
- **Archivos exactos y rutas:** `css/global/variables.css` (líneas 10–14 y 39–45) y `css/global/base.css` (líneas 111–116).
- **Elementos que se modificarán:** Variables en `:root` y clase `.divider-gold`.
- **Cambios concretos:** En `variables.css`, ajustar `--color-burgundy-hover` (actualmente igual a `--color-burgundy-dark` `#45151B`) a `#6e0d20` / `#58111a` y `--radius-sm` / `--shadow-sm`. En `base.css`, ajustar `.divider-gold` a `width: 72px; border-radius: 2px;`.
- **Resultado esperado:** Botones primarios con transición de color diferenciada en hover y divisores dorados más estilizados.
- **Dificultad estimada:** Media (se utiliza en el Día 10 para practicar un conflicto controlado en `:root`).
- **Riesgo de conflicto:** Controlado expresamente en el Día 10 con fines pedagógicos.
- **Forma de comprobar que funciona:** Pasar el cursor sobre cualquier `.btn-luxe-primary` y observar el cambio de tono borgoña.
- **Asignación en el plan:** Adriana y Jamile — Día 10 (Tareas 1 y 2) y Adriana — Día 15 (Tarea 3).

---

## 2. Datos del Catálogo, Carrusel y Diario (`data/*.json`)

### Cambio 15 — Completar nombre y descripción truncada del producto 101 (Sérum Facial)
- **Nombre de la mejora:** Restaurar ficha comercial del producto `id: 101`.
- **Archivo exacto y ruta:** `data/products.json` (líneas 10–17).
- **Elemento que se modificará:** Objeto del producto `"id": 101`.
- **Cambio concreto que debe realizarse:** Cambiar `"name": "Sérum Facial"` por `"name": "Sérum Facial Rose Radiance"` y `"description": "hidratada."` por `"description": "Sérum iluminador con extracto puro de Rosa Damascena, ácido hialurónico y niacinamida para una piel radiante e hidratada."`.
- **Resultado esperado:** La primera tarjeta de Inicio y Tienda muestra el nombre completo del producto y una descripción comercial coherente con su `imageAlt`.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo si se coordina por turnos.
- **Forma de comprobar que funciona:** Ver la primera tarjeta de producto en `index.html` y `pages/tienda.html`.
- **Asignación en el plan:** Adriana — Día 03 (Tarea 1).

### Cambio 16 — Completar nombre y descripción del producto 103 (Crema Hidratante) y 105 (Sérum Elixir)
- **Nombre de la mejora:** Actualizar nombres y descripciones de los productos `id: 103` e `id: 105`.
- **Archivo exacto y ruta:** `data/products.json` (líneas 60–67 y 110–116).
- **Elemento que se modificará:** Objetos `"id": 103` e `"id": 105`.
- **Cambio concreto que debe realizarse:** En `103`, cambiar `"name"` a `"Crema Hidratante Hydra Glow"` y `"description"` (que tiene `"Crema nutritiva ultraligera ."`) a `"Crema nutritiva ultraligera con escualano, péptidos biomiméticos y centella asiática para restaurar la barrera cutánea."`. En `105`, cambiar `"name"` a `"Sérum Reparador Nocturno Elixir"`.
- **Resultado esperado:** Fichas de cuidado facial completas y sin espacios erróneos antes del punto.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo (mismo turno de Adriana en Día 03).
- **Forma de comprobar que funciona:** Filtrar por «Cuidado Facial» en `pages/tienda.html` y verificar los títulos y textos.
- **Asignación en el plan:** Adriana — Día 03 (Tareas 2 y 3).

### Cambio 17 — Corregir nombres y descripciones de labiales (productos 102 y 107)
- **Nombre de la mejora:** Estandarizar fichas de los productos `id: 102` e `id: 107`.
- **Archivo exacto y ruta:** `data/products.json` (líneas 35–42 y 160–167).
- **Elemento que se modificará:** Objetos `"id": 102` e `"id": 107`.
- **Cambio concreto que debe realizarse:**
  - En `102`: cambiar `"name": "Labial Rojo"` por `"name": "Labial Velvet Gold Matte"` y `"description": "Labial mate de textura sedosa ."` por `"description": "Labial mate de textura sedosa con manteca de karité orgánica y pigmentos puros de larga duración."`.
  - En `107`: cambiar `"name": "Labial Velvet "` (con espacio final) por `"name": "Labial Velvet Berry Royal"` y `"description": " frutos rojos borgoña..."` por `"description": "Labial en tono frutos rojos borgoña de inspiración real con microesferas de ácido hialurónico para volumen sedoso."`.
- **Resultado esperado:** Los dos labiales muestran su nombre de colección completo y descripciones sin recortes ni espacios sobrantes.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo (realizado en el Turno 2 del Día 03 tras actualizar `main`).
- **Forma de comprobar que funciona:** Filtrar por «Maquillaje» en `pages/tienda.html`.
- **Asignación en el plan:** Jamile — Día 03 (Tareas 1 y 2).

### Cambio 18 — Corregir nombres y descripciones de fragancias (productos 104 y 108)
- **Nombre de la mejora:** Corregir erratas tipográficas en productos `id: 104` e `id: 108`.
- **Archivo exacto y ruta:** `data/products.json` (líneas 85–92 y 185–192).
- **Elemento que se modificará:** Objetos `"id": 104` e `"id": 108`.
- **Cambio concreto que debe realizarse:**
  - En `104`: cambiar `"name": "Perfume"` por `"name": "Perfume Éclat D'Or Luxury"` y corregir `"description"` añadiendo espacio tras el punto (`"...cristal tallado. Duradera 24/7."`).
  - En `108`: corregir `"name": "Perfume EClat "` (con `C` mayúscula y espacio final) por `"name": "Perfume Éclat D'Or Nuit Absolu"` y `"description": "El mejor perfume ."` por `"description": "Extrait de Parfum nocturno con notas de rosa negra, vainilla bourbon y maderas ambaradas de larga fijación."`.
- **Resultado esperado:** La categoría «Fragancias» presenta nombres y descripciones de alta perfumería coherentes con sus imágenes.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo.
- **Forma de comprobar que funciona:** Filtrar por «Fragancias» en `pages/tienda.html`.
- **Asignación en el plan:** Jamile — Día 04 (Tareas 1 y 2).

### Cambio 19 — Completar fichas de productos 106, 109, 110 y 111
- **Nombre de la mejora:** Limpiar espacios finales, descripciones genéricas y etiquetas en productos `106`, `109`, `110` y `111`.
- **Archivo exacto y ruta:** `data/products.json` (líneas 135–146, 210–222, 235–242 y 260–271).
- **Elemento que se modificará:** Objetos `"id": 106`, `"id": 109`, `"id": 110` e `"id": 111`.
- **Cambio concreto que debe realizarse:**
  - En `106`: cambiar `"name"` a `"Crema Nutritiva de Noche Peptidic"`, `"description"` a `"Tratamiento intensivo de noche formulado con tetrapéptidos, ácido hialurónico y manteca de karité para reafirmar el rostro."` y `"featured"` a `true`.
  - En `109`: cambiar `"description": "El mejor  contorno de ojos ."` a `"Contorno de ojos iluminador con vitamina C estabilizada, cafeína botánica y péptidos descongestivos."` y `"badge": null` a `"badge": "Clínico"`.
  - En `110`: cambiar `"name": "Base Fluida "` a `"Base Fluida Silk Radiance SPF 30"` y pulir `"description"`.
  - En `111`: cambiar `"originalPrice": null` a `46.00` y `"featured": false` a `true`.
- **Resultado esperado:** Las 12 tarjetas del catálogo en `data/products.json` quedan 100% libres de textos de prueba o truncados.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Bajo.
- **Forma de comprobar que funciona:** Revisar las 12 tarjetas en `pages/tienda.html` y abrir su «Vista Rápida».
- **Asignación en el plan:** Adriana — Día 04 (Tareas 1, 2 y 3) y Día 06 (Tarea 3).

### Cambio 20 — Actualizar textos y botones del Carrusel (`data/carousel.json`)
- **Nombre de la mejora:** Refinar etiquetas superiores (`tag`) y textos de botones en las 4 diapositivas del carrusel.
- **Archivo exacto y ruta:** `data/carousel.json` (diapositivas 1 a 4, líneas 3–74).
- **Elemento que se modificará:** Propiedades `tag`, `primaryBtn.label` y `secondaryBtn.label`.
- **Cambio concreto que debe realizarse:** Actualizar etiquetas y llamadas a la acción en las diapositivas `coleccion-2026`, `ritual-facial`, `maquillaje-velvet` y `alta-perfumeria`.
- **Resultado esperado:** El carrusel de Inicio refleja llamadas a la acción más específicas.
- **Dificultad estimada:** Baja a Media (usado en Día 05 y Día 11).
- **Riesgo de conflicto:** Controlado en el Día 11 para practicar resolución de conflictos en JSON.
- **Forma de comprobar que funciona:** Navegar por las 4 diapositivas del carrusel en `index.html`.
- **Asignación en el plan:** Adriana — Día 05 (Tareas 1 y 2); Jamile y Adriana — Día 11.

### Cambio 21 — Corregir erratas y enriquecer artículos del Diario Botánico (`data/articles.json`)
- **Nombre de la mejora:** Corregir `"refil"` por `"refill"` en el artículo `packaging` y actualizar tiempos de lectura y extractos en `clima`, `noche` y `comunidad`.
- **Archivo exacto y ruta:** `data/articles.json` (líneas 10–64).
- **Elemento que se modificará:** Objetos dentro del arreglo `"articles"`.
- **Cambio concreto que debe realizarse:** Corregir el título del tercer artículo (`id: "packaging"`) y mejorar los resúmenes (`excerpt`) y etiquetas (`tag`) de los artículos `clima`, `noche` y `comunidad`.
- **Resultado esperado:** Las tarjetas del Diario Botánico en `pages/diario.html` muestran textos corregidos y más informativos.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/diario.html` y filtrar por las distintas categorías.
- **Asignación en el plan:** Jamile — Día 08 (Tareas 1 y 2) y Día 14 (Tareas 1 y 2).

---

## 3. Páginas HTML, Componentes y Scripts (`index.html`, `pages/*.html`, `components/**/*.html`, `js/**/*.js`)

### Cambio 22 — Corregir texto «Politica de devolucion 0» en Inicio (`index.html`)
- **Nombre de la mejora:** Redactar descripción real en la tarjeta «Garantía de Satisfacción».
- **Archivo exacto y ruta:** `index.html` (línea 75).
- **Elemento que se modificará:** `<p class="small text-muted mb-0">Politica de devolucion 0</p>`.
- **Cambio concreto que debe realizarse:** Reemplazar por `<p class="small text-muted mb-0">Devolución garantizada durante 30 días sin complicaciones en empaque sellado.</p>`.
- **Resultado esperado:** Desaparece el texto provisional sin tildes en la tercera tarjeta de garantías de Inicio.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Revisar la tarjeta «Garantía de Satisfacción» al final de `index.html`.
- **Asignación en el plan:** Adriana — Día 01 (Tarea 1).

### Cambio 23 — Mejorar lema inferior y completar enlace faltante en Footer (`components/footer/footer.html`)
- **Nombre de la mejora:** Actualizar texto de cierre del footer y completar enlace en la lista «Ayuda».
- **Archivo exacto y ruta:** `components/footer/footer.html` (líneas 44 y 74).
- **Elemento que se modificará:** Lista `<ul>` de «Ayuda» (línea 44 vacía) y párrafo de la línea 74 (`Hecho con cariño para tu piel :).`).
- **Cambio concreto que debe realizarse:** Reemplazar el texto con emoticón de la línea 74 por `<p class="small luxe-footer-text mb-0">Formulación botánica y dermatológica hecha con rigor para tu piel.</p>`, y en la línea 44 añadir `<li><a data-route="pages/ritual.html" href="pages/ritual.html" class="luxe-footer-link">Ritual de cuidado</a></li>`.
- **Resultado esperado:** El pie de página mantiene un tono editorial profesional y ofrece 4 enlaces balanceados tanto en «Enlaces» como en «Ayuda».
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Verificar las columnas del footer en cualquier página.
- **Asignación en el plan:** Jamile — Día 01 (Tarea 3) y Adriana — Día 06 (Tarea 1).

### Cambio 24 — Actualizar mensaje de la barra superior del Header (`components/header/header.html`)
- **Nombre de la mejora:** Añadir beneficio de muestras de cortesía en `.luxe-topbar`.
- **Archivo exacto y ruta:** `components/header/header.html` (línea 4).
- **Elemento que se modificará:** Primer `<span>` dentro de `.luxe-topbar`.
- **Cambio concreto que debe realizarse:** Cambiar `Envío Express Gratis en compras superiores a $50` por `Envío Express Gratis en compras superiores a $50 · Muestras botánicas gratis`.
- **Resultado esperado:** El cintillo superior informa ambos beneficios de compra en todo el sitio.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Observar la franja superior borgoña oscuro en el navegador.
- **Asignación en el plan:** Jamile — Día 02 (Tarea 2).

### Cambio 25 — Corregir errata «simpre» y ampliar lista en Nosotros (`pages/nosotros.html`)
- **Nombre de la mejora:** Corregir ortografía en «Nuestra Filosofía» y añadir ítem en «Formulación Limpia».
- **Archivo exacto y ruta:** `pages/nosotros.html` (líneas 55 y 94–98).
- **Elemento que se modificará:** Segundo párrafo de «Nuestra Filosofía» y lista `<ul>` de «Formulación Limpia».
- **Cambio concreto que debe realizarse:** Cambiar `simpre` por `siempre` en la línea 55 y añadir `<li>Fórmulas testadas en pieles sensibles</li>` en la línea 98.
- **Resultado esperado:** Texto sin faltas de ortografía y lista de beneficios completa.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/nosotros.html` y leer ambas tarjetas.
- **Asignación en el plan:** Adriana — Día 02 (Tareas 1 y 2).

### Cambio 26 — Ampliar horario y opciones del formulario de Contacto (`pages/contacto.html`)
- **Nombre de la mejora:** Añadir horario de sábado y motivo de consulta sobre reciclaje/refill.
- **Archivo exacto y ruta:** `pages/contacto.html` (líneas 50 y 93–98).
- **Elemento que se modificará:** Bloque de «Teléfono Directo» y `<select id="contact-subject">`.
- **Cambio concreto que debe realizarse:** Actualizar horario a `Lun – Vie 9:00 – 18:00 h | Sáb 10:00 – 14:00 h` y añadir `<option value="sostenibilidad">Programa de reciclaje y envases Refill</option>`.
- **Resultado esperado:** El formulario de contacto contempla consultas sobre el programa de sostenibilidad mencionado en el Diario Botánico.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/contacto.html` y desplegar el selector «Motivo de consulta».
- **Asignación en el plan:** Jamile — Día 05 (Tareas 1 y 2).

### Cambio 27 — Incorporar banner visual en Ingredientes y ampliar ficha de estándares (`pages/ingredientes.html`)
- **Nombre de la mejora:** Añadir imagen existente `assets/images/banners/hero_banner.png` y detallar estándar dermatológico.
- **Archivo exacto y ruta:** `pages/ingredientes.html` (líneas 30–32 y 114–137).
- **Elemento que se modificará:** Encabezado de `pages/ingredientes.html` y tarjeta «Lo que Excluimos Siempre».
- **Cambio concreto que debe realizarse:** Insertar un bloque visual con `<img src="../assets/images/banners/hero_banner.png" alt="Mesa de formulación botánica con pétalos y frascos de cristal Luxe Glow" class="img-fluid rounded-4 shadow-sm mb-4 w-100" style="max-height: 260px; object-fit: cover;" loading="lazy">` y ampliar el texto de trazabilidad y exclusión.
- **Resultado esperado:** La página de Ingredientes cuenta con apoyo gráfico real utilizando el banner disponible en `assets/images/banners/hero_banner.png`.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/ingredientes.html` y comprobar que la imagen carga sin errores 404.
- **Asignación en el plan:** Jamile — Día 06 (Tarea 1) y Adriana — Día 14 (Tareas 1 y 2).

### Cambio 28 — Actualizar tabla de plazos y pasos de devolución en Envíos (`pages/envios.html`)
- **Nombre de la mejora:** Detallar plazo express en CDMX y confirmación por correo en devoluciones.
- **Archivo exacto y ruta:** `pages/envios.html` (líneas 81–85 y 110–115).
- **Elemento que se modificará:** Primera fila del `<tbody>` de la tabla de tarifas y lista `<ol>` de devoluciones.
- **Cambio concreto que debe realizarse:** Actualizar `2 días hábiles` a `1 – 2 días hábiles (Express)` y añadir un quinto paso en la lista ordenada.
- **Resultado esperado:** Información logística más clara y detallada.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/envios.html` y verificar la tabla y la lista numerada.
- **Asignación en el plan:** Adriana — Día 07 (Tareas 1 y 2).

### Cambio 29 — Ampliar buscador y añadir pregunta en Preguntas Frecuentes (`pages/faq.html`)
- **Nombre de la mejora:** Mejorar placeholder de `#faq-search-input` y agregar pregunta #9 al acordeón.
- **Archivo exacto y ruta:** `pages/faq.html` (líneas 32 y 141).
- **Elemento que se modificará:** Input `#faq-search-input` y contenedor `#faqAccordion`.
- **Cambio concreto que debe realizarse:** Actualizar placeholder y añadir un nuevo `.accordion-item` con `id="faqHeading9"` y `id="f9"`.
- **Resultado esperado:** El buscador interactivo de `js/pages/faq.js` filtra automáticamente también la nueva pregunta #9.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/faq.html` y escribir `"rastreo"` en el buscador.
- **Asignación en el plan:** Jamile — Día 07 (Tareas 1 y 2).

### Cambio 30 — Completar la página `pages/rembolso.html`
- **Nombre de la mejora:** Estructurar `pages/rembolso.html` con el diseño e idioma de Luxe Glow Cosmetics.
- **Archivo exacto y ruta:** `pages/rembolso.html` (líneas 1–12).
- **Elemento que se modificará:** Documento completo `pages/rembolso.html` (actualmente un esqueleto en inglés con solo `<button>Reembolso</button>`).
- **Cambio concreto que debe realizarse:** Cambiar `lang="en"` a `lang="es"`, añadir `<title>Luxe Glow Cosmetics | Reembolsos</title>`, vincular Bootstrap y hojas de estilo globales (`../css/global/variables.css`, `../css/global/base.css`) e incluir una tarjeta informativa limpia con enlace de retorno a `envios.html` y `contacto.html`.
- **Resultado esperado:** `pages/rembolso.html` deja de ser una página sin estilos y se integra visualmente con el resto del proyecto.
- **Dificultad estimada:** Media.
- **Riesgo de conflicto:** Nulo.
- **Forma de comprobar que funciona:** Abrir `pages/rembolso.html` en el navegador y probar sus botones de navegación.
- **Asignación en el plan:** Jamile — Día 09 (Tareas 1 y 2).

### Cambio 31 — Dotar de contenido base al archivo vacío `pages/historial.html`
- **Nombre de la mejora:** Construir estructura HTML5 en `pages/historial.html` (actualmente de 0 bytes).
- **Archivo exacto y ruta:** `pages/historial.html`.
- **Elemento que se modificará:** Archivo completo `pages/historial.html`.
- **Cambio concreto que debe realizarse:** Añadir estructura HTML5 con idioma español, estilos de Luxe Glow, `<header id="site-header"></header>`, tarjeta central de «Historial de Pedidos y Seguimiento» y `<div id="site-footer"></div>` con los scripts base.
- **Resultado esperado:** El archivo vacío de 0 bytes se convierte en una página funcional con Header y Footer dinámicos.
- **Dificultad estimada:** Media (usado en el Día 11).
- **Riesgo de conflicto:** Controlado en el Día 11.
- **Forma de comprobar que funciona:** Abrir `pages/historial.html` en Live Server y verificar que cargan el Header, el contenido central y el Footer.
- **Asignación en el plan:** Jamile y Adriana — Día 11.

### Cambio 32 — Mejorar mensajes de notificación Toast y textos de accesibilidad (`js/pages/contacto.js`, `js/pages/tienda.js`, `js/utils/cart.js`, `components/product-card/product-card.html`)
- **Nombre de la mejora:** Afinar textos de confirmación Toast y etiquetas de botones/modales.
- **Archivos exactos y rutas:** `js/pages/contacto.js` (líneas 19 y 37), `js/pages/tienda.js` (línea 211), `js/utils/cart.js` (líneas 127 y 153), `components/product-card/product-card.html` (línea 7) y `js/components/product-card/product-card.js` (línea 225).
- **Cambio concreto que debe realizarse:** Unificar la terminología entre «Mi Carrito» y «Mi Bolsa de Compras» y enriquecer los mensajes emergentes (`showToast`).
- **Resultado esperado:** Experiencia de usuario coherente al añadir productos, procesar compras o enviar formularios.
- **Dificultad estimada:** Baja.
- **Riesgo de conflicto:** Nulo (archivos separados por día y turno).
- **Forma de comprobar que funciona:** Probar los formularios y el carrito en el navegador y observar las notificaciones Toast en la esquina inferior derecha.
- **Asignación en el plan:** Días 12 y 13 (Adriana y Jamile).

