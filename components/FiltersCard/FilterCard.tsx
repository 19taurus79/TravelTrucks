import css from "./FilterCard.module.css";

export default function FilterCard({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <div className={`${css.card} ${isSelected ? css.selected : ""}`} onClick={onClick}>
      {children}
    </div>
  );
}
