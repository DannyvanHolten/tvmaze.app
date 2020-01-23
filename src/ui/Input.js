import React, { Component } from 'react';
import clsx from 'clsx';
import pt from 'prop-types';

class UIInput extends Component {

  input = React.createRef();

  handleChange = () => {
    const { onChange } = this.props;

    onChange(this.input.current.value);
  };

  render() {
    const { autoFocus = false, className = '', type = 'text', placeholder = '', name } = this.props;

    return (
      <input
        autoFocus={autoFocus}
        className={clsx(
          className,
          'bg-white font-thin focus:outline-none text-regular focus:shadow-outline text-gray-900 rounded py-2 px-4 block',
          'w-full appearance-none leading-normal',
        )}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        ref={this.input}
        type={type}
      />
    );
  };
}

UIInput.propTypes = {
  autoFocus: pt.bool,
  className: pt.string,
  type: pt.string,
  placeholder: pt.string,
  name: pt.string.isRequired,
};

export default UIInput;