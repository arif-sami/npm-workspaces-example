import React from 'react';
import ReactDOM from 'react-dom';
import { CustomerJournery } from '@mf-fe-shared/components';
import '@mf-fe-shared/components/src/CustomerJourney/customer-journey.scss';

export interface CustomerJourneryScriptInitializeOptions {
    containerSelector: string;
}

export class CustomerJourneryScript {
    initialize(options: CustomerJourneryScriptInitializeOptions) {
        ReactDOM.render(<CustomerJournery />, document.querySelector(options.containerSelector));
    }
}
