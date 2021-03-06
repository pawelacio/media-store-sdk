import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';

const EmailInput = ({
  value,
  onChange,
  onBlur,
  error,
  label,
  required,
  reference
}) => (
  <Input
    placeholder={label}
    type="email"
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    error={error}
    required={required}
    reference={reference}
    ariaRequired={required}
    ariaInvalid={!!error}
  />
);

EmailInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
  ])
};

EmailInput.defaultProps = {
  value: '',
  onChange: () => {},
  onBlur: () => {},
  error: '',
  label: 'Email',
  required: false,
  reference: { current: null }
};

export default EmailInput;
