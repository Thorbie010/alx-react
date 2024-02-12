import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection'
import { string } from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection title={ title } children={ children }></BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: string,
}

BodySectionWithMarginBottom.defaultProps = {
  title: '',
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;