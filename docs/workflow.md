# Flujo De Trabajo UI

Este repositorio funciona como almacen visual para Control Escolar.

La regla principal: la app real no debe inventar estilos ni componentes de forma aislada. Si una pieza puede servir a mas de una pantalla, primero nace o se mejora aqui.

## Como Decidimos Donde Va Una Pieza

| Caso | Decision |
| --- | --- |
| Es una pieza base reutilizable | Va en `src/ui/primitives`. |
| Combina varias piezas base | Va en `src/ui/composed`. |
| Define una estructura de pantalla o producto | Va en `src/ui/patterns`. |
| Solo sirve a una pantalla especifica | Puede quedarse en la app real. |
| Empieza especifica pero se repite | Se sube a este almacen. |

## Ciclo De Construccion

1. Platicar el caso de uso.
2. Definir props, estados y comportamiento.
3. Crear el componente en el nivel correcto.
4. Agregarlo a `/ui` como `Revision actual`.
5. Revisar visualmente y ajustar.
6. Documentar uso y criterio.
7. Validar con lint y tipos.
8. Llevarlo a la app real cuando ya este aprobado.

## Criterio Tecnico

- Los componentes no deben conocer rutas reales, permisos reales ni datos de negocio.
- La app real calcula estado, permisos, sesion, rutas y datos.
- La UI library solo recibe props y representa el estado de forma consistente.
- Los iconos se eligen por intencion semantica usando `AppIcon`, no por icono suelto.
- Los colores, espacios, radios y animaciones deben venir de tokens.

## Ejemplo

Si la app real necesita una pantalla de alumnos:

1. Buscamos `AppShell`, `Sidebar`, `DataTable`, `Field`, `Input`, `SearchSelect`.
2. Si falta un filtro especial, lo creamos aqui.
3. Lo probamos en `/ui`.
4. Luego lo conectamos en la app real con datos y servicios.

## Commits

No hacemos commit por cada ajuste pequeno.

Hacemos commit cuando:

- se termina un componente completo,
- se cierra un bloque de trabajo,
- se va a cambiar de tema importante,
- o el usuario pide guardar avance.
