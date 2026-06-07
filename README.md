# Control Escolar UI

Almacen de componentes visuales para la refactorizacion de Control Escolar.

Este proyecto no es la app final. Es la biblioteca donde disenamos, probamos y documentamos los componentes antes de llevarlos a la aplicacion real.

## Objetivo

- Crear componentes UI puros, configurables y reutilizables.
- Evitar estilos improvisados pantalla por pantalla.
- Probar cada pieza en `/ui` antes de usarla en modulos reales.
- Mantener una base visual consistente para formularios, tablas, navegacion y pantallas administrativas.

## Flujo De Trabajo

1. En la app real aparece una necesidad visual o de interaccion.
2. Primero buscamos si el componente ya existe en este almacen.
3. Si existe, lo usamos configurando props.
4. Si no existe, lo creamos aqui como componente puro.
5. Lo documentamos y lo probamos visualmente en `/ui`.
6. Cuando este aprobado, lo llevamos a la app real.

Mas detalle en [docs/workflow.md](docs/workflow.md).

## Organizacion

```txt
src/ui/
  styles/      tokens, reset, temas y movimiento
  icons/       iconos semanticos por intencion
  primitives/  piezas base como Button, Input, Field, Select
  composed/    componentes compuestos como SearchSelect
  patterns/    patrones de producto como DataTable, Sidebar y AppShell
```

## Preview

La galeria visual vive en:

```txt
http://127.0.0.1:5174/ui/
```

La demo de pantalla completa vive en:

```txt
http://127.0.0.1:5174/ui-dashboard/
```

`/ui` sirve para revisar componentes aislados. `/ui-dashboard` sirve para comprobar si las piezas juntas ya se sienten como una pantalla real de Control Escolar.

El servidor de desarrollo usa el puerto `5174`.

## Validacion

```shell
npm.cmd run lint
npm.cmd run build.types
```
