# 07 — Inspeccionar los Cambios de Otra Persona (Guía para la Revisora)

En el trabajo colaborativo real con Git, revisar el código de tu compañera no consiste en pedirle capturas de pantalla por chat, sino en **descargar su rama desde el repositorio remoto, inspeccionar sus commits y diferencias con comandos de Git y probar la aplicación en tu propio entorno local**.

---

## 1. Diferencia entre `git log`, `git show` y `git diff`

Durante una revisión utilizarás estos tres comandos complementarios. Cada uno responde a una pregunta distinta:

| Comando | Pregunta que responde | Nivel de detalle | Cuándo es más útil |
| :--- | :--- | :--- | :--- |
| **`git log`** | *¿Qué commits se hicieron, quién los hizo, cuándo y con qué mensajes?* | Lista cronológica de commits (sin mostrar el código modificado línea por línea por defecto). | Al empezar la revisión, para saber cuántos commits creó tu compañera y leer sus mensajes. |
| **`git show`** | *¿Qué se modificó exactamente dentro de UN commit concreto?* | Metadatos de un único commit + los cambios línea por línea (`diff`) introducidos en ese commit específico. | Para revisar un commit puntual usando su código hash (`git show a3b75c0`) o el último commit (`git show HEAD`). |
| **`git diff`** | *¿Qué diferencias de código existen entre dos estados, dos ramas o respecto al directorio de trabajo?* | Comparación pura de líneas eliminadas (`-`) y añadidas (`+`) entre los dos puntos indicados. | Para ver el efecto total acumulado de una rama frente a `main` (`git diff main...nombre-rama`) o ver qué archivos cambiaron (`git diff --name-only main...nombre-rama`). |

---

## 2. Procedimiento Completo de Inspección Paso a Paso (con Ejemplos)

Supongamos que **Adriana** acaba de terminar sus tareas del Día 05 y le avisa a **Jamile** que publicó la rama `feat/adriana-dia05-carrusel`. Estos son los comandos exactos que **Jamile** ejecuta como **Revisora**:

### Paso 1: Ver las ramas locales y remotas conocidas antes de actualizar
```bash
git branch -a
```
- **Propósito:** Comprobar qué ramas conoce actualmente tu repositorio local. Observarás que `remotes/origin/feat/adriana-dia05-carrusel` todavía no aparece.

---

### Paso 2: Actualizar la información del servidor remoto (`origin`)
```bash
git fetch origin
```
- **Propósito:** Conectarse a GitHub y descargar las nuevas ramas y commits publicados por tu compañera sin alterar tu rama actual.
- **Salida esperada:**
  ```text
  From https://github.com/SaraviaH/conflictos-test
   * [new branch]      feat/adriana-dia05-carrusel -> origin/feat/adriana-dia05-carrusel
  ```

---

### Paso 3: Confirmar la aparición de la rama remota
```bash
git branch -r
git branch -a
```
- **Propósito:** Verificar que `origin/feat/adriana-dia05-carrusel` ya figura en la lista de ramas remotas (`-r`), pero aún no en la lista de ramas locales.

---

### Paso 4: Descargar la rama de la compañera a una rama local de seguimiento
```bash
git switch --track origin/feat/adriana-dia05-carrusel
```
*(O su variante explícita: `git switch -c feat/adriana-dia05-carrusel --track origin/feat/adriana-dia05-carrusel`).*
- **Propósito:** Crear tu copia local de la rama vinculada a la de Adriana y posicionarte en ella para poder inspeccionar y ejecutar el proyecto.

---

### Paso 5: Consultar los últimos commits de esa rama
```bash
git log --oneline -n 5
```
- **Propósito:** Ver cuántos commits nuevos agregó Adriana por encima de `main` y comprobar que sus mensajes sean claros y descriptivos.

---

### Paso 6: Examinar qué archivos fueron modificados respecto a `main`
```bash
git diff --name-status main...feat/adriana-dia05-carrusel
```
- **Propósito:** Obtener la lista limpia de archivos tocados en esa rama (`M` = modificado, `A` = añadido, `D` = eliminado). Así compruebas de inmediato que tu compañera solo modificó los archivos que correspondían a su tarea:
  ```text
  M       css/components/carousel/carousel.css
  M       data/carousel.json
  ```

---

### Paso 7: Comparar línea por línea la rama con `main`
```bash
git diff main...feat/adriana-dia05-carrusel
```
- **Propósito:** Revisar todas las líneas añadidas (`+`) y eliminadas (`-`) en el conjunto de la rama respecto a `main`.

---

### Paso 8: Consultar el contenido individual de un commit específico
```bash
# Para ver el último commit de la rama:
git show

# O pasando el hash de cualquiera de los commits listados en git log:
git show <hash-del-commit>
```
- **Propósito:** Auditar un commit individual para comprobar que cada tarea quedó registrada de forma ordenada.

---

### Paso 9: Comprobar que la rama está publicada y sincronizada con el remoto
```bash
git status
git branch -vv
```
- **Propósito:**
  - `git status` te confirmará: `On branch feat/adriana-dia05-carrusel`, `Your branch is up to date with 'origin/feat/adriana-dia05-carrusel'`.
  - `git branch -vv` muestra todas tus ramas locales indicando entre corchetes `[origin/...]` a qué rama remota siguen y si están al día.

---

### Paso 10: Comprobar la aplicación en el navegador
- Con la rama de tu compañera activa, recarga el navegador en **Live Server** (`http://localhost:5500`) y verifica visualmente que los cambios funcionan y que la consola de desarrollador (F12) no muestra errores en rojo.

