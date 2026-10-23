# Guía de Práctica — Jamile (Día 03)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 03 de 15** — Opciones de `git branch` (`-m`, `-d`), `git commit --amend` local y actualización de productos de maquillaje en `data/products.json`.

## 3. Objetivo de aprendizaje de Git
Revisar e integrar primero la rama de Adriana (`feat/adriana-dia03-productos-faciales`) y, en el Turno 2, practicar el renombrado seguro de una rama local con `git branch -m`, la corrección del último commit local con `git commit --amend` y la eliminación de ramas locales de días anteriores ya fusionadas usando `git branch -d`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia03-productos-faciales`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia03-productos-maquillaje`).

---

## 5. Lista de 2 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (JSON):** Actualizar el nombre genérico (`"Labial Rojo"`) y la descripción con espacio sobrante del producto `id: 102` en `data/products.json`.
2. **Tarea 2 (JSON + `--amend`):** Corregir el nombre (con espacio final `"Labial Velvet "`) y la descripción truncada (`" frutos rojos borgoña..."`) del producto `id: 107` en `data/products.json`, practicando `git commit --amend` antes de publicar.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/products.json` (objetos con `"id": 102` en líneas 35–42 e `"id": 107` en líneas 160–167).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/products.json`, producto `id: 102`, líneas 35–42)
Busca:
```json
      "id": 102,
      "name": "Labial Rojo",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 39.50,
      "originalPrice": 55.00,
      "description": "Labial mate de textura sedosa .",
```
Y cámbialo por:
```json
      "id": 102,
      "name": "Labial Velvet Gold Matte",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 39.50,
      "originalPrice": 55.00,
      "description": "Labial mate de textura sedosa con manteca de karité orgánica y pigmentos puros de larga duración.",
```

### En la Tarea 2 (`data/products.json`, producto `id: 107`, líneas 160–167)
Busca:
```json
      "id": 107,
      "name": "Labial Velvet ",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 32.00,
      "originalPrice": 38.00,
      "description": " frutos rojos borgoña de inspiración real con microesferas de ácido hialurónico para volumen sedoso.",
```
Y cámbialo por:
```json
      "id": 107,
      "name": "Labial Velvet Berry Royal",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 32.00,
      "originalPrice": 38.00,
      "description": "Labial en tono frutos rojos borgoña de inspiración real con microesferas de ácido hialurónico para volumen sedoso.",
```

---

## 8. Resultado esperado
Al filtrar por la categoría «Maquillaje» en `index.html` o `pages/tienda.html`, los dos labiales de la marca lucen sus nombres oficiales (**«Labial Velvet Gold Matte»** y **«Labial Velvet Berry Royal»**) y descripciones completas sin espacios sueltos ni frases cortadas.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html` y haz clic en la píldora de filtro **«Maquillaje»**.
2. Comprueba que las tarjetas de ambos labiales muestran los nombres y descripciones actualizados.
3. Abre la «Vista Rápida» de ambos productos para confirmar que todos los datos cargan sin errores.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/adriana-dia03-productos-faciales`)
```bash
git fetch origin
git branch -r
git switch --track origin/feat/adriana-dia03-productos-faciales
git log --oneline -n 4
git diff main...feat/adriana-dia03-productos-faciales
# Tras verificar en el navegador los productos 101, 103 y 105:
git switch main
git pull --ff-only origin main
git merge feat/adriana-dia03-productos-faciales
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (Practicando `branch -m`, `commit --amend` y `branch -d`)
```bash
# 1. Partir de main (que ya contiene los cambios faciales de Adriana del Turno 1)
git switch main
git status

# 2. Crear una rama con nombre corto y renombrarla de forma segura con git branch -m
git switch -c feat/jamile-dia3-maq
git branch
git branch -m feat/jamile-dia3-maq feat/jamile-dia03-productos-maquillaje
git branch

# 3. Realizar la Tarea 1 (producto 102) y crear el commit inicial
git diff data/products.json
git add data/products.json
git commit -m "Actualizar ficha de Labial Velvet Gold Matte (id 102)"

# 4. Realizar la Tarea 2 (producto 107) y practicar git commit --amend
#    para perfeccionar el commit local antes de publicarlo:
git add data/products.json
git commit --amend -m "Actualizar fichas de Labial Velvet Gold Matte (102) y Berry Royal (107)"

# 5. Revisar con git show y publicar la rama
git show HEAD
git push -u origin feat/jamile-dia03-productos-maquillaje

# 6. Limpiar de forma segura ramas locales de días anteriores ya fusionadas en main:
git branch -d feat/jamile-dia01-footer fix/jamile-dia02-header
```

---

## 11. Criterios para considerar la tarea terminada
- Integraste primero en `main` la rama de Adriana del Turno 1 antes de tocar `data/products.json`.
- Practicaste `git branch -m` (minúscula), `git commit --amend` (antes de hacer push) y `git branch -d` (minúscula).
- Adriana revisó e integró tu rama `feat/jamile-dia03-productos-maquillaje` en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Adriana la rama `feat/jamile-dia03-productos-maquillaje` indicando que verifique los productos `102` y `107` en la categoría «Maquillaje».

## 13. Qué debe hacer si encuentra un error o un conflicto
- Recuerda: **nunca uses `git branch -D` (mayúscula) ni `git branch -M` (mayúscula)** por costumbre. Usa siempre `-d` y `-m` en minúscula para que Git valide antes de borrar o renombrar.

