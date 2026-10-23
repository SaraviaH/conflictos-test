# Guía de Práctica — Adriana (Día 14)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 14 de 15** — Flujo colaborativo autónomo con menos instrucciones guiadas y mantenimiento de ramas locales (`git branch --merged` y `git branch -d`).

## 3. Objetivo de aprendizaje de Git
Ejecutar de forma autónoma todo el ciclo de **Revisora/Integradora** en el Turno 1 y de **Desarrolladora** en el Turno 2 aplicando las buenas prácticas aprendidas en los 13 días previos, y limpiar las ramas locales ya integradas en `main` comprobándolas antes con `git branch --merged`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/jamile-dia14-articulos-diario`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/adriana-dia14-ficha-ingredientes`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (HTML):** Añadir el estándar dermatológico en la sexta tarjeta («Lo que Excluimos Siempre») de `pages/ingredientes.html`.
2. **Tarea 2 (HTML):** Ampliar la descripción de «Trazabilidad Botánica» dentro de la sección «Nuestro Compromiso Científico» de `pages/ingredientes.html`.
3. **Tarea 3 (Mantenimiento Git):** Consultar qué ramas locales ya están fusionadas en `main` mediante `git branch --merged` y eliminarlas de forma segura con `git branch -d`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/ingredientes.html` (líneas 110–116 y 134–137).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/ingredientes.html`, líneas 110–116)
Busca dentro de la sexta `.ingrediente-card` («Lo que Excluimos Siempre»):
```html
          <h3 class="h5 fw-bold text-burgundy-dark">Lo que Excluimos Siempre</h3>
          <p class="small text-muted">
            Formulamos estrictamente sin parabenos, sin sulfatos agresivos (SLS/SLES), sin ftalatos, sin aceites minerales derivados del petróleo y sin pruebas en animales.
          </p>
          <p class="small text-muted mb-0"><strong>Compromiso:</strong> listas INCI comprensibles, honestas y auditadas.</p>
```
Añade una línea de `Estándar:` justo antes de `Compromiso:`:
```html
          <h3 class="h5 fw-bold text-burgundy-dark">Lo que Excluimos Siempre</h3>
          <p class="small text-muted">
            Formulamos estrictamente sin parabenos, sin sulfatos agresivos (SLS/SLES), sin ftalatos, sin aceites minerales derivados del petróleo y sin pruebas en animales.
          </p>
          <p class="small text-muted mb-1"><strong>Estándar:</strong> dermatología botánica de alta tolerancia.</p>
          <p class="small text-muted mb-0"><strong>Compromiso:</strong> listas INCI comprensibles, honestas y auditadas.</p>
```

### En la Tarea 2 (`pages/ingredientes.html`, líneas 134–137)
Busca bajo «Trazabilidad Botánica»:
```html
        <div class="col-md-4">
          <i class="fas fa-recycle text-gold fs-3 mb-2" aria-hidden="true"></i>
          <h3 class="h6 fw-bold text-burgundy-dark">Trazabilidad Botánica</h3>
          <p class="small text-muted mb-0">Proveedores certificados con prácticas agrícolas responsables.</p>
        </div>
```
Actualiza el párrafo a:
```html
        <div class="col-md-4">
          <i class="fas fa-recycle text-gold fs-3 mb-2" aria-hidden="true"></i>
          <h3 class="h6 fw-bold text-burgundy-dark">Trazabilidad Botánica</h3>
          <p class="small text-muted mb-0">Proveedores certificados con prácticas agrícolas regenerativas y comercio ético.</p>
        </div>
```

---

## 8. Resultado esperado
En `pages/ingredientes.html`, la sexta tarjeta ahora tiene la misma estructura de dos metadatos finales (`Estándar:` y `Compromiso:`) que las otras cinco tarjetas de activos, y el bloque inferior detalla las prácticas agrícolas regenerativas.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/ingredientes.html`.
2. Revisa la sexta tarjeta «Lo que Excluimos Siempre» y comprueba que muestra tanto **Estándar** como **Compromiso** perfectamente alineados con las tarjetas vecinas.
3. Verifica el texto de la tercera columna en «Nuestro Compromiso Científico».

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

*(Hoy las instrucciones están resumidas por objetivos para poner en práctica tu autonomía. Si necesitas recordar la sintaxis exacta de algún paso, consulta [`09-flujos-completos.md`](../../cuaderno-git/09-flujos-completos.md)).*

### Fase 1: Turno 1 — Revisar e integrar `feat/jamile-dia14-articulos-diario`
1. Actualiza las referencias del servidor `origin` sin modificar tu rama actual.
2. Verifica en la lista de ramas remotas que aparece `origin/feat/jamile-dia14-articulos-diario`.
3. Crea tu rama local de seguimiento hacia esa rama remota.
4. Inspecciona los commits de Jamile y compara las diferencias frente a `main` (`git diff main...feat/jamile-dia14-articulos-diario`).
5. Comprueba `pages/diario.html` en el navegador, cambia a `main`, actualízalo con `--ff-only`, integra la rama con `git merge --no-ff` y publica `main`.

### Fase 2: Turno 2 — Desarrollar `feat/adriana-dia14-ficha-ingredientes` y limpiar ramas antiguas
1. Estando en `main` actualizado, consulta qué ramas locales de días anteriores ya están integradas ejecutando:
   ```bash
   git branch --merged main
   ```
2. Elimina de forma segura (`git branch -d`) las ramas locales de días anteriores que ya aparezcan en esa lista (nunca borres `main`).
3. Crea y cambia a tu rama `feat/adriana-dia14-ficha-ingredientes`.
4. Realiza la Tarea 1, verifica con `git diff` y registra el primer commit.
5. Realiza la Tarea 2, verifica con `git diff` y registra el segundo commit.
6. Publica tu rama estableciendo seguimiento (`-u`) con `origin`.

---

## 11. Criterios para considerar la tarea terminada
- Completaste la revisión e integración del Turno 1 y el desarrollo del Turno 2 sin depender de copiar y pegar cada comando básico.
- Limpiaste tus ramas locales antiguas ya fusionadas usando `git branch --merged main` y `git branch -d`.
- Jamile revisó e integró `feat/adriana-dia14-ficha-ingredientes` en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Jamile el nombre de la rama `feat/adriana-dia14-ficha-ingredientes` indicando que revise los 2 commits sobre `pages/ingredientes.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al ejecutar `git branch -d <rama>` Git te advierte que la rama no está completamente fusionada, comprueba primero que estás situada en `main` actualizado (`git switch main && git pull --ff-only origin main`).

