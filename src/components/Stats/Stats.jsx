import PropTypes from 'prop-types';
import s from "./Stats.module.css"
import random from "../randomFolder/randomColor"

export const Stats = ({label, percentage}) => {
    return <li className={s.item} style= {{backgroundColor: `${random()}`}}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};