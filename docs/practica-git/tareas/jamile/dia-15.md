# Guía de Práctica — Jamile (Día 15)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 15 de 15** — Flujo completo de cierre de versión (*Release*), depuración de referencias remotas (`git fetch --prune`) y verificación final de los 15 días.

## 3. Objetivo de aprendizaje de Git
Completar con autonomía total la última jornada del plan: revisar e integrar en el Turno 1 la rama de cierre de Adriana (`release/adriana-dia15-cierre-inicio`), desarrollar en el Turno 2 tu rama de cierre (`release/jamile-dia15-cierre-tienda`), actualizar referencias con `git fetch --prune origin` y realizar la auditoría final del historial junto con Adriana.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `release/adriana-dia15-cierre-inicio`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `release/jamile-dia15-cierre-tienda`) y verificación conjunta final en `main`.

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (HTML):** Actualizar la etiqueta `.status-tag` del encabezado principal en `pages/tienda.html`.
2. **Tarea 2 (HTML):** Detallar la cantidad de miniaturas de cortesía en la garantía «Muestras de Regalo» de `pages/tienda.html`.
3. **Tarea 3 (Auditoría Git de cierre):** Sincronizar `main` tras la integración final de Adriana, limpiar ramas locales fusionadas y comprobar que el hash de `HEAD` coincide entre ambas compañeras.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/tienda.html` (líneas 30 y 125).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/tienda.html`, línea 30)
Busca dentro de `.tienda-hero`:
```html
          <span class="status-tag mb-3"><i class="fas fa-sparkles text-gold me-1" aria-hidden="true"></i> Catálogo Oficial 2026</span>
```
Cámbialo por:
```html
          <span class="status-tag mb-3"><i class="fas fa-sparkles text-gold me-1" aria-hidden="true"></i> Catálogo Oficial Luxe Glow 2026</span>
```

### En la Tarea 2 (`pages/tienda.html`, línea 125)
Busca dentro de `.tienda-guarantees-strip` bajo «Muestras de Regalo»:
```html
        <div class="col-6 col-md-3">
          <i class="fas fa-gift text-gold fs-2 mb-2" aria-hidden="true"></i>
          <h3 class="h6 fw-bold text-burgundy-dark mb-1">Muestras de Regalo</h3>
          <p class="small text-muted mb-0">Incluimos miniaturas botánicas de cortesía en cada pedido.</p>
        </div>
```
Actualiza el párrafo a:
```html
        <div class="col-6 col-md-3">
          <i class="fas fa-gift text-gold fs-2 mb-2" aria-hidden="true"></i>
          <h3 class="h6 fw-bold text-burgundy-dark mb-1">Muestras de Regalo</h3>
          <p class="small text-muted mb-0">Incluimos 2 miniaturas botánicas de cortesía en cada pedido oficial.</p>
        </div>
```

---

## 8. Resultado esperado
En `pages/tienda.html`, el hero luce la etiqueta «CATÁLOGO OFICIAL LUXE GLOW 2026» y la franja inferior de beneficios especifica «Incluimos 2 miniaturas botánicas de cortesía en cada pedido oficial.».

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html` y comprueba ambos textos.
2. Recorre todo el sitio web comprobando que todas las mejoras realizadas por ti y por Adriana a lo largo de los 15 días conviven en armonía.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Turno 1 — Revisar e integrar `release/adriana-dia15-cierre-inicio`
1. Ejecuta `git fetch --prune origin` para actualizar referencias remotas.
2. Descarga con seguimiento `origin/release/adriana-dia15-cierre-inicio`, revisa sus commits y diferencias frente a `main`, comprueba `index.html` en Live Server, e intégrala en `main` con `git merge --no-ff` seguido de `git push origin main`.

### Fase 2: Turno 2 — Desarrollar `release/jamile-dia15-cierre-tienda` y Auditoría Final
1. Desde el `main` recién actualizado, crea tu rama `release/jamile-dia15-cierre-tienda`.
2. Registra el primer commit con la Tarea 1 y el segundo commit con la Tarea 2 en `pages/tienda.html`.
3. Publica la rama con `git push -u origin release/jamile-dia15-cierre-tienda` y avisa a Adriana para que realice la integración final en `main`.
4. Cuando Adriana confirme que publicó el cierre en `origin/main`, ejecuta la auditoría final:
   ```bash
   git switch main
   git fetch --prune origin
   git pull --ff-only origin main
   git branch -d release/adriana-dia15-cierre-inicio release/jamile-dia15-cierre-tienda
   git status
   git log --oneline --graph --decorate -n 25
   git rev-parse --short HEAD
   ```

---

## 11. Criterios para considerar la tarea terminada
- Revisaste e integraste `release/adriana-dia15-cierre-inicio` en el Turno 1.
- Desarrollaste y publicaste `release/jamile-dia15-cierre-tienda` en el Turno 2.
- Tras la integración final de Adriana, actualizaste tu `main` local, limpiaste las ramas locales de la jornada con `git branch -d` y comprobaste que el hash devuelto por `git rev-parse --short HEAD` es idéntico al de Adriana.

## 12. Qué debe entregar a su compañera para la revisión
- **En el Turno 2:** El nombre de tu rama `release/jamile-dia15-cierre-tienda`.
- **Al finalizar el día:** Confirmar con Adriana que ambas tienen el mismo hash en `main` y `working tree clean`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al final del día tu hash en `main` es distinto al de Adriana, ejecuta `git status` para ver si te faltó hacer `git pull --ff-only origin main` después de la última fusión realizada por Adriana.

