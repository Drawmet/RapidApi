import React, { Component } from 'react';

import { FirstUpperLetter } from '../../utils/consts';

class Dropdown extends Component {
    state = {
        selectOption: this.props.data[0]
    }

    renderOptions = (data) =>
        data.map((item) => (
            <option
                value={item}
                key={`option_${item}`}
            >
                {FirstUpperLetter(item)}
            </option>
        ));

    handleOnChange = (e) => {
        const { onChange } = this.props;

        onChange(e);

        this.setState({ selectOption: e.target.value })
    }

    render() {
        const { data } = this.props;
        const { selectOption } = this.state;

        return (
            <select
                className='select'
                value={selectOption}
                onChange={this.handleOnChange}
            >
                {this.renderOptions(data)}
            </select>
        )
    }
}

export default Dropdown;