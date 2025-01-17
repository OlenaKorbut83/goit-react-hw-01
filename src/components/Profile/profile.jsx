import css from "./profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.img} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.numbers}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.numbers}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
