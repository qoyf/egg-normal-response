const { UserRequestError } = require("../../");
const { v4 } = require("uuid")
/**
 * 
 * @param {EggNormalResponseOptions} options 
 * @param {Egg.Application} app 
 * @returns 
 */
module.exports = function Exception(options, app) {

    options = { ...app.config.normalResponse, ...options };
    console.log(options);
    /**
     * 
     * @param {Egg.Context} ctx 
     * @param {async Function} next 
     */
    return async (ctx, next) => {
        try {
            await next();
            ctx.body = { code: 200, msg: "ok", data: ctx.body }
        } catch (err) {
            if (err instanceof UserRequestError) {
                ctx.body = { code: err.code, msg: err.message, data: err.data };
                ctx.logger.warn(err);
            } else {
                const errId = v4();
                ctx.logger.error(errId, err);
                if (options.outSystemError) {
                    ctx.body = { code: -1, errId, ...err };
                } else {
                    ctx.body = { code: -1, errId };
                }
            }
        }
    };

}