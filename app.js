/**
 * 
 * @param {Egg.Application} app 
 */
module.exports = (app) => {
    
    app.config.coreMiddleware.push("normalResponseOut");
    
};