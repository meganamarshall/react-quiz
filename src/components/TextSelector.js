import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextSelector extends PureComponent {

  state = {
    name: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  } 

  render() {
    const {
      name
    } = this.state;

    return (
      <input name="name" type="text" value={name} onChange={this.handleChange} />
    );
  }
}
