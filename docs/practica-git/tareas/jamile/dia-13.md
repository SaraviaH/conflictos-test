# Guía de Práctica — Jamile (Día 13)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 13 de 15** — Diagnóstico de rama local atrasada, cómo resolver un rechazo de `git push` (`Updates were rejected`) y mejoras en el Carrito Offcanvas.

## 3. Objetivo de aprendizaje de Git
En el Turno 1, revisar e integrar la rama de Adriana (`feat/adriana-dia13-accesibilidad-modal`). En el Turno 2, comprobar qué ocurre si olvidas actualizar tu `main` local antes de crear una rama o intentar publicar cuando el remoto avanzó, cómo inspeccionar los commits faltantes con `git log HEAD..origin/main --oneline` y cómo sincronizar de forma segura.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia13-accesibilidad-modal`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia13-accesibilidad-carrito`).

---

## 5. Lista de 2 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (Componente HTML):** Actualizar el título del panel lateral del carrito (`#cartOffcanvasLabel`) en `components/header/header.html`.
2. **Tarea 2 (Utilidad JS):** Enriquecer el mensaje de estado vacío del carrito dentro de `renderOffcanvas()` en `js/utils/cart.js`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `components/header/header.html` (líneas 95–97).
- `js/utils/cart.js` (líneas 151–157).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`components/header/header.html`, líneas 95–97)
Busca:
```html
    <h5 class="offcanvas-title font-serif text-burgundy fw-bold" id="cartOffcanvasLabel">
      <i class="fas fa-shopping-bag text-gold me-2" aria-hidden="true"></i> Bolsa de Compras
    </h5>
```
Cámbialo por:
```html
    <h5 class="offcanvas-title font-serif text-burgundy fw-bold" id="cartOffcanvasLabel">
      <i class="fas fa-shopping-bag text-gold me-2" aria-hidden="true"></i> Mi Bolsa de Compras
    </h5>
```

### En la Tarea 2 (`js/utils/cart.js`, líneas 151–157)
Busca dentro de `renderOffcanvas()` cuando `count === 0`:
```javascript
        <div class="text-center py-5">
          <i class="fas fa-shopping-basket fs-1 text-muted mb-3 opacity-50" aria-hidden="true"></i>
          <p class="text-muted fw-500">Tu bolsa de compras está vacía actualmente.</p>
          <button type="button" class="btn btn-luxe-outline btn-sm mt-2" data-bs-dismiss="offcanvas">
            Explorar Cosméticos
          </button>
        </div>
```
Actualiza el párrafo `<p>` a:
```javascript
        <div class="text-center py-5">
          <i class="fas fa-shopping-basket fs-1 text-muted mb-3 opacity-50" aria-hidden="true"></i>
          <p class="text-muted fw-500">Tu bolsa de compras está vacía. ¡Descubre nuestras fórmulas botánicas!</p>
          <button type="button" class="btn btn-luxe-outline btn-sm mt-2" data-bs-dismiss="offcanvas">
            Explorar Cosméticos
          </button>
        </div>
```

---

## 8. Resultado esperado
Al hacer clic en el botón «Mi Carrito» de la barra de navegación superior en cualquier página, el panel lateral deslizable muestra el encabezado **«Mi Bolsa de Compras»** y, cuando no hay productos añadidos, el mensaje **«Tu bolsa de compras está vacía. ¡Descubre nuestras fórmulas botánicas!»**.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html`.
2. Haz clic en el botón **«Mi Carrito»** arriba a la derecha.
3. Si tienes productos guardados, elimínalos con el icono de papelera para ver el estado vacío y comprueba tanto el título superior como el mensaje central.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/adriana-dia13-accesibilidad-modal`)
```bash
git fetch origin
# Antes de actualizar main, consultar si nuestra rama local main estaba atrasada:
git switch main
git status
git log HEAD..origin/main --oneline
git pull --ff-only origin main

# Ahora descargar y revisar la rama de Adriana:
git switch --track origin/feat/adriana-dia13-accesibilidad-modal
git log --oneline -n 3
git diff main...feat/adriana-dia13-accesibilidad-modal
# Tras verificar el botón 'Ver Detalles' y el modal en el navegador:
git switch main
git merge --no-ff feat/adriana-dia13-accesibilidad-modal -m "Merge branch 'feat/adriana-dia13-accesibilidad-modal' into main"
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2
```bash
git switch main
git status
git switch -c feat/jamile-dia13-accesibilidad-carrito

# Commit 1: Título del offcanvas en header.html (Tarea 1)
git add components/header/header.html
git commit -m "Actualizar titulo del panel lateral a Mi Bolsa de Compras en header.html"

# Commit 2: Mensaje de carrito vacío en cart.js (Tarea 2)
git add js/utils/cart.js
git commit -m "Mejorar texto de estado vacio en js/utils/cart.js"

git push -u origin feat/jamile-dia13-accesibilidad-carrito
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste inspeccionar commits pendientes con `git log HEAD..origin/main --oneline`.
- Integraste la rama de Adriana en el Turno 1 y publicaste los 2 commits de `feat/jamile-dia13-accesibilidad-carrito` en el Turno 2.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Adriana la rama `feat/jamile-dia13-accesibilidad-carrito` indicando que abra el carrito vacío desde la barra de navegación para comprobar los dos cambios.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si alguna vez intentas hacer `git push` y Git responde `! [rejected] ... (fetch first)`, **nunca uses `--force`**: ejecuta `git fetch origin`, revisa qué commit nuevo subió tu compañera con `git log HEAD..origin/main --oneline`, intégralo con `git pull origin main` y vuelve a hacer `git push`.

