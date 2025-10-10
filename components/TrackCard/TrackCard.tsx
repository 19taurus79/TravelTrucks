import Image from "next/image";
import css from "./TrackCard.module.css";
import HeartIcon from "../../assets/heart.svg";
import StarIcon from "../../assets/star.svg";
import MapIcon from "../../assets/Map.svg";
import Badge from "../Badge/Badge";
import AutomaticBadge from "../../assets/automatic_badge.svg";
export default function TrackCard() {
  return (
    <article className={css.container}>
      <div className={css.photoContainer}>
        <Image
          src="/img/PicForTest.jpg"
          alt="Track card image"
          className={css.photo}
          fill
        />
      </div>
      <div className={css.infoContainer}>
        <div>
          <div className={css.title}>
            <h2>Title</h2>
            <div className={css.priceWrapper}>
              <p>Price</p>
              <HeartIcon />
            </div>
          </div>
          <div className={css.details}>
            <div className={css.reviewsWrapper}>
              <StarIcon />
              <p>Reviews</p>
            </div>
            <div className={css.reviewsWrapper}>
              <MapIcon />
              <p>Location</p>
            </div>
          </div>
        </div>
        <div className={css.supporting}>
          <p className={css.supportingText}>
            Embrace simplicity and freedom with the Mavericks panel truck
            Embrace simplicity and freedom with the Mavericks panel truck
          </p>
        </div>
        <div className={css.badgesContainer}>
          <Badge>
            <AutomaticBadge />
            <p>Automatic</p>
          </Badge>
        </div>
        <button className={css.btn}>Show more</button>
      </div>
    </article>
  );
}
