import styles from '../Section/Section.module.scss';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      {<h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
