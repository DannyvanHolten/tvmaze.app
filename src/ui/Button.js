import React from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';
import clsx from 'clsx';

const UIButton = ({ children, className = '', type = 'submit', href = '', to = '' }) => {
  const Button = (to && Link) || (href && 'a') || 'button';

  return (
    <Button
      {...{
        className: clsx(
          className,
          'bg-primary-500 focus:outline-none focus:shadow-outline rounded py-2 px-4 appearance-none leading-normal',
          'hover:bg-primary-600 text-white hover:text-white no-underline',
        ),
        ...to && { to },
        ...href && { href },
        ...!href && !to ? { type } : {},
      }}
    >
      {children}
    </Button>
  );
};

UIButton.propTypes = {
  children: pt.node.isRequired,
  className: pt.string,
  type: pt.string,
  href: pt.string,
  to: pt.string,
};

export default UIButton;