import css from './StatisticList.module.css';
import { getRandomHexColor } from 'helpers/randomColor';
import PropTypes from 'prop-types';

export const StatisticList = ({ id, label, percentage }) => {
    return (
        <li className={`${css.item} ${id} `} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage}%`}</span>
        </li>
    );
};

StatisticList.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};


