import React from 'react';
import classNames from 'classnames';


function Button({children, className, onClick, type = 'button'}) {
  const cssClasses = classNames('btn', className);
  return (
    <button className={cssClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
