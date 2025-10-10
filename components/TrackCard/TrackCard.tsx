import Image from "next/image";
import css from "./TrackCard.module.css";
import HeartIcon from "../../assets/heart.svg";
import StarIcon from "../../assets/star.svg";
import MapIcon from "../../assets/Map.svg";
import Badge from "../Badge/Badge";

import { Camper } from "@/types/types";
import { badgeMap } from "@/helpers/badgeMap";

interface TrackCardProps {
  camper: Camper;
}

export default function TrackCard({ camper }: TrackCardProps) {
  return (
    <article className={css.container}>
      <div className={css.photoContainer}>
        <Image
          src={camper.gallery[0]?.original}
          alt={camper.name}
          className={css.photo}
          fill
          sizes="292px"
        />
      </div>
      <div className={css.infoContainer}>
        <div>
          <div className={css.title}>
            <h2>{camper.name}</h2>
            <div className={css.priceWrapper}>
              <p>€{camper.price}</p>
              <HeartIcon />
            </div>
          </div>
          <div className={css.details}>
            <div className={css.reviewsWrapper}>
              <StarIcon />
              <p>
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.reviewsWrapper}>
              <MapIcon />
              <p>{camper.location}</p>
            </div>
          </div>
        </div>
        <div className={css.supporting}>
          <p className={css.supportingText}>{camper.description}</p>
        </div>
        <div className={css.badgesContainer}>
          {badgeMap.map(({ key, icon, label }) =>
            camper[key as keyof Camper] ? (
              <Badge key={key}>
                {icon} <span>{label}</span>
              </Badge>
            ) : null
          )}
        </div>
        <button className={css.btn}>Show more</button>
      </div>
    </article>
  );
}
