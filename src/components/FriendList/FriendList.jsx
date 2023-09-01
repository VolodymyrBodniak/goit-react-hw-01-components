import { FriendsItem } from './FriendsItem/FriendsItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendsItem arrayOfFriends={friends} />
    </ul>
  );
};
