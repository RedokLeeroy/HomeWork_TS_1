import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css"

import { Item } from "components/HistoryItem/Item"
export const TransactionHistory = ({history}) => {return <table className={s.transactionHistory}>
  <thead className={s.header}>
    <tr>
      <th>type</th>
      <th>amount</th>
      <th>currency</th>
    </tr>
  </thead>
<tbody>
{history.map(({id, type, amount, currency}) => <Item key={id} type={type} amount={amount} currency={currency}/>)}
</tbody>
</table>
} 

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ),
};