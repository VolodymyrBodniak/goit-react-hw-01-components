import css from './Statistics.module.css';
import { StatisticList } from './StatisticList/StatisticList';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          <StatisticList stats={stats} />
        </ul>
      </section>
    </>
  );
};
