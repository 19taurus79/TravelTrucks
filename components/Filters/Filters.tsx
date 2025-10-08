import EquipmentsCard from "../EquipmentCard/EquipmentCard";
import css from "./Filters.module.css";
import ACIcon from "../../assets/wind.svg";
import AutomaticIcon from "../../assets/automatic.svg";
import KitchenIcon from "../../assets/kitchen.svg";
import TVIcon from "../../assets/tv.svg";
import BathroomIcon from "../../assets/ph_shower.svg";
export default function Filters() {
  return (
    <section className={css.filters}>
      <p className={css.title}>Filters</p>
      <section className={css.equipment}>
        <p className={css.subtitleEquipment}>Vehicle equipment</p>
        <div className={css.equipmentList}>
          <EquipmentsCard>
            <ACIcon />
            <p>AC</p>
          </EquipmentsCard>
          <EquipmentsCard>
            <AutomaticIcon />
            <p>Automatic</p>
          </EquipmentsCard>
          <EquipmentsCard>
            <KitchenIcon />
            <p>Kitchen</p>
          </EquipmentsCard>
          <EquipmentsCard>
            <TVIcon />
            <p>TV</p>
          </EquipmentsCard>
          <EquipmentsCard>
            <BathroomIcon />
            <p>Bathroom</p>
          </EquipmentsCard>
        </div>
      </section>
      <section className={css.type}></section>
    </section>
  );
}
