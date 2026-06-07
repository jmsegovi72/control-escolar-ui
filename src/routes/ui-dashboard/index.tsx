import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import {
  AppShell,
  Badge,
  Breadcrumbs,
  Button,
  DataTable,
  DateRangeInput,
  DropdownMenu,
  EmptyState,
  FileUpload,
  Input,
  Panel,
  Select,
  Sidebar,
  StatCard,
  Toast,
  Toolbar,
} from "~/ui";

type DashboardStudent = {
  id: number;
  name: string;
  enrollment: string;
  group: string;
  status: string;
  documents: string;
  lastUpdate: string;
};

const students: DashboardStudent[] = [
  {
    id: 1,
    name: "Daniela Ruiz Perez",
    enrollment: "CE-2026-001",
    group: "1A",
    status: "Activo",
    documents: "Completo",
    lastUpdate: "Hoy 09:42",
  },
  {
    id: 2,
    name: "Luis Garcia Torres",
    enrollment: "CE-2026-002",
    group: "1B",
    status: "Pendiente",
    documents: "Faltante",
    lastUpdate: "Ayer 16:20",
  },
  {
    id: 3,
    name: "Mariana Lopez Sanchez",
    enrollment: "CE-2026-003",
    group: "2A",
    status: "Activo",
    documents: "Revision",
    lastUpdate: "06 Jun 2026",
  },
  {
    id: 4,
    name: "Roberto Munoz Aguilar",
    enrollment: "CE-2026-004",
    group: "2B",
    status: "Baja",
    documents: "Completo",
    lastUpdate: "04 Jun 2026",
  },
];

export default component$(() => {
  const sidebarOpen = useSignal(false);

  return (
    <main class="app-frame">
      <AppShell
        eyebrow="Demo de producto"
        title="Control escolar"
        description="Pantalla de prueba para revisar como conviven nuestros componentes en una operacion real."
        meta="Ciclo 2026"
        sidebarOpen={sidebarOpen.value}
        onToggleSidebar$={() => {
          sidebarOpen.value = !sidebarOpen.value;
        }}
      >
        <Sidebar
          q:slot="sidebar"
          brand={{
            name: "Control Escolar",
            shortName: "CE",
            subtitle: "UI Store",
          }}
          activeItem="dashboard"
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
              { id: "jobs", label: "Lotes", value: "2 pendientes", tone: "warning" },
            ],
            session: {
              label: "Sesion",
              remaining: "14:32",
              tone: "warning",
            },
          }}
          sections={[
            {
              id: "main",
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
                    { id: "students-import", label: "Carga masiva", icon: "upload" },
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
            { id: "preferences", label: "Preferencias", icon: "settings" },
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

        <Button q:slot="actions" iconLeft="add">
          Nuevo alumno
        </Button>
        <DropdownMenu
          q:slot="actions"
          label="Mas"
          items={[
            { id: "import", label: "Importar CSV", icon: "upload" },
            { id: "export", label: "Exportar", icon: "download" },
            { id: "print", label: "Imprimir", icon: "print" },
          ]}
        />

        <Toolbar q:slot="toolbar" density="compact">
          <Input
            q:slot="leading"
            variant="quiet"
            size="sm"
            iconLeft="search"
            placeholder="Buscar alumno, matricula o grupo"
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
              { value: "inactive", label: "Baja" },
            ]}
          />
          <DateRangeInput q:slot="center" variant="quiet" size="sm" />
          <Button q:slot="actions" size="sm" variant="secondary" iconLeft="filter">
            Limpiar
          </Button>
        </Toolbar>

        <div class="stack">
          <Breadcrumbs
            items={[
              { id: "home", label: "Inicio", icon: "dashboard" },
              { id: "operation", label: "Operacion", icon: "school" },
              { id: "dashboard", label: "Dashboard", current: true },
            ]}
          />

          <div class="showcase-grid">
            <StatCard
              label="Alumnos activos"
              value="1,248"
              description="Matricula vigente"
              icon="student"
              tone="success"
              trend={{ value: "8%", direction: "up", label: "vs. ciclo anterior" }}
            />
            <StatCard
              label="Documentos pendientes"
              value="42"
              description="Expedientes por revisar"
              icon="warning"
              tone="warning"
              trend={{ value: "12", direction: "down", label: "menos que ayer" }}
            />
            <StatCard
              label="Carga masiva"
              value="3"
              description="Lotes en proceso"
              icon="upload"
              tone="info"
              trend={{ value: "2 CSV", direction: "flat", label: "esperando validacion" }}
            />
            <StatCard
              label="Sesion"
              value="14:32"
              description="Tiempo restante"
              icon="lock"
              tone="danger"
            />
          </div>

          <Toast
            tone="success"
            title="Servicios activos"
            description="API y base de datos responden correctamente. Hay 2 lotes pendientes de validar."
            actionLabel="Ver lotes"
            progress={68}
            dismissible
          />

          <DataTable
            searchable
            hasActiveFilters
            selectable
            stickyHeader
            maxHeight="420px"
            searchPlaceholder="Buscar en expedientes recientes..."
            rows={students}
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
                width: "150px",
                filter: { type: "text", placeholder: "Matricula" },
              },
              {
                key: "group",
                label: "Grupo",
                width: "110px",
                align: "center",
                filter: {
                  type: "select",
                  placeholder: "Todos",
                  options: [
                    { value: "1a", label: "1A" },
                    { value: "1b", label: "1B" },
                    { value: "2a", label: "2A" },
                    { value: "2b", label: "2B" },
                  ],
                },
              },
              {
                key: "status",
                label: "Estado",
                width: "130px",
                align: "center",
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
              {
                key: "documents",
                label: "Documentos",
                width: "140px",
                align: "center",
                badge: {
                  toneMap: {
                    Completo: "success",
                    Revision: "info",
                    Faltante: "warning",
                  },
                },
              },
              {
                key: "lastUpdate",
                label: "Actualizacion",
                width: "150px",
              },
            ]}
            actions={[
              { label: "Ver detalle", icon: "view" },
              { label: "Editar alumno", icon: "edit" },
              { label: "Resetear login", icon: "login-reset" },
              { label: "Eliminar", icon: "delete", tone: "danger" },
            ]}
            pagination={{ page: 1, limit: 10, total: 1248 }}
            pageSizeOptions={[10, 15, 30, 50]}
          />

          <div class="showcase-grid">
            <Panel
              eyebrow="Carga por lote"
              title="Importacion de alumnos"
              description="Este bloque prueba el flujo de archivos dentro del dashboard."
            >
              <FileUpload
                mode="bulk"
                label="Archivo CSV"
                description="Carga registros por lote usando la plantilla oficial."
                accept=".csv"
                templateLabel="Descargar plantilla"
                files={[
                  {
                    id: "students-csv",
                    name: "alumnos-primer-semestre.csv",
                    sizeLabel: "42 KB",
                    status: "ready",
                    message: "Listo para validar",
                  },
                ]}
              />
            </Panel>

            <Panel
              eyebrow="Alertas"
              title="Sin incidencias criticas"
              description="Usamos EmptyState para que los espacios sin datos tambien se vean cuidados."
            >
              <EmptyState
                size="sm"
                tone="info"
                icon="success"
                title="Todo estable"
                description="No hay errores de sincronizacion ni bloqueos activos."
                secondaryActionLabel="Ver historial"
              />
              <div class="inline-stack">
                <Badge tone="success">API activa</Badge>
                <Badge tone="success">BD activa</Badge>
                <Badge tone="warning">Sesion 14:32</Badge>
              </div>
            </Panel>
          </div>
        </div>
      </AppShell>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Dashboard UI | Control Escolar",
  meta: [
    {
      name: "description",
      content: "Demo de pantalla real construida con componentes de control-escolar-ui",
    },
  ],
};
