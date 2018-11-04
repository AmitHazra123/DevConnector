import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.object.isRequired,
  placeholder: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.object.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
