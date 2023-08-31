import PropTypes from 'prop-types';
import css from './StatisticList.module.css';

function getRandomHexColor() {
  const rgb = [];
  for (let index = 0; index < 3; index += 1) {
    let color = Math.floor(Math.random() * 200);
    rgb.push(color);
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

function setWidth(arr) {
  return 100 / arr.length;
}

export const StatisticList = ({ stats }) => {
  return stats.map(statisticItem => {
    return (
      <li
        className={css.item}
        key={statisticItem.id}
        style={{
          backgroundColor: getRandomHexColor(),
          width: `${setWidth(stats)}%`,
        }}
      >
        <span className={css.label}>{statisticItem.label}</span>
        <span className={css.percentage}>{statisticItem.percentage}%</span>
      </li>
    );
  });
};

StatisticList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      lebel: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
