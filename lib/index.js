class UserRequestError extends Error {
    /**
     * 
     * @param {String} message 
     * @param {Number} code 
     * @param {Object | String | null} data,
     */
    constructor(message, code, data) {
        super(message);
        this.code = code || 0;
        this.data = data;
    }
}
module.exports = UserRequestError;