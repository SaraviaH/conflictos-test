## Flujos rápidos de Git

Esta guía resume el flujo de trabajo recomendado para desarrollar en ramas, guardar cambios, publicarlos en GitHub e integrar cambios sin trabajar directamente en `main`.

### 1. Actualizar `main` antes de empezar

```bash
git switch main
git pull origin main
```

### 2. Crear una rama y cambiarse a ella

**Forma rápida: crear y cambiar a la rama en un solo comando.**

```bash
git switch -c feat/nombre-de-la-tarea
```

**Forma separada: `branch` crea la rama y `switch` se mueve a ella.**

```bash
git branch feat/nombre-de-la-tarea
git switch feat/nombre-de-la-tarea
```

- `git branch`: muestra las ramas locales si se ejecuta sin argumentos; con un nombre, crea una rama sin cambiarse a ella.
- `git switch nombre`: cambia a una rama que ya existe.
- `git switch -c nombre`: crea la rama y cambia a ella.
- `git checkout -b nombre` es la forma antigua equivalente a `git switch -c nombre`.

Convención sugerida para nombres: `feat/` para una función nueva, `fix/` para una corrección y `docs/` para documentación. Sustituye el nombre del ejemplo por el de tu tarea.

### 3. Guardar cambios y subir la rama

Después de modificar los archivos:

```bash
git status
git add .
git commit -m "feat: describe el cambio"
git push -u origin feat/nombre-de-la-tarea
```

Qué hace cada comando:

- `git status`: muestra los archivos modificados y el estado de Git.
- `git add .`: prepara los cambios para el próximo commit. También puedes preparar un archivo específico con `git add ruta/archivo`.
- `git commit -m "mensaje"`: guarda una versión de los cambios en el historial **local**.
- `git push -u origin nombre-rama`: publica la rama en GitHub y configura su seguimiento remoto. Para las siguientes subidas normalmente basta `git push`.

**Recuerda:** `add` prepara, `commit` guarda en el historial local y `push` sube los commits a GitHub.

### 4. Incorporar los últimos cambios de `main` a tu rama

Si otras personas actualizaron `main` mientras trabajabas:

```bash
git switch main
git pull origin main
git switch feat/nombre-de-la-tarea
git merge main
```

Si aparece un conflicto, resuélvelo siguiendo la sección 6. Después sube la rama actualizada:

```bash
git push
```

### 5. Integrar tu trabajo en `main`

**En equipo, flujo recomendado:** sube tu rama con `git push` y crea un *Pull Request* en GitHub para revisión. Cuando lo aprueben, se integra a `main`.

Si el equipo acuerda hacer la integración localmente, primero comprueba que la rama está actualizada y luego ejecuta:

```bash
git switch main
git pull origin main
git merge feat/nombre-de-la-tarea
git push origin main
```

No integres cambios que no hayas revisado o probado. En un equipo, sigue el proceso de revisión acordado y evita subir directamente a `main` si se trabaja mediante *Pull Requests*.

### 6. Resolver conflictos

Un conflicto aparece cuando Git no puede combinar automáticamente cambios, por ejemplo, porque dos ramas modificaron las mismas líneas de un archivo.

**Paso 1. Identifica los archivos con conflictos.**

```bash
git status
git diff --name-only --diff-filter=U
```

**Paso 2. Abre el archivo afectado y decide qué código debe quedar.** Git puede mostrar marcas similares a estas:

```text
<<<<<<< HEAD
Cambios de la rama actual
=======
Cambios de la rama que se está integrando
>>>>>>> nombre-de-la-rama
```

Edita el archivo para dejar el resultado correcto y elimina todas las marcas `<<<<<<<`, `=======` y `>>>>>>>`. No es obligatorio conservar uno de los bloques completos: puedes combinar ambos manualmente.

**En VS Code, las cuatro opciones significan:**

- **Accept Current Change:** conserva el bloque de la rama actual.
- **Accept Incoming Change:** conserva el bloque que llega de la otra rama.
- **Accept Both Changes:** inserta ambos bloques; revisa después si quedan líneas duplicadas.
- **Compare Changes:** compara las versiones antes de decidir; no resuelve el conflicto por sí sola.

**Desde la terminal:** abre y edita cada archivo en conflicto con tu editor preferido. Si quieres reemplazar el archivo completo por una de las versiones durante un `merge`, existen `git checkout --ours -- ruta/archivo` y `git checkout --theirs -- ruta/archivo`; úsalos solo si de verdad quieres descartar el otro contenido de ese archivo.

**Paso 3. Marca los conflictos como resueltos y termina la operación.** Si estabas haciendo un `merge`:

```bash
git add ruta/archivo
git merge --continue
```

Repite `git add` para todos los archivos resueltos. Si estabas haciendo un `rebase`, el comando para continuar es `git rebase --continue`, no `git merge --continue`. Después, publica los cambios de tu rama:

```bash
git push
```

Si empezaste un `merge` y prefieres cancelarlo en lugar de resolverlo, puedes ejecutar `git merge --abort`. No uses este comando si ya terminaste el merge.

### 7. Comandos de consulta rápida

```bash
git status                  # estado de los archivos
git branch                  # ramas locales
git branch -a               # ramas locales y remotas
git switch nombre-rama      # cambiar a una rama existente
git log --oneline --graph --all  # historial resumido de ramas
```

### Flujo resumido

```text
Actualizar main
    ↓
Crear rama y cambiarse a ella
    ↓
Modificar archivos → git add → git commit
    ↓
git push
    ↓
Pull Request y revisión
    ↓
Integrar a main
```
