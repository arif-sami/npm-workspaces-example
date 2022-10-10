import { CustomerJourneryScript } from './customer-journey-script';

declare global {
    interface Window {
        Mortgagefinder: any;
    }
}

window.Mortgagefinder = {
    ...window.Mortgagefinder,
    MfCustomerJourneryScript: new CustomerJourneryScript(),
};
