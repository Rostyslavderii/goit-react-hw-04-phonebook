import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Feedback.module.scss';
// import cn from 'classnames';

const Input = ({ filterContact }) => {
  const onChange = e => {
    filterContact(e.target.value);
  };

  return (
    <>
      <div>
        <p>Find contacts by name</p>
        <input name="filter" onChange={onChange} />
      </div>
    </>
  );
};

Input.propTypes = {
  filterContact: PropTypes.func.isRequired,
};

export { Input };
