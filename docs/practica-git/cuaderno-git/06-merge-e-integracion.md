# 06 — Fusión (`merge`) e Integración de Ramas

Integrar cambios significa tomar el trabajo desarrollado y revisado en una rama secundaria e incorporarlo dentro de la rama de destino (habitualmente `main`).

---

## 1. Regla de Posicionamiento: ¿Desde Qué Rama se Ejecuta `git merge`?

En Git, el comando `git merge` **siempre absorbe otra rama hacia adentro de la rama en la que estás parada actualmente (`HEAD`)**.

Por lo tanto:
- Si quieres integrar `feat/adriana-dia01-inicio` dentro de `main`:
  1. **Primero debes situarte en `main`:** `git switch main`
  2. **Asegurarte de que `main` está limpio y al día:** `git status` y `git pull --ff-only origin main`
  3. **Ejecutar la fusión llamando a la rama que quieres traer:** `git merge feat/adriana-dia01-inicio` (o `git merge --no-ff feat/adriana-dia01-inicio`)

---

## 2. Distinguir entre Inspeccionar, Integrar y Visualizar

Antes, durante y después de una fusión intervienen tres tipos de comandos con propósitos distintos:

| Acción | Comando | ¿Modifica el repositorio? | Propósito |
| :--- | :--- | :--- | :--- |
| **Inspeccionar diferencias** | `git diff main...nombre-rama` | **No** (solo lectura) | Ver exactamente qué cambios introducirá la rama antes de fusionarla. |
| **Integrar cambios** | `git merge nombre-rama`<br>`git merge --no-ff nombre-rama` | **Sí** (modifica la rama actual) | Unir los commits de `nombre-rama` dentro de la rama activa. |
| **Visualizar el historial** | `git log --oneline --graph --decorate --all` | **No** (solo lectura) | Comprobar gráficamente cómo quedaron conectadas las ramas tras la fusión. |

---

## 3. Explicación Individual de Cada Comando

### `git merge nombre-rama`
- **Qué hace:** Integra los commits de `nombre-rama` dentro de la rama actual.
  - Si la rama actual (`main`) no tuvo ningún commit nuevo desde que nació `nombre-rama`, Git realiza por defecto un **avance rápido (*Fast-Forward*)**: simplemente mueve la etiqueta `main` hacia adelante hasta el último commit de `nombre-rama`, sin crear un commit de unión extra.
  - Si ambas ramas tuvieron commits independientes, Git crea automáticamente un **commit de fusión (*merge commit*)** con dos padres (o avisa si hay conflictos por resolver).
- **Cuándo utilizarlo:** Cuando estás en `main` (tras revisar la rama de tu compañera) y quieres integrar sus cambios de manera estándar.
- **Cómo verificar el resultado:** Ejecuta `git status` y `git log --oneline -n 5` para confirmar que los commits de `nombre-rama` ya forman parte de `main`.

---

### `git merge --no-ff nombre-rama`
- **Qué hace (`--no-ff` = *no fast-forward*):** Obliga a Git a crear siempre un **commit de fusión explícito (*merge commit*)**, incluso cuando habría sido posible hacer un avance rápido en línea recta.
- **Por qué existe:** En proyectos colaborativos, dejar un commit de fusión explícito (`Merge branch 'feat/adriana-dia01-inicio' into main`) permite ver en el gráfico del historial (`git log --graph`) exactamente en qué momento se aprobó e integró cada tarea y qué grupo de commits pertenecía a esa rama.
- **Cuándo utilizarlo:** En el rol de **Integradora** a partir de la mitad del plan (o siempre que se quiera dejar constancia clara del cierre de una rama en `main`). Puedes acompañarlo de `-m "Merge branch 'nombre-rama' into main"` para no tener que abrir el editor de texto de la terminal.
- **Ejemplo:**
  ```bash
  git switch main
  git pull --ff-only origin main
  git merge --no-ff feat/jamile-dia08-diario -m "Merge branch 'feat/jamile-dia08-diario' into main"
  ```
- **Cómo verificar el resultado:** Ejecuta `git log --oneline --graph --decorate -n 6` y observarás la bifurcación (`|\` y `|/`) que agrupa los commits de la tarea recién integrada.

---

### `git merge --abort`
- **Qué hace:** Cancela por completo una fusión en curso que se detuvo debido a conflictos y **devuelve la rama y todos los archivos exactamente al estado limpio en que estaban un instante antes de ejecutar `git merge`**.
- **Por qué existe:** Es tu red de seguridad durante una fusión. Si al intentar fusionar aparece un conflicto y no estás segura de cómo resolverlo en ese momento, o te das cuenta de que estabas parada en la rama equivocada, `git merge --abort` deshace el intento sin perder ningún commit.
- **Cuándo utilizarlo:** Únicamente mientras exista una fusión detenida por conflictos (cuando `git status` muestra `You have unmerged paths` y ofrece `(use "git merge --abort" to abort the merge)`).
- **Cómo verificar el resultado:** Ejecuta `git status` después de `git merge --abort` y comprobarás que dice `nothing to commit, working tree clean`.
- **Precauciones:** Funciona de forma óptima siempre que hayas iniciado el `git merge` con el directorio de trabajo limpio (sin cambios previos sin confirmar).

---

### `git diff main...nombre-rama`
- **Qué hace:** Muestra todas las diferencias acumuladas en `nombre-rama` desde el punto común en que esa rama se separó de `main` (*merge-base*) hasta el último commit de `nombre-rama`.
- **Por qué existe:** Nota los **tres puntos (`...`)**. A diferencia de dos puntos (`..`), usar `main...nombre-rama` muestra específicamente qué aportó la desarrolladora en `nombre-rama`, sin confundirte con otros cambios que pudieran haberse añadido a `main` en paralelo.
- **Cuándo utilizarlo:** En el rol de **Revisora**, antes de integrar la rama de tu compañera, para leer en una sola vista todos los cambios de código que esa rama va a introducir en `main`.
- **Ejemplo:**
  ```bash
  git diff main...feat/adriana-dia05-carrusel
  ```
- **Riesgos:** Ninguno (solo lectura).

---

### `git log --oneline --graph --decorate --all`
- **Qué hace:** Muestra el historial completo de commits en formato compacto (`--oneline`), dibujando con líneas de texto las bifurcaciones y fusiones (`--graph`), mostrando las etiquetas de ramas locales y remotas (`--decorate`) e incluyendo todas las ramas del repositorio (`--all`).
- **Por qué existe:** Permite entender visualmente dónde está parada cada rama (`HEAD -> main`, `origin/main`, ramas de tareas) y cómo se han ido uniendo a lo largo de los días.
- **Cuándo utilizarlo:**
  - Antes y después de ejecutar `git merge` o `git merge --no-ff`.
  - Cuando quieres entender por qué una rama está adelantada o atrasada respecto a otra.
  - Puedes agregar `-n 15` al final para ver las 15 líneas más recientes sin saturar la pantalla:
    ```bash
    git log --oneline --graph --decorate --all -n 15
    ```
- **Riesgos:** Ninguno (solo lectura).

