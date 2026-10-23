# Guía de Práctica — Jamile (Día 11)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 11 de 15** — Segundo ejercicio de conflicto controlado (en `data/carousel.json`), práctica de `git merge --abort` y resolución manual de conflictos en JSON.

## 3. Objetivo de aprendizaje de Git
Integrar primero la rama de Adriana (`feat/adriana-dia11-historial`) en el Turno 1; luego, en el Turno 2, crear tu rama `feat/jamile-dia11-carrusel-perfumeria` desde el commit base previo (`HEAD~1`), practicar en tu propio equipo cómo cancelar un conflicto con `git merge --abort` y cómo publicar tu rama para resolver el conflicto junto con Adriana.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia11-historial`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia11-carrusel-perfumeria`, practicando `git merge --abort` y el conflicto controlado en `data/carousel.json`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (JSON):** Actualizar la etiqueta `"tag"` y el botón primario de la diapositiva 4 (`id: "alta-perfumeria"`) y ajustar `"tag"` de la diapositiva 3 en `data/carousel.json` (partiendo de `HEAD~1`).
2. **Tarea 2 (Práctica de `git merge --abort`):** Intentar localmente `git merge main`, observar el conflicto en `data/carousel.json`, verificar `git status` y cancelar el intento con `git merge --abort` para comprobar cómo Git restaura tu rama.
3. **Tarea 3 (Publicación):** Publicar `feat/jamile-dia11-carrusel-perfumeria` en GitHub para que Adriana practique también `git merge --abort` y realice la resolución al integrar en `main`, y luego actualizar tu `main` final.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/carousel.json` (diapositivas 3 y 4, líneas 40–74).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/carousel.json`, diapositivas 3 y 4 — Partiendo de `HEAD~1`)
Después de haber integrado el Turno 1 de Adriana en `main`, crea tu rama desde `HEAD~1` (`git switch -c feat/jamile-dia11-carrusel-perfumeria HEAD~1`).
En `data/carousel.json`:
1. En la diapositiva 3 (`id: "maquillaje-velvet"`, línea 41), cambia `"tag"` a:
   ```json
      "tag": "Colección Maquillaje Velvet",
   ```
2. En la diapositiva 4 (`id: "alta-perfumeria"`, líneas 59–69), busca:
   ```json
      "id": "alta-perfumeria",
      "tag": "Alta Perfumería de Autor",
      "tagIcon": "fa-gem",
      "title": "Fragancias Exclusivas que Envuelven los Sentidos",
      "subtitle": "Acordes artesanales de jazmín real, rosa al rocío, sándalo blanco y ámbar dorado conservados en frascos de cristal tallado de colección.",
      "image": "assets/images/carousel/slide_fragancias.png",
      "imageAlt": "Frascos de perfume de cristal tallado con detalles dorados y flores blancas",
      "primaryBtn": {
        "label": "Ver Fragancias",
   ```
   Cambia `"tag"` y `"primaryBtn.label"` para que quede:
   ```json
      "id": "alta-perfumeria",
      "tag": "Alta Perfumería Botánica",
      "tagIcon": "fa-gem",
      "title": "Fragancias Exclusivas que Envuelven los Sentidos",
      "subtitle": "Acordes artesanales de jazmín real, rosa al rocío, sándalo blanco y ámbar dorado conservados en frascos de cristal tallado de colección.",
      "image": "assets/images/carousel/slide_fragancias.png",
      "imageAlt": "Frascos de perfume de cristal tallado con detalles dorados y flores blancas",
      "primaryBtn": {
        "label": "Explorar Perfumería",
   ```

---

## 8. Resultado esperado
En la cuarta diapositiva del carrusel de `index.html`, la etiqueta superior muestra «ALTA PERFUMERÍA BOTÁNICA» y el botón principal dice «Explorar Perfumería», conviviendo con los cambios de la diapositiva 3 y la nueva página `pages/historial.html` creada en el Turno 1.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. En el Turno 1, abre `http://localhost:5500/pages/historial.html` al revisar la rama de Adriana y comprueba que la página carga con su diseño completo.
2. Al cierre del Turno 2, abre `http://localhost:5500/index.html` y navega a las diapositivas 3 y 4 del carrusel para verificar que ambas cargan sin errores JSON.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/adriana-dia11-historial`)
```bash
git fetch origin
git switch --track origin/feat/adriana-dia11-historial
git log --oneline -n 3
git diff main...feat/adriana-dia11-historial
# Tras comprobar pages/historial.html en el navegador:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/adriana-dia11-historial -m "Merge branch 'feat/adriana-dia11-historial' into main"
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (Practicando conflicto y `git merge --abort`)
```bash
# 1. Crear tu rama desde el commit anterior al merge del Turno 1 (HEAD~1)
git switch main
git switch -c feat/jamile-dia11-carrusel-perfumeria HEAD~1

# 2. Realizar la Tarea 1 en data/carousel.json y hacer commit
git add data/carousel.json
git commit -m "Actualizar diapositiva 4 de Alta Perfumeria en carousel.json"

# 3. Tarea 2: Probar git merge main para ver el conflicto y practicar git merge --abort:
git merge main
# -> Verás CONFLICT (content): Merge conflict in data/carousel.json
git status
# Abre data/carousel.json en VS Code solo para observar dónde aparecieron <<<<<<<, ======= y >>>>>>>.
# Ahora cancela la fusión de forma segura con git merge --abort:
git merge --abort
git status
# ¡Verifica que data/carousel.json volvió a estar limpio y sin marcadores!

# 4. Tarea 3: Publicar la rama para que Adriana realice la integración y resolución en main
git push -u origin feat/jamile-dia11-carrusel-perfumeria
```

---

## 11. Criterios para considerar la tarea terminada
- Revisaste e integraste `feat/adriana-dia11-historial` en el Turno 1.
- En el Turno 2 provocaste el conflicto controlado con `git merge main`, inspeccionaste `git status` y los marcadores en `data/carousel.json`, y probaste `git merge --abort`.
- Al cierre del día, tras integrar Adriana tu rama en `main`, actualizaste tu `main` local con `git pull --ff-only origin main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Adriana la rama `feat/jamile-dia11-carrusel-perfumeria` avisándole que contiene un conflicto controlado en la línea `"tag"` de la diapositiva 3 de `data/carousel.json` para que conserve `"Maquillaje Mineral & Velvet"` en la diapositiva 3 y tus cambios en la diapositiva 4.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Recuerda que `git merge --abort` solo funciona mientras el proceso de fusión está detenido por conflicto (`You have unmerged paths`). Nunca hagas `git commit` si tu intención era abortar la fusión.

