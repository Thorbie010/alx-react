import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { arrayOf } from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {

  return (
    <table id='CourseList' className={css(styles.CourseList__container)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses"></CourseListRow>
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          listCourses.map((course) => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
 CourseList__container: {
  border: '1px solid #ccc',
  margin: '2rem auto',
  width: '80%',
  },
});

export default CourseList;
