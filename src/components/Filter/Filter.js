import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Filter.module.css';

class Filter extends Component {

    filterInputId = shortid.generate();

    render() {
        return (
            <label className={s.label} htmlFor={this.filterInputId}>
                Find contacts by name
                <input className={s.input}
                    type='text'
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </label>
        )
    }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};