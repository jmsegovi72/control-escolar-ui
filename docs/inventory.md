# Inventario UI Listo Para Migracion

Este documento resume la primera base del almacen `control-escolar-ui`.

La regla sigue igual: antes de crear UI en la app real, buscamos aqui. Si falta una pieza reutilizable, nace aqui, se prueba en `/ui` y despues se lleva a Control Escolar.

## Rutas De Revision

```txt
http://127.0.0.1:5174/ui/
http://127.0.0.1:5174/ui-dashboard/
```

`/ui` sirve para revisar componentes aislados. `/ui-dashboard` sirve para comprobar como conviven en una pantalla administrativa realista.

## Primitives

Componentes base, pequenos y reutilizables.

| Componente | Uso |
| --- | --- |
| `Button` | Acciones principales, secundarias, peligrosas, loading e iconos. |
| `IconButton` | Acciones compactas con etiqueta accesible. |
| `Input` | Campos `line`, `box` y `quiet`, con iconos y estados. |
| `DateInput` | Campo base de fecha escolar. |
| `Field` | Label, requerido, ayuda y error. |
| `Select` | Lista cerrada con dropdown propio. |
| `Checkbox` | Seleccion binaria. |
| `RadioGroup` | Seleccion unica clasica. |
| `ChoiceGroup` | Seleccion unica tipo tira o tarjeta. |
| `Textarea` | Texto largo. |
| `Badge` | Indicadores breves de estado. |
| `Panel` | Contenedor de trabajo. |

## Composed

Componentes que combinan varias piezas base.

| Componente | Uso |
| --- | --- |
| `Accordion` | Secciones expandibles con animacion suave. |
| `SearchSelect` | Busqueda y seleccion real desde una lista. |
| `DateRangeInput` | Rango de fechas para filtros y reportes. |
| `Tabs` | Pestañas para expedientes o configuracion. |
| `Dialog` | Modal para avisos y flujos cortos. |
| `DropdownMenu` | Menu compacto para acciones. |
| `Toast` | Notificacion breve. |
| `EmptyState` | Estado sin datos. |
| `Skeleton` | Estado de carga. |
| `Tooltip` | Ayuda breve en controles compactos. |
| `FileUpload` | Carga de documentos y CSV por lote. |
| `UserMenu` | Perfil, sesion y acciones de usuario. |
| `NotificationCenter` | Centro de avisos con contador y acciones. |
| `DetailDrawer` | Panel lateral para ver o editar sin perder contexto. |
| `SystemHealth` | Semaforos de API, BD, sesion y procesos. |

## Patterns

Patrones de producto para pantallas reales.

| Componente | Uso |
| --- | --- |
| `Breadcrumbs` | Ubicacion dentro del sistema. |
| `PageHeader` | Encabezado de modulo con acciones. |
| `DataTable` | Tabla con filtros, seleccion, acciones y paginacion. |
| `Sidebar` | Navegacion principal con usuario y estado operativo. |
| `AppShell` | Marco de pantalla con sidebar, header, toolbar y contenido. |
| `StatCard` | Metrica compacta para dashboards. |
| `Stepper` | Progreso para procesos largos. |
| `ConfirmAction` | Confirmacion para acciones delicadas. |
| `Toolbar` | Busqueda, filtros y acciones de modulo. |

## Componentes Clave Para Refactorizar Control Escolar

Para una pantalla tipica de alumnos:

1. `AppShell`
2. `Sidebar`
3. `PageHeader`
4. `Toolbar`
5. `DataTable`
6. `DetailDrawer`
7. `Field`, `Input`, `Select`, `DateInput`
8. `NotificationCenter`
9. `SystemHealth`

Para cargas masivas:

1. `FileUpload`
2. `Stepper`
3. `DataTable`
4. `Toast`
5. `NotificationCenter`

Para seguridad y sesion:

1. `UserMenu`
2. `SystemHealth`
3. `Toast`
4. `ConfirmAction`

## Proximos Candidatos

Estos componentes pueden aparecer cuando empecemos la app real:

- `PermissionGate`: representar acciones ocultas o deshabilitadas por permiso.
- `FormSection`: grupos de campos con acciones y validacion visual.
- `RecordSummary`: resumen compacto de una persona, alumno o docente.
- `ImportReviewTable`: tabla especializada para errores de CSV.
- `ActivityTimeline`: historial de cambios del expediente.

No se crean hasta que una pantalla real los pida.
