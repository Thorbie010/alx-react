import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  let cell;
  const rowStyle = {
    backgroundColor: props.isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  if (!props.isHeader) {
    cell = (
      <>
        <td>{props.textFirstCell}</td>
        <td>{props.textSecondCell}</td>
      </>
    );
  } else {
    if (props.textSecondCell) {
      cell = (
        <>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </>
      );
    } else cell = (<th colSpan='2'>{props.textFirstCell}</th>);
  }

  return (
    <tr style={rowStyle}>{cell}</tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
