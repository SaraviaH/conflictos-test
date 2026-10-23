# Guía de Práctica — Adriana (Día 05)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 05 de 15** — Diferencias prácticas entre `git fetch origin`, `git fetch origin main` y `git pull --ff-only origin main`, y comparación de ramas con `git diff main...rama`.

## 3. Objetivo de aprendizaje de Git
Comprender el alcance exacto de `git fetch origin main` frente a `git fetch origin`, diferenciar `fetch` (actualizar referencias sin tocar la rama local) de `pull` (traer e integrar), y usar `git diff main...nombre-rama` para auditar todos los cambios de una rama antes de integrarla.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia05-carrusel`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia05-contacto`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (JSON):** Actualizar la etiqueta superior (`tag`) y el texto del botón principal en la primera diapositiva (`id: "coleccion-2026"`) de `data/carousel.json`.
2. **Tarea 2 (JSON):** Actualizar el texto del botón secundario en la segunda diapositiva (`id: "ritual-facial"`) de `data/carousel.json`.
3. **Tarea 3 (CSS):** Añadir una sombra de texto suave (`text-shadow`) en `.luxe-carousel-title` dentro de `css/components/carousel/carousel.css` para reforzar la legibilidad de los titulares.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/carousel.json` (líneas 4–38).
- `css/components/carousel/carousel.css` (líneas 98–105).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/carousel.json`, diapositiva 1 `id: "coleccion-2026"`, líneas 4–16)
Busca:
```json
      "id": "coleccion-2026",
      "tag": "Colección Primavera 2026",
      "tagIcon": "fa-sparkles",
      "title": "El Arte de la Nutrición & El Brillo Natural",
      "subtitle": "Descubre nuestra línea de cosmética botánica de alta gama formulada para rejuvenecer, proteger y realzar la luz natural de tu piel cada día.",
      "image": "assets/images/carousel/slide_coleccion.png",
      "imageAlt": "Colección de cosmética botánica de lujo Luxe Glow sobre mármol y seda rosa",
      "primaryBtn": {
        "label": "Ver Destacados",
```
Cambia `"tag"` y `"primaryBtn.label"` para que quede:
```json
      "id": "coleccion-2026",
      "tag": "Edición Botánica 2026",
      "tagIcon": "fa-sparkles",
      "title": "El Arte de la Nutrición & El Brillo Natural",
      "subtitle": "Descubre nuestra línea de cosmética botánica de alta gama formulada para rejuvenecer, proteger y realzar la luz natural de tu piel cada día.",
      "image": "assets/images/carousel/slide_coleccion.png",
      "imageAlt": "Colección de cosmética botánica de lujo Luxe Glow sobre mármol y seda rosa",
      "primaryBtn": {
        "label": "Explorar Destacados",
```

### En la Tarea 2 (`data/carousel.json`, diapositiva 2 `id: "ritual-facial"`, líneas 34–37)
Busca:
```json
      "secondaryBtn": {
        "label": "Guía de Ritual",
        "href": "pages/ritual.html"
      }
```
Y cámbialo por:
```json
      "secondaryBtn": {
        "label": "Descubrir el Ritual",
        "href": "pages/ritual.html"
      }
```

### En la Tarea 3 (`css/components/carousel/carousel.css`, líneas 98–105)
Busca la regla `.luxe-carousel-title`:
```css
.luxe-carousel-title {
  font-family: var(--font-heading);
  font-size: 2.65rem;
  font-weight: 700;
  color: var(--color-burgundy-dark);
  line-height: 1.18;
  margin-bottom: 1rem;
}
```
Añade `text-shadow` al final:
```css
.luxe-carousel-title {
  font-family: var(--font-heading);
  font-size: 2.65rem;
  font-weight: 700;
  color: var(--color-burgundy-dark);
  line-height: 1.18;
  margin-bottom: 1rem;
  text-shadow: 0 2px 12px rgba(253, 246, 244, 0.65);
}
```

---

## 8. Resultado esperado
El carrusel principal de `index.html` muestra en su primera diapositiva la insignia «EDICIÓN BOTÁNICA 2026» y el botón «Explorar Destacados», en la segunda diapositiva el botón «Descubrir el Ritual», y todos los títulos del carrusel cuentan con una sombra clara sutil que mejora su contraste.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html`.
2. Revisa la primera diapositiva del carrusel y luego pulsa la flecha derecha (`>`) para pasar a la segunda diapositiva.
3. Comprueba que las etiquetas y botones muestran los nuevos textos y llevan a las secciones correspondientes.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
# 1. Practicar primero git fetch origin main y ver con git status si tu main estaba atrasado
git switch main
git fetch origin main
git status
# Ahora integrar con avance rápido:
git pull --ff-only origin main

# 2. Crear la rama del día
git switch -c feat/adriana-dia05-carrusel

# 3. Commit 1: Datos del carrusel (Tareas 1 y 2)
git add data/carousel.json
git commit -m "Actualizar etiquetas y botones de diapositivas 1 y 2 en carousel.json"

# 4. Commit 2: Estilo del título del carrusel (Tarea 3)
git add css/components/carousel/carousel.css
git commit -m "Anadir text-shadow de legibilidad a .luxe-carousel-title"

# 5. Publicar con seguimiento
git push -u origin feat/adriana-dia05-carrusel
```

### Fase 2: Como Revisora e Integradora del Turno 2 (cuando Jamile publique `feat/jamile-dia05-contacto`)
```bash
# 1. Comprobar que git fetch origin main NO descarga ramas nuevas de la compañera:
git fetch origin main
git branch -r
# Observa que feat/jamile-dia05-contacto aún NO aparece.

# 2. Ahora ejecutar git fetch origin completo:
git fetch origin
git branch -r
# ¡Ahora sí aparece origin/feat/jamile-dia05-contacto!

# 3. Descargar, comparar e integrar
git switch --track origin/feat/jamile-dia05-contacto
git diff main...feat/jamile-dia05-contacto
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia05-contacto
git push origin main
```
- **Qué buscas aprender:** Demostrar experimentalmente por qué `git fetch origin main` solo actualiza la referencia de `main` y no trae las demás ramas remotas creadas por tu compañera.

---

## 11. Criterios para considerar la tarea terminada
- Creaste 2 commits separados en `feat/adriana-dia05-carrusel` (`data/carousel.json` y `css/components/carousel/carousel.css`).
- En el Turno 2 comprobaste la diferencia entre `git fetch origin main` y `git fetch origin` antes de descargar `feat/jamile-dia05-contacto`.
- Ambas ramas quedaron integradas en `origin/main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Jamile el nombre de la rama `feat/adriana-dia05-carrusel` indicando que revise las diapositivas 1 y 2 del carrusel en `index.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si el carrusel queda en blanco tras editar `data/carousel.json`, ejecuta `git diff data/carousel.json` para verificar que no borraste ninguna coma al final de `"tag"` o `"label"`.

