export interface MortgageCalculatorOptions {
    /**
     * interest rate
     */
    interestRate: number;
    loanAmount: number;
    loanTermInMonths: number;
}

export class MortgageCalculator {
    private interestRate: number;
    private loanAmount: number;
    private loanTermInMonths: number;

    constructor(options: MortgageCalculatorOptions) {
        this.interestRate = options.interestRate;
        this.loanAmount = options.loanAmount;
        this.loanTermInMonths = options.loanTermInMonths;
    }

    /**
     * simple interest formula
     * @returns number
     */
    calculateMonthlyPayment(): number {
        const totalPaymentAmount = this.loanAmount * (this.interestRate / 100);
        return totalPaymentAmount / this.loanTermInMonths;
    }
}
