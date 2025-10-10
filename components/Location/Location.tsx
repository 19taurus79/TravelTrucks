"use client";
import css from "./Location.module.css";
import MapIcon from "../../assets/Map.svg";
import MapActiveIcon from "../../assets/MapActive.svg";
import { useFilterStore } from "@/store/filterStore";

export default function LocationInput() {
  const { location, setLocation } = useFilterStore();
  return (
    <section className={css.location}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.inputContainer}>
        {location ? (
          <MapActiveIcon className={css.icon} />
        ) : (
          <MapIcon className={css.icon} />
        )}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City"
          id="location"
          className={css.input}
        />
        {location && (
          <button className={css.clearButton} onClick={() => setLocation("")}>
            &times;
          </button>
        )}
      </div>
    </section>
  );
}
