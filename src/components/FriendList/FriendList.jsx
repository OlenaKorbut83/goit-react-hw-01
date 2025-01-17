import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friends_list}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
