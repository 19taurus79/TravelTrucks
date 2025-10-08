"use client";
import css from "./Location.module.css";
import MapIcon from "../../assets/Map.svg";
import MapActiveIcon from "../../assets/MapActive.svg";
import { useState } from "react";

export default function LocationInput() {
  const [value, setValue] = useState("");
  return (
    <section className={css.location}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.inputContainer}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="City"
          id="location"
          className={css.input}
        />
        {value ? (
          <MapActiveIcon className={css.icon} />
        ) : (
          <MapIcon className={css.icon} />
        )}
      </div>
    </section>
  );
}
