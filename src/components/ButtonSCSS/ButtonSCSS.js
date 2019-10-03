import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ButtonSCSS.scss';

const ButtonSCSS = (props) => {

  const { 
    type,
    outlined,
    children,
    ...other 
  } = props;


  let classnames = classNames({
    btn: true,
    [`btnS-${type}`]: true,
    'btnS-outlined': outlined
  });

  return (
    <button className={classnames} {...other} >
      {children}
    </button>
  );
};

ButtonSCSS.propTypes = {
  /** Diferent types of buttons*/
  type: PropTypes.oneOf(['default', 'primary', 'danger']),
  /** Outlined */
  outlined: PropTypes.bool,
  /** Child description */
  children: PropTypes.node.isRequired,
}

ButtonSCSS.defaultProps = {
	type: 'default',
	outlined: false
};



export default ButtonSCSS;