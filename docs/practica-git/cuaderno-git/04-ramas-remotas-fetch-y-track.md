# 04 — Cambiar de Rama y Hacer Seguimiento de Ramas Remotas

Para trabajar en equipo, necesitas dominar dos operaciones: moverte entre ramas locales y traer a tu computadora una rama que tu compañera publicó en GitHub estableciendo un vínculo de **seguimiento** (*tracking* / *upstream*) con ella.

---

## 1. Diferencia entre `git switch`, `git checkout` y `git branch`

Estos tres comandos suelen mencionarse juntos, pero **no hacen exactamente la misma operación**:

| Comando | Propósito específico | ¿Cambia la rama activa (`HEAD`)? | ¿Modifica archivos individuales? |
| :--- | :--- | :--- | :--- |
| **`git branch`** | Administrar punteros de ramas (listar, crear sin moverse, renombrar, borrar). | **No.** Te deja en la misma rama donde estabas. | **No.** |
| **`git switch`** | Comando moderno (desde Git 2.23) dedicado **exclusivamente** a cambiar de rama (y opcionalmente crearla al cambiar). | **Sí.** Mueve `HEAD` y actualiza el directorio de trabajo a la rama elegida. | **No.** Si le pasas un nombre de archivo por error, no sobrescribe el archivo. |
| **`git checkout`** | Comando clásico sobrecargado: sirve tanto para cambiar de rama/commit como para sobrescribir archivos del directorio de trabajo. | **Sí** (cuando recibe un nombre de rama). | **Sí** (cuando recibe una ruta de archivo, pudiendo descartar cambios locales). |

> **Recomendación para esta práctica:** Prioriza `git switch` para moverte entre ramas porque es más claro, seguro y evita la ambigüedad de `git checkout`. Aun así, aprenderás ambos porque encontrarás `git checkout` en mucha documentación técnica.

---

## 2. Explicación Individual de Cada Comando

### `git switch main`
- **Qué hace:** Te cambia desde la rama en la que estés actualmente hacia la rama local `main`, actualizando los archivos de tu carpeta del proyecto al estado de `main`.
- **Cuándo se utiliza:** Antes de actualizar `main` desde el remoto (`git pull --ff-only origin main`), antes de crear una rama nueva para una tarea, o cuando eres **Integradora** y vas a fusionar la rama revisada dentro de `main`.
- **Cómo comprobarlo:** Ejecuta `git status` o `git branch` y verifica que diga `On branch main` (`* main`).
- **Riesgos:** Si tienes cambios sin guardar en commits que entran en conflicto con `main`, Git bloqueará el cambio de rama con el mensaje `Your local changes to the following files would be overwritten by checkout/switch` para proteger tu trabajo.

---

### `git switch -c nombre-rama`
- **Qué hace:** Realiza dos acciones en un solo paso: **crea** (`-c` = *create*) una nueva rama local llamada `nombre-rama` a partir del commit donde estás situada actualmente y **te cambia inmediatamente a ella**.
- **Cuándo se utiliza:** Al iniciar tu turno de **Desarrolladora**, justo después de haber comprobado que estás en `main` actualizado.
- **Ejemplo:**
  ```bash
  git switch main
  git pull --ff-only origin main
  git switch -c feat/adriana-dia01-inicio
  ```
- **Riesgos:** Si ejecutas `git switch -c nueva-rama` mientras estabas parada en una rama antigua en lugar de `main`, tu nueva rama nacerá desde esa rama antigua en vez de `main`. Verifica siempre con `git status` que estás en `main` antes de ejecutar `git switch -c`.

---

### `git switch --track origin/nombre-rama`
- **Qué hace:** Crea una rama local con el mismo nombre (`nombre-rama`), la configura automáticamente para **seguir** (*track*) a la rama remota `origin/nombre-rama` y te cambia a ella de inmediato.
- **Por qué existe:** Cuando tu compañera sube su rama a GitHub y tú ejecutas `git fetch origin`, tu Git conoce la referencia remota `origin/nombre-rama`, pero tú aún no tienes una rama local editable para probarla. `--track` crea esa rama local conectada a la remota.
- **Cuándo se utiliza:** En el rol de **Revisora**, inmediatamente después de `git fetch origin` y de verificar el nombre en `git branch -r`.
- **Ejemplo:**
  ```bash
  git fetch origin
  git switch --track origin/feat/adriana-dia01-inicio
  ```
- **Resultado que produce:**
  ```text
  branch 'feat/adriana-dia01-inicio' set up to track 'origin/feat/adriana-dia01-inicio'.
  Switched to a new branch 'feat/adriana-dia01-inicio'
  ```
- **Aclaración importante:** `git switch --track origin/nombre-rama` funciona directamente cuando Git puede inferir sin ambigüedad que la rama local debe llamarse `nombre-rama` y esta aún no existe localmente. Si ya existiera o hubiera ambigüedad, utiliza la forma explícita con `-c` que se explica a continuación.

---

### `git switch -c nombre-rama --track origin/nombre-rama`
- **Qué hace:** Es la forma explícita y completa de crear una rama local indicando manualmente tanto el nombre local que deseas darle (`-c nombre-rama`) como la referencia remota exacta a la que debe seguir (`--track origin/nombre-rama`).
- **Cuándo se utiliza:**
  1. Cuando quieres que quede 100% explícito el nombre local que se creará al descargar la rama de tu compañera.
  2. Cuando por alguna razón existen múltiples remotos o nombres que impiden a Git adivinar el nombre automáticamente.
- **Ejemplo:**
  ```bash
  git fetch origin
  git switch -c feat/jamile-dia06-banner-ingredientes --track origin/feat/jamile-dia06-banner-ingredientes
  ```
- **Riesgos:** Ninguno. Si la rama local ya existe, Git avisará con `fatal: a branch named '...' already exists` sin sobrescribir nada.

---

### `git checkout nombre-rama`
- **Qué hace:** Comando clásico para cambiarse a una rama existente llamada `nombre-rama`.
- **Cuándo se utiliza:** Cumple la misma función de cambio de rama que `git switch nombre-rama`. Si `nombre-rama` no existe localmente pero existe un único `origin/nombre-rama` (tras hacer `git fetch`), las versiones modernas de Git intentan adivinarlo y crear la rama de seguimiento.
- **Diferencia y precaución frente a `git switch`:** Si escribes `git checkout` seguido del nombre de un archivo o ruta en vez de una rama, Git puede interpretar que quieres descartar los cambios de ese archivo. Por eso `git switch` es más seguro para cambiar de rama.

---

### `git checkout -b nombre-rama`
- **Qué hace:** Comando clásico equivalente a `git switch -c nombre-rama`: crea una nueva rama local llamada `nombre-rama` desde la posición actual y cambia a ella.
- **Cuándo se utiliza:** Es muy habitual verlo en guías y tutoriales anteriores a Git 2.23.
- **Ejemplo:**
  ```bash
  git checkout -b fix/jamile-dia02-header
  ```
- **Riesgos:** Igual que con `git switch -c`, asegúrate de estar en `main` actualizado antes de ejecutarlo para no ramificar desde el lugar equivocado.

