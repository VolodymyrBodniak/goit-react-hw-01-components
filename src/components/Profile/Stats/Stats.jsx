import PropTypes from 'prop-types';
import css from './Stats.module.css';

export const Stats = ({ stats }) => {
  let str = [];
  for (let key in stats) {
    str.push(
      <li key={key}>
        <span className={css.label}>{key}</span>
        <span className={css.quantity}>{stats[key]}</span>
      </li>
    );
  }
  return str;
};

Stats.prototype = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
