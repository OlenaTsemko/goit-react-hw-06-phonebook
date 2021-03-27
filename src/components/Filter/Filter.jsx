// с использованием хуков
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/contacts/contacts-selectors';
import * as contactsActions from 'redux/contacts/contacts-actions';

import styles from './Filter.module.scss';

const Filter = () => {
  // const filter = useSelector(state => state.contacts.filter);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChangeFilter = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <label className={styles.filterLabel}>
      <span className={styles.filterText}>Find contacts by name</span>
      <input
        className={styles.filterInput}
        type="text"
        placeholder="Enter contact's name"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;

// ===============================================================
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import * as contactsActions from 'redux/contacts/contacts-actions';

// import styles from './Filter.module.scss';

// const Filter = ({ filter, onChangeFilter }) => (
//   <label className={styles.filterLabel}>
//     <span className={styles.filterText}>Find contacts by name</span>
//     <input
//       className={styles.filterInput}
//       type="text"
//       placeholder="Enter contact's name"
//       value={filter}
//       onChange={onChangeFilter}
//     />
//   </label>
// );

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChangeFilter: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChangeFilter: e =>
//     dispatch(contactsActions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
