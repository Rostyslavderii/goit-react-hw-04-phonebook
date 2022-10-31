import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Feedback.module.scss';
// import cn from 'classnames';

class Input extends Component {
  render() {
    const { handleInput } = this.props;
    console.log(this.props.value);
    console.log('handleInput:', handleInput);
    return (
      <>
        <div>
          <p>Find contacts by name</p>
          <input name="filter" onChange={handleInput} />
        </div>
      </>
    );
  }
}

Input.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export { Input };
