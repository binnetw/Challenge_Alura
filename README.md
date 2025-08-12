# 🎲 Sorteo Amigo Secreto

Este es un proyecto simple para realizar el sorteo del "Amigo Secreto". Permite a los usuarios agregar nombres de participantes y luego sortear aleatoriamente un ganador. Es un excelente ejercicio para practicar la lógica de programación y la manipulación del DOM con JavaScript.

## ✨ Características Principales

-   **Agregar Amigos:** Añade participantes a la lista del sorteo de forma dinámica.
-   **Validación de Nombres:** Evita que se ingresen nombres duplicados o campos vacíos.
-   **Sortear:** Selecciona un "amigo secreto" de forma aleatoria entre los participantes ingresados.
-   **Reiniciar:** Limpia la lista de participantes y el resultado para comenzar un nuevo sorteo.
-   **Interfaz Sencilla:** Una interfaz de usuario limpia y fácil de usar.

## 📂 Cómo Clonar el Repositorio

Para obtener una copia local de este proyecto y ejecutarlo en tu propia máquina, sigue estos sencillos pasos.

1.  **Clona el repositorio:** Abre tu terminal o Git Bash y ejecuta el siguiente comando.

    ```bash
    git clone https://binnetw.github.io/Challenge_Alura/
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd challenge-amigo-secreto_esp-main
    ```
3.  **Abre la aplicación:** Simplemente abre el archivo `index.html` en tu navegador web favorito.

## 🚀 Instrucciones de Uso

1.  Abre el archivo `index.html` en tu navegador web preferido.
2.  Escribe el nombre de un participante en el campo de texto.
3.  Presiona la tecla **Enter** o haz clic en el botón **"Agregar"** para añadirlo a la lista.
4.  Repite el paso anterior para todos los participantes. Los nombres se mostrarán en la sección "Amigos Agregados".
5.  Una vez que todos los participantes estén en la lista, haz clic en el botón **"Sortear"**.
6.  ¡Listo! El nombre del "Amigo Secreto" seleccionado aparecerá en la pantalla.
7.  Para comenzar un nuevo sorteo, simplemente haz clic en el botón **"Reiniciar"**.

## 🛠️ Tecnologías Utilizadas

-   **HTML5:** Para la estructura de la página.
-   **CSS3:** Para los estilos y el diseño visual.
-   **JavaScript:** Para toda la lógica funcional de la aplicación.

## 🧠 Lógica Clave del Sorteo

La función principal del sorteo utiliza `Math.random()` para generar un índice aleatorio basado en la cantidad de amigos en la lista.

Aquí un fragmento del código que lo hace posible:

```javascript
function sortearAmigo() {
    // Valida que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Muestra el resultado en pantalla
    mostrarResultado(amigoSeleccionado);
}
```

---

*Este proyecto fue desarrollado como parte de un desafío para fortalecer habilidades en lógica de programación.*