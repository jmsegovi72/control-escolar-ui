import { component$, Slot } from "@builder.io/qwik";

import "./accordion.css";

type AccordionProps = {
  title: string;
  open?: boolean;
};

export const Accordion = component$<AccordionProps>(({ title, open }) => {
  return (
    <details class="ui-accordion" open={open}>
      <summary class="ui-accordion__summary">
        <span>{title}</span>
        <span class="ui-accordion__marker" aria-hidden="true" />
      </summary>
      <div class="ui-accordion__content">
        <Slot />
      </div>
    </details>
  );
});
