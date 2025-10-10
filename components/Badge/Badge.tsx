import css from "./Bage.module.css";
type BadgeProps = {
  children: React.ReactNode;
};
export default function Badge({ children }: BadgeProps) {
  return <div className={css.container}>{children}</div>;
}
