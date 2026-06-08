import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { AppIcon } from "~/ui/icons";
import {
  Accordion,
  AppShell,
  Badge,
  Breadcrumbs,
  Button,
  Checkbox,
  ChoiceGroup,
  ConfirmAction,
  DataTable,
  DateInput,
  DateRangeInput,
  DetailDrawer,
  Dialog,
  DropdownMenu,
  EmptyState,
  FileUpload,
  Field,
  IconButton,
  Input,
  NotificationCenter,
  Panel,
  PageHeader,
  RadioGroup,
  SearchSelect,
  Select,
  Sidebar,
  Skeleton,
  StatCard,
  Stepper,
  Tabs,
  Textarea,
  Toast,
  Tooltip,
  Toolbar,
  UserMenu,
  componentCategories,
  componentRegistry,
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

const registryGroups = Object.entries(componentCategories).map(
  ([category, label]) => ({
    category,
    label,
    items: componentRegistry.filter((item) => item.category === category),
  }),
);

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

        <Panel eyebrow="Catalogo" title="Registro de componentes">
          <div class="stack">
            <div class="showcase-grid">
              {registryGroups.map((group) => (
                <StatCard
                  key={group.category}
                  label={group.label}
                  value={group.items.length}
                  description="componentes listos"
                  icon={
                    group.category === "primitive"
                      ? "settings"
                      : group.category === "composed"
                        ? "group"
                        : "dashboard"
                  }
                  tone={
                    group.category === "primitive"
                      ? "info"
                      : group.category === "composed"
                        ? "primary"
                        : "success"
                  }
                />
              ))}
            </div>

            <div class="registry-list">
              {registryGroups.map((group) => (
                <section class="registry-group" key={group.category}>
                  <header class="registry-group__header">
                    <h2>{group.label}</h2>
                    <Badge tone="info" size="sm">
                      {group.items.length} listos
                    </Badge>
                  </header>

                  <div class="registry-group__items">
                    {group.items.map((item) => (
                      <article class="registry-item" key={item.id}>
                        <div class="registry-item__main">
                          <strong>{item.name}</strong>
                          <span>{item.description}</span>
                        </div>
                        <Badge tone="success" size="sm">
                          {item.status}
                        </Badge>
                        <code>{item.importPath}</code>
                        {item.docsPath && <small>{item.docsPath}</small>}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Panel>

        <PageHeader
          eyebrow="Revision actual"
          title="DetailDrawer"
          description="Panel lateral para ver o editar un registro desde una tabla sin perder el contexto de la pantalla."
          meta="Composed"
        />

        <DetailDrawer
          open
          presentation="inline"
          title="Daniela Ruiz Perez"
          description="Expediente CE-2026-001 con datos principales, estado documental y acciones rapidas."
          meta="Alumno activo"
          icon="student"
          tone="info"
        >
          <Button q:slot="actions" size="sm" variant="ghost" iconLeft="edit">
            Editar
          </Button>

          <div class="stack">
            <div class="showcase-grid">
              <StatCard
                label="Grupo"
                value="1A"
                description="Turno matutino"
                icon="group"
                tone="info"
              />
              <StatCard
                label="Documentos"
                value="Completo"
                description="Sin pendientes"
                icon="success"
                tone="success"
              />
            </div>

            <Panel
              eyebrow="Datos"
              title="Informacion principal"
              variant="subtle"
              density="compact"
            >
              <div class="stack">
                <Field label="Nombre completo">
                  <Input value="Daniela Ruiz Perez" variant="line" readOnly />
                </Field>
                <Field label="Matricula">
                  <Input value="CE-2026-001" variant="line" readOnly />
                </Field>
                <Field label="Correo institucional">
                  <Input
                    value="daniela.ruiz@escuela.edu"
                    variant="line"
                    iconLeft="mail"
                    readOnly
                  />
                </Field>
              </div>
            </Panel>
          </div>

          <Button q:slot="footer" variant="secondary">
            Cancelar
          </Button>
          <Button q:slot="footer" iconLeft="save">
            Guardar cambios
          </Button>
        </DetailDrawer>

        <PageHeader
          eyebrow="Revision actual"
          title="NotificationCenter"
          description="Centro de avisos con contador, lista de eventos, estados no leidos y acciones por notificacion."
          meta="Composed"
        />

        <Panel eyebrow="Revision actual" title="NotificationCenter: avisos del sistema">
          <div class="stack">
            <div class="inline-stack">
              <NotificationCenter
                unreadCount={12}
                items={[
                  {
                    id: "session",
                    title: "Sesion por expirar",
                    description: "Quedan 14 minutos antes de cerrar la sesion.",
                    tone: "warning",
                    icon: "lock",
                    time: "Hace 2 min",
                    unread: true,
                    actionLabel: "Renovar",
                  },
                  {
                    id: "csv",
                    title: "CSV validado",
                    description: "128 alumnos listos para importar.",
                    tone: "success",
                    icon: "upload",
                    time: "Hace 8 min",
                    unread: true,
                    actionLabel: "Ver lote",
                  },
                  {
                    id: "documents",
                    title: "Documentos pendientes",
                    description: "42 expedientes requieren revision.",
                    tone: "info",
                    icon: "warning",
                    time: "Hoy 09:20",
                  },
                  {
                    id: "backend",
                    title: "Backend lento",
                    description: "La API respondio en 1.8 segundos.",
                    tone: "danger",
                    icon: "warning",
                    time: "Ayer 18:10",
                    actionLabel: "Diagnostico",
                  },
                ]}
              />

              <NotificationCenter
                size="sm"
                align="start"
                title="Avisos compactos"
                maxItems={2}
                unreadCount={22}
                items={[
                  {
                    id: "db",
                    title: "BD activa",
                    description: "36 ms de respuesta.",
                    tone: "success",
                    time: "Ahora",
                  },
                  {
                    id: "jobs",
                    title: "Lotes pendientes",
                    description: "2 archivos esperan validacion.",
                    tone: "warning",
                    unread: true,
                    time: "Ahora",
                  },
                ]}
              />

              <NotificationCenter
                title="Sin avisos"
                items={[]}
                emptyTitle="Todo revisado"
                emptyDescription="No hay alertas activas en este momento."
              />
            </div>
          </div>
        </Panel>

        <PageHeader
          eyebrow="Revision actual"
          title="UserMenu"
          description="Menu profesional de cuenta: avatar, rol, sesion, perfil, seguridad, preferencias y cierre de sesion."
          meta="Composed"
        />

        <Panel eyebrow="Revision actual" title="UserMenu: cuenta y acciones">
          <div class="stack">
            <div class="inline-stack">
              <UserMenu
                user={{
                  name: "Mac Segovia",
                  role: "Administrador",
                  initials: "MS",
                  status: "Sesion protegida",
                  meta: "Ultimo acceso: hoy 09:48",
                }}
                sessionLabel="La sesion expira en 14:32"
                actions={[
                  { type: "label", id: "account", label: "Cuenta" },
                  { id: "profile", label: "Ver perfil", icon: "person" },
                  {
                    id: "password",
                    label: "Cambiar contraseña",
                    icon: "lock",
                  },
                  {
                    id: "preferences",
                    label: "Preferencias",
                    icon: "settings",
                  },
                  { type: "separator", id: "security-separator" },
                  {
                    id: "reset-login",
                    label: "Resetear login",
                    icon: "login-reset",
                    tone: "warning",
                  },
                  {
                    id: "logout",
                    label: "Cerrar sesion",
                    icon: "logout",
                    tone: "danger",
                  },
                ]}
              />

              <UserMenu
                size="sm"
                user={{
                  name: "Captura Escolar",
                  role: "Mesa de control",
                  initials: "CE",
                  status: "Turno matutino",
                }}
                actions={[
                  { id: "profile", label: "Ver perfil", icon: "person" },
                  { id: "settings", label: "Configuracion", icon: "settings" },
                  { type: "separator", id: "separator" },
                  {
                    id: "logout",
                    label: "Cerrar sesion",
                    icon: "logout",
                    tone: "danger",
                  },
                ]}
              />

              <UserMenu
                compact
                align="start"
                user={{
                  name: "Docente Invitado",
                  role: "Docente",
                  initials: "DI",
                }}
                actions={[
                  { id: "profile", label: "Ver perfil", icon: "person" },
                  {
                    id: "disabled",
                    label: "Permisos avanzados",
                    icon: "lock",
                    disabled: true,
                  },
                  { type: "separator", id: "separator" },
                  {
                    id: "logout",
                    label: "Cerrar sesion",
                    icon: "logout",
                    tone: "danger",
                  },
                ]}
              />
            </div>

            <Panel
              eyebrow="Contrato"
              title="La app decide permisos y acciones"
              description="El componente solo representa usuario, sesion y callbacks; no conoce rutas reales ni permisos reales."
              variant="subtle"
            >
              <div class="inline-stack">
                <Badge tone="success">perfil</Badge>
                <Badge tone="info">preferencias</Badge>
                <Badge tone="warning">seguridad</Badge>
                <Badge tone="danger">cerrar sesion</Badge>
              </div>
            </Panel>
          </div>
        </Panel>

        <PageHeader
          eyebrow="Revision actual"
          title="Sidebar"
          description="Navegacion principal configurable, con submenus controlables, semaforos de sistema, reloj, usuario y modo colapsado."
          meta="Pattern"
        >
          <Button q:slot="actions" iconLeft="view">
            Ver demo completa
          </Button>
        </PageHeader>

        <Panel eyebrow="Revision actual" title="Sidebar profesional">
          <div class="showcase-grid">
            <Sidebar
              brand={{
                name: "Control Escolar",
                shortName: "CE",
                subtitle: "Operacion diaria",
              }}
              activeItem="students-list"
              openItems={["students"]}
              clock={{
                label: "Hora local",
                time: "09:48",
                date: "Domingo 07 Jun",
              }}
              systemStatus={{
                items: [
                  { id: "api", label: "API", value: "Activa", tone: "online" },
                  { id: "db", label: "BD", value: "36 ms", tone: "online" },
                  {
                    id: "jobs",
                    label: "Lotes",
                    value: "2 pendientes",
                    tone: "warning",
                  },
                ],
                session: {
                  label: "Sesion",
                  remaining: "14:32",
                  tone: "warning",
                },
              }}
              sections={[
                {
                  id: "operation",
                  label: "Operacion",
                  items: [
                    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
                    {
                      id: "students",
                      label: "Alumnos",
                      icon: "student",
                      badge: 42,
                      children: [
                        { id: "students-list", label: "Listado", icon: "group" },
                        { id: "students-new", label: "Nuevo alumno", icon: "add" },
                        { id: "students-import", label: "Carga CSV", icon: "upload" },
                      ],
                    },
                    { id: "teachers", label: "Docentes", icon: "teacher" },
                    { id: "groups", label: "Grupos", icon: "class" },
                  ],
                },
                {
                  id: "admin",
                  label: "Administracion",
                  items: [
                    { id: "users", label: "Usuarios", icon: "user-settings" },
                    { id: "reports", label: "Reportes", icon: "download" },
                  ],
                },
              ]}
              footerItems={[
                { id: "settings", label: "Configuracion", icon: "settings" },
                { id: "logout", label: "Cerrar sesion", icon: "logout" },
              ]}
              user={{
                name: "Mac Segovia",
                role: "Administrador",
                initials: "MS",
                status: "Sesion protegida",
                meta: "Ultimo acceso: hoy 09:48",
              }}
              userMenuSessionLabel="La sesion expira en 14:32"
              userActions={[
                { type: "label", id: "account", label: "Cuenta" },
                { id: "profile", label: "Ver perfil", icon: "person" },
                { id: "settings", label: "Preferencias", icon: "settings" },
                { id: "password", label: "Cambiar contraseña", icon: "lock" },
                { type: "separator", id: "separator" },
                {
                  id: "logout",
                  label: "Cerrar sesion",
                  icon: "logout",
                  tone: "danger",
                },
              ]}
            />

            <Sidebar
              brand={{
                name: "Control Escolar",
                shortName: "CE",
                subtitle: "Submenus controlados",
              }}
              activeItem="dashboard"
              openItems={["settings"]}
              sections={[
                {
                  id: "closed",
                  label: "Control externo",
                  items: [
                    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
                    {
                      id: "students",
                      label: "Alumnos cerrado",
                      icon: "student",
                      badge: 12,
                      children: [
                        { id: "students-list", label: "Listado", icon: "group" },
                        { id: "students-new", label: "Nuevo alumno", icon: "add" },
                      ],
                    },
                    {
                      id: "settings",
                      label: "Configuracion abierta",
                      icon: "settings",
                      open: true,
                      children: [
                        { id: "users", label: "Usuarios", icon: "user-settings" },
                        { id: "security", label: "Seguridad", icon: "lock" },
                      ],
                    },
                  ],
                },
              ]}
              user={{
                name: "Captura escolar",
                role: "Mesa de control",
                initials: "CE",
              }}
            />

            <Sidebar
              collapsed
              brand={{
                name: "Control Escolar",
                shortName: "CE",
              }}
              activeItem="students"
              clock={{
                time: "09:48",
                date: "Domingo 07 Jun",
              }}
              systemStatus={{
                items: [
                  { id: "api", label: "API", value: "Activa", tone: "online" },
                  { id: "db", label: "BD", value: "36 ms", tone: "online" },
                ],
                session: {
                  remaining: "14:32",
                  tone: "warning",
                },
              }}
              sections={[
                {
                  id: "compact",
                  items: [
                    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
                    { id: "students", label: "Alumnos", icon: "student" },
                    { id: "teachers", label: "Docentes", icon: "teacher" },
                    { id: "settings", label: "Configuracion", icon: "settings" },
                  ],
                },
              ]}
              user={{
                name: "Mac Segovia",
                initials: "MS",
              }}
              userActions={[
                { id: "profile", label: "Ver perfil", icon: "person" },
                { id: "logout", label: "Cerrar sesion", icon: "logout", tone: "danger" },
              ]}
            />
          </div>
        </Panel>

        <PageHeader
          eyebrow="Revision actual"
          title="AppShell"
          description="Marco principal para pantallas de producto: sidebar, encabezado, acciones, toolbar y contenido scrollable."
          meta="Pattern"
        />

        <AppShell
          eyebrow="Modulo escolar"
          title="Alumnos"
          description="Estructura de pantalla lista para conectar con rutas reales."
          meta="Ciclo 2026"
          density="compact"
          sidebarOpen={false}
        >
          <Sidebar
            q:slot="sidebar"
            brand={{
              name: "Control Escolar",
              shortName: "CE",
            }}
            activeItem="students"
            sections={[
              {
                id: "demo",
                items: [
                  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
                  { id: "students", label: "Alumnos", icon: "student" },
                  { id: "teachers", label: "Docentes", icon: "teacher" },
                ],
              },
            ]}
            user={{
              name: "Mac Segovia",
              initials: "MS",
            }}
          />
          <Button q:slot="actions" size="sm" iconLeft="add">
            Nuevo alumno
          </Button>
          <Toolbar q:slot="toolbar" density="compact">
            <Input
              q:slot="leading"
              variant="quiet"
              size="sm"
              iconLeft="search"
              placeholder="Buscar..."
            />
            <Select
              q:slot="center"
              variant="quiet"
              size="sm"
              iconLeft="filter"
              placeholder="Estado"
              options={[
                { value: "active", label: "Activo" },
                { value: "pending", label: "Pendiente" },
              ]}
            />
          </Toolbar>
          <div class="showcase-grid">
            <StatCard
              label="Activos"
              value="1,248"
              icon="student"
              tone="success"
            />
            <StatCard
              label="Pendientes"
              value="42"
              icon="warning"
              tone="warning"
            />
          </div>
        </AppShell>

        <PageHeader
          eyebrow="Revision actual"
          title="Toolbar"
          description="Barra operacional para busqueda, filtros, rangos de fecha y acciones de modulo."
          meta="Pattern"
        >
          <Button q:slot="actions" iconLeft="add">
            Nuevo alumno
          </Button>
          <Button q:slot="actions" variant="secondary" iconLeft="filter">
            Filtros
          </Button>
        </PageHeader>

        <Panel eyebrow="Revision actual" title="Toolbar: busqueda, filtros y acciones">
          <div class="stack">
            <Toolbar>
              <Input
                q:slot="leading"
                variant="quiet"
                size="sm"
                iconLeft="search"
                placeholder="Buscar alumno..."
              />
              <DateRangeInput q:slot="center" variant="quiet" size="sm" />
              <Select
                q:slot="center"
                variant="quiet"
                size="sm"
                iconLeft="filter"
                placeholder="Estado"
                options={[
                  { value: "active", label: "Activo" },
                  { value: "pending", label: "Pendiente" },
                  { value: "inactive", label: "Baja" },
                ]}
              />
              <Button q:slot="actions" iconLeft="add">
                Nuevo alumno
              </Button>
              <DropdownMenu
                q:slot="actions"
                label="Mas"
                size="sm"
                items={[
                  { id: "import", label: "Importar CSV", icon: "upload" },
                  { id: "export", label: "Exportar", icon: "download" },
                  { type: "separator", id: "sep" },
                  { id: "print", label: "Imprimir", icon: "print" },
                ]}
              />
            </Toolbar>

            <Toolbar density="compact">
              <Input
                q:slot="leading"
                variant="quiet"
                size="sm"
                iconLeft="search"
                placeholder="Busqueda compacta..."
              />
              <Button q:slot="actions" size="sm" variant="secondary" iconLeft="filter">
                Filtros
              </Button>
              <Button q:slot="actions" size="sm" iconLeft="download">
                Exportar
              </Button>
            </Toolbar>
          </div>
        </Panel>

        <Panel eyebrow="ConfirmAction" title="Decisiones delicadas">
          <div class="stack">
            <ConfirmAction
              open
              tone="danger"
              title="Eliminar alumno"
              description="Esta accion no se puede deshacer."
              details="Se eliminara el expediente CE-2026-001 de las consultas activas."
              confirmLabel="Eliminar"
            />

            <div class="showcase-grid">
              <ConfirmAction
                open
                tone="warning"
                title="Desactivar usuario"
                description="El usuario no podra iniciar sesion hasta que sea reactivado."
                confirmLabel="Desactivar"
              />

              <ConfirmAction
                open
                tone="success"
                title="Importar alumnos"
                description="Se importaran 128 registros validos desde el archivo CSV."
                confirmLabel="Importar"
                loading
              />
            </div>
          </div>
        </Panel>

        <Panel eyebrow="DateRangeInput" title="Filtros por periodo">
          <div class="stack">
            <DateRangeInput
              startLabel="Desde"
              endLabel="Hasta"
              startValue="2026-01-01"
              endValue="2026-06-07"
              hint="Consulta movimientos dentro del periodo seleccionado."
            />

            <div class="showcase-grid">
              <DateRangeInput
                variant="box"
                startLabel="Inicio de ciclo"
                endLabel="Fin de ciclo"
                startValue="2026-08-01"
                endValue="2027-07-31"
              />

              <DateRangeInput
                variant="quiet"
                size="sm"
                startLabel="Capturado desde"
                endLabel="Capturado hasta"
              />

              <DateRangeInput
                error="La fecha final no puede ser menor que la inicial."
                startValue="2026-06-07"
                endValue="2026-01-01"
              />
            </div>
          </div>
        </Panel>

        <Panel eyebrow="DateInput" title="Fechas escolares">
          <div class="stack">
            <div class="showcase-grid">
              <Field label="Fecha de nacimiento" required>
                <DateInput max="2026-06-07" required />
              </Field>

              <Field label="Fecha de inscripcion">
                <DateInput variant="box" value="2026-08-15" />
              </Field>

              <Field label="Filtro compacto">
                <DateInput variant="quiet" size="sm" />
              </Field>

              <Field label="Vigencia de documento" error="La fecha es obligatoria.">
                <DateInput invalid variant="line" />
              </Field>
            </div>

            <DateInput showIcon={false} variant="line" />
          </div>
        </Panel>

        <Panel eyebrow="Stepper" title="Procesos escolares">
          <div class="stack">
            <Stepper
              activeStep="documents"
              steps={[
                {
                  id: "student",
                  label: "Alumno",
                  description: "Datos principales",
                },
                {
                  id: "tutor",
                  label: "Tutor",
                  description: "Contacto responsable",
                },
                {
                  id: "documents",
                  label: "Documentos",
                  description: "Acta, CURP y comprobantes",
                },
                {
                  id: "review",
                  label: "Revision",
                  description: "Validacion final",
                },
              ]}
            />

            <Stepper
              orientation="vertical"
              steps={[
                {
                  id: "template",
                  label: "Plantilla descargada",
                  description: "CSV oficial",
                  status: "complete",
                },
                {
                  id: "upload",
                  label: "Archivo cargado",
                  description: "alumnos-ciclo-2026.csv",
                  status: "complete",
                },
                {
                  id: "validation",
                  label: "Validacion",
                  description: "Falta columna matricula",
                  status: "error",
                },
                {
                  id: "import",
                  label: "Importacion",
                  description: "Pendiente",
                  status: "pending",
                },
              ]}
            />
          </div>
        </Panel>

        <Panel eyebrow="FileUpload" title="Documentos y carga masiva">
          <div class="stack">
            <FileUpload
              mode="document"
              label="Acta de nacimiento"
              description="Carga el documento del alumno en PDF o imagen legible."
              accept=".pdf,.jpg,.png"
              maxSizeLabel="hasta 5 MB"
              files={[
                {
                  id: "birth-certificate",
                  name: "acta-daniela-ruiz.pdf",
                  sizeLabel: "1.8 MB",
                  status: "uploaded",
                },
              ]}
            />

            <FileUpload
              mode="bulk"
              label="Carga masiva de alumnos"
              description="Importa alumnos desde un archivo CSV preparado con la plantilla oficial."
              accept=".csv"
              templateLabel="Descargar plantilla CSV"
              helpText="El archivo debe incluir matricula, nombre, grupo, turno y estado."
              files={[
                {
                  id: "students-csv",
                  name: "alumnos-ciclo-2026.csv",
                  sizeLabel: "42 KB",
                  status: "ready",
                },
              ]}
            />

            <FileUpload
              mode="bulk"
              label="Carga por lote con errores"
              accept=".csv"
              invalid
              error="El archivo no contiene la columna obligatoria matricula."
              files={[
                {
                  id: "bad-csv",
                  name: "alumnos-incompleto.csv",
                  status: "error",
                  message: "Falta columna matricula",
                },
              ]}
            />
          </div>
        </Panel>

        <Panel eyebrow="StatCard" title="Resumen operativo">
          <div class="showcase-grid">
            <StatCard
              label="Alumnos activos"
              value="1,248"
              description="Ciclo escolar 2026"
              icon="student"
              tone="success"
              trend={{ value: "8%", direction: "up" }}
            />
            <StatCard
              label="Docentes registrados"
              value="86"
              description="Plantilla academica"
              icon="teacher"
              tone="info"
              trend={{ value: "3", direction: "flat" }}
            />
            <StatCard
              label="Documentos pendientes"
              value="42"
              description="Requieren revision"
              icon="download"
              tone="warning"
              trend={{ value: "12%", direction: "down" }}
            />
            <StatCard
              loading
              label="Usuarios bloqueados"
              value="0"
              icon="lock"
              tone="danger"
            />
          </div>
        </Panel>

        <Panel eyebrow="Breadcrumbs" title="Ubicacion en el sistema">
          <div class="stack">
            <Breadcrumbs
              items={[
                { id: "home", label: "Inicio", icon: "dashboard" },
                { id: "students", label: "Alumnos", icon: "student" },
                {
                  id: "record",
                  label: "Expediente CE-2026-001",
                  icon: "person",
                  current: true,
                },
              ]}
            />

            <Breadcrumbs
              items={[
                { id: "settings", label: "Configuracion", icon: "settings" },
                { id: "users", label: "Usuarios", icon: "user-settings" },
                {
                  id: "permissions",
                  label: "Permisos del perfil administrador",
                  current: true,
                },
              ]}
            />
          </div>
        </Panel>

        <Panel eyebrow="Tooltip" title="Ayuda contextual breve">
          <div class="stack">
            <div class="inline-stack">
              <Tooltip content="Ver detalle">
                <IconButton label="Ver detalle" icon="view" />
              </Tooltip>
              <Tooltip content="Editar alumno" placement="bottom">
                <IconButton label="Editar alumno" icon="edit" variant="secondary" />
              </Tooltip>
              <Tooltip content="Eliminar expediente" placement="right">
                <IconButton label="Eliminar expediente" icon="delete" variant="danger" />
              </Tooltip>
              <Tooltip content="Configuracion del modulo" placement="left">
                <IconButton label="Configuracion del modulo" icon="settings" variant="ghost" />
              </Tooltip>
            </div>

            <Panel
              eyebrow="Indicadores"
              title="Estados con ayuda"
              description="El texto visible sigue siendo lo principal; el tooltip solo aclara detalles."
              variant="subtle"
            >
              <div class="inline-stack">
                <Tooltip content="API activa y respondiendo en menos de 200 ms">
                  <Badge tone="success">API activa</Badge>
                </Tooltip>
                <Tooltip content="La sesion expira en 14 minutos">
                  <Badge tone="warning">Sesion</Badge>
                </Tooltip>
              </div>
            </Panel>
          </div>
        </Panel>

        <Panel eyebrow="Skeleton" title="Carga con estructura">
          <div class="stack">
            <Skeleton variant="table" rows={5} />

            <div class="showcase-grid">
              <Panel eyebrow="Formulario" title="Expediente cargando">
                <Skeleton variant="form" rows={4} />
              </Panel>

              <Panel eyebrow="Resumen" title="Bloques ligeros">
                <div class="stack">
                  <div class="inline-stack">
                    <Skeleton variant="avatar" size="lg" />
                    <Skeleton variant="text" rows={3} />
                  </div>
                  <Skeleton variant="block" rows={1} />
                </div>
              </Panel>
            </div>
          </div>
        </Panel>

        <Panel eyebrow="EmptyState" title="Sin datos utiles">
          <div class="stack">
            <EmptyState
              tone="info"
              size="lg"
              icon="student"
              title="No hay alumnos registrados"
              description="Crea el primer expediente para comenzar a trabajar con el modulo."
              actionLabel="Nuevo alumno"
              secondaryActionLabel="Importar lista"
            />

            <div class="showcase-grid">
              <EmptyState
                size="sm"
                icon="search"
                title="Sin resultados"
                description="No encontramos coincidencias con los filtros actuales."
                secondaryActionLabel="Limpiar filtros"
              />

              <EmptyState
                tone="warning"
                icon="download"
                title="Sin documentos"
                description="El expediente todavia no tiene archivos cargados."
                actionLabel="Subir documento"
              />
            </div>
          </div>
        </Panel>

        <Panel eyebrow="Toast" title="Notificaciones del sistema">
          <div class="stack">
            <Toast
              tone="success"
              title="Cambios guardados"
              description="El expediente de Daniela Ruiz Perez se actualizo correctamente."
              dismissible
            />

            <Toast
              tone="danger"
              title="No se pudo conectar con el backend"
              description="Revisa el estado del servidor o intenta nuevamente."
              actionLabel="Reintentar"
              progress={72}
              dismissible
            />

            <div class="showcase-grid">
              <Toast
                tone="warning"
                title="Sesion por expirar"
                description="Quedan 02:00 minutos antes de cerrar la sesion."
                actionLabel="Renovar"
                progress={36}
                placement="floating"
              />

              <Toast
                tone="info"
                title="Exportacion iniciada"
                description="El archivo se esta preparando en segundo plano."
                progress={45}
              />
            </div>
          </div>
        </Panel>

        <Panel eyebrow="DropdownMenu" title="Acciones compactas">
          <div class="stack">
            <div class="inline-stack">
              <DropdownMenu
                label="Acciones"
                icon="settings"
                items={[
                  { type: "label", id: "student-label", label: "Alumno" },
                  { id: "view", label: "Ver detalle", icon: "view" },
                  { id: "edit", label: "Editar", icon: "edit", shortcut: "E" },
                  {
                    id: "toggle",
                    label: "Activar / Desactivar",
                    icon: "toggle",
                    tone: "warning",
                  },
                  { type: "separator", id: "student-separator" },
                  {
                    id: "delete",
                    label: "Eliminar",
                    icon: "delete",
                    tone: "danger",
                  },
                ]}
              />

              <DropdownMenu
                label="Usuario"
                icon="person"
                align="start"
                items={[
                  { id: "profile", label: "Mi perfil", icon: "person" },
                  { id: "settings", label: "Configuracion", icon: "settings" },
                  { type: "separator", id: "user-separator" },
                  { id: "logout", label: "Cerrar sesion", icon: "logout" },
                ]}
              />

              <DropdownMenu
                label="Mas"
                size="sm"
                items={[
                  { id: "print", label: "Imprimir", icon: "print" },
                  { id: "download", label: "Exportar", icon: "download" },
                  { id: "disabled", label: "Bloqueado", icon: "lock", disabled: true },
                ]}
              />
            </div>

            <Panel
              eyebrow="Uso esperado"
              title="Mismo patron, muchos lugares"
              description="La tabla, el avatar y los encabezados pueden usar el mismo menu para evitar experiencias distintas."
              variant="subtle"
            >
              <div class="inline-stack">
                <Badge tone="info">DataTable</Badge>
                <Badge tone="info">Avatar</Badge>
                <Badge tone="info">Toolbar</Badge>
                <Badge tone="info">Sidebar</Badge>
              </div>
            </Panel>
          </div>
        </Panel>

        <Panel eyebrow="Accordion" title="Secciones expandibles">
          <div class="stack">
            <Accordion
              open
              icon="filter"
              tone="primary"
              title="Filtros avanzados"
              description="Opciones adicionales para una consulta mas precisa."
            >
              <div class="showcase-grid">
                <Field label="Grupo">
                  <Select
                    variant="line"
                    placeholder="Selecciona grupo"
                    options={[
                      { value: "a", label: "Grupo A" },
                      { value: "b", label: "Grupo B" },
                    ]}
                  />
                </Field>
                <Field label="Estado">
                  <Select
                    variant="line"
                    placeholder="Selecciona estado"
                    options={[
                      { value: "active", label: "Activo" },
                      { value: "pending", label: "Pendiente" },
                    ]}
                  />
                </Field>
              </div>
            </Accordion>

            <Accordion
              variant="subtle"
              icon="warning"
              tone="warning"
              title="Documentos pendientes"
              description="Hay informacion que debe completarse antes de cerrar el expediente."
            >
              <div class="inline-stack">
                <Badge tone="warning">Acta pendiente</Badge>
                <Badge tone="warning">CURP pendiente</Badge>
              </div>
            </Accordion>

            <Accordion
              variant="outlined"
              size="sm"
              disabled
              icon="lock"
              title="Seccion bloqueada"
              description="Disponible solo para administradores."
            >
              Contenido no disponible.
            </Accordion>
          </div>
        </Panel>

        <Panel eyebrow="Dialog" title="Confirmaciones y avisos">
          <div class="stack">
            <Dialog
              open
              tone="danger"
              title="Eliminar alumno"
              description="Esta accion no se puede deshacer. El expediente dejara de aparecer en consultas activas."
            >
              <p class="page-copy">
                Alumno seleccionado: Daniela Ruiz Perez, matricula CE-2026-001.
              </p>
              <Button q:slot="footer" variant="secondary">
                Cancelar
              </Button>
              <Button q:slot="footer" variant="danger" iconLeft="delete">
                Eliminar
              </Button>
            </Dialog>

            <div class="showcase-grid">
              <Dialog
                open
                tone="warning"
                size="sm"
                title="Sesion por expirar"
                description="Quedan 02:00 minutos antes de cerrar la sesion."
              >
                <Button q:slot="footer" variant="secondary">
                  Salir
                </Button>
                <Button q:slot="footer" iconLeft="refresh">
                  Renovar sesion
                </Button>
              </Dialog>

              <Dialog
                open
                tone="success"
                size="sm"
                title="Cambios guardados"
                description="El expediente se actualizo correctamente."
              >
                <Button q:slot="footer" variant="secondary">
                  Cerrar
                </Button>
                <Button q:slot="footer" iconLeft="view">
                  Ver detalle
                </Button>
              </Dialog>
            </div>
          </div>
        </Panel>

        <Panel eyebrow="Tabs" title="Expediente escolar">
          <div class="stack">
            <Tabs
              activeTab="grades"
              items={[
                { id: "profile", label: "Datos", icon: "person" },
                { id: "documents", label: "Documentos", icon: "download", badge: 3 },
                { id: "grades", label: "Calificaciones", icon: "class" },
                { id: "history", label: "Historial", icon: "schedule" },
              ]}
            >
              <Panel
                eyebrow="Alumno"
                title="Calificaciones"
                description="Resumen academico del ciclo actual."
              >
                <div class="inline-stack">
                  <Badge tone="success">Promedio 9.1</Badge>
                  <Badge tone="warning">2 pendientes</Badge>
                  <Badge tone="info">Grupo A</Badge>
                </div>
              </Panel>
            </Tabs>

            <Tabs
              variant="contained"
              fullWidth
              activeTab="general"
              items={[
                { id: "general", label: "General" },
                { id: "security", label: "Seguridad", icon: "lock" },
                { id: "disabled", label: "Bloqueado", disabled: true },
              ]}
            >
              <Field label="Nombre de configuracion">
                <Input variant="line" placeholder="Configuracion general" />
              </Field>
            </Tabs>

            <Tabs
              variant="pills"
              size="sm"
              activeTab="active"
              items={[
                { id: "active", label: "Activos", badge: 24 },
                { id: "pending", label: "Pendientes", badge: 7 },
                { id: "inactive", label: "Bajas", badge: 2 },
              ]}
            >
              <span class="page-copy">Filtro visual para estados rapidos.</span>
            </Tabs>
          </div>
        </Panel>

        <Panel eyebrow="AppShell" title="Pantalla administrativa">
          <AppShell
            eyebrow="Modulo escolar"
            title="Alumnos"
            description="Consulta expedientes, revisa estatus y ejecuta acciones por fila."
            meta="Ciclo 2026"
          >
            <Sidebar
              q:slot="sidebar"
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
              systemStatus={{
                items: [
                  { id: "api", label: "API", value: "Activa", tone: "online" },
                  {
                    id: "database",
                    label: "Base de datos",
                    value: "Estable",
                    tone: "online",
                  },
                ],
                session: {
                  label: "Sesion expira en",
                  remaining: "14:32",
                  tone: "warning",
                },
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
                  ],
                },
              ]}
              footerItems={[
                { id: "settings", label: "Configuracion", icon: "settings" },
                { id: "logout", label: "Cerrar sesion", icon: "logout" },
              ]}
            />

            <Button q:slot="actions" iconLeft="add">
              Nuevo alumno
            </Button>
            <Button q:slot="actions" variant="secondary" iconLeft="download">
              Exportar
            </Button>

            <Input
              q:slot="toolbar"
              variant="quiet"
              size="sm"
              iconLeft="search"
              placeholder="Buscar alumno..."
            />
            <Select
              q:slot="toolbar"
              variant="quiet"
              size="sm"
              iconLeft="filter"
              placeholder="Estado"
              options={[
                { value: "active", label: "Activo" },
                { value: "pending", label: "Pendiente" },
                { value: "inactive", label: "Baja" },
              ]}
            />

            <DataTable
              searchable={false}
              selectable
              rows={studentRows}
              columns={[
                { key: "name", label: "Alumno", sortable: true },
                { key: "enrollment", label: "Matricula", width: "140px" },
                { key: "group", label: "Grupo", align: "center", width: "100px" },
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
                },
              ]}
              actions={[
                { label: "Ver detalle", icon: "view" },
                { label: "Editar", icon: "edit" },
                { label: "Eliminar", icon: "delete", tone: "danger" },
              ]}
              pagination={{ page: 1, limit: 10, total: 32 }}
            />
          </AppShell>
        </Panel>

        <Panel eyebrow="Sidebar" title="Navegacion de producto">
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
              systemStatus={{
                items: [
                  { id: "api", label: "API", value: "Activa", tone: "online" },
                  {
                    id: "database",
                    label: "Base de datos",
                    value: "Estable",
                    tone: "online",
                  },
                ],
                session: {
                  label: "Sesion expira en",
                  remaining: "14:32",
                  tone: "warning",
                },
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
              systemStatus={{
                items: [
                  { id: "api", label: "API", value: "Activa", tone: "online" },
                  {
                    id: "database",
                    label: "Base de datos",
                    value: "Estable",
                    tone: "online",
                  },
                ],
                session: {
                  label: "Sesion expira en",
                  remaining: "14:32",
                  tone: "warning",
                },
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
