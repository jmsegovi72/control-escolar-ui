import type { ButtonProps } from "../Button/button.types";

import type { IconIntent } from "~/ui/icons";

export type IconButtonProps = Omit<
  ButtonProps,
  "children" | "iconLeft" | "iconRight" | "fullWidth"
> & {
  icon: IconIntent;
  label: string;
};
