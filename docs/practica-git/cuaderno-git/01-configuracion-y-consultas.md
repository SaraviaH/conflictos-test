# 01 — Configuración y Consultas Básicas

Antes de modificar cualquier archivo o crear ramas, es fundamental saber cómo verificar la instalación de Git, cómo identificarse como autora de los cambios y cómo consultar el estado actual del repositorio sin alterar nada.

---

## 1. Identidad de Git vs. Autenticación en GitHub

Un error muy frecuente al empezar con Git es confundir **quién firma los commits localmente** con **quién tiene permiso para subir cambios a GitHub**:

| Concepto | ¿Qué es? | ¿Dónde actúa? | ¿Cómo se configura? |
| :--- | :--- | :--- | :--- |
| **Identidad de Git** (`user.name` y `user.email`) | Es la etiqueta de autoría que queda grabada dentro de cada commit que creas en tu computadora. | **Localmente** al ejecutar `git commit`. No verifica contraseñas ni conecta a internet. | Con `git config --global user.name` y `git config --global user.email`. |
| **Autenticación en GitHub** (Credenciales / Token / SSH) | Es la llave de seguridad que demuestra ante el servidor de GitHub que tienes permiso de lectura o escritura en el repositorio remoto. | **En la red**, al ejecutar comandos que se comunican con el servidor (`git push`, `git fetch`, `git pull` en repositorios privados). | Mediante Git Credential Manager (inicio de sesión en navegador), Personal Access Token (PAT) o llaves SSH. |

> **Importante:** Configurar `git config --global user.email` **no** inicia sesión en tu cuenta de GitHub. Sin embargo, si usas el mismo correo que tienes registrado en tu cuenta de GitHub, GitHub asociará automáticamente tus commits con tu perfil y tu foto de usuario cuando los subas con `git push`.

---

## 2. Comandos de Configuración

### `git --version`
- **Qué hace:** Muestra la versión de Git instalada en el sistema operativo.
- **Por qué existe:** Permite comprobar que Git está instalado correctamente y disponible en la terminal (`PATH`).
- **Cuándo se utiliza:** El primer día de trabajo en una computadora nueva o cuando un comando moderno (como `git switch`, introducido en Git 2.23) no es reconocido.
- **Resultado que produce:**
  ```text
  git version 2.45.2.windows.1
  ```
- **Riesgos:** Ninguno (solo consulta).

---

### `git config` (y `git config --list`)
- **Qué hace:** Permite consultar o modificar las opciones de configuración de Git (a nivel de sistema `--system`, global del usuario `--global` o local del repositorio `--local`).
- **Por qué existe:** Git guarda preferencias de autoría, editor de texto por defecto, manejo de saltos de línea y alias en archivos de configuración.
- **Cuándo se utiliza:** Ejecutando `git config --list` para revisar qué nombre, correo y opciones están activas actualmente en el repositorio.
- **Resultado que produce:** Lista de claves y valores como `user.name=...`, `user.email=...`, `remote.origin.url=https://github.com/SaraviaH/conflictos-test.git`.
- **Riesgos:** Consultar con `--list` no tiene ningún riesgo. Modificar opciones avanzadas sin conocerlas puede cambiar el comportamiento de comandos como `pull`.

---

### `git config --global user.name "Nombre"`
- **Qué hace:** Establece el nombre de autora que se adjuntará a todos los commits que realices en tu usuario del sistema operativo.
- **Por qué existe:** Cada commit en el historial necesita registrar quién realizó el cambio para mantener trazabilidad en equipo.
- **Cuándo se utiliza:** Antes de crear el primer commit en una computadora, o para verificar el nombre actual ejecutando `git config user.name` (sin comillas al final).
- **Ejemplo para Adriana y Jamile:**
  ```bash
  # Para Adriana:
  git config --global user.name "Adriana"

  # Para Jamile:
  git config --global user.name "Jamile"

  # Para comprobar qué nombre quedó guardado:
  git config user.name
  ```
- **Riesgos:** Ninguno, aunque si escribes mal tu nombre quedará registrado así en los nuevos commits hasta que lo corrijas.

---

### `git config --global user.email "correo@ejemplo.com"`
- **Qué hace:** Establece la dirección de correo electrónico que firmará tus commits.
- **Por qué existe:** Identifica de forma única a cada colaboradora en el historial (`git log`) y vincula los commits con su cuenta de GitHub.
- **Cuándo se utiliza:** Junto con `user.name` antes de hacer el primer commit, o sin argumentos finales (`git config user.email`) para consultar el correo actual.
- **Ejemplo:**
  ```bash
  git config --global user.email "tu-correo@gmail.com"
  git config user.email
  ```
- **Riesgos:** Ninguno para los archivos del proyecto.

---

## 3. Comandos de Consulta e Inspección Local

### `git status`
- **Qué hace:** Muestra el estado actual del directorio de trabajo y del área de preparación (*Staging Area*).
- **Por qué existe:** Es la «brújula» de Git. Te informa en qué rama te encuentras, si tu rama está adelantada o atrasada respecto a su rama remota de seguimiento, qué archivos fueron modificados y aún no están preparados, cuáles están listos para commit (`staged`) y qué archivos nuevos no tienen seguimiento (`untracked`).
- **Cuándo se utiliza:** Constantemente: antes de cambiar de rama, antes y después de editar archivos, antes y después de `git add`, antes de `git commit` y después de `git merge` o `git pull`.
- **Resultado que produce (cuando todo está limpio):**
  ```text
  On branch main
  Your branch is up to date with 'origin/main'.

  nothing to commit, working tree clean
  ```
- **Riesgos:** **Ninguno.** Es un comando 100% seguro de solo lectura.

---

### `git diff`
- **Qué hace:** Muestra línea por línea las diferencias exactas entre los archivos que has modificado en tu **directorio de trabajo** y lo que está actualmente en el **área de preparación** (o en el último commit si no has hecho `git add`).
- **Por qué existe:** Mientras `git status` te dice *qué archivo* cambió, `git diff` te muestra *qué líneas exactas* borraste (`-` en rojo) y qué líneas agregaste (`+` en verde).
- **Cuándo se utiliza:** Justo antes de ejecutar `git add`, para revisar que no dejaste errores ortográficos, líneas borradas por accidente o código de prueba.
- **Atención:** Si ya ejecutaste `git add` sobre todos los archivos modificados, `git diff` a secas no mostrará nada en pantalla (porque ya no hay diferencias sin preparar). En ese caso debes usar `git diff --staged`.
- **Riesgos:** Ninguno (solo lectura). Si la salida es larga y aparece `:` al final en la terminal, presiona la tecla `q` para salir.

---

### `git diff --staged`
- **Qué hace:** Muestra las diferencias exactas entre los cambios que ya subiste al **área de preparación** (con `git add`) y el último commit registrado (`HEAD`).
- **Por qué existe:** Permite auditar exactamente qué se va a guardar en el próximo commit antes de ejecutar `git commit -m "..."`.
- **Cuándo se utiliza:** Inmediatamente después de ejecutar `git add` y justo antes de `git commit`.
- **Resultado que produce:** El detalle de líneas añadidas (`+`) y eliminadas (`-`) que formarán parte del nuevo commit.
- **Riesgos:** Ninguno (solo lectura).

---

### `git remote -v`
- **Qué hace:** Lista los nombres cortos de los repositorios remotos configurados (habitualmente `origin`) junto con sus URLs de descarga `(fetch)` y de publicación `(push)`.
- **Por qué existe:** Permite verificar a qué repositorio en GitHub está conectado tu proyecto local.
- **Cuándo se utiliza:** Al iniciar el trabajo en un repositorio o cuando hay dudas sobre por qué falla una descarga o subida.
- **Resultado real en este proyecto:**
  ```text
  origin  https://github.com/SaraviaH/conflictos-test.git (fetch)
  origin  https://github.com/SaraviaH/conflictos-test.git (push)
  ```
- **Riesgos:** Ninguno (solo lectura).

