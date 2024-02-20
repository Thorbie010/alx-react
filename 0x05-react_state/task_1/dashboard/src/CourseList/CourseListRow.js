import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
  let cell;
  const rowStyle = props.isHeader ? styles.headerRow : styles.defaultRow;

  if (!props.isHeader) {
    cell = (
      <>
        <td className={css(styles.cell)}>{props.textFirstCell}</td>
        <td className={css(styles.cell)}>{String(props.textSecondCell)}</td>
      </>
    );
  } else {
    if (props.textSecondCell) {
      cell = (
        <>
          <th className={css(styles.headerCell)}>{props.textFirstCell}</th>
          <th className={css(styles.headerCell)}>{String(props.textSecondCell)}</th>
        </>
      );
    } else cell = (<th colSpan='2' className={css(styles.headerCell)}>{props.textFirstCell}</th>);
  }

  return (
    <tr className={css(rowStyle)}>{cell}</tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  cell: {
    padding: '0.3rem 0',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
  },
  headerCell: {
    padding: '0.3rem 0',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CourseListRow;
