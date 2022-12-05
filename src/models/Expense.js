/**
 * Simulator of expense
 */
export default class Expense {
    #title;
    #amount;
    #date;

    /**
     * Make Expense item
     * @param {string} title - Name or description of expense
     * @param {string} amount - Price of expense
     * @param {string} date - Date of expense
     */
    constructor(title, amount, date) {
        this.#title = title;
        this.#amount = this.#serializeAmountString(amount);
        this.#date = this.#serializeDateString(date);
    }

    get title() {
        return this.#title;
    }

    get amount() {
        return this.#amount;
    }

    get date() {
        return this.#date;
    }

    #serializeDateString(date) {
        return new Date(date);
    }

    #serializeAmountString(price) {
        return Number(price);
    }
}