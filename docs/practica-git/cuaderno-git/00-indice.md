# Cuaderno de Consulta de Comandos Git — Índice General

Este cuaderno es un manual de referencia independiente de las tareas diarias. Su propósito es que **Adriana** y **Jamile** puedan consultar qué hace cada comando de Git, por qué existe, cuándo conviene utilizarlo, qué resultado produce y qué precauciones o riesgos conlleva.

---

## Contenido del Cuaderno

1. **[01 — Configuración y Consultas Básicas](./01-configuracion-y-consultas.md)**
   - `git --version`, `git config`, `git config --global user.name`, `git config --global user.email`
   - Diferencia entre configurar la identidad de Git y autenticarse en GitHub
   - `git status`, `git diff`, `git diff --staged`, `git remote -v`

2. **[02 — Añadir Cambios, Crear Commits y Comparar](./02-add-commit-y-diff.md)**
   - Las tres áreas de Git: Directorio de trabajo, Área de preparación (*Staging*) y Repositorio local
   - `git add archivo`, `git add .`
   - `git commit -m "mensaje"`, `git commit --amend` (y sus riesgos sobre commits publicados)
   - `git log --oneline`, `git show`

3. **[03 — Ramas Locales y Opciones de `git branch`](./03-ramas-y-opciones.md)**
   - Explicación individual y detallada de cada opción:
     - `git branch`
     - `git branch -a`
     - `git branch -r`
     - `git branch nombre-rama`
     - `git branch -m nombre-antiguo nombre-nuevo`
     - `git branch -M nombre-antiguo nombre-nuevo`
     - `git branch -d nombre-rama`
     - `git branch -D nombre-rama` (advertencia de pérdida de acceso a commits no fusionados)

4. **[04 — Cambiar de Rama, `git fetch` y Seguimiento (`--track`)](./04-ramas-remotas-fetch-y-track.md)**
   - `git switch main`, `git switch -c nombre-rama`
   - `git switch --track origin/nombre-rama` vs `git switch -c nombre-rama --track origin/nombre-rama`
   - `git checkout nombre-rama`, `git checkout -b nombre-rama`
   - Tabla comparativa entre `git switch`, `git checkout` y `git branch`

5. **[05 — Diferencia entre `fetch`, `pull` y `push`](./05-pull-y-push.md)**
   - `git fetch origin` vs `git fetch origin main`
   - `git pull`, `git pull origin main`, `git pull --ff-only origin main`
   - `git push origin nombre-rama`, `git push -u origin nombre-rama`, `git push origin main`
   - `git push --force-with-lease` (cuándo existe y por qué es peligroso)

6. **[06 — Fusión (`merge`) e Integración de Ramas](./06-merge-e-integracion.md)**
   - `git merge nombre-rama`, `git merge --no-ff nombre-rama`, `git merge --abort`
   - `git diff main...nombre-rama`
   - `git log --oneline --graph --decorate --all`
   - Desde qué rama debe ejecutarse una fusión y cómo comprobar el resultado

7. **[07 — Inspeccionar los Cambios de Otra Persona](./07-inspeccion-del-historial.md)**
   - Guía completa de revisión para la compañera revisora
   - Diferencias prácticas entre `git diff`, `git show` y `git log`

8. **[08 — Conflictos, Descarte Seguro y Recuperación](./08-conflictos-y-recuperacion.md)**
   - Marcadores `<<<<<<<`, `=======`, `>>>>>>>` y resolución manual paso a paso
   - `git restore` y `git restore --staged`
   - `git reset --soft`, `git reset --mixed` y `git reset --hard` explicados por separado
   - `git reflog` para recuperar commits y `git stash` para guardar trabajo temporal

9. **[09 — Flujos Completos de Trabajo (10 Escenarios con Diagramas)](./09-flujos-completos.md)**
   - 10 flujos paso a paso con diagramas Mermaid, rama inicial, comandos, resultados esperados y qué hacer si fallan

10. **[10 — Errores Habituales y Cómo Diagnosticarlos](./10-errores-habituales.md)**
    - Guía de diagnóstico para los 11 mensajes y situaciones más comunes en Git y GitHub

