# 08 — Conflictos, Descarte Seguro y Recuperación

En esta sección aprenderás cómo actuar con calma y seguridad cuando aparece un conflicto de fusión, cuando necesitas deshacer un cambio local o cuando debes guardar trabajo a medias.

> **Principio de seguridad:** Ante un mensaje inesperado de Git, **nunca ejecutes comandos destructivos (`--hard`, `--force`, `-D`) como primera reacción**. Primero inspecciona siempre con `git status`, `git log` y `git diff`.

---

## 1. Conflictos de Fusión (`Merge Conflicts`)

### A. ¿Por qué ocurre y cómo reconocer un conflicto de fusión?
Un conflicto ocurre cuando Git intenta unir dos ramas (durante `git merge` o `git pull`) y descubre que **ambas ramas modificaron exactamente las mismas líneas del mismo archivo** (o una borró un archivo que la otra editó). Como Git no puede adivinar cuál de las dos versiones es la correcta de negocio, **detiene la fusión a mitad de camino y te pide que elijas tú**.

Lo reconocerás por este mensaje en la terminal:
```text
Auto-merging css/global/variables.css
CONFLICT (content): Merge conflict in css/global/variables.css
Automatic merge failed; fix conflicts and then commit the result.
```

### B. Cómo consultar qué archivos tienen conflictos
Ejecuta inmediatamente:
```bash
git status
```
En la sección **`Unmerged paths:`** (Rutas no fusionadas) verás listados en rojo los archivos con conflicto precedidos por **`both modified:`**:
```text
Unmerged paths:
  (use "git add <file>..." to mark resolution)
  (use "git merge --abort" to abort the merge)
        both modified:   css/global/variables.css
```

### C. Qué significan los marcadores `<<<<<<<`, `=======` y `>>>>>>>`
Al abrir el archivo en conflicto en VS Code, verás que Git insertó tres líneas delimitadoras:

```css
<<<<<<< HEAD
  --color-burgundy-hover: #58111a;
=======
  --color-burgundy-hover: #6e0d20;
>>>>>>> style/adriana-dia10-variables
```

- **`<<<<<<< HEAD`**: Marca el inicio de lo que tenías en **tu rama actual** (donde estabas parada al lanzar el `merge`).
- **`=======`**: Es la línea divisoria entre ambas propuestas.
- **`>>>>>>> nombre-rama`**: Marca el final de los cambios que vienen desde **la rama que estás intentando fusionar**.

### D. Cómo corregir los conflictos de manera manual y terminar la fusión
1. **Edita el archivo manualmente:** Decide qué código debe quedar (la versión de arriba, la versión de abajo o una combinación de ambas).
2. **Borra por completo las tres líneas de marcadores (`<<<<<<< HEAD`, `=======` y `>>>>>>> ...`):** El archivo debe quedar con sintaxis HTML, CSS, JSON o JS 100% válida.
3. **Comprueba en el navegador y revisa con `git diff`:** Asegúrate de que no quedó ningún marcador olvidado.
4. **Marca el archivo como resuelto añadiéndolo al área de preparación:**
   ```bash
   git add css/global/variables.css
   ```
5. **Verifica con `git status`:** Ahora aparecerá bajo `All conflicts fixed but you are still merging`.
6. **Completa la fusión creando el commit de cierre:**
   ```bash
   git commit -m "Resolver conflicto en variables.css e integrar rama"
   ```

### E. Cuándo utilizar `git merge --abort`
Si abres un archivo con conflicto y notas que fusionaste la rama equivocada, que te falta consultar con tu compañera qué valor conservar o que borraste algo por error mientras intentabas resolverlo, ejecuta:
```bash
git merge --abort
```
Esto cancela la fusión y deja tus archivos exactamente como estaban antes de empezar el `merge`.

---

## 2. Descartar Cambios y Despreparar Archivos (`git restore`)

### `git restore archivo` (Descartar cambios no preparados)
- **Qué hace:** Descarta las modificaciones que hiciste en `archivo` en tu directorio de trabajo (que aún **no** has subido con `git add`) y lo devuelve al estado del último commit (o del área de preparación).
- **Cuándo utilizarlo:** Cuando hiciste pruebas en un archivo (por ejemplo, tocaste un archivo equivocado por error) y quieres deshacer esos cambios para dejar el archivo limpio.
- **Ejemplo:**
  ```bash
  git restore index.html
  ```
- **⚠️ Precaución:** Las líneas no guardadas en commits que descartes con `git restore archivo` se pierden del archivo. Revisa primero con `git diff archivo` qué vas a descartar.

---

### `git restore --staged archivo` (Sacar del área de preparación sin borrar cambios)
- **Qué hace:** Saca a `archivo` del área de preparación (*Staging Area*), **pero conserva intactas todas tus modificaciones en el archivo dentro de tu directorio de trabajo**.
- **Cuándo utilizarlo:** Cuando ejecutaste `git add` sobre un archivo por equivocación (o hiciste `git add .`) y quieres quitar ese archivo de la lista verde (`Changes to be committed`) para que no entre en el próximo commit, pero **sin perder lo que escribiste en él**.
- **Ejemplo:**
  ```bash
  git restore --staged css/pages/index.css
  git status
  ```
- **Riesgos:** **Ninguno.** No borra una sola línea de tu código; solo desmarca el archivo del área de preparación.

---

## 3. Las Tres Variantes de `git reset` Explicadas por Separado

`git reset` mueve hacia atrás el puntero de tu rama actual (por ejemplo, al commit anterior `HEAD~1`). Sin embargo, lo que hace con el área de preparación y con tus archivos depende críticamente de la opción que elijas:

### A. `git reset --soft HEAD~1`
- **Efecto sobre el historial de commits:** Deshace el último commit moviendo la rama un paso atrás (`HEAD~1`).
- **Efecto sobre el área de preparación (*Staging*):** **Conserva todos los cambios preparados (en verde)** listos para volver a hacer commit.
- **Efecto sobre los archivos de tu carpeta:** **No toca ni borra nada** de tus archivos.
- **Cuándo usarlo:** Cuando acabas de hacer dos commits pequeños locales (que aún no has subido con `push`) y quieres unirlos en uno solo, o quieres volver a redactar el commit agregando más cambios. Es **100% seguro para tus archivos**.

---

### B. `git reset --mixed HEAD~1` (comportamiento por defecto si no pones flag)
- **Efecto sobre el historial de commits:** Deshace el último commit moviendo la rama a `HEAD~1`.
- **Efecto sobre el área de preparación (*Staging*):** **Vacía el área de preparación** (saca los cambios del estado *staged*).
- **Efecto sobre los archivos de tu carpeta:** **Conserva intactas todas tus modificaciones en los archivos** (quedan en rojo como `Changes not staged for commit`).
- **Cuándo usarlo:** Cuando hiciste un commit local antes de tiempo y quieres desarmar ese commit para volver a separar los archivos en distintos `git add` y distintos commits. **No borra tus modificaciones en los archivos.**

---

### C. `git reset --hard HEAD~1` (⚠️ PELIGROSO / DESTRUCTIVO)
- **Efecto sobre el historial de commits:** Deshace el último commit moviendo la rama a `HEAD~1`.
- **Efecto sobre el área de preparación (*Staging*):** Vacía por completo el área de preparación.
- **Efecto sobre los archivos de tu carpeta:** **⚠️ DESTRUYE Y SOBRESCRIBE todos los cambios de los archivos en tu directorio de trabajo**, forzándolos a quedar idénticos a `HEAD~1`.
- **⚠️ ADVERTENCIA CRÍTICA:**
  - Cualquier cambio en tus archivos que no estuviera guardado en un commit **se pierde definitivamente sin posibilidad de recuperarlo ni siquiera con `reflog`**.
  - **No utilices `git reset --hard` en esta práctica.** Si quieres deshacer un commit local conservando tu trabajo, usa `--soft` o `--mixed`. Si quieres descartar un solo archivo, usa `git restore <archivo>` tras verificar con `git diff`.

---

## 4. Recuperación de Referencias con `git reflog`

### `git reflog`
- **Qué hace:** Muestra una bitácora cronológica local de todos los movimientos que ha hecho el puntero `HEAD` en tu computadora (cambios de rama, commits, resets, merges) durante las últimas semanas.
- **Por qué existe:** Incluso si deshiciste un commit por error con `reset` o borraste una rama, el commit sigue guardado internamente en tu carpeta `.git` durante un tiempo. `git reflog` te muestra el código hash de ese commit para que puedas volver a él o recrear una rama en ese punto (`git switch -c rama-recuperada <hash>`).
- **Ejemplo:**
  ```bash
  git reflog -n 10
  ```
- **Riesgos:** Consultar `git reflog` es 100% seguro (solo lectura).

---

## 5. Guardar Cambios Temporalmente con `git stash`

### ¿Cuándo usar `git stash`?
Imagina que estás editando un archivo en la rama equivocada (por ejemplo, olvidaste salir de `main`), o que tu compañera te pide revisar urgentemente su rama pero tú tienes archivos modificados a mitad de camino que aún no están listos para hacer un commit.

### Variantes útiles de `git stash`
1. **`git stash push -m " descripción clara "`**:
   - Toma tus archivos modificados (con seguimiento) y los guarda en una pila temporal interna de Git, dejando tu directorio de trabajo completamente limpio (`working tree clean`).
2. **`git stash list`**:
   - Muestra la lista de paquetes guardados en la pila temporal (ej. `stash@{0}: On main: descripción clara`).
3. **`git stash show -p stash@{0}`**:
   - Muestra exactamente qué líneas de código hay guardadas dentro de ese stash sin aplicarlo todavía.
4. **`git stash pop`**:
   - Recupera los cambios del último stash (`stash@{0}`), los vuelve a aplicar sobre tus archivos actuales y elimina ese elemento de la pila si no hubo conflictos.
5. **`git stash apply`**:
   - Aplica los cambios del stash sobre tus archivos actuales, pero **conserva una copia en la pila** por seguridad.

### Riesgos y limitaciones de `git stash`
- Por defecto, `git stash` **no guarda archivos nuevos sin seguimiento (*untracked*)** a menos que uses la opción `-u` (`git stash push -u -m "..."`).
- No uses el stash como almacén a largo plazo: si acumulas muchos stashes sin nombre, olvidarás qué contenía cada uno y al aplicarlos días después pueden chocar con el código nuevo. Úsalo para pausas breves (cambiar de rama y recuperar enseguida).

---

## 6. Qué Hacer Ante Situaciones Frecuentes de Bloqueo

### A. Intentar cambiar de rama con cambios pendientes
- **Síntoma:** Al ejecutar `git switch otra-rama`, Git muestra `error: Your local changes to the following files would be overwritten by checkout: ... Please commit your changes or stash them before you switch branches.`
- **Qué hacer:**
  1. Si los cambios pertenecen a la rama donde estás parada y ya están listos: haz `git add` y `git commit` antes de cambiar de rama.
  2. Si empezaste a editar en la rama equivocada (ej. estabas en `main` y querías llevar esos cambios a una rama nueva): ejecuta `git stash push -m "cambios en curso"`, cámbiate o crea la rama correcta (`git switch -c mi-rama`) y recupera los cambios con `git stash pop`.

### B. Rama local atrasada respecto a la remota
- **Síntoma:** `git status` indica `Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.`
- **Qué hacer:** Ejecuta `git pull --ff-only origin main` para poner tu rama local al día con el servidor.

### C. Rechazo de `git push` (`Updates were rejected...`)
- **Síntoma:** Intentas hacer `git push origin main` (o a tu rama) y Git responde:
  `! [rejected] main -> main (fetch first)` / `error: failed to push some refs... Updates were rejected because the remote contains work that you do not have locally.`
- **Por qué ocurre:** Tu compañera publicó commits nuevos en esa misma rama en GitHub que tú todavía no has descargado en tu computadora.
- **Qué hacer (procedimiento seguro):**
  1. **Nunca uses `--force`.**
  2. Ejecuta `git fetch origin` para ver qué se subió al servidor.
  3. Inspecciona con `git log --oneline --graph --decorate --all -n 10`.
  4. Integra primero los cambios del servidor con `git pull origin main` (resolviendo conflictos si los hubiera) y, una vez unificados ambos trabajos, ejecuta `git push origin main`.

### D. Conflicto durante un `git pull`
- **Síntoma:** Ejecutas `git pull origin main` y aparece `CONFLICT (content): Merge conflict in ... Automatic merge failed`.
- **Por qué ocurre:** Como `git pull` hace `fetch` + `merge`, la parte del `merge` encontró líneas modificadas tanto en tu rama local como en `origin/main`.
- **Qué hacer:** Se resuelve exactamente igual que cualquier conflicto de fusión:
  1. Ejecuta `git status` para ver qué archivo tiene `both modified:`.
  2. Abre el archivo, edita la sección entre `<<<<<<<`, `=======` y `>>>>>>>` y borra los tres marcadores.
  3.Si prefieres cancelar el `pull` para revisar primero con calma, ejecuta `git merge --abort`.
  4. Cuando el archivo esté corregido, ejecuta `git add <archivo>` y `git commit -m "Resolver conflicto al actualizar desde origin/main"`.

