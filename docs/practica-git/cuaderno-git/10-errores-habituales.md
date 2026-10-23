# 10 — Errores Habituales y Cómo Diagnosticarlos

Cuando Git muestra un mensaje en inglés o rechaza una operación, **casi nunca es un fallo del programa: es una medida de protección** para evitar que sobrescribas trabajo tuyo o de tu compañera.

> **Regla de oro del diagnóstico:** Un mismo mensaje puede tener distintas causas según el contexto. **Nunca ejecutes una «solución mágica» copiada sin antes inspeccionar qué ocurre con `git status`, `git branch -a` y `git log --oneline --graph --all -n 10`.**

---

## 1. `fatal: a branch named '...' already exists`

### Ejemplo del mensaje
```text
fatal: a branch named 'feat/adriana-dia01-inicio' already exists
```

### ¿Por qué ocurre?
Intentaste **crear** una rama nueva (usando `git branch nombre`, `git switch -c nombre` o `git checkout -b nombre`), pero en tu computadora **ya existe** una rama local con ese mismo nombre exacto.

### Qué debes inspeccionar antes de decidir
1. Ejecuta `git branch` para ver tus ramas locales y saber en cuál estás parada.
2. Ejecuta `git log --oneline feat/adriana-dia01-inicio -n 3` para ver si esa rama que ya existe es la que tú misma creaste hace unos minutos o si tiene commits antiguos.

### Cómo solucionarlo de forma segura
- **Caso A (Ya habías creado la rama y solo quieres entrar a ella):** Cambia a la rama **sin** la opción `-c` ni `-b`:
  ```bash
  git switch feat/adriana-dia01-inicio
  ```
- **Caso B (Estabas descargando una rama remota con `--track` pero ya la habías descargado antes):** Cámbiate a ella con `git switch feat/adriana-dia01-inicio` y actualízala con `git pull --ff-only`.

---

## 2. `Your local changes to the following files would be overwritten by checkout` (o `by merge`)

### Ejemplo del mensaje
```text
error: Your local changes to the following files would be overwritten by checkout:
        index.html
Please commit your changes or stash them before you switch branches.
Aborting
```

### ¿Por qué ocurre?
Tienes modificaciones sin guardar en commits en tu directorio de trabajo (o en el área de preparación) sobre un archivo (`index.html`), e intentaste cambiarte a otra rama (`git switch` / `git checkout`) o actualizar (`git pull`) donde ese mismo archivo tiene un contenido diferente. Git aborta el cambio para no aplastar tu trabajo pendiente.

### Qué debes inspeccionar antes de decidir
1. Ejecuta `git status` para ver en qué rama estás parada actualmente y qué archivos están modificados.
2. Ejecuta `git diff` para leer qué son esos cambios y decidir si son valiosos o si fueron una edición accidental.

### Cómo solucionarlo de forma segura
- **Caso A (Los cambios pertenecen a tu rama actual):** Haz `git add` y `git commit -m "..."` en tu rama actual, y después cambia de rama con `git switch`.
- **Caso B (Empezaste a editar en `main` por descuido y quieres llevar esos cambios a una rama nueva):**
  - Si la rama nueva nace desde el mismo commit donde estás, `git switch -c nueva-rama` suele llevarte los cambios contigo.
  - Si vas a cambiar a otra rama distinta, guárdalos temporalmente con:
    ```bash
    git stash push -m "Cambios en curso"
    git switch otra-rama
    git stash pop
    ```
- **Caso C (Fueron cambios de prueba que estás 100% segura de querer descartar):** Ejecuta `git restore index.html` y luego cambia de rama.

---

## 3. `Updates were rejected because the remote contains work that you do not have locally`

### Ejemplo del mensaje
```text
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/SaraviaH/conflictos-test.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
```

### ¿Por qué ocurre?
Intentaste subir commits con `git push`, pero la rama en GitHub (`origin`) tiene uno o más commits nuevos que **tu compañera publicó antes que tú** y que tú todavía no has descargado en tu computadora.

### Qué debes inspeccionar antes de decidir
1. Ejecuta `git fetch origin` (esto es 100% seguro y actualiza tu visión del servidor).
2. Ejecuta `git log --oneline --graph --decorate --all -n 10` para ver qué commits están en `origin/main` (o en la rama remota) y qué commits tienes tú localmente.

### Cómo solucionarlo de forma segura
- **⚠️ NUNCA ejecutes `git push --force` ante este mensaje**, porque borrarías del servidor el trabajo que subió tu compañera.
- **Solución correcta:** Integra primero los cambios del servidor en tu rama local:
  ```bash
  git pull origin main
  ```
  *(Si hay conflictos, resuélvelos, haz `git add` y `git commit`).* Una vez unificados los historiales, vuelve a ejecutar:
  ```bash
  git push origin main
  ```

---

## 4. Conflictos de fusión (`CONFLICT (content): Merge conflict in ...`)

### Ejemplo del mensaje
```text
Auto-merging data/carousel.json
CONFLICT (content): Merge conflict in data/carousel.json
Automatic merge failed; fix conflicts and then commit the result.
```

### ¿Por qué ocurre?
Durante un `git merge` o `git pull`, dos ramas modificaron la misma zona del mismo archivo de maneras distintas.

### Qué debes inspeccionar antes de decidir
1. Ejecuta `git status` y revisa la lista bajo `Unmerged paths:` (`both modified:`).
2. Abre el archivo indicado en VS Code y busca las marcas `<<<<<<<`, `=======` y `>>>>>>>`.

### Cómo solucionarlo de forma segura
- Si aún no estás lista para resolverlo o hiciste el merge en la rama equivocada: ejecuta `git merge --abort`.
- Para resolverlo: edita el archivo dejando el código correcto, elimina por completo las tres líneas de marcadores (`<<<<<<<`, `=======`, `>>>>>>>`), verifica que la sintaxis (especialmente comas y llaves si es un archivo `.json`) sea válida, y ejecuta:
  ```bash
  git add data/carousel.json
  git commit -m "Resolver conflicto en data/carousel.json"
  ```

---

## 5. Rama remota que no aparece en `git branch -a` ni en `git branch -r`

### Situación real
Tu compañera te dice: *«Ya terminé mi tarea en la rama `feat/jamile-dia05-contacto`»*. Tú ejecutas `git branch -a` o `git branch -r`, pero esa rama no aparece por ningún lado.

### Qué debes inspeccionar antes de decidir
Existen dos causas posibles que debes comprobar en orden:
1. **Causa 1 (La más frecuente — Falta hacer `fetch`):** Tu Git local aún no se ha conectado a GitHub para preguntar si hay ramas nuevas. `git branch -a` solo lee la memoria local.
2. **Causa 2 (La desarrolladora aún no hizo `push`):** Tu compañera hizo `git commit` en su computadora, pero olvidó ejecutar `git push -u origin feat/jamile-dia05-contacto`.

### Cómo solucionarlo de forma segura
1. Ejecuta tú primero:
   ```bash
   git fetch origin
   git branch -r
   ```
2. Si tras hacer `git fetch origin` sigue sin aparecer, pide a tu compañera que ejecute `git status` y `git branch -vv` en su equipo para confirmar que haya ejecutado `git push -u origin <nombre-rama>`.

---

## 6. Rama local que no sigue a una rama remota (`no tracking information`)

### Ejemplo del mensaje (al ejecutar `git pull` o `git push` sin argumentos)
```text
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
```
O al intentar subir una rama nueva con `git push` a secas:
```text
fatal: The current branch feat/adriana-dia02-nosotros has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feat/adriana-dia02-nosotros
```

### ¿Por qué ocurre?
Creaste una rama local nueva (`git switch -c ...`), pero aún no le has indicado a Git con qué rama del servidor `origin` debe emparejarse.

### Qué debes inspeccionar antes de decidir
Ejecuta `git branch -vv` para ver qué ramas locales tienen `[origin/...]` configurado y cuáles no tienen corchete de seguimiento.

### Cómo solucionarlo de forma segura
- **Si es una rama nueva tuya que vas a publicar por primera vez:** Usa `-u` (`--set-upstream`):
  ```bash
  git push -u origin feat/adriana-dia02-nosotros
  ```
- **Si es una rama que ya existe en `origin` y quieres vincular tu rama local actual a ella:**
  ```bash
  git branch --set-upstream-to=origin/feat/adriana-dia02-nosotros
  ```

---

## 7. `Already up to date.` (al ejecutar `git pull` o `git merge`)

### Ejemplo del mensaje
```text
Already up to date.
```

### ¿Es un error?
**No es un error.** Es un mensaje informativo que significa que todos los commits de la rama que intentaste traer (con `git pull` o `git merge`) **ya están incluidos dentro de tu rama actual**.

### Qué debes inspeccionar si tú esperabas que sí descargara cambios
Si tu compañera asegura que subió cambios nuevos y a ti te sale `Already up to date.`:
1. Revisa con `git status` en qué rama estás parada.
2. Verifica con `git log --oneline -n 5` si ya tenías esos commits o si tu compañera los subió a **otra rama distinta** (por ejemplo, ella hizo push a `feat/su-rama`, pero tú hiciste `git pull origin main` cuando todavía nadie había fusionado `feat/su-rama` en `main`).

---

## 8. `Everything up-to-date` (al ejecutar `git push`)

### Ejemplo del mensaje
```text
Everything up-to-date
```

### ¿Qué significa y por qué a veces sorprende?
Significa que todos los **commits** que existen en tu rama local ya están publicados en la rama correspondiente de GitHub.

### Qué debes inspeccionar si hiciste cambios en tus archivos pero Git dice `Everything up-to-date`
Este es uno de los despistes más habituales: **editaste y guardaste el archivo en VS Code, pero olvidaste hacer `git add` y `git commit` antes de hacer `git push`**. Recuerda que `git push` solo sube **commits**, nunca archivos sueltos sin confirmar.
1. Ejecuta `git status`.
2. Si ves archivos en rojo (`Changes not staged for commit`) o en verde (`Changes to be committed`), haz primero `git add` y `git commit -m "..."`, y después vuelve a ejecutar `git push`.

---

## 9. Error al eliminar una rama (`not fully merged` o `checked out`)

### Caso A: `error: The branch '...' is not fully merged.`
```text
error: The branch 'feat/adriana-dia03-productos-faciales' is not fully merged.
If you are sure you want to delete it, run 'git branch -D feat/adriana-dia03-productos-faciales'.
```
- **Diagnóstico:** Usaste `git branch -d` (borrado seguro) y Git detectó que esa rama contiene commits que **todavía no están integrados** en la rama donde estás parada.
- **Qué inspeccionar:** Ejecuta `git log main..feat/adriana-dia03-productos-faciales --oneline` para ver qué commits perderías si la borras. Si aún falta integrarla en `main`, intégrala primero o haz `git pull --ff-only origin main` si tu compañera ya la integró en GitHub pero tú aún no habías actualizado tu `main` local.

### Caso B: `error: Cannot delete branch '...' checked out at '...'`
- **Diagnóstico:** Intentaste borrar la misma rama en la que estás parada actualmente.
- **Solución:** Cámbiate primero a `main` (`git switch main`) y luego ejecuta `git branch -d nombre-rama`.

---

## 10. Error al intentar cambiar el nombre de una rama a uno ya existente

### Ejemplo del mensaje
```text
fatal: A branch named 'feat/adriana-dia03-productos-faciales' already exists.
```

### ¿Por qué ocurre?
Ejecutaste `git branch -m nombre-antiguo nombre-nuevo`, pero ya existe otra rama local con `nombre-nuevo`. Git detiene la operación porque usaste `-m` en minúscula (modo seguro).

### Qué debes inspeccionar antes de decidir
1. Ejecuta `git branch -a` y `git log --oneline nombre-nuevo -n 3` para ver qué contiene la otra rama que ya tiene ese nombre.
2. **No uses `-M` (mayúscula) a ciegas**, porque aplastarías la otra rama existente. Elige un nombre nuevo no repetido o revisa cuál de las dos ramas es la que tiene tu trabajo real.

---

## 11. Rechazo de publicación por rama protegida o permisos insuficientes

### Ejemplos del mensaje
- **Por rama protegida (*Protected branch*):**
  ```text
  remote: error: GH006: Protected branch update failed for refs/heads/main.
  remote: error: Changes must be made through a pull request.
  ! [remote rejected] main -> main (protected branch hook declined)
  ```
- **Por permisos insuficientes (403):**
  ```text
  remote: Permission to SaraviaH/conflictos-test.git denied to usuario.
  fatal: unable to access 'https://github.com/SaraviaH/conflictos-test.git/': The requested URL returned error: 403
  ```

### Qué debes inspeccionar y cómo actuar
1. **Si es error 403 de permisos:**
   - Verifica que el propietario del repositorio (`SaraviaH`) haya agregado tu usuario de GitHub en *Settings → Collaborators* y que hayas **aceptado la invitación** enviada a tu correo o en `https://github.com/SaraviaH/conflictos-test/invitations`.
2. **Si es rechazo por rama protegida (`GH006`) al hacer `git push origin main`:**
   - **Nunca intentes desactivar ni eludir las protecciones.**
   - Significa que `main` exige integrar mediante **Pull Request (PR)**. En ese caso:
     1. La desarrolladora sube su rama normal (`git push -u origin feat/mi-rama`).
     2. La revisora descarga la rama con `git fetch origin` y `git switch --track origin/feat/mi-rama`, la revisa y prueba localmente.
     3. Para integrarla, abren el Pull Request en la interfaz web de GitHub desde `feat/mi-rama` hacia `main`, lo aprueban y pulsan **Merge pull request** en GitHub.
     4. Después, ambas ejecutan `git switch main` y `git pull --ff-only origin main` en sus equipos.

