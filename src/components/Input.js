import React from 'react';
 
const Input = (props) => <input name={props.name} type={props.type} onChange={props.onChange} />
 
Input.propTypes = {
  onChange: React.PropTypes.func,
  name: React.PropTypes.string,
  type: React.PropTypes.string
}
 
Input.defaultProps ={
  name: '',
  type: 'text'
}
 
module.exports = Input;
