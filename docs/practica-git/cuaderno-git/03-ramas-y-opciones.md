# 03 — Ramas Locales y Opciones de `git branch`

En Git, una **rama** (*branch*) es un puntero ligero y móvil que apunta a un commit específico. Trabajar con ramas permite que Adriana o Jamile desarrollen una mejora de forma aislada sin alterar el código estable de `main` hasta que los cambios hayan sido revisados y probados.

El comando `git branch` tiene múltiples opciones que realizan operaciones **muy distintas** entre sí (consultar ramas locales, consultar ramas remotas, crear, renombrar o eliminar). A continuación se explica cada opción **por separado**.

---

## 1. Consultar Ramas

### `git branch` (sin opciones)
- **Qué significa y para qué sirve:** Lista **únicamente las ramas locales** que existen en tu propia computadora. Marca con un asterisco (`*`) y habitualmente en color verde la rama en la que estás situada actualmente.
- **Cuándo utilizarlo:** Cuando quieres comprobar rápidamente qué ramas has creado o descargado en tu equipo y en cuál estás posicionada.
- **Ejemplo y salida:**
  ```bash
  git branch
  ```
  ```text
  * main
    feat/adriana-dia01-inicio
  ```
- **Cuándo NO conviene utilizarlo:** Cuando buscas una rama que tu compañera acaba de publicar en GitHub y que tú todavía no has descargado como rama local. `git branch` a secas **nunca** muestra las ramas remotas (`origin/...`).

---

### `git branch -r`
- **Qué significa (`-r` = *remotes*) y para qué sirve:** Lista **solamente las ramas de seguimiento remoto** que tu repositorio local conoce (aquellas que empiezan por `origin/`). No muestra tus ramas locales.
- **Cuándo utilizarlo:** Cuando actúas como **Revisora**, inmediatamente después de ejecutar `git fetch origin`, para verificar el nombre exacto de la rama que tu compañera publicó en GitHub.
- **Ejemplo y salida en este proyecto:**
  ```bash
  git branch -r
  ```
  ```text
    origin/HEAD -> origin/main
    origin/Tarea2
    origin/adrix
    origin/developer
    origin/hola
    origin/main
  ```
- **Cuándo NO conviene utilizarlo:** Si quieres saber en qué rama local estás trabajando (porque `-r` oculta las ramas locales). Además, recuerda que `git branch -r` solo lee la memoria caché local de referencias remotas: si no ejecutaste `git fetch origin` antes, no verás las ramas nuevas que se hayan subido al servidor hace unos minutos.

---

### `git branch -a`
- **Qué significa (`-a` = *all*) y para qué sirve:** Muestra en una sola lista combinada tanto **tus ramas locales** (arriba) como **las referencias de seguimiento remoto** (`remotes/origin/...`, abajo).
- **Cuándo utilizarlo:** Cuando necesitas tener el panorama completo y comparar qué ramas ya tienes creadas localmente frente a qué ramas existen en `origin`.
- **Ejemplo y salida:**
  ```bash
  git branch -a
  ```
  ```text
  * main
    remotes/origin/HEAD -> origin/main
    remotes/origin/Tarea2
    remotes/origin/adrix
    remotes/origin/developer
    remotes/origin/hola
    remotes/origin/main
  ```
- **⚠️ Aclaración fundamental sobre `git branch -a`:**
  - **`git branch -a` NO se conecta a internet ni descarga por sí solo las ramas nuevas del servidor.**
  - La información que muestra depende exclusivamente de las referencias remotas que tu Git local haya actualizado la última vez que hiciste `git fetch` o `git pull`.
  - Si tu compañera acaba de hacer `git push -u origin feat/jamile-dia01-footer` y tú ejecutas `git branch -a` sin haber hecho antes `git fetch origin`, esa rama **no aparecerá**. Siempre ejecuta primero `git fetch origin` y luego `git branch -a` o `git branch -r`.

---

## 2. Crear Ramas Locales

### `git branch nombre-rama`
- **Qué significa y para qué sirve:** Crea una nueva rama local llamada `nombre-rama` apuntando al commit actual (`HEAD`), **pero NO te cambia a ella** (sigues posicionada en la rama donde estabas).
- **Cuándo utilizarlo:** Cuando quieres dejar marcada una rama a partir del commit actual pero deseas permanecer todavía en tu rama actual.
- **Ejemplo:**
  ```bash
  git branch feat/adriana-prueba
  git branch
  ```
  ```text
    feat/adriana-prueba
  * main
  ```
- **Cuándo NO conviene utilizarlo (precaución clave):** Si tu intención es crear la rama **y empezar a trabajar en ella de inmediato**, usar solo `git branch nombre-rama` es riesgoso porque el asterisco (`*`) se queda en `main` y podrías hacer tus commits en `main` por descuido. Para crear y cambiar en un solo paso es preferible usar `git switch -c nombre-rama`.

---

## 3. Renombrar Ramas Locales

### `git branch -m nombre-antiguo nombre-nuevo`
- **Qué significa (`-m` = *move/rename*) y para qué sirve:** Cambia el nombre de una rama local de `nombre-antiguo` a `nombre-nuevo` de forma **segura** (si ya existe otra rama llamada `nombre-nuevo`, Git se detendrá y mostrará un error para no sobrescribirla).
  - *(Nota: si ya estás situada dentro de la rama que quieres renombrar, puedes omitir `nombre-antiguo` y escribir `git branch -m nombre-nuevo`).*
- **Cuándo utilizarlo:** Cuando al crear una rama local cometiste un error de escritura en el nombre (por ejemplo, `feat/adriana-dia3-prod` en lugar de `feat/adriana-dia03-productos-faciales`) antes de haberla compartido en GitHub.
- **Ejemplo:**
  ```bash
  git branch -m feat/adriana-dia3-prod feat/adriana-dia03-productos-faciales
  ```
- **Cuándo NO conviene utilizarlo:** Cuando la rama ya fue publicada en GitHub y tu compañera ya está trabajando sobre ella, salvo que ambas acuerden renombrarla y actualizar la referencia remota.

---

### `git branch -M nombre-antiguo nombre-nuevo`
- **Qué significa (`-M` = `--move --force`) y para qué sirve:** Renombra **forzosamente** la rama `nombre-antiguo` a `nombre-nuevo`, **incluso si ya existía otra rama local llamada `nombre-nuevo`**, sobrescribiendo a esta última sin pedir confirmación.
- **Cuándo utilizarlo:** Casi exclusivamente en la inicialización de un repositorio vacío cuando se quiere forzar que la rama inicial se llame `main` (`git branch -M main`).
- **⚠️ Cuándo NO conviene utilizarlo (Riesgo alto):** Nunca uses `-M` con mayúscula en el trabajo diario para renombrar ramas de tareas. Si por error pones el nombre de otra rama que ya existía (como `main` o la rama de otra tarea), `-M` aplastará esa rama existente y podrías perder el puntero a esos commits. Usa siempre `-m` en minúscula.

---

## 4. Eliminar Ramas Locales

### `git branch -d nombre-rama`
- **Qué significa (`-d` = *delete*) y para qué sirve:** Intenta eliminar la rama local `nombre-rama` de manera **segura**. Git comprueba primero si todos los commits de `nombre-rama` ya fueron fusionados (*merged*) en la rama actual o en su rama remota de seguimiento. Si aún tiene commits sin fusionar, Git **se niega a borrarla** y te avisa para proteger tu trabajo.
- **Cuándo utilizarlo:** Al finalizar un día o semana de práctica, estando situada en `main` (`git switch main`), para limpiar de tu lista local aquellas ramas que ya fueron revisadas e integradas en `main`.
- **Ejemplo:**
  ```bash
  git switch main
  git branch -d feat/adriana-dia01-inicio
  ```
- **Cuándo NO conviene utilizarlo:** No puedes eliminar la rama en la que estás parada actualmente (primero debes cambiarte a `main` con `git switch main`).

---

### `git branch -D nombre-rama`
- **Qué significa (`-D` = `--delete --force`) y para qué sirve:** Elimina **forzosamente** la rama local `nombre-rama` sin importar si sus commits fueron fusionados o no en `main`.
- **Cuándo utilizarlo:** Únicamente cuando creaste una rama de experimento descartable que estás 100% segura de que no quieres conservar ni integrar nunca.
- **⚠️ ADVERTENCIA DE RIESGO CRÍTICO:**
  - Si hiciste commits con trabajo valioso en una rama local que aún no has subido a GitHub ni fusionado en `main`, y ejecutas `git branch -D nombre-rama`, **esos commits dejarán de estar accesibles a través de cualquier rama** (quedarán «huérfanos» y solo podrían rescatarse temporalmente buscando su hash en `git reflog`).
  - **Regla de seguridad:** Utiliza siempre `-d` (minúscula). Si `-d` falla diciendo `error: The branch '...' is not fully merged`, detente y verifica por qué esos cambios aún no están en `main` antes de pensar siquiera en `-D`.

