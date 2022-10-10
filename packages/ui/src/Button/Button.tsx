import React, { Component } from 'react';
import { ButtonPropsInterface } from './Button.interface';

export class Button extends Component<ButtonPropsInterface, {}> {
    render() {
        const { label, ...rest } = this.props;
        return <button {...rest}>{label}</button>;
    }
}
