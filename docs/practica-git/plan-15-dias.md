# Plan Maestro de 15 Días — Práctica Colaborativa de Git (Adriana y Jamile)

Este calendario organiza las **15 jornadas consecutivas de práctica** sobre el repositorio **Luxe Glow Cosmetics**.

---

## 1. Dinámica de Roles y Turnos Diarios

Para cumplir estrictamente la regla de **no editar simultáneamente los mismos archivos** y garantizar que tanto **Adriana** como **Jamile** practiquen todos los días los tres papeles (**Desarrolladora**, **Revisora** e **Integradora**), cada jornada se estructura en **dos turnos secuenciales**:

- **En los días impares (Días 1, 3, 5, 7, 9, 11, 13 y 15):**
  - **Turno 1:** **Adriana** actúa como **Desarrolladora** (crea su rama desde `main`, realiza sus 2–3 tareas, hace commits y publica en `origin`). **Jamile** actúa como **Revisora e Integradora** (ejecuta `git fetch`, descarga la rama de Adriana con `git switch --track`, inspecciona los cambios, verifica en el navegador, fusiona en `main` y publica en `origin/main`).
  - **Turno 2:** Una vez actualizado `main`, **Jamile** actúa como **Desarrolladora** en su propia rama (realiza sus 2–3 tareas en archivos distintos y publica en `origin`). **Adriana** actúa como **Revisora e Integradora** (descarga la rama de Jamile, la revisa, la fusiona en `main` y publica en `origin/main`).

- **En los días pares (Días 2, 4, 6, 8, 10, 12 y 14):**
  - Se invierte el orden de inicio: **Jamile** abre el **Turno 1** como **Desarrolladora** (con **Adriana** como **Revisora e Integradora**), y **Adriana** realiza el **Turno 2** como **Desarrolladora** (con **Jamile** como **Revisora e Integradora**).

---

## 2. Calendario Resumen de las 15 Jornadas

| Día | Bloque y Enfoque de Git | Turno 1: Desarrolla → Revisa/Integra | Turno 2: Desarrolla → Revisa/Integra | Ramas del Día | Archivos Modificados |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Día 01** | Configuración, `status`, `diff`, `add`, `commit`, `log` | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia01-inicio`<br>`feat/jamile-dia01-footer` | `index.html`, `css/pages/index.css`<br>`css/components/footer/footer.css`, `components/footer/footer.html` |
| **Día 02** | `add <archivo>`, `diff --staged`, `show`, `switch -c` | **Jamile** → Adriana | **Adriana** → Jamile | `fix/jamile-dia02-header`<br>`fix/adriana-dia02-nosotros` | `css/components/header/header.css`, `components/header/header.html`<br>`pages/nosotros.html`, `css/pages/nosotros.css` |
| **Día 03** | Opciones de `git branch` (`-m`, `-d`), `commit --amend` | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia03-productos-faciales`<br>`feat/jamile-dia03-productos-maquillaje` | `data/products.json` (IDs 101, 103, 105)<br>`data/products.json` (IDs 102, 107) |
| **Día 04** | `fetch`, `branch -r`, `branch -a`, `switch --track`, `push -u` | **Jamile** → Adriana | **Adriana** → Jamile | `feat/jamile-dia04-fragancias`<br>`feat/adriana-dia04-catalogo-facial` | `data/products.json` (IDs 104, 108)<br>`data/products.json` (IDs 106, 109, 110) |
| **Día 05** | `fetch origin` vs `fetch origin main` vs `pull --ff-only`, `diff main...rama` | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia05-carrusel`<br>`feat/jamile-dia05-contacto` | `data/carousel.json`, `css/components/carousel/carousel.css`<br>`pages/contacto.html`, `css/pages/contacto.css` |
| **Día 06** | `switch -c ... --track`, imágenes reales y enlaces del sitio | **Jamile** → Adriana | **Adriana** → Jamile | `feat/jamile-dia06-banner-ingredientes`<br>`feat/adriana-dia06-tarjetas-producto` | `pages/ingredientes.html`, `css/pages/ingredientes.css`<br>`components/footer/footer.html`, `css/components/product-card/product-card.css`, `data/products.json` (ID 111) |
| **Día 07** | Revisión con observación y nuevo commit en rama publicada antes de integrar | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia07-envios`<br>`feat/jamile-dia07-faq` | `pages/envios.html`, `css/pages/envios.css`<br>`pages/faq.html`, `css/pages/faq.css` |
| **Día 08** | `merge --no-ff`, `restore`, `restore --staged`, `log --graph` | **Jamile** → Adriana | **Adriana** → Jamile | `feat/jamile-dia08-diario`<br>`feat/adriana-dia08-ritual` | `data/articles.json`, `css/pages/diario.css`<br>`pages/ritual.html`, `css/pages/ritual.css` |
| **Día 09** | `stash push -m`, `stash list`, `stash pop` al cambiar de rama | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia09-tienda-vip`<br>`feat/jamile-dia09-reembolso` | `pages/tienda.html`, `css/pages/tienda.css`<br>`pages/rembolso.html` |
| **Día 10** | Conflicto de fusión controlado #1 (en CSS global) y resolución manual | **Jamile** → Adriana | **Adriana** → Jamile | `style/jamile-dia10-paleta`<br>`style/adriana-dia10-variables` | `css/global/variables.css`, `css/global/base.css` |
| **Día 11** | Conflicto de fusión controlado #2, `merge --abort` y resolución final | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia11-historial`<br>`feat/jamile-dia11-carrusel-perfumeria` | `pages/historial.html`, `data/carousel.json` |
| **Día 12** | `reset --soft`, `reset --mixed` y recuperación con `reflog` | **Jamile** → Adriana | **Adriana** → Jamile | `feat/jamile-dia12-mensajes-contacto`<br>`feat/adriana-dia12-mensajes-tienda` | `js/pages/contacto.js`<br>`js/pages/tienda.js`, `js/utils/cart.js` |
| **Día 13** | Solución a rama atrasada y rechazo de `push` (`Updates were rejected`) | **Adriana** → Jamile | **Jamile** → Adriana | `feat/adriana-dia13-accesibilidad-modal`<br>`feat/jamile-dia13-accesibilidad-carrito` | `components/product-card/product-card.html`, `components/carousel/carousel.html`, `js/components/product-card/product-card.js`<br>`components/header/header.html`, `js/utils/cart.js` |
| **Día 14** | Flujo colaborativo autónomo y limpieza de ramas fusionadas (`branch -d`) | **Jamile** → Adriana | **Adriana** → Jamile | `feat/jamile-dia14-articulos-diario`<br>`feat/adriana-dia14-ficha-ingredientes` | `data/articles.json`, `pages/diario.html`<br>`pages/ingredientes.html` |
| **Día 15** | Cierre de versión (Release), auditoría de historial y `fetch --prune` | **Adriana** → Jamile | **Jamile** → Adriana | `release/adriana-dia15-cierre-inicio`<br>`release/jamile-dia15-cierre-tienda` | `index.html`, `css/global/base.css`<br>`pages/tienda.html` |

---

## 3. Estado Esperado de `main` al Finalizar Cada Jornada

Al cierre de cada día (después de completar el Turno 1 y el Turno 2), la rama `main` local de Adriana, la rama `main` local de Jamile y `origin/main` en GitHub deben cumplir estas condiciones:

1. **`git status` limpio:** `On branch main`, `Your branch is up to date with 'origin/main'`, `nothing to commit, working tree clean`.
2. **Ambas ramas del día integradas:** Los commits de ambas compañeras deben aparecer en `git log --oneline --graph --decorate -n 10`.
3. **Aplicación operativa:** Ninguna página debe presentar errores de sintaxis en los archivos JSON (`data/products.json`, `data/carousel.json`, `data/articles.json`), ni marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) olvidados en el código.
4. **Qué hacer si una revisión no es satisfactoria:** Si la revisora detecta un error (por ejemplo, una coma faltante en un JSON o un color equivocado), **no debe fusionar la rama en `main`**. Debe comunicar el hallazgo a la desarrolladora para que esta realice un nuevo commit correctivo en su misma rama, lo publique con `git push`, y la revisora lo descargue con `git pull` antes de aprobar e integrar.

---

## 4. Enlaces Directos a las Tareas Diarias

### Tareas de Adriana
- [Día 01](./tareas/adriana/dia-01.md) · [Día 02](./tareas/adriana/dia-02.md) · [Día 03](./tareas/adriana/dia-03.md) · [Día 04](./tareas/adriana/dia-04.md) · [Día 05](./tareas/adriana/dia-05.md)
- [Día 06](./tareas/adriana/dia-06.md) · [Día 07](./tareas/adriana/dia-07.md) · [Día 08](./tareas/adriana/dia-08.md) · [Día 09](./tareas/adriana/dia-09.md) · [Día 10](./tareas/adriana/dia-10.md)
- [Día 11](./tareas/adriana/dia-11.md) · [Día 12](./tareas/adriana/dia-12.md) · [Día 13](./tareas/adriana/dia-13.md) · [Día 14](./tareas/adriana/dia-14.md) · [Día 15](./tareas/adriana/dia-15.md)

### Tareas de Jamile
- [Día 01](./tareas/jamile/dia-01.md) · [Día 02](./tareas/jamile/dia-02.md) · [Día 03](./tareas/jamile/dia-03.md) · [Día 04](./tareas/jamile/dia-04.md) · [Día 05](./tareas/jamile/dia-05.md)
- [Día 06](./tareas/jamile/dia-06.md) · [Día 07](./tareas/jamile/dia-07.md) · [Día 08](./tareas/jamile/dia-08.md) · [Día 09](./tareas/jamile/dia-09.md) · [Día 10](./tareas/jamile/dia-10.md)
- [Día 11](./tareas/jamile/dia-11.md) · [Día 12](./tareas/jamile/dia-12.md) · [Día 13](./tareas/jamile/dia-13.md) · [Día 14](./tareas/jamile/dia-14.md) · [Día 15](./tareas/jamile/dia-15.md)

