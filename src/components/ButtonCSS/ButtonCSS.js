import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ButtonCSS.css';

const ButtonCSS = (props) => {

  const { 
    type,
    outlined,
    children,
    ...other 
  } = props;


  let classnames = classNames({
    btn: true,
    [`btn-${type}`]: true,
    'btn-outlined': outlined
  });

  return (
    <button className={classnames} {...other} >
      {children}
    </button>
  );
};

ButtonCSS.propTypes = {
  /** Diferent types of buttons*/
  type: PropTypes.oneOf(['default', 'primary', 'danger']),
  /** Outlined */
  outlined: PropTypes.bool,
  /** Child description */
  children: PropTypes.node.isRequired,
}

ButtonCSS.defaultProps = {
	type: 'default',
	outlined: false
};



export default ButtonCSS;