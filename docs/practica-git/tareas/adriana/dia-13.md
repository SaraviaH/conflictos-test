# Guía de Práctica — Adriana (Día 13)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 13 de 15** — Diagnóstico de rama local atrasada, solución a rechazos de publicación (`Updates were rejected`) y mejoras en componentes y modales.

## 3. Objetivo de aprendizaje de Git
Comprender cómo verificar si una rama local está atrasada respecto a `origin` (`git fetch origin` + `git status`), cómo reaccionar de forma segura si un `git push` es rechazado porque el remoto tiene commits nuevos que aún no habías descargado, y realizar mejoras coordinadas en las plantillas de componentes y el modal de Vista Rápida.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia13-accesibilidad-modal`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia13-accesibilidad-carrito`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (Componente HTML):** Actualizar el texto visible del botón de inspección en la plantilla `components/product-card/product-card.html`.
2. **Tarea 2 (Componente HTML):** Enriquecer el atributo accesible `aria-label` del contenedor principal en `components/carousel/carousel.html`.
3. **Tarea 3 (Componente JS):** Unificar el texto del botón de compra del modal de Vista Rápida (`#qv-add-btn`) en `js/components/product-card/product-card.js`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `components/product-card/product-card.html` (líneas 6–8).
- `components/carousel/carousel.html` (línea 2).
- `js/components/product-card/product-card.js` (líneas 224–226).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`components/product-card/product-card.html`, líneas 6–8)
Busca:
```html
    <button type="button" class="btn luxe-product-card__quickview-btn d-none" data-card-quickview>
      <i class="fas fa-eye me-1" aria-hidden="true"></i> Vista Rápida
    </button>
```
Cámbialo por:
```html
    <button type="button" class="btn luxe-product-card__quickview-btn d-none" data-card-quickview>
      <i class="fas fa-eye me-1" aria-hidden="true"></i> Ver Detalles
    </button>
```

### En la Tarea 2 (`components/carousel/carousel.html`, línea 2)
Busca:
```html
<section class="luxe-carousel" aria-roledescription="carousel" aria-label="Colecciones destacadas de Luxe Glow">
```
Cámbialo por:
```html
<section class="luxe-carousel" aria-roledescription="carousel" aria-label="Colecciones y tratamientos destacados de Luxe Glow Cosmetics">
```

### En la Tarea 3 (`js/components/product-card/product-card.js`, líneas 224–226)
Busca dentro de `ensureQuickViewModal()`:
```javascript
                      <button type="button" class="btn btn-luxe-primary flex-grow-1 py-2" id="qv-add-btn">
                        <i class="fas fa-shopping-bag me-2" aria-hidden="true"></i> Añadir a la Bolsa
                      </button>
```
Cámbialo por:
```javascript
                      <button type="button" class="btn btn-luxe-primary flex-grow-1 py-2" id="qv-add-btn">
                        <i class="fas fa-shopping-bag me-2" aria-hidden="true"></i> Añadir a Mi Carrito
                      </button>
```

---

## 8. Resultado esperado
Al pasar el cursor sobre cualquier tarjeta de producto en Inicio o Tienda, el botón flotante muestra «Ver Detalles», y al abrir el modal emergente, el botón principal dice «Añadir a Mi Carrito», guardando coherencia con el botón «Mi Carrito» de la barra de navegación.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html`.
2. Pasa el cursor sobre la imagen de cualquier producto destacado y verifica que el botón dice **«Ver Detalles»**.
3. Haz clic en **«Ver Detalles»** y comprueba que dentro del modal el botón inferior dice **«Añadir a Mi Carrito»** y funciona al pulsarlo.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
git switch main
git fetch origin
git status
git pull --ff-only origin main
git switch -c feat/adriana-dia13-accesibilidad-modal

# Commit 1: Plantillas HTML de componentes (Tareas 1 y 2)
git add components/product-card/product-card.html components/carousel/carousel.html
git commit -m "Actualizar etiqueta de boton Ver Detalles y aria-label del carrusel"

# Commit 2: Botón del modal en JS (Tarea 3)
git add js/components/product-card/product-card.js
git commit -m "Unificar texto del boton del modal a Anadir a Mi Carrito"

git push -u origin feat/adriana-dia13-accesibilidad-modal
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/jamile-dia13-accesibilidad-carrito`)
```bash
git fetch origin
git switch --track origin/feat/jamile-dia13-accesibilidad-carrito
git log --oneline -n 3
git diff main...feat/jamile-dia13-accesibilidad-carrito

# Comprobar cómo inspeccionar si main local está atrasado respecto a origin/main antes de fusionar:
git switch main
git fetch origin
git status
git pull --ff-only origin main
git merge --no-ff feat/jamile-dia13-accesibilidad-carrito -m "Merge branch 'feat/jamile-dia13-accesibilidad-carrito' into main"
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Se registraron los 2 commits en `feat/adriana-dia13-accesibilidad-modal` y se publicaron en GitHub.
- Se verificó en el navegador el funcionamiento del botón «Ver Detalles» y del modal «Añadir a Mi Carrito».
- Se revisó e integró en `main` la rama de Jamile del Turno 2.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Jamile la rama `feat/adriana-dia13-accesibilidad-modal` indicando que pruebe las tarjetas y el modal de producto en `index.html` y `pages/tienda.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al intentar hacer `git push origin main` recibes el mensaje `Updates were rejected because the remote contains work that you do not have locally`, recuerda que significa que `origin/main` avanzó en el servidor: ejecuta `git fetch origin`, revisa con `git log --oneline --graph --all -n 6`, actualiza con `git pull origin main` y vuelve a hacer `git push origin main`.

