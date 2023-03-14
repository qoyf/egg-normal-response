interface EggNormalResponseOptions {
    outSystemError: boolean
}
declare module 'egg' {
    // extend your config
    interface EggAppConfig {
        normalResponse: EggNormalResponseOptions;
    }
}