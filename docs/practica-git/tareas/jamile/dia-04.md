# Guía de Práctica — Jamile (Día 04)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 04 de 15** — Publicación con `-u`, inspección de ramas remotas (`git fetch`, `git branch -r`, `git branch -a`) y seguimiento con `git switch --track`.

## 3. Objetivo de aprendizaje de Git
Desarrollar y publicar en el Turno 1 las correcciones de la categoría «Fragancias» en `data/products.json` estableciendo seguimiento con `git push -u origin ...`, y en el Turno 2 comprobar la diferencia entre `git branch`, `git branch -r` y `git branch -a` antes y después de `git fetch origin` al revisar la rama de Adriana.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/jamile-dia04-fragancias`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/adriana-dia04-catalogo-facial`).

---

## 5. Lista de 2 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (JSON):** Actualizar el nombre genérico (`"Perfume"`) y corregir la puntuación de la descripción (`.Duradera 24/7`) del producto `id: 104` en `data/products.json`.
2. **Tarea 2 (JSON):** Corregir el error tipográfico en el nombre (`"Perfume EClat "`) y completar la descripción genérica (`"El mejor perfume ."`) del producto `id: 108` en `data/products.json`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/products.json` (objetos con `"id": 104` en líneas 85–92 e `"id": 108` en líneas 185–192).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/products.json`, producto `id: 104`, líneas 85–92)
Busca:
```json
      "id": 104,
      "name": "Perfume",
      "category": "fragancias",
      "categoryName": "Fragancias",
      "price": 95.00,
      "originalPrice": 120.00,
      "description": "Fragancia envolvente con notas de jazmín real, ámbar cálido y flor de azahar en frasco de cristal tallado.Duradera 24/7",
```
Y cámbialo por:
```json
      "id": 104,
      "name": "Perfume Éclat D'Or Luxury",
      "category": "fragancias",
      "categoryName": "Fragancias",
      "price": 95.00,
      "originalPrice": 120.00,
      "description": "Fragancia envolvente con notas de jazmín real, ámbar cálido y flor de azahar en frasco de cristal tallado. Duradera 24/7.",
```

### En la Tarea 2 (`data/products.json`, producto `id: 108`, líneas 185–192)
Busca:
```json
      "id": 108,
      "name": "Perfume EClat ",
      "category": "fragancias",
      "categoryName": "Fragancias",
      "price": 92.00,
      "originalPrice": 110.00,
      "description": "El mejor perfume .",
```
Y cámbialo por:
```json
      "id": 108,
      "name": "Perfume Éclat D'Or Nuit Absolu",
      "category": "fragancias",
      "categoryName": "Fragancias",
      "price": 92.00,
      "originalPrice": 110.00,
      "description": "Extrait de Parfum nocturno con notas de rosa negra, vainilla bourbon y maderas ambaradas de larga fijación.",
```

---

## 8. Resultado esperado
Al filtrar por «Fragancias» en `pages/tienda.html`, los tres perfumes de la colección muestran nombres completos sin erratas (`Perfume Éclat D'Or Luxury`, `Perfume Éclat D'Or Nuit Absolu` y `Eau de Parfum Jardin de Rose`) y descripciones olfativas detalladas.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html` y selecciona la categoría **«Fragancias»**.
2. Verifica que aparecen los 3 perfumes y que sus títulos y descripciones coinciden con los cambios efectuados.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
git switch main
git pull --ff-only origin main
git switch -c feat/jamile-dia04-fragancias

# Commit 1: Producto 104
git add data/products.json
git commit -m "Actualizar nombre y puntuacion de Perfume Eclat D'Or Luxury (104)"

# Commit 2: Producto 108
git add data/products.json
git commit -m "Corregir nombre y descripcion de Perfume Eclat D'Or Nuit Absolu (108)"

# Publicar estableciendo seguimiento (-u) y comprobar el vínculo con git branch -vv
git push -u origin feat/jamile-dia04-fragancias
git branch -vv
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/adriana-dia04-catalogo-facial`)
```bash
# 1. Observar las listas de ramas ANTES de hacer git fetch origin:
git branch
git branch -r
git branch -a

# 2. Ejecutar git fetch origin y volver a consultar:
git fetch origin
git branch -r
git branch -a

# 3. Crear la rama local de seguimiento hacia la rama de Adriana:
git switch --track origin/feat/adriana-dia04-catalogo-facial
git branch -vv
git log --oneline -n 4
git diff main...feat/adriana-dia04-catalogo-facial

# 4. Tras verificar los productos 106, 109 y 110 en el navegador, integrar en main:
git switch main
git pull --ff-only origin main
git merge feat/adriana-dia04-catalogo-facial
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Publicaste los 2 commits de `feat/jamile-dia04-fragancias` y comprobaste con `git branch -vv` el seguimiento remoto.
- En el Turno 2 comparaste la salida de `git branch -r` y `git branch -a` antes y después de `git fetch origin`, y descargaste e integraste `feat/adriana-dia04-catalogo-facial`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana el nombre exacto de tu rama `feat/jamile-dia04-fragancias` para que revise los productos `104` y `108`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al escribir `"Perfume Éclat D'Or Luxury"` tienes dudas con las comillas simples `'`, recuerda que dentro de una cadena JSON delimitada por comillas dobles `"..."` el apóstrofo simple `'` es completamente válido, pero nunca debes poner comillas dobles sin escapar dentro del texto.

