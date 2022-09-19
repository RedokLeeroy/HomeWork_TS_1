import PropTypes from 'prop-types';
import s from "./Stat.module.css"

import { Stats } from "components/Stats/Stats"
export const Stat = ({data}) => {
    return(
        <ul className={s.statList}>
            {data.map(({id, label, percentage}) => <Stats key={id} label={label} percentage={percentage}/>)}
        </ul>
    )
}

Stat.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};