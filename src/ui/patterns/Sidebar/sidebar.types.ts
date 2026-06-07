import type { QRL } from "@builder.io/qwik";

import type { IconIntent } from "~/ui/icons";

export type SidebarBrand = {
  name: string;
  shortName?: string;
  subtitle?: string;
};

export type SidebarClock = {
  time: string;
  date?: string;
  label?: string;
};

export type SidebarUser = {
  name: string;
  role?: string;
  initials?: string;
  avatarUrl?: string;
  status?: string;
};

export type SidebarItem = {
  id: string;
  label: string;
  icon: IconIntent;
  href?: string;
  badge?: string | number;
  active?: boolean;
  disabled?: boolean;
  children?: SidebarItem[];
};

export type SidebarSection = {
  id: string;
  label?: string;
  items: SidebarItem[];
};

export type SidebarProps = {
  brand: SidebarBrand;
  sections: SidebarSection[];
  activeItem?: string;
  collapsed?: boolean;
  clock?: SidebarClock;
  user?: SidebarUser;
  footerItems?: SidebarItem[];
  onNavigate$?: QRL<(item: SidebarItem) => void>;
  onToggleCollapse$?: QRL<() => void>;
};
