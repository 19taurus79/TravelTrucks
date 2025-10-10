"use client";
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
import { useFilterStore } from "@/store/filterStore";
import { useEffect } from "react";

export default function Filters() {
  const { equipment, vehicleType, toggleEquipment, setVehicleType, applyFilters, location } =
    useFilterStore();

  useEffect(() => {
    console.log("Equipment:", equipment);
    console.log("Vehicle Type:", vehicleType);
    console.log("Location:", location);
  }, [equipment, vehicleType, location]);

  return (
    <section className={css.filters}>
      <p className={css.title}>Filters</p>
      <section className={css.equipment}>
        <p className={css.subtitle}>Vehicle equipment</p>
        <div className={css.cardList}>
          <FilterCard
            onClick={() => toggleEquipment("AC")}
            isSelected={equipment.includes("AC")}
          >
            <ACIcon />
            <p className={css.iconDescription}>AC</p>
          </FilterCard>
          <FilterCard
            onClick={() => toggleEquipment("automatic")}
            isSelected={equipment.includes("automatic")}
          >
            <AutomaticIcon />
            <p className={css.iconDescription}>Automatic</p>
          </FilterCard>
          <FilterCard
            onClick={() => toggleEquipment("kitchen")}
            isSelected={equipment.includes("kitchen")}
          >
            <KitchenIcon />
            <p className={css.iconDescription}>Kitchen</p>
          </FilterCard>
          <FilterCard
            onClick={() => toggleEquipment("TV")}
            isSelected={equipment.includes("TV")}
          >
            <TVIcon width={32} height={32} />
            <p className={css.iconDescription}>TV</p>
          </FilterCard>
          <FilterCard
            onClick={() => toggleEquipment("bathroom")}
            isSelected={equipment.includes("bathroom")}
          >
            <BathroomIcon />
            <p className={css.iconDescription}>Bathroom</p>
          </FilterCard>
        </div>
      </section>
      <section className={css.type}>
        <p className={css.subtitle}>Vehicle type</p>
        <div className={css.cardList}>
          <FilterCard
            onClick={() => setVehicleType("panelTruck")}
            isSelected={vehicleType === "panelTruck"}
          >
            <VanIcon />
            <p className={css.iconDescription}>Van</p>
          </FilterCard>
          <FilterCard
            onClick={() => setVehicleType("fullyIntegrated")}
            isSelected={vehicleType === "fullyIntegrated"}
          >
            <FullyIcon />
            <p className={css.iconDescription}>Fully Integrated</p>
          </FilterCard>
          <FilterCard
            onClick={() => setVehicleType("alcove")}
            isSelected={vehicleType === "alcove"}
          >
            <AlcoveIcon />
            <p className={css.iconDescription}>Alcove</p>
          </FilterCard>
        </div>
      </section>
      <button className={css.button} onClick={applyFilters}>
        Search
      </button>
    </section>
  );
}
