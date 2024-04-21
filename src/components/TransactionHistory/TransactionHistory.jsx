import { TableRow } from 'components/TableRow/TableRow';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = (items) => {
  return (
    <table className={css["transaction-history"]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {
          items.items.map((item) => {
            return (
              <TableRow key={item.id} type={item.type} amount={item.amount} currency={item.currency} />)
          })
        }
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
