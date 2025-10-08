import css from "./EquipmentCard.module.css";
export default function EquipmentsCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={css.card}>{children}</div>;
}
