import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import { Button, Panel } from "~/ui";

export default component$(() => {
  return (
    <main class="app-frame">
      <div class="page-shell">
        <span class="page-kicker">Control Escolar V1</span>
        <h1 class="page-title">Una interfaz base para un sistema escolar serio.</h1>
        <p class="page-copy">
          Primero construimos la biblioteca visual: tokens, componentes y
          patrones. La logica vendra despues, cuando la interfaz ya tenga una
          base profesional.
        </p>

        <div class="showcase-grid">
          <Panel eyebrow="Inicio" title="Primer objetivo">
            <div class="stack">
              <p class="page-copy" style={{ margin: "0" }}>
                Esta pantalla solo confirma el rumbo visual. La galeria de UI
                vive en una ruta separada para revisar cada componente con sus
                estados.
              </p>
              <div>
                <Link href="/ui">
                  <Button>Ver galeria UI</Button>
                </Link>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Control Escolar V1",
  meta: [
    {
      name: "description",
      content: "Interfaz visual para un sistema de control escolar",
    },
  ],
};
