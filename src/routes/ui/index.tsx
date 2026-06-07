import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { AppIcon } from "~/ui/icons";
import {
  Accordion,
  Badge,
  Button,
  Checkbox,
  ChoiceGroup,
  DataTable,
  Field,
  IconButton,
  Input,
  Panel,
  PageHeader,
  RadioGroup,
  SearchSelect,
  Select,
  Sidebar,
  Textarea,
} from "~/ui";

type StudentPreview = {
  id: number;
  name: string;
  enrollment: string;
  group: string;
  status: string;
};

const studentRows: StudentPreview[] = [
  {
    id: 1,
    name: "Daniela Ruiz Perez",
    enrollment: "CE-2026-001",
    group: "A",
    status: "Activo",
  },
  {
    id: 2,
    name: "Luis Garcia Torres",
    enrollment: "CE-2026-002",
    group: "B",
    status: "Pendiente",
  },
  {
    id: 3,
    name: "Mariana Lopez Sanchez",
    enrollment: "CE-2026-003",
    group: "A",
    status: "Baja",
  },
];

export default component$(() => {
  return (
    <main class="app-frame">
      <div class="page-shell">
        <span class="page-kicker">Biblioteca visual</span>
        <h1 class="page-title">Componentes base antes de pantallas.</h1>
        <p class="page-copy">
          Esta ruta es nuestro taller: aqui revisamos estados, tamanos,
          respiracion y consistencia antes de usar piezas en modulos reales.
        </p>

        <PageHeader
          eyebrow="Revision actual"
          title="Sidebar"
          description="Navegacion principal configurable con marca, reloj, avatar, secciones y acciones inferiores."
          meta="Pattern"
        >
          <Button q:slot="actions" iconLeft="add">
            Nuevo alumno
          </Button>
          <Button q:slot="actions" variant="secondary" iconLeft="filter">
            Filtros
          </Button>
        </PageHeader>

        <Panel eyebrow="Revision actual" title="Sidebar: navegacion de producto">
          <div class="showcase-grid">
            <Sidebar
              brand={{
                name: "Control Escolar",
                shortName: "CE",
                subtitle: "Instituto Central",
              }}
              activeItem="students"
              clock={{
                label: "Turno matutino",
                time: "08:45",
                date: "Lunes 7 de junio",
              }}
              user={{
                name: "Mac Segovia",
                role: "Administrador",
                status: "Sesion activa",
              }}
              sections={[
                {
                  id: "main",
                  label: "Operacion escolar",
                  items: [
                    { id: "dashboard", label: "Inicio", icon: "dashboard" },
                    {
                      id: "students",
                      label: "Alumnos",
                      icon: "student",
                      badge: 12,
                      children: [
                        {
                          id: "admission",
                          label: "Admision",
                          icon: "add",
                        },
                        {
                          id: "groups",
                          label: "Grupos",
                          icon: "group",
                        },
                      ],
                    },
                    { id: "teachers", label: "Docentes", icon: "teacher" },
                    { id: "classes", label: "Clases", icon: "class" },
                  ],
                },
                {
                  id: "admin",
                  label: "Administracion",
                  items: [
                    { id: "schedule", label: "Ciclos escolares", icon: "schedule" },
                    { id: "users", label: "Usuarios", icon: "user-settings" },
                    { id: "reports", label: "Reportes", icon: "download" },
                  ],
                },
              ]}
              footerItems={[
                { id: "settings", label: "Configuracion", icon: "settings" },
                { id: "logout", label: "Cerrar sesion", icon: "logout" },
              ]}
            />

            <Sidebar
              collapsed
              brand={{
                name: "Control Escolar",
                shortName: "CE",
                subtitle: "Instituto Central",
              }}
              activeItem="students"
              clock={{
                label: "Turno matutino",
                time: "08:45",
                date: "Lunes 7 de junio",
              }}
              user={{
                name: "Mac Segovia",
                role: "Administrador",
              }}
              sections={[
                {
                  id: "compact-main",
                  items: [
                    { id: "dashboard", label: "Inicio", icon: "dashboard" },
                    { id: "students", label: "Alumnos", icon: "student", badge: 12 },
                    { id: "teachers", label: "Docentes", icon: "teacher" },
                    { id: "classes", label: "Clases", icon: "class" },
                    { id: "users", label: "Usuarios", icon: "user-settings" },
                  ],
                },
              ]}
              footerItems={[
                { id: "settings", label: "Configuracion", icon: "settings" },
                { id: "logout", label: "Cerrar sesion", icon: "logout" },
              ]}
            />
          </div>
        </Panel>

        <Panel eyebrow="Revision actual" title="ChoiceGroup: tira de opciones">
          <div class="stack">
            <Field label="Turno" required>
              <ChoiceGroup
                name="choice-shift"
                value="morning"
                required
                options={[
                  { value: "morning", label: "Matutino" },
                  { value: "evening", label: "Vespertino" },
                  { value: "mixed", label: "Mixto" },
                ]}
              />
            </Field>

            <Field label="Zona" hint="La opcion completa funciona como seleccion.">
              <ChoiceGroup
                name="choice-zone"
                direction="column"
                value="urban"
                options={[
                  {
                    value: "urban",
                    label: "Urbano",
                    description: "Localidades con mayor densidad.",
                  },
                  {
                    value: "rural",
                    label: "Rural",
                    description: "Comunidades con menor densidad.",
                  },
                ]}
              />
            </Field>
          </div>
        </Panel>

        <Panel eyebrow="RadioGroup" title="Opcion unica clasica">
          <div class="stack">
            <Field label="Turno" required>
              <RadioGroup
                name="shift"
                direction="row"
                value="morning"
                required
                options={[
                  { value: "morning", label: "Matutino" },
                  { value: "evening", label: "Vespertino" },
                  { value: "mixed", label: "Mixto" },
                ]}
              />
            </Field>

            <Field label="Zona" hint="Solo una opcion puede estar activa.">
              <RadioGroup
                name="zone"
                options={[
                  {
                    value: "urban",
                    label: "Urbano",
                    description: "Localidades con mayor densidad.",
                  },
                  {
                    value: "rural",
                    label: "Rural",
                    description: "Comunidades con menor densidad.",
                  },
                ]}
              />
            </Field>

            <RadioGroup
              name="invalid-demo"
              invalid
              options={[
                { value: "yes", label: "Si" },
                { value: "no", label: "No" },
              ]}
            />
          </div>
        </Panel>

        <Panel eyebrow="Textarea" title="Texto largo">
          <div class="stack">
            <Field label="Observaciones" hint="Texto libre para notas internas.">
              <Textarea
                variant="box"
                placeholder="Escribe observaciones relevantes..."
              />
            </Field>

            <Field label="Motivo de baja" error="El motivo es obligatorio.">
              <Textarea
                variant="line"
                invalid
                placeholder="Describe el motivo..."
              />
            </Field>

            <Textarea
              variant="quiet"
              rows={3}
              placeholder="Comentario rapido..."
            />
          </div>
        </Panel>

        <Panel
          eyebrow="Revision actual"
          title="SearchSelect: busqueda con seleccion"
          description="El texto escrito no basta cuando required esta activo; debe existir un value seleccionado."
        >
          <div class="stack">
            <Field
              label="Alumno"
              hint="Escribe para filtrar y selecciona una opcion real."
              required
            >
              <SearchSelect
                required
                placeholder="Buscar alumno..."
                options={[
                  {
                    value: "student-1",
                    label: "Daniela Ruiz Perez",
                    description: "CE-2026-001 · Grupo A",
                  },
                  {
                    value: "student-2",
                    label: "Luis Garcia Torres",
                    description: "CE-2026-002 · Grupo B",
                  },
                  {
                    value: "student-3",
                    label: "Mariana Lopez Sanchez",
                    description: "CE-2026-003 · Grupo A",
                  },
                ]}
              />
            </Field>

            <SearchSelect
              variant="box"
              iconLeft="teacher"
              placeholder="Buscar docente..."
              options={[
                {
                  value: "teacher-1",
                  label: "Dra. Ana Mendoza",
                  description: "Matematicas · Tiempo completo",
                },
                {
                  value: "teacher-2",
                  label: "Mtro. Carlos Ortega",
                  description: "Historia · Asignatura",
                },
              ]}
            />

            <div class="showcase-grid">
              <SearchSelect
                loading
                placeholder="Buscando..."
                options={[]}
              />
              <SearchSelect
                query="Sin resultados"
                emptyMessage="No hay coincidencias"
                options={[]}
              />
              <SearchSelect
                disabled
                placeholder="Deshabilitado"
                options={[]}
              />
              <SearchSelect
                invalid
                placeholder="Estado invalido"
                options={[
                  {
                    value: "invalid-1",
                    label: "Opcion disponible",
                  },
                ]}
              />
              <SearchSelect
                value="student-2"
                query="Luis Garcia Torres"
                placeholder="Seleccionado"
                options={[
                  {
                    value: "student-2",
                    label: "Luis Garcia Torres",
                    description: "CE-2026-002 · Grupo B",
                  },
                ]}
              />
              <SearchSelect
                placeholder="Lista larga..."
                options={[
                  { value: "g1", label: "Grupo A", description: "1 semestre" },
                  { value: "g2", label: "Grupo B", description: "1 semestre" },
                  { value: "g3", label: "Grupo C", description: "2 semestre" },
                  { value: "g4", label: "Grupo D", description: "2 semestre" },
                  { value: "g5", label: "Grupo E", description: "3 semestre" },
                  { value: "g6", label: "Grupo F", description: "3 semestre" },
                  { value: "g7", label: "Grupo G", description: "4 semestre" },
                  { value: "g8", label: "Grupo H", description: "4 semestre" },
                ]}
              />
            </div>
          </div>
        </Panel>

        <DataTable
          searchable
          hasActiveFilters
          selectable
          searchPlaceholder="Buscar alumno..."
          rows={studentRows}
          columns={[
            {
              key: "name",
              label: "Alumno",
              sortable: true,
              filter: { type: "text", placeholder: "Filtrar alumno" },
            },
            {
              key: "enrollment",
              label: "Matricula",
              width: "140px",
              filter: { type: "text", placeholder: "Matricula" },
            },
            {
              key: "group",
              label: "Grupo",
              align: "center",
              width: "110px",
              filter: {
                type: "select",
                placeholder: "Todos",
                options: [
                  { value: "a", label: "Grupo A" },
                  { value: "b", label: "Grupo B" },
                ],
              },
            },
            {
              key: "status",
              label: "Estado",
              align: "center",
              width: "120px",
              badge: {
                toneMap: {
                  Activo: "success",
                  Pendiente: "warning",
                  Baja: "danger",
                },
              },
              filter: {
                type: "select",
                placeholder: "Todos",
                options: [
                  { value: "active", label: "Activo" },
                  { value: "pending", label: "Pendiente" },
                  { value: "inactive", label: "Baja" },
                ],
              },
            },
          ]}
          actions={[
            {
              label: "Ver detalle",
              icon: "view",
            },
            {
              label: "Editar",
              icon: "edit",
            },
            {
              label: "Activar / Desactivar",
              icon: "toggle",
            },
            {
              label: "Eliminar",
              icon: "delete",
              tone: "danger",
            },
          ]}
          pagination={{ page: 1, limit: 10, total: 32 }}
          pageSizeOptions={[10, 15, 30, 50]}
        />

        <div class="showcase-grid">
          <Panel eyebrow="Formulario" title="Alta de alumno">
            <div class="stack">
              <Field label="Nombre completo" required hint="Usa nombre y apellidos.">
                <Input placeholder="Ej. Daniela Ruiz Perez" variant="line" />
              </Field>

              <Field label="Matricula" error="La matricula es obligatoria.">
                <Input
                  placeholder="CE-2026-001"
                  variant="line"
                  invalid
                  iconLeft="student"
                />
              </Field>

              <Checkbox checked>Activar expediente academico</Checkbox>

              <div class="inline-stack">
                <Button>Guardar</Button>
                <Button variant="secondary">Cancelar</Button>
                <Button variant="ghost">Limpiar</Button>
              </div>
            </div>
          </Panel>

          <div class="stack">
            <Panel
              eyebrow="Revision actual"
              title="Panel: contenedor de trabajo"
              description="Agrupa contenido relacionado sin convertir toda la pantalla en tarjetas."
            >
              <Button q:slot="actions" size="sm" iconLeft="add">
                Nuevo
              </Button>
              <div class="stack">
                <Field label="Nombre de la seccion">
                  <Input variant="line" placeholder="Ej. Datos academicos" />
                </Field>
                <div class="inline-stack">
                  <Badge tone="success">Activo</Badge>
                  <Badge tone="info">Configurado</Badge>
                </div>
              </div>
            </Panel>

            <Panel
              eyebrow="Panel"
              title="Variante compacta"
              description="Para filtros, resumenes o bloques con menos espacio."
              variant="subtle"
              density="compact"
            >
              <div class="inline-stack">
                <Select
                  variant="quiet"
                  size="sm"
                  placeholder="Estado"
                  options={[
                    { value: "active", label: "Activo" },
                    { value: "inactive", label: "Inactivo" },
                  ]}
                />
                <Button size="sm" variant="secondary" iconLeft="filter">
                  Filtrar
                </Button>
              </div>
            </Panel>

            <Panel eyebrow="Badge" title="Estados">
              <div class="stack">
                <div class="inline-stack">
                  <Badge>Neutral</Badge>
                  <Badge tone="primary">Principal</Badge>
                  <Badge tone="success">Activo</Badge>
                  <Badge tone="warning">Pendiente</Badge>
                  <Badge tone="danger">Error</Badge>
                  <Badge tone="info">Registrado</Badge>
                </div>

                <div class="inline-stack">
                  <Badge size="sm" tone="success">
                    SM activo
                  </Badge>
                  <Badge size="sm" tone="warning">
                    SM pendiente
                  </Badge>
                  <Badge size="sm" tone="danger">
                    SM vencido
                  </Badge>
                </div>
              </div>
            </Panel>

            <Panel eyebrow="Select" title="Lista cerrada">
              <div class="stack">
                <Field label="Ciclo escolar" required>
                  <Select
                    variant="line"
                    iconLeft="schedule"
                    placeholder="Selecciona un ciclo"
                    options={[
                      { value: "2025-2026", label: "2025-2026" },
                      { value: "2026-2027", label: "2026-2027" },
                    ]}
                  />
                </Field>

                <Select
                  variant="box"
                  iconLeft="student"
                  placeholder="Selecciona semestre"
                  options={[
                    { value: "1", label: "1 semestre" },
                    { value: "2", label: "2 semestre" },
                    { value: "3", label: "3 semestre" },
                  ]}
                />

                <Select
                  variant="quiet"
                  size="sm"
                  iconLeft="filter"
                  placeholder="Filtrar estado"
                  options={[
                    { value: "active", label: "Activo" },
                    { value: "inactive", label: "Inactivo" },
                  ]}
                />

                <Select
                  variant="line"
                  invalid
                  placeholder="Estado invalido"
                  options={[{ value: "missing", label: "Sin seleccionar" }]}
                />

                <Select
                  variant="line"
                  disabled
                  placeholder="Deshabilitado"
                  options={[{ value: "locked", label: "Bloqueado" }]}
                />

                <Select
                  variant="line"
                  placeholder="Sin icono"
                  options={[
                    { value: "morning", label: "Matutino" },
                    { value: "evening", label: "Vespertino" },
                    { value: "mixed", label: "Mixto" },
                  ]}
                />

                <Select
                  variant="box"
                  placeholder="Lista larga con scroll"
                  iconLeft="group"
                  options={[
                    { value: "a", label: "Grupo A" },
                    { value: "b", label: "Grupo B" },
                    { value: "c", label: "Grupo C" },
                    { value: "d", label: "Grupo D" },
                    { value: "e", label: "Grupo E" },
                    { value: "f", label: "Grupo F" },
                    { value: "g", label: "Grupo G" },
                    { value: "h", label: "Grupo H" },
                    { value: "i", label: "Grupo I" },
                    { value: "j", label: "Grupo J" },
                  ]}
                />
              </div>
            </Panel>

            <Panel eyebrow="Checkbox" title="Seleccion binaria">
              <div class="stack">
                <Checkbox>Activar expediente academico</Checkbox>
                <Checkbox checked>Notificar al tutor</Checkbox>
                <Checkbox invalid>Requiere autorizacion antes de continuar</Checkbox>
                <Checkbox disabled>Opcion bloqueada por permisos</Checkbox>
                <div class="inline-stack">
                  <Checkbox size="sm">SM</Checkbox>
                  <Checkbox size="md">MD</Checkbox>
                  <Checkbox size="lg">LG</Checkbox>
                </div>
              </div>
            </Panel>

            <Panel eyebrow="Field" title="Contexto de formulario">
              <div class="stack">
                <Field
                  label="Correo institucional"
                  hint="Usa el correo asignado por la escuela."
                  required
                >
                  <Input variant="line" iconLeft="mail" placeholder="correo@escuela.edu" />
                </Field>

                <Field label="Telefono" optional>
                  <Input variant="line" iconLeft="phone" placeholder="Opcional" />
                </Field>

                <Field label="CURP" error="La CURP no tiene el formato correcto.">
                  <Input variant="box" placeholder="GOAC850101HCCHRL09" invalid />
                </Field>

                <Field
                  label="Filtro compacto"
                  hint="Para barras de herramientas."
                  variant="compact"
                >
                  <Input variant="quiet" iconLeft="search" placeholder="Buscar..." size="sm" />
                </Field>
              </div>
            </Panel>

            <Panel eyebrow="Input" title="Variantes">
              <div class="stack">
                <Input placeholder="Linea animada" variant="line" iconLeft="mail" />
                <Input placeholder="Caja completa" variant="box" iconLeft="person" />
                <Input placeholder="Filtro discreto" variant="quiet" iconLeft="search" />
                <div class="inline-stack">
                  <Input placeholder="SM" size="sm" variant="box" />
                  <Input placeholder="MD" size="md" variant="box" />
                  <Input placeholder="LG" size="lg" variant="box" />
                </div>
                <Input placeholder="Deshabilitado" variant="line" disabled />
              </div>
            </Panel>

            <Panel eyebrow="Input line" title="Combinaciones">
              <div class="stack">
                <Input placeholder="Sin icono" variant="line" />
                <Input
                  placeholder="Icono izquierdo"
                  variant="line"
                  iconLeft="person"
                />
                <Input
                  placeholder="Icono derecho"
                  variant="line"
                  iconRight="check"
                />
                <Input
                  placeholder="Ambos iconos"
                  variant="line"
                  iconLeft="mail"
                  iconRight="check"
                />
                <Input
                  placeholder="Estado invalido"
                  variant="line"
                  iconLeft="warning"
                  invalid
                />
                <Input placeholder="Solo lectura" variant="line" readOnly />
                <Input placeholder="Deshabilitado" variant="line" disabled />
              </div>
            </Panel>

            <Panel eyebrow="Iconos" title="Intenciones">
              <div class="stack">
                <div class="inline-stack">
                  <AppIcon intent="view" />
                  <AppIcon intent="edit" />
                  <AppIcon intent="delete" />
                  <AppIcon intent="save" />
                  <AppIcon intent="search" />
                </div>

                <div class="inline-stack">
                  <AppIcon intent="person" context="default" />
                  <AppIcon intent="person" context="students" />
                  <AppIcon intent="person" context="teachers" />
                  <AppIcon intent="person" context="users" />
                </div>
              </div>
            </Panel>

            <Panel eyebrow="Botones" title="Variantes">
              <div class="stack">
                <div class="inline-stack">
                  <Button size="sm" iconLeft="save">
                    Primario
                  </Button>
                  <Button size="sm" variant="secondary">
                    Secundario
                  </Button>
                  <Button size="sm" variant="success" iconLeft="check">
                    Exito
                  </Button>
                  <Button size="sm" variant="warning" iconLeft="warning">
                    Aviso
                  </Button>
                  <Button size="sm" variant="danger" iconLeft="delete">
                    Riesgo
                  </Button>
                  <Button size="sm" variant="ghost" iconLeft="edit">
                    Ligero
                  </Button>
                  <Button size="sm" variant="link" iconRight="view">
                    Enlace
                  </Button>
                </div>

                <div class="inline-stack">
                  <Button size="xs">XS</Button>
                  <Button size="sm">SM</Button>
                  <Button size="md">MD</Button>
                  <Button size="lg">LG</Button>
                  <Button size="xl">XL</Button>
                </div>

                <div class="inline-stack">
                  <Button iconLeft="save">Con icono</Button>
                  <Button iconRight="view" variant="secondary">
                    Icono derecho
                  </Button>
                  <Button iconLeft="edit" iconRight="view" variant="ghost">
                    Ambos
                  </Button>
                </div>

                <div class="inline-stack">
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                  <Button active variant="secondary">
                    Activo
                  </Button>
                </div>

                <div class="inline-stack">
                  <IconButton label="Ver detalle" icon="view" />
                  <IconButton label="Editar" icon="edit" variant="secondary" />
                  <IconButton label="Eliminar" icon="delete" variant="danger" />
                  <IconButton label="Buscar" icon="search" variant="ghost" />
                </div>

                <Button fullWidth iconLeft="add">
                  Boton de ancho completo para flujo principal
                </Button>
              </div>
            </Panel>

            <Accordion title="Criterio visual" open>
              Sobrio, claro y mantenible. Nada depende de colores sueltos por
              pantalla: todo nace de tokens y variantes.
            </Accordion>

            <Accordion title="Siguiente pieza">
              Despues conviene crear Select, Badge y una tabla de datos compacta
              para modulos como alumnos, docentes y pagos.
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "UI | Control Escolar V1",
  meta: [
    {
      name: "description",
      content: "Galeria de componentes base para Control Escolar V1",
    },
  ],
};
