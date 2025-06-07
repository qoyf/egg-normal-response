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

   
    const ignoreReg=[];
    if(options.ignore){
        for (let index = 0; index <  options.ignore.length; index++) {
            
            const ignore =  options.ignore[index];
            if(ignore){
                const ignoreStr= `^${ignore.split("*").join(".*")}$`;
                ignoreReg.push(RegExp(ignoreStr));
            }
          
        }
    }

    /**
     * 
     * @param {Egg.Context} ctx 
     * @param {async Function} next 
     */
    return async (ctx, next) => {
        try {
            await next();
            for (let index = 0; index < ignoreReg.length; index++) {
                const ignore = ignoreReg[index];
                if(ignore.test(ctx.routerPath)){
                    return;
                }
            }
            const val =ctx.body;
            ctx.body = { code: options.succeeCode, msg: "ok", data: ctx.body };
            if(!val && ctx.status===204){
                ctx.status=200;
             }
        } catch (err) {
            if (err instanceof UserRequestError) {
                ctx.body = { code: options.userErrorCode + err.code, msg: err.message, data: err.data };
                ctx.logger.warn(err);
            }else if (err.name=='UnprocessableEntityError' && err.code=='invalid_param') { // 添加对ValidationError的处理
                ctx.body = { code: err.code, msg: err.message, errors: err.errors };
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


