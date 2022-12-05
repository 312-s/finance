export default class ChartBart {
    #amount;
    #month;

    constructor(amount, month) {
        this.#amount = amount;
        this.#month = this.#monthNumberToString(month);
    }

    get amount() {
        return this.#amount;
    }

    get month() {
        return this.#month;
    }

    updateAmount(price) {
        this.#amount += price;
    }

    #monthNumberToString(monthNumber) {
        switch (monthNumber) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May'
            case 6:
                return 'June'
            case 7:
                return 'July'
            case 8:
                return 'August'
            case 9:
                return 'September'
            case 10:
                return 'October'
            case 11:
                return 'November'
            case 12:
                return 'December'
        }
    }
}