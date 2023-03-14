interface EggNormalResponseOptions {
    outSystemError?: boolean;
    systemErrorCode?: Number;
    userErrorCode?: Number;
    succeeCode?: Number
}

declare module 'egg' {
    // extend your config
    interface EggAppConfig {
        normalResponse: EggNormalResponseOptions;
    }
}