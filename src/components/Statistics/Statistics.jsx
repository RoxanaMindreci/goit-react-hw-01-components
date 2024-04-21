import css from './Statistics.module.css'
import { StatisticList } from 'components/StatisticList/StatisticList';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css['stat-list']}>
            {stats.map((stat) => {
                return (<StatisticList key={stat.id} id={stat.id} label={stat.label} percentage={stat.percentage} />)
            })}
        </ul>
    </section>);
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
