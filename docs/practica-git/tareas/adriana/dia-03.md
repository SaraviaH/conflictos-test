# Guía de Práctica — Adriana (Día 03)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 03 de 15** — Opciones de `git branch` (`-m`, `-d`), renombrado seguro de ramas locales y enmienda del último commit local (`git commit --amend`).

## 3. Objetivo de aprendizaje de Git
Practicar la creación y el renombrado seguro de una rama local con `git branch -m`, actualizar fichas de productos reales en `data/products.json`, perfeccionar el último commit local antes de publicarlo mediante `git commit --amend`, y eliminar ramas locales ya fusionadas con `git branch -d`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia03-productos-faciales`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia03-productos-maquillaje`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (JSON):** Completar el nombre y la descripción truncada (`"hidratada."`) del producto `id: 101` en `data/products.json`.
2. **Tarea 2 (JSON):** Completar el nombre y la descripción incompleta del producto `id: 103` en `data/products.json`.
3. **Tarea 3 (JSON + `--amend`):** Actualizar el nombre del producto `id: 105` en `data/products.json` e incorporarlo corrigiendo el último commit local con `git commit --amend` antes de subir la rama a GitHub.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/products.json` (objetos con `"id": 101` en líneas 10–17, `"id": 103` en líneas 60–67 e `"id": 105` en líneas 110–116).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/products.json`, producto `id: 101`, líneas 10–17)
Busca:
```json
      "id": 101,
      "name": "Sérum Facial",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 59.99,
      "originalPrice": 69.99,
      "description": "hidratada.",
```
Y cámbialo por:
```json
      "id": 101,
      "name": "Sérum Facial Rose Radiance",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 59.99,
      "originalPrice": 69.99,
      "description": "Sérum iluminador con extracto puro de Rosa Damascena, ácido hialurónico y niacinamida para una piel radiante e hidratada.",
```

### En la Tarea 2 (`data/products.json`, producto `id: 103`, líneas 60–67)
Busca:
```json
      "id": 103,
      "name": "Crema Hidratante",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 68.00,
      "originalPrice": 88.00,
      "description": "Crema nutritiva ultraligera .",
```
Y cámbialo por:
```json
      "id": 103,
      "name": "Crema Hidratante Hydra Glow",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 68.00,
      "originalPrice": 88.00,
      "description": "Crema nutritiva ultraligera con escualano, péptidos biomiméticos y centella asiática para restaurar la barrera cutánea.",
```

### En la Tarea 3 (`data/products.json`, producto `id: 105`, líneas 110–113)
Busca:
```json
      "id": 105,
      "name": "Sérum Elixir",
```
Y cámbialo por:
```json
      "id": 105,
      "name": "Sérum Reparador Nocturno Elixir",
```

---

## 8. Resultado esperado
Tanto en la página de Inicio (`index.html`) como en la Tienda (`pages/tienda.html`), los tres productos principales de Cuidado Facial (`101`, `103` y `105`) muestran sus nombres de colección completos y descripciones detalladas sin palabras cortadas.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html` y `http://localhost:5500/pages/tienda.html`.
2. Comprueba que las tarjetas se cargan sin mostrar el mensaje «No se pudo cargar el catálogo» (si saliera ese error, significaría que borraste una coma o comilla en `data/products.json`).
3. Verifica que aparecen los títulos **«Sérum Facial Rose Radiance»**, **«Crema Hidratante Hydra Glow»** y **«Sérum Reparador Nocturno Elixir»**.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
# 1. Actualizar main
git switch main
git pull --ff-only origin main

# 2. Crear una rama con nombre abreviado y practicar renombrarla con git branch -m
git switch -c feat/adriana-dia3-prod
git branch
git branch -m feat/adriana-dia3-prod feat/adriana-dia03-productos-faciales
git branch

# 3. Realizar la Tarea 1 (producto 101) y hacer el primer commit
git diff data/products.json
git add data/products.json
git commit -m "Completar nombre y descripcion del Serum Facial Rose Radiance (id 101)"

# 4. Realizar la Tarea 2 (producto 103) y hacer el segundo commit
git add data/products.json
git commit -m "Completar ficha de Crema Hidratante Hydra Glow (id 103)"

# 5. Realizar la Tarea 3 (producto 105) e integrarla en el segundo commit usando --amend
#    (Seguro porque AÚN NO hemos hecho git push)
git add data/products.json
git commit --amend -m "Completar fichas de Crema Hydra Glow (103) y Serum Nocturno Elixir (105)"

# 6. Verificar el historial y publicar la rama
git log --oneline -n 3
git show HEAD
git push -u origin feat/adriana-dia03-productos-faciales
```

### Fase 2: Como Revisora e Integradora del Turno 2 (cuando Jamile publique `feat/jamile-dia03-productos-maquillaje`)
```bash
git fetch origin
git branch -r
git switch --track origin/feat/jamile-dia03-productos-maquillaje
git log --oneline -n 4
git diff main...feat/jamile-dia03-productos-maquillaje
# Tras verificar en Tienda los labiales 102 y 107:
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia03-productos-maquillaje
git push origin main

# Practicar borrado seguro de ramas locales de días anteriores ya fusionadas:
git branch -d feat/adriana-dia01-inicio fix/adriana-dia02-nosotros
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste renombrar la rama con `git branch -m` (minúscula, modo seguro).
- Practicaste `git commit --amend` sobre un commit local antes de publicarlo.
- `data/products.json` mantiene sintaxis JSON válida y el catálogo carga en el navegador.
- En el Turno 2 integraste la rama de Jamile en `main` y limpiaste tus ramas locales de los días 1 y 2 con `git branch -d`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Jamile la rama `feat/adriana-dia03-productos-faciales` e indícale que revise los productos `101`, `103` y `105` en la categoría «Cuidado Facial».

## 13. Qué debe hacer si encuentra un error o un conflicto
- **Importante:** Como tanto tú (Turno 1) como Jamile (Turno 2) trabajarán hoy sobre distintos productos de `data/products.json`, **Jamile NO debe empezar a editar su archivo hasta que haya integrado tu rama del Turno 1 en `main`**. Así evitarán conflictos innecesarios.
- Si al abrir la tienda ves el mensaje «No se pudo cargar el catálogo», revisa `git diff data/products.json` para verificar que cada línea termine con su coma (`,`) correspondiente.

