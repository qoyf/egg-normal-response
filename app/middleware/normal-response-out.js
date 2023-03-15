const UserRequestError = require("../../lib");
const { v4 } = require("uuid")
/**
 * 
 * @param {EggNormalResponseOptions} options 
 * @param {Egg.Application} app 
 * @returns 
 */
module.exports = function Exception(options, app) {

    options = { ...app.config.normalResponse, ...options };

    /**
     * 
     * @param {Egg.Context} ctx 
     * @param {async Function} next 
     */
    return async (ctx, next) => {
        try {
            await next();
            ctx.body = { code: options.succeeCode, msg: "ok", data: ctx.body }
        } catch (err) {
            if (err instanceof UserRequestError) {
                ctx.body = { code: options.userErrorCode + err.code, msg: err.message, data: err.data };
                ctx.logger.warn(err);
            } else {
                const errId = v4();
                ctx.logger.error(errId, err);
                if (options.outSystemError) {
                    ctx.body = { code: options.systemErrorCode, errId, ...err };
                } else {
                    ctx.body = { code: options.systemErrorCode, errId };
                }
            }
        }
    };

}
