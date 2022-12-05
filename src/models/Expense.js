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

    /**
     * Get the title of the expense
     * @return {String}
     */
    get title() {
        return this.#title;
    }

    /**
     * Get the amount of the expense
     * @return {Number}
     */
    get amount() {
        return this.#amount;
    }

    /**
     * Get the date of the expense
     * @return {Date}
     */
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