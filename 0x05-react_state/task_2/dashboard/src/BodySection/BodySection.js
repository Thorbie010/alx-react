import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { string } from 'prop-types';

class BodySection extends Component {
  render() {
    const { title, children } = this.props;
    return(
      <div className="bodySection">
        <h2 className={css(styles.title)}>{title}</h2>
        { children }
      </div>
    );
  }
}

BodySection.propTypes = {
  title: string,
}

BodySection.defaultProps = {
  title: '',
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginTop: '0',
    
  }
})

export default BodySection;