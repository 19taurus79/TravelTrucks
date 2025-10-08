import css from "./FilterCard.module.css";
export default function FilterCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={css.card}>{children}</div>;
}
