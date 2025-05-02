# Trabajo práctico N°3

Este proyecto consiste en una aplicación web de Lista de Tareas (To-Do List)
construida utilizando React y Vite. El propósito fundamental de la aplicación
es ofrecer a los usuarios una interfaz para gestionar sus tareas pendientes.

## Funcionalidades clave

**Agregar Tareas:** Un campo de texto y un botón "Agregar" permiten al usuario
añadir nuevas tareas a la lista.
**Visualizar Tareas:** Las tareas se muestran en una lista.
**Marcar como Completadas:** Cada tarea tendrá una opción para marcarla como
finalizada.
**Eliminar Tareas:** Un botón "Eliminar" junto a cada tarea permite quitarla de
la lista.

## Arquitectura y Tecnologías Utilizadas

El desarrollo se basa en tecnologías web modernas:

- **Framework/Librería:** React se utiliza como la librería principal para
  construir la interfaz de usuario.
- **Entorno de Desarrollo:** Vite proporciona un entorno de desarrollo rápido y
  optimizado.
- **Lenguaje de Plantillas:** JSX se emplea para definir la estructura de los
  componentes de React de manera declarativa.
- **Gestión de Estado:** El hook `useState` de React se utiliza para manejar el
  estado local de la aplicación, como la lista de tareas actual y el valor del
  campo de entrada.
- **Componentes Reutilizables:** La aplicación está estructurada en componentes
  modulares y reutilizables para una mejor organización y mantenibilidad:
- `TaskInput`: Componente responsable del formulario para añadir nuevas
  tareas.
- `TaskItem`: Componente que representa una única tarea en la lista,
  incluyendo sus controles (marcar como completada, eliminar).
  `TaskList`: Componente encargado de renderizar la lista completa de
  `TaskItem`.

## Resumen

Es una aplicación básica de "To-Do" que sirve para aplicar conceptos
fundamentales de React como componentes, props y manejo de estado, siguiendo
una estructura organizada y escalable. La interfaz visual, como se ve en la
imagen, es simple y directa, mostrando el título, el formulario de entrada y
la lista de tareas con sus respectivos botones de acción.

## 👥 Integrantes

- **[Alfredo Ezequiel Gonzalez Lopez](https://github.com/Ezequiel12354s)**
- **[Axel Enrique Galeed Gutierrez](https://github.com/GaleedGutierrez)**
- **[Enzo Isaías Condori](https://github.com/isaiahOZ)**
- **[Franklin Fernando Alexander Vazquez](https://github.com/VasquezFranklin)**
- **[Tomas Leandro Tastaca Gutierrez](https://github.com/TomasTastaca)**
