# Plan de Práctica Colaborativa de Git y GitHub (15 Días) — Adriana y Jamile

Bienvenidas al programa de entrenamiento práctico de **Git y GitHub** diseñado específicamente sobre el repositorio real del proyecto **Luxe Glow Cosmetics**.

El propósito de esta guía de **15 días consecutivos** no es aprender programación desde cero ni reescribir la arquitectura del sitio, sino dominar el flujo de trabajo colaborativo profesional en Git realizando modificaciones pequeñas, reales y verificables sobre la tienda cosmética existente.

---

## 1. Diagnóstico Inicial del Repositorio

Antes de comenzar el Día 1, este es el estado real verificado del proyecto:

- **Proyecto:** Luxe Glow Cosmetics (sitio web multipágina de cosmética botánica con HTML5, CSS3 modular, Bootstrap 5.3.3, Font Awesome 6.5.1 y JavaScript Vanilla ES6+).
- **Repositorio remoto (`origin`):** `https://github.com/SaraviaH/conflictos-test.git`
- **Rama principal:** `main` (sincronizada con `origin/main` en el commit base `dfb3623` — `"test"`).
- **Ramas remotas históricas existentes en el servidor (`git branch -r`):**
  - `origin/main` (rama principal activa con la arquitectura completa de Luxe Glow Cosmetics).
  - `origin/adrix`, `origin/developer`, `origin/Tarea2`, `origin/hola` (ramas de prácticas anteriores previas al commit `dfb3623`). **Importante:** no deben fusionarse en `main` ni usarse como base; todas las ramas nuevas de estos 15 días deben nacer siempre desde `main` actualizado.
- **Cómo visualizar y comprobar el proyecto en el navegador:**
  - El proyecto carga componentes reutilizables (`components/header/header.html`, `components/footer/footer.html`, `components/carousel/carousel.html`, `components/product-card/product-card.html`) y datos (`data/products.json`, `data/carousel.json`, `data/articles.json`) mediante `fetch()`.
  - Por políticas de seguridad del navegador (CORS), **no abras los archivos `.html` con doble clic (`file://`)**.
  - Utiliza siempre un servidor estático local:
    - **Opción recomendada (VS Code):** extensión **Live Server** (clic derecho en `index.html` → *Open with Live Server*).
    - **Alternativa por terminal:** ejecutar `python -m http.server 5500` en la raíz del proyecto y abrir `http://localhost:5500`.

---

## 2. Estructura de la Documentación

Toda la documentación de esta práctica se encuentra organizada en `docs/practica-git/`:

```text
docs/
└── practica-git/
    ├── README.md                        # Esta guía general e introducción al repositorio
    ├── plan-15-dias.md                  # Calendario maestro de 15 días, roles y estado de main
    ├── inventario-de-cambios.md         # Inventario completo de mejoras reales detectadas en el código
    ├── flujo-de-trabajo.md              # Protocolo paso a paso entre Desarrolladora, Revisora e Integradora
    ├── tareas/
    │   ├── adriana/
    │   │   ├── dia-01.md ... dia-15.md  # Guías diarias individuales para Adriana (15 archivos)
    │   └── jamile/
    │       ├── dia-01.md ... dia-15.md  # Guías diarias individuales para Jamile (15 archivos)
    └── cuaderno-git/
        ├── 00-indice.md                 # Índice general del cuaderno de consulta de Git
        ├── 01-configuracion-y-consultas.md
        ├── 02-add-commit-y-diff.md
        ├── 03-ramas-y-opciones.md
        ├── 04-ramas-remotas-fetch-y-track.md
        ├── 05-pull-y-push.md
        ├── 06-merge-e-integracion.md
        ├── 07-inspeccion-del-historial.md
        ├── 08-conflictos-y-recuperacion.md
        ├── 09-flujos-completos.md
        └── 10-errores-habituales.md
```

---

## 3. Reglas de Oro para Adriana y Jamile

1. **Nunca trabajen directamente sobre `main`:** Todo cambio de código se realiza en una rama descriptiva creada a partir de `main` actualizado (por ejemplo, `feat/adriana-dia01-inicio` o `fix/jamile-dia02-header`).
2. **Trabajo secuencial por turnos (prohibido editar el mismo archivo simultáneamente):**
   - Cada jornada se divide en **Turno 1** y **Turno 2**.
   - Mientras una persona actúa como **Desarrolladora** (modifica archivos, hace commits y publica su rama), la otra espera la publicación para actuar como **Revisora e Integradora** (descarga la rama con `git fetch` y `git switch --track`, revisa con `git log` y `git diff`, comprueba en el navegador e integra en `main`).
   - Solo cuando el Turno 1 ha sido integrado y publicado en `origin/main`, comienza el Turno 2 invirtiendo los papeles.
3. **Verificación antes de cada commit y antes de cada merge:**
   - Usa siempre `git status` y `git diff` antes de preparar archivos.
   - Abre el sitio en el servidor local para comprobar que el cambio visual o de datos se ve correctamente y no rompe la consola del navegador.
4. **Cuidado con los comandos destructivos:**
   - Nunca ejecutes `git reset --hard`, `git push --force`, `git branch -D` ni `git checkout -- .` como respuesta automática ante una duda. Consulta primero [`08-conflictos-y-recuperacion.md`](./cuaderno-git/08-conflictos-y-recuperacion.md) y [`10-errores-habituales.md`](./cuaderno-git/10-errores-habituales.md).

---

## 4. Cómo Empezar Cada Día

1. Abre [`plan-15-dias.md`](./plan-15-dias.md) para confirmar quién abre el **Turno 1** y quién abre el **Turno 2** en la jornada actual.
2. Abre tu archivo diario correspondiente en `tareas/adriana/dia-XX.md` o `tareas/jamile/dia-XX.md`.
3. Ten abierto a mano el [`flujo-de-trabajo.md`](./flujo-de-trabajo.md) y el [`cuaderno-git/00-indice.md`](./cuaderno-git/00-indice.md) para consultar la sintaxis y explicación de cada comando.

