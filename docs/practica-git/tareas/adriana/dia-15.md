# Guía de Práctica — Adriana (Día 15)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 15 de 15** — Flujo completo de cierre de versión (*Release*), depuración de referencias remotas (`git fetch --prune`) y auditoría final del proyecto.

## 3. Objetivo de aprendizaje de Git
Ejecutar con autonomía total el ciclo final de integración del proyecto: crear una rama de cierre (`release/adriana-dia15-cierre-inicio`), realizar los últimos ajustes de presentación en `index.html` y `css/global/base.css`, revisar e integrar la rama final de Jamile (`release/jamile-dia15-cierre-tienda`), actualizar referencias con `git fetch --prune` y auditar el historial completo de los 15 días.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `release/adriana-dia15-cierre-inicio`).
- **Turno 2 (Cierre de los 15 días):** **Revisora e Integradora Final** (de la rama `release/jamile-dia15-cierre-tienda`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (HTML):** Actualizar el subtítulo superior de la sección de catálogo en `index.html`.
2. **Tarea 2 (HTML):** Detallar el alcance nacional de la garantía «Envío Express Gratis» en `index.html`.
3. **Tarea 3 (CSS):** Estilizar el divisor dorado global `.divider-gold` en `css/global/base.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `index.html` (líneas 34 y 61).
- `css/global/base.css` (líneas 111–116).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`index.html`, línea 34)
Busca:
```html
<span class="text-uppercase text-gold fw-bold home-section-subtitle">Nuestra Selección Elegante</span>
```
Cámbialo por:
```html
<span class="text-uppercase text-gold fw-bold home-section-subtitle">Colección Botánica Destacada</span>
```

### En la Tarea 2 (`index.html`, línea 61)
Busca dentro de la primera `.home-info-card` («Envío Express Gratis»):
```html
<p class="small text-muted mb-0">En compras superiores a $50 en todo el país con seguimiento en tiempo real.</p>
```
Cámbialo por:
```html
<p class="small text-muted mb-0">En compras superiores a $50 en toda la República con guía de seguimiento en tiempo real.</p>
```

### En la Tarea 3 (`css/global/base.css`, líneas 111–116)
Busca `.divider-gold`:
```css
.divider-gold {
  width: 60px;
  height: 3px;
  background: var(--color-gold);
  margin: 10px auto 20px;
}
```
Actualízalo a:
```css
.divider-gold {
  width: 72px;
  height: 3px;
  background: var(--color-gold);
  border-radius: 2px;
  margin: 10px auto 20px;
}
```

---

## 8. Resultado esperado
La página de Inicio muestra el encabezado «COLECCIÓN BOTÁNICA DESTACADA», el texto de envío express actualizado y un divisor dorado `.divider-gold` de 72px con bordes redondeados en todas las páginas que lo utilizan (`index.html`, `nosotros.html`, `ritual.html`, `ingredientes.html`).

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html` y comprueba el nuevo subtítulo, el divisor dorado y la primera tarjeta de garantías.
2. Al finalizar el Turno 2, recorre todas las páginas del menú superior (`Inicio`, `Tienda`, `Nosotros`, `Ritual de Cuidado`, `Ingredientes`, `Diario Botánico`, `Preguntas Frecuentes`, `Envíos & Devoluciones` y `Contacto`) comprobando que todo el sitio luce armónico y funcional.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Turno 1 — Desarrollo autónomo de `release/adriana-dia15-cierre-inicio`
1. Sitúate en `main`, sincroniza con `origin/main` mediante `--ff-only` y crea la rama `release/adriana-dia15-cierre-inicio`.
2. Registra un primer commit con los dos cambios de `index.html` y un segundo commit con la mejora de `.divider-gold` en `css/global/base.css`.
3. Publica la rama con seguimiento (`-u`) hacia `origin` y avisa a Jamile para que realice su revisión e integración.

### Fase 2: Turno 2 — Revisión e Integración Final de `release/jamile-dia15-cierre-tienda` y Auditoría
```bash
# 1. Actualizar referencias limpiando posibles ramas remotas eliminadas (--prune)
git fetch --prune origin
git branch -r

# 2. Descargar y revisar la rama final de Jamile
git switch --track origin/release/jamile-dia15-cierre-tienda
git log --oneline -n 4
git diff main...release/jamile-dia15-cierre-tienda

# 3. Integrar en main con commit de fusión explícito y publicar el cierre del plan
git switch main
git pull --ff-only origin main
git merge --no-ff release/jamile-dia15-cierre-tienda -m "Merge branch 'release/jamile-dia15-cierre-tienda' into main"
git push origin main

# 4. Auditoría final de los 15 días de práctica
git status
git log --oneline --graph --decorate -n 25
git rev-parse --short HEAD
```

---

## 11. Criterios para considerar la tarea terminada
- Ambas ramas `release/adriana-dia15-cierre-inicio` y `release/jamile-dia15-cierre-tienda` fueron revisadas e integradas en `main`.
- Al ejecutar `git status` en `main`, el árbol de trabajo está completamente limpio y sincronizado con `origin/main`.
- Tanto tú como Jamile obtienen exactamente el mismo código hash al ejecutar `git rev-parse --short HEAD` en `main`.

## 12. Qué debe entregar a su compañera para la revisión
- **En el Turno 1:** La rama `release/adriana-dia15-cierre-inicio`.
- **Al cerrar el Turno 2:** El hash final del último commit en `main` para que Jamile ejecute `git pull --ff-only origin main` y verifique que ambas cerraron el programa de 15 días en el mismo punto exacto.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al finalizar los 15 días alguna rama local quedó pendiente de borrar en tu computadora, verifica con `git branch --merged main` que sus cambios ya están en `main` y límpiala con `git branch -d <nombre-rama>`.

