import React, { Component } from 'react';
import { Button } from '@mf-fe-shared/ui';
import { MortgageCalculator } from '@mf-fe-shared/core';
import { CustomerJourneyPropsInterface } from './CustomerJourney.interface';
import './customer-journey.scss';

export class CustomerJournery extends Component<CustomerJourneyPropsInterface, {}> {
    render() {
        const monthlyPayment = new MortgageCalculator({ interestRate: 3.99, loanAmount: 800000, loanTermInMonths: 300 }).calculateMonthlyPayment();
        return (
            <div className="customer-journey">
                <span>{this.props.showStepNumbers && 'Step 1'}</span>
                <h4>Customer Journey</h4>
                <p>Calculated Monthly Payment is {monthlyPayment} </p>
                <Button label="Continue" />
            </div>
        );
    }
}
