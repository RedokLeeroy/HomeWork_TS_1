import PropTypes from 'prop-types';
import s from "./Item.module.css"

export const Item = ({type, amount, currency}) => {
    return<tr className={s.row}>
      <th >{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>

}


Item.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};