import Sidebar from "@/components/Sidebar/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import css from "./layout.module.css";
type LayoutProps = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title: "Catalog - TravelTrucks",
  description:
    "TravelTrucks catalog offers a wide selection of campers for rent, perfect for your next road trip adventure.",
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={css.container}>
      <Sidebar />
      <section>{children}</section>
    </div>
  );
}
