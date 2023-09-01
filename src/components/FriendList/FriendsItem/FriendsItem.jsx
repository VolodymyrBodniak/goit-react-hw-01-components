import css from './FriendsItem.module.css';

export const FriendsItem = ({ arrayOfFriends }) => {
  return arrayOfFriends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={css.item} key={id}>
        <span
          className={css.status}
          style={{
            backgroundColor: isOnline && `#4eaf4d`,
          }}
        ></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};
