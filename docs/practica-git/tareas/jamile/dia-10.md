# Guía de Práctica — Jamile (Día 10)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 10 de 15** — Primer ejercicio de conflicto controlado en CSS global e inspección del commit de resolución de conflicto.

## 3. Objetivo de aprendizaje de Git
En el Turno 1, realizar modificaciones sobre `css/global/variables.css` y `css/global/base.css` que Adriana integrará en `main`. En el Turno 2, cuando Adriana resuelva el conflicto controlado en su rama `style/adriana-dia10-variables`, descargar su rama como **Revisora e Integradora**, auditar cómo quedó resuelto el conflicto con `git log --graph` y `git show`, y fusionarla en `main`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `style/jamile-dia10-paleta`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `style/adriana-dia10-variables` tras la resolución del conflicto).

---

## 5. Lista de 2 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (CSS):** Actualizar `--color-burgundy-hover` y `--radius-sm` dentro de `:root` en `css/global/variables.css`.
2. **Tarea 2 (CSS):** Ajustar el grosor del borde en `.btn-luxe-outline` dentro de `css/global/base.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `css/global/variables.css` (líneas 13 y 39).
- `css/global/base.css` (líneas 76–80).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`css/global/variables.css`, líneas 13 y 39)
En `css/global/variables.css`, busca la línea 13:
```css
  --color-burgundy-hover: #45151B;
```
Cámbiala por:
```css
  --color-burgundy-hover: #58111a;
```
Y en la línea 39 busca:
```css
  --radius-sm: 12px;
```
Cámbiala por:
```css
  --radius-sm: 14px;
```

### En la Tarea 2 (`css/global/base.css`, líneas 76–80)
Busca `.btn-luxe-outline`:
```css
.btn-luxe-outline {
  border: 1.5px solid var(--color-burgundy);
  color: var(--color-burgundy);
```
Cambia `1.5px` por `2px`:
```css
.btn-luxe-outline {
  border: 2px solid var(--color-burgundy);
  color: var(--color-burgundy);
```

---

## 8. Resultado esperado
En el Turno 1, los botones `.btn-luxe-outline` muestran un contorno más definido de `2px` y `--radius-sm` pasa a `14px`. En el Turno 2, tras revisar la resolución de conflicto de Adriana, `css/global/variables.css` conserva tu `--radius-sm: 14px` junto con el `--color-burgundy-hover: #6e0d20` y `--shadow-sm` de Adriana.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. En el Turno 1, abre `http://localhost:5500/pages/nosotros.html` y comprueba el borde de `2px` en el botón «Explorar Activos INCI» (`.btn-luxe-outline`).
2. En el Turno 2, al revisar la rama `style/adriana-dia10-variables`, abre `css/global/variables.css` y verifica que:
   - No quedó ningún marcador `<<<<<<<`, `=======` ni `>>>>>>>`.
   - Está presente tu cambio `--radius-sm: 14px;` y los cambios de Adriana (`--color-burgundy-hover: #6e0d20;` y `--shadow-sm`).

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
git switch main
git pull --ff-only origin main
git switch -c style/jamile-dia10-paleta

# Commit 1: Variables globales (Tarea 1)
git add css/global/variables.css
git commit -m "Actualizar --color-burgundy-hover y --radius-sm en variables.css"

# Commit 2: Botón outline en base.css (Tarea 2)
git add css/global/base.css
git commit -m "Aumentar borde de .btn-luxe-outline a 2px en base.css"

git push -u origin style/jamile-dia10-paleta
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`style/adriana-dia10-variables`)
```bash
# 1. Descargar la rama donde Adriana resolvió el conflicto controlado:
git fetch origin
git switch --track origin/style/adriana-dia10-variables

# 2. Inspeccionar el historial gráfico y el commit de resolución de conflicto:
git log --oneline --graph --decorate -n 6
git show HEAD
git diff main...style/adriana-dia10-variables

# 3. Comprobar que no existen marcadores de conflicto olvidados y fusionar en main:
git switch main
git pull --ff-only origin main
git merge --no-ff style/adriana-dia10-variables -m "Merge branch 'style/adriana-dia10-variables' into main"
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Publicaste los 2 commits de `style/jamile-dia10-paleta` en el Turno 1.
- En el Turno 2 auditaste con `git show HEAD` y `git log --oneline --graph` cómo se ve un commit de resolución de conflicto e integraste `style/adriana-dia10-variables` en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana la rama `style/jamile-dia10-paleta` para que la integre en `main` antes de iniciar el ejercicio de conflicto del Turno 2.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Como Revisora en el Turno 2, si al ejecutar `git diff main...style/adriana-dia10-variables` vieras que se perdió tu `--radius-sm: 14px;` o que quedó algún `<<<<<<<`, avisa a Adriana antes de fusionar en `main`. (Mañana en el Día 11 te tocará a ti provocar y resolver directamente el conflicto con `git merge --abort`).

