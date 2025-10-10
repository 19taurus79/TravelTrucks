import FilterCard from "../FiltersCard/FilterCard";
import css from "./Filters.module.css";
import ACIcon from "../../assets/wind.svg";
import AutomaticIcon from "../../assets/automatic.svg";
import KitchenIcon from "../../assets/kitchen.svg";
import TVIcon from "../../assets/tv.svg";
import BathroomIcon from "../../assets/ph_shower.svg";
import VanIcon from "../../assets/van.svg";
import FullyIcon from "../../assets/fully.svg";
import AlcoveIcon from "../../assets/alcove.svg";
export default function Filters() {
  return (
    <section className={css.filters}>
      <p className={css.title}>Filters</p>
      <section className={css.equipment}>
        <p className={css.subtitle}>Vehicle equipment</p>
        <div className={css.cardList}>
          <FilterCard>
            <ACIcon />
            <p className={css.iconDescription}>AC</p>
          </FilterCard>
          <FilterCard>
            <AutomaticIcon />
            <p className={css.iconDescription}>Automatic</p>
          </FilterCard>
          <FilterCard>
            <KitchenIcon />
            <p className={css.iconDescription}>Kitchen</p>
          </FilterCard>
          <FilterCard>
            <TVIcon width={32} height={32} />
            <p className={css.iconDescription}>TV</p>
          </FilterCard>
          <FilterCard>
            <BathroomIcon />
            <p className={css.iconDescription}>Bathroom</p>
          </FilterCard>
        </div>
      </section>
      <section className={css.type}>
        <p className={css.subtitle}>Vehicle type</p>
        <div className={css.cardList}>
          <FilterCard>
            <VanIcon />
            <p className={css.iconDescription}>Van</p>
          </FilterCard>
          <FilterCard>
            <FullyIcon />
            <p className={css.iconDescription}>Fully Integrated</p>
          </FilterCard>
          <FilterCard>
            <AlcoveIcon />
            <p className={css.iconDescription}>Alcove</p>
          </FilterCard>
        </div>
      </section>
      <button className={css.button}>Search</button>
    </section>
  );
}
