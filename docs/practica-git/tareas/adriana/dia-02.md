# Guía de Práctica — Adriana (Día 02)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 02 de 15** — Revisión de la compañera en el primer turno y preparación selectiva de cambios (`git add <archivo>`) en el segundo turno.

## 3. Objetivo de aprendizaje de Git
Practicar primero el papel de **Revisora e Integradora** descargando la rama de Jamile (`fix/jamile-dia02-header`) mediante `git fetch origin`, `git branch -r` y `git switch --track`. Después, en el Turno 2, actualizar `main`, crear la rama `fix/adriana-dia02-nosotros` y practicar la preparación selectiva de archivos (`git add archivo`) e inspección de commits con `git show`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `fix/jamile-dia02-header` creada por Jamile).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `fix/adriana-dia02-nosotros`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (HTML):** Corregir el error ortográfico `simpre` por `siempre` en la sección «Nuestra Filosofía» de `pages/nosotros.html`.
2. **Tarea 2 (HTML):** Añadir un cuarto punto de garantía dermatológica en la lista de la tarjeta «Formulación Limpia» en `pages/nosotros.html`.
3. **Tarea 3 (CSS):** Ajustar la altura mínima y el borde lateral derecho de la imagen del Atelier Botánico en `css/pages/nosotros.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/nosotros.html` (líneas 55 y 94–98).
- `css/pages/nosotros.css` (líneas 67–72).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/nosotros.html`, línea 55)
Busca dentro de la tarjeta «Nuestra Filosofía»:
```html
<p class="text-muted mb-0">
  Nuestra misión es acompañarte en un ritual simple y constante, simpre que celebre tu piel real, con resultados visibles y transparencia total en cada etiqueta INCI.
</p>
```
Corrige `simpre` por `siempre`:
```html
<p class="text-muted mb-0">
  Nuestra misión es acompañarte en un ritual simple y constante, siempre que celebre tu piel real, con resultados visibles y transparencia total en cada etiqueta INCI.
</p>
```

### En la Tarea 2 (`pages/nosotros.html`, líneas 94–98)
Busca la lista dentro de la tarjeta «Formulación Limpia»:
```html
<ul class="text-start small text-muted mx-auto mb-0" style="max-width: 280px;">
  <li>Sin parabenos ni sulfatos agresivos</li>
  <li>Cruelty-free certificado</li>
  <li>Activos de origen natural trazable</li>
</ul>
```
Añade un cuarto elemento `<li>`:
```html
<ul class="text-start small text-muted mx-auto mb-0" style="max-width: 280px;">
  <li>Sin parabenos ni sulfatos agresivos</li>
  <li>Cruelty-free certificado</li>
  <li>Activos de origen natural trazable</li>
  <li>Fórmulas testadas en pieles sensibles</li>
</ul>
```

### En la Tarea 3 (`css/pages/nosotros.css`, líneas 67–72)
Busca la regla `.nosotros-atelier-img`:
```css
.nosotros-atelier-img {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
}
```
Actualízala a:
```css
.nosotros-atelier-img {
  width: 100%;
  height: 100%;
  min-height: 310px;
  object-fit: cover;
  border-right: 1px solid rgba(212, 175, 55, 0.2);
}
```

---

## 8. Resultado esperado
Tras integrar el Turno 1 de Jamile, la barra de navegación superior de todo el sitio ya luce en color crema claro. En el Turno 2, la página `pages/nosotros.html` queda libre de la errata `simpre`, muestra 4 ítems en «Formulación Limpia» y presenta el banner fotográfico del Atelier con mejor altura y borde dorado divisorio.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/nosotros.html` en el navegador.
2. Verifica que la barra de navegación superior se ve clara (cambio integrado del Turno 1 de Jamile).
3. Lee el segundo párrafo de «Nuestra Filosofía» y confirma que dice **«siempre que celebre tu piel real»**.
4. Verifica los 4 puntos en la tarjeta «Formulación Limpia» y el borde sutil a la derecha de la imagen del Atelier.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (cuando Jamile publique `fix/jamile-dia02-header`)
```bash
git status
git fetch origin
git branch -r
git switch --track origin/fix/jamile-dia02-header
git log --oneline -n 4
git diff main...fix/jamile-dia02-header
git show HEAD
# Tras comprobar en el navegador que el header ya no es rojo:
git switch main
git pull --ff-only origin main
git merge fix/jamile-dia02-header
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2
```bash
# 1. Partir de main recién actualizado con los cambios del Turno 1
git switch main
git status
git switch -c fix/adriana-dia02-nosotros

# 2. Realizar los cambios en pages/nosotros.html Y en css/pages/nosotros.css,
#    pero prepararlos en DOS commits separados usando git add <archivo>
git status
git diff pages/nosotros.html
git add pages/nosotros.html
git diff --staged
git commit -m "Corregir ortografia y ampliar lista de formulacion en nosotros.html"

git diff css/pages/nosotros.css
git add css/pages/nosotros.css
git commit -m "Ajustar altura minima y borde del banner atelier en nosotros.css"

# 3. Inspeccionar ambos commits con git show y publicar la rama
git log --oneline -n 3
git show HEAD
git push -u origin fix/adriana-dia02-nosotros
```
- **Qué buscas aprender:** Cómo modificar varios archivos en tu carpeta de trabajo pero usar `git add <archivo>` para empaquetar cada archivo en su propio commit independiente en lugar de mezclar todo con `git add .`.

---

## 11. Criterios para considerar la tarea terminada
- La rama `fix/jamile-dia02-header` fue revisada e integrada en `main` en el Turno 1.
- La rama `fix/adriana-dia02-nosotros` nació desde el `main` actualizado del Turno 1 y contiene 2 commits separados (uno para `pages/nosotros.html` y otro para `css/pages/nosotros.css`).
- Jamile revisó e integró `fix/adriana-dia02-nosotros` en `main` al cierre del día.

## 12. Qué debe entregar a su compañera para la revisión
- **En el Turno 1:** Confirmar a Jamile que su rama `fix/jamile-dia02-header` fue aprobada e integrada en `origin/main`.
- **En el Turno 2:** Entregar a Jamile el nombre de la rama `fix/adriana-dia02-nosotros` para que revise los 2 commits sobre `pages/nosotros.html` y `css/pages/nosotros.css`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si ejecutaste `git add .` por costumbre y preparaste ambos archivos a la vez, no hagas commit todavía: ejecuta `git restore --staged css/pages/nosotros.css` para sacar el CSS del área de preparación sin perder tus cambios, haz el primer commit solo con el HTML y luego añade el CSS.

