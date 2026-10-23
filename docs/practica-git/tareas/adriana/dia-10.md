# Guía de Práctica — Adriana (Día 10)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 10 de 15** — Primer ejercicio de conflicto de fusión controlado y resolución manual de marcadores `<<<<<<<`, `=======` y `>>>>>>>`.

## 3. Objetivo de aprendizaje de Git
Comprender cómo y por qué nace un conflicto de fusión cuando dos ramas que parten del mismo commit base modifican las mismas líneas de un archivo (`css/global/variables.css`), identificar el archivo con `git status` (`both modified`), editar los marcadores manualmente y cerrar la fusión de forma limpia.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `style/jamile-dia10-paleta` creada por Jamile).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `style/adriana-dia10-variables`, creada expresamente desde `HEAD~1` para practicar el conflicto controlado al actualizar desde `main`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (CSS):** Modificar en `css/global/variables.css` las líneas de `--color-burgundy-hover` y `--shadow-sm` en tu rama `style/adriana-dia10-variables` (nacida del commit previo a la integración de Jamile).
2. **Tarea 2 (CSS):** Ajustar el espaciado de `.status-tag` en `css/global/base.css` (un archivo sin conflicto para comprobar cómo Git fusiona automáticamente lo que no choca y solo pide ayuda en la línea en conflicto).
3. **Tarea 3 (Resolución de conflicto en Git):** Ejecutar `git merge main` dentro de tu rama `style/adriana-dia10-variables`, inspeccionar el conflicto en `css/global/variables.css`, resolver los marcadores conservando el acuerdo del equipo y publicar la rama lista para que Jamile la integre.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `css/global/variables.css` (líneas 13 y 43).
- `css/global/base.css` (líneas 97–109).

---

## 7. Cambio que debe efectuar

### Paso Previo (Turno 1): Revisar e integrar `style/jamile-dia10-paleta`
Primero descarga, revisa e integra normalmente en `main` la rama `style/jamile-dia10-paleta` de Jamile (donde ella habrá cambiado `--color-burgundy-hover` a `#58111a` y `--radius-sm` a `14px` en `css/global/variables.css`).

### En la Tarea 1 (`css/global/variables.css`, líneas 13 y 43 — Partiendo de `HEAD~1`)
Para reproducir de forma 100% controlada y segura el caso en que dos ramas partieron del mismo commit base antes de integrarse el Turno 1, crea tu rama desde `HEAD~1` (`git switch -c style/adriana-dia10-variables HEAD~1`).
En `css/global/variables.css`, cambia la línea 13:
```css
  --color-burgundy-hover: #6e0d20;
```
Y en la línea 43 cambia `--shadow-sm`:
```css
  --shadow-sm: 0 4px 16px rgba(92, 29, 36, 0.08);
```

### En la Tarea 2 (`css/global/base.css`, línea 104)
En `.status-tag`, cambia `padding: 0.4rem 1.15rem;` por:
```css
  padding: 0.42rem 1.25rem;
```

### En la Tarea 3 (Resolver el conflicto al ejecutar `git merge main`)
Cuando ejecutes `git merge main` desde tu rama `style/adriana-dia10-variables`, Git te avisará:
`CONFLICT (content): Merge conflict in css/global/variables.css`.
Abre `css/global/variables.css` y verás los marcadores `<<<<<<< HEAD`, `=======` y `>>>>>>> main`.
Resuélvelo dejando como valores definitivos:
- `--color-burgundy-hover: #6e0d20;` (el tono acordado de Adriana)
- `--radius-sm: 14px;` (el radio aportado por Jamile en el Turno 1)
- `--shadow-sm: 0 4px 16px rgba(92, 29, 36, 0.08);` (la sombra aportada por Adriana)
**Asegúrate de borrar por completo las líneas `<<<<<<<`, `=======` y `>>>>>>>`.**

---

## 8. Resultado esperado
`css/global/variables.css` conserva tanto la mejora de `--radius-sm: 14px` de Jamile como `--color-burgundy-hover: #6e0d20` y `--shadow-sm` de Adriana, sin ningún marcador de conflicto residual, y `css/global/base.css` incorpora el nuevo padding de `.status-tag`.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `css/global/variables.css` y verifica que no exista ningún carácter `<<<`, `===` ni `>>>`.
2. Recarga `http://localhost:5500/index.html` y pasa el cursor sobre el botón «Ver Colección Completa en Tienda» (`.btn-luxe-primary`) para verificar que cambia suavemente al tono `#6e0d20`.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`style/jamile-dia10-paleta`)
```bash
git fetch origin
git switch --track origin/style/jamile-dia10-paleta
git diff main...style/jamile-dia10-paleta
git switch main
git pull --ff-only origin main
git merge --no-ff style/jamile-dia10-paleta -m "Merge branch 'style/jamile-dia10-paleta' into main"
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (Reproducción y resolución del conflicto controlado)
```bash
# 1. Crear la rama desde el commit inmediatamente anterior al merge de Jamile (HEAD~1)
git switch main
git switch -c style/adriana-dia10-variables HEAD~1

# 2. Realizar las Tareas 1 y 2 y confirmar tus commits
git add css/global/variables.css
git commit -m "Actualizar --color-burgundy-hover y --shadow-sm en variables.css"

git add css/global/base.css
git commit -m "Ajustar padding de .status-tag en base.css"

# 3. Traer los cambios actuales de main hacia tu rama para provocar el conflicto controlado
git merge main
# -> Aparece CONFLICT (content): Merge conflict in css/global/variables.css

# 4. Inspeccionar el estado del conflicto
git status
git diff

# 5. Abrir css/global/variables.css, editar dejando ambos aportes y borrar <<<<<<<, =======, >>>>>>>
# 6. Marcar como resuelto y finalizar el merge
git add css/global/variables.css
git status
git commit -m "Resolver conflicto en variables.css unificando paleta y bordes"

# 7. Publicar tu rama ya libre de conflictos para que Jamile la revise e integre limpiamente
git log --oneline --graph -n 6
git push -u origin style/adriana-dia10-variables
```

---

## 11. Criterios para considerar la tarea terminada
- Experimentaste y resolviste manualmente el conflicto en `css/global/variables.css`.
- Comprobaste con `git status` cómo el archivo pasa de `both modified` a estar preparado tras `git add`.
- Publicaste `style/adriana-dia10-variables` ya sincronizada con `main` para que Jamile la integre sin conflictos en el cierre del día.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Jamile la rama `style/adriana-dia10-variables` e indícale que revise con `git show HEAD` cómo quedó el commit de resolución del conflicto en `css/global/variables.css`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si mientras editas los marcadores `<<<<<<<` borras de más por accidente, ejecuta `git merge --abort` para regresar al estado anterior al `git merge main` y vuelve a ejecutar `git merge main` con tranquilidad.

