# Guía de Práctica — Adriana (Día 01)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 01 de 15** — Configuración inicial, inspección del estado del repositorio y primeros commits en rama propia.

## 3. Objetivo de aprendizaje de Git
Comprobar la configuración de identidad local (`user.name`, `user.email`), inspeccionar el estado del repositorio y sus ramas (`git status`, `git remote -v`, `git branch -a`), crear una primera rama de trabajo desde `main`, comparar cambios con `git diff` y `git diff --staged`, registrar commits descriptivos, publicar la rama y, en el segundo turno, revisar e integrar la rama de Jamile.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia01-inicio`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia01-footer` publicada por Jamile).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (HTML):** Corregir el texto provisional de la tarjeta «Garantía de Satisfacción» en la página de Inicio (`index.html`).
2. **Tarea 2 (CSS):** Eliminar la regla duplicada `font-size:larger;` en el subtítulo de sección de Inicio (`css/pages/index.css`).
3. **Tarea 3 (CSS):** Reemplazar el fondo color `aqua` y el borde naranja de la cinta informativa de garantías en Inicio (`css/pages/index.css`).

---

## 6. Archivo y ruta exactos donde debe trabajar
- `index.html` (línea 75).
- `css/pages/index.css` (líneas 6–17).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`index.html`, línea 75)
Busca dentro de la tercera tarjeta `.home-info-card` («Garantía de Satisfacción»):
```html
<p class="small text-muted mb-0">Politica de devolucion 0</p>
```
Y reemplázalo exactamente por:
```html
<p class="small text-muted mb-0">Devolución garantizada durante 30 días sin complicaciones en empaque sellado.</p>
```

### En la Tarea 2 (`css/pages/index.css`, líneas 6–10)
Busca la regla `.home-section-subtitle`:
```css
.home-section-subtitle {
  letter-spacing: 1.5px;
  font-size: 0.84rem;
  font-size:larger;
}
```
Elimina la línea duplicada `font-size:larger;` para que quede así:
```css
.home-section-subtitle {
  letter-spacing: 1.5px;
  font-size: 0.84rem;
}
```

### En la Tarea 3 (`css/pages/index.css`, líneas 12–17)
Busca la regla `.home-info-banner`:
```css
.home-info-banner {
  background-color: aqua;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(255, 47, 0, 0.85);
}
```
Y cámbiala por:
```css
.home-info-banner {
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(212, 175, 55, 0.25);
}
```

---

## 8. Resultado esperado
En la página de Inicio (`index.html`), el subtítulo superior «NUESTRA SELECCIÓN ELEGANTE» se muestra con tamaño refinado (`0.84rem`), y el bloque inferior de tres garantías deja de tener fondo celeste (`aqua`) y borde rojo para lucir un fondo blanco con borde dorado sutil y el texto completo de devolución de 30 días.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Inicia **Live Server** en VS Code y abre `http://localhost:5500/index.html`.
2. Comprueba que sobre el título «Productos Destacados» el texto dorado «NUESTRA SELECCIÓN ELEGANTE» se ve proporcionado.
3. Desplázate hacia abajo hasta las tres tarjetas de garantías: verifica que el fondo del bloque es blanco y que la tercera tarjeta dice *«Devolución garantizada durante 30 días sin complicaciones en empaque sellado.»*.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
# 1. Verificar versión e identidad de autora
git --version
git config user.name
git config user.email

# 2. Consultar estado del repositorio, remoto y ramas existentes
git status
git remote -v
git branch -a
git log --oneline -n 5

# 3. Asegurar que estás en main actualizado y crear tu rama de trabajo
git switch main
git pull --ff-only origin main
git switch -c feat/adriana-dia01-inicio

# 4. Tras realizar la Tarea 1 en index.html, inspeccionar y crear el primer commit
git status
git diff index.html
git add index.html
git diff --staged
git commit -m "Corregir texto de garantia de satisfaccion en index.html"

# 5. Tras realizar las Tareas 2 y 3 en css/pages/index.css, crear el segundo commit
git diff css/pages/index.css
git add css/pages/index.css
git diff --staged
git commit -m "Corregir font-size duplicado y fondo de banner en index.css"

# 6. Revisar los commits creados y publicar la rama en GitHub
git log --oneline -n 3
git show
git push -u origin feat/adriana-dia01-inicio
```
- **Qué buscas aprender:** Diferenciar `git diff` (cambios aún no preparados) de `git diff --staged` (cambios ya preparados con `git add`) y separar modificaciones de HTML y CSS en commits claros.

### Fase 2: Como Revisora e Integradora del Turno 2 (cuando Jamile publique `feat/jamile-dia01-footer`)
```bash
# 1. Descargar referencias nuevas de GitHub y ubicar la rama de Jamile
git fetch origin
git branch -r
git switch --track origin/feat/jamile-dia01-footer

# 2. Revisar los commits y diferencias de Jamile respecto a main
git log --oneline -n 4
git diff main...feat/jamile-dia01-footer

# 3. (Tras comprobar el footer blanco en el navegador) Integrar en main y publicar
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia01-footer
git push origin main
git status
```

---

## 11. Criterios para considerar la tarea terminada
- Se crearon 2 commits limpios en la rama `feat/adriana-dia01-inicio` tocando únicamente `index.html` y `css/pages/index.css`.
- La rama `feat/adriana-dia01-inicio` fue publicada con `-u` en `origin` y revisada/integrada por Jamile.
- En el Turno 2, Adriana descargó, revisó en Live Server e integró en `main` la rama `feat/jamile-dia01-footer`.
- Al finalizar el día, `git status` en `main` indica `Your branch is up to date with 'origin/main'`.

## 12. Qué debe entregar a su compañera para la revisión
Al terminar el Turno 1, avisa a Jamile:
- **Nombre exacto de la rama publicada:** `feat/adriana-dia01-inicio`
- **Archivos modificados:** `index.html` y `css/pages/index.css`
- **Qué debe verificar en el navegador:** El tamaño del subtítulo de catálogo y el bloque inferior de garantías en `index.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al ejecutar `git diff` tras `git add` no ves nada en pantalla, recuerda que una vez hecho `git add` debes usar `git diff --staged`.
- Si editaste `index.html` antes de crear la rama `feat/adriana-dia01-inicio`, ejecuta `git switch -c feat/adriana-dia01-inicio` directamente (Git llevará tus cambios locales a la nueva rama).
- Consulta siempre [`10-errores-habituales.md`](../../cuaderno-git/10-errores-habituales.md) si aparece algún aviso en la terminal.

