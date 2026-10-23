# Guía de Práctica — Jamile (Día 01)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 01 de 15** — Configuración inicial, primera revisión de rama remota y primeros commits propios en el componente Footer.

## 3. Objetivo de aprendizaje de Git
Comprobar la configuración de tu identidad en Git (`user.name` y `user.email`), inspeccionar el repositorio con `git status`, `git remote -v` y `git branch -a`, descargar y revisar en el Turno 1 la rama publicada por Adriana (`feat/adriana-dia01-inicio`), integrarla en `main` y, en el Turno 2, crear tu propia rama `feat/jamile-dia01-footer` para corregir el componente Footer.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia01-inicio` publicada por Adriana).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia01-footer`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (CSS):** Corregir el color de fondo naranja/rojo (`rgb(255, 60, 0)`) y el espaciado (`padding`) de `.luxe-footer` en `css/components/footer/footer.css`.
2. **Tarea 2 (CSS):** Añadir la propiedad de color borgoña en `.luxe-footer-brand` y corregir el color de hover de `.luxe-footer-link:hover` en `css/components/footer/footer.css`.
3. **Tarea 3 (Componente HTML):** Reemplazar el texto informal con emoticón (`Hecho con cariño para tu piel :).`) en la parte inferior de `components/footer/footer.html`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `css/components/footer/footer.css` (líneas 6–20 y 41–45).
- `components/footer/footer.html` (línea 74).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`css/components/footer/footer.css`, líneas 6–12)
Busca la regla `.luxe-footer`:
```css
.luxe-footer {
  background: rgb(255, 60, 0);
  color: var(--color-text-dark);
  padding: 1rem 0 0rem;
  margin-top: auto;
  border-top: 1px solid var(--color-rose-dusty);
}
```
Y cámbiala por:
```css
.luxe-footer {
  background: var(--color-white);
  color: var(--color-text-dark);
  padding: 3rem 0 1.5rem;
  margin-top: auto;
  border-top: 1px solid var(--color-rose-dusty);
}
```

### En la Tarea 2 (`css/components/footer/footer.css`, líneas 14–20 y 41–45)
En `.luxe-footer-brand` (donde la línea 18 está en blanco):
```css
.luxe-footer-brand {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  font-weight: 700;

  margin-bottom: 0.65rem;
}
```
Añade `color: var(--color-burgundy);`:
```css
.luxe-footer-brand {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--color-burgundy);
  margin-bottom: 0.65rem;
}
```
Y más abajo, en las líneas 41–45:
```css
.luxe-footer-link:hover,
.luxe-footer-link:focus-visible {
  color: var(--color-gold-light);
  transform: translateX(4px);
}
```
Cambia `var(--color-gold-light)` por `var(--color-burgundy)`:
```css
.luxe-footer-link:hover,
.luxe-footer-link:focus-visible {
  color: var(--color-burgundy);
  transform: translateX(4px);
}
```

### En la Tarea 3 (`components/footer/footer.html`, línea 74)
Busca:
```html
<p class="small luxe-footer-text mb-0">Hecho con cariño para tu piel :).</p>
```
Y reemplázalo por:
```html
<p class="small luxe-footer-text mb-0">Formulación botánica y dermatológica hecha con rigor para tu piel.</p>
```

---

## 8. Resultado esperado
En todas las páginas del sitio, el pie de página (Footer) deja de verse de color naranja intenso y pasa a tener un fondo blanco elegante, con el logotipo «Luxe Glow» en borgoña y dorado, enlaces legibles al pasar el cursor y un lema editorial profesional en el cierre inferior.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html` con **Live Server** y desplázate hasta el pie de página.
2. Verifica que el fondo del footer es blanco, que la palabra **«Luxe»** se ve en tono borgoña y que al pasar el cursor sobre cualquier enlace del footer este se tiñe de borgoña y se desplaza suavemente.
3. Verifica en la esquina inferior derecha del footer el nuevo texto *«Formulación botánica y dermatológica hecha con rigor para tu piel.»*.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Configuración inicial e Integración del Turno 1 (cuando Adriana publique `feat/adriana-dia01-inicio`)
```bash
# 1. Verificar versión de Git e identidad local
git --version
git config user.name
git config user.email
git status
git remote -v

# 2. Actualizar referencias remotas y localizar la rama publicada por Adriana
git fetch origin
git branch -r
git branch -a

# 3. Descargar la rama de Adriana con seguimiento y revisar sus commits
git switch --track origin/feat/adriana-dia01-inicio
git log --oneline -n 4
git diff main...feat/adriana-dia01-inicio
git show HEAD

# 4. Tras comprobar index.html en Live Server, fusionar en main y publicar
git switch main
git pull --ff-only origin main
git merge feat/adriana-dia01-inicio
git push origin main
git status
```

### Fase 2: Como Desarrolladora del Turno 2
```bash
# 1. Partir de main actualizado con los cambios del Turno 1
git switch main
git status
git switch -c feat/jamile-dia01-footer

# 2. Tras realizar las Tareas 1 y 2 en css/components/footer/footer.css:
git status
git diff css/components/footer/footer.css
git add css/components/footer/footer.css
git diff --staged
git commit -m "Corregir fondo blanco, color de marca y hover en footer.css"

# 3. Tras realizar la Tarea 3 en components/footer/footer.html:
git diff components/footer/footer.html
git add components/footer/footer.html
git diff --staged
git commit -m "Actualizar lema inferior editorial en footer.html"

# 4. Verificar historial y publicar tu rama en GitHub
git log --oneline -n 3
git push -u origin feat/jamile-dia01-footer
```

---

## 11. Criterios para considerar la tarea terminada
- Descargaste, revisaste e integraste en `main` la rama `feat/adriana-dia01-inicio` durante el Turno 1.
- Creaste la rama `feat/jamile-dia01-footer` a partir del `main` actualizado y registraste 2 commits separados (uno para `footer.css` y otro para `footer.html`).
- Adriana revisó e integró tu rama en `main`, y al cierre del día actualizaste tu `main` local (`git switch main && git pull --ff-only origin main`).

## 12. Qué debe entregar a su compañera para la revisión
- **En el Turno 1:** Confirmar a Adriana que `feat/adriana-dia01-inicio` ya fue fusionada en `origin/main`.
- **En el Turno 2:** Entregar a Adriana el nombre exacto de tu rama `feat/jamile-dia01-footer` indicando que revise el diseño y textos del pie de página en el navegador.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al ejecutar `git branch -a` en el Turno 1 no ves la rama `feat/adriana-dia01-inicio`, recuerda ejecutar primero `git fetch origin`.
- Nunca empieces a editar los archivos del Turno 2 antes de haber terminado de integrar el Turno 1 en `main`.

