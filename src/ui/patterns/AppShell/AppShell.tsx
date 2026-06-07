import { component$, Slot } from "@builder.io/qwik";

import type { AppShellProps } from "./app-shell.types";
import "./app-shell.css";

export const AppShell = component$<AppShellProps>(
  ({ eyebrow, title, description, meta, density = "comfortable" }) => {
    return (
      <section class="ui-app-shell" data-density={density}>
        <div class="ui-app-shell__sidebar">
          <Slot name="sidebar" />
        </div>

        <div class="ui-app-shell__workspace">
          <header class="ui-app-shell__header">
            <div class="ui-app-shell__heading">
              {eyebrow && <span class="ui-app-shell__eyebrow">{eyebrow}</span>}
              <div class="ui-app-shell__title-row">
                <h1>{title}</h1>
                {meta && <span>{meta}</span>}
              </div>
              {description && <p>{description}</p>}
            </div>

            <div class="ui-app-shell__actions">
              <Slot name="actions" />
            </div>
          </header>

          <div class="ui-app-shell__toolbar">
            <Slot name="toolbar" />
          </div>

          <main class="ui-app-shell__content">
            <Slot />
          </main>
        </div>
      </section>
    );
  },
);
