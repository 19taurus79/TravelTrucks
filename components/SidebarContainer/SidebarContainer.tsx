"use client";

import React from "react";
import css from "./SidebarContainer.module.css";
type SidebarContainerProps = {
  children: React.ReactNode;
};

export default function SidebarContainer({ children }: SidebarContainerProps) {
  return <aside className={css.container}>{children}</aside>;
}
