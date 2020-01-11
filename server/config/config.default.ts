import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1570532692174_2562";

  // add your egg config in here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  };
  config.cors = {
    // origin: "http://127.0.0.1:7000",
    origin: "http://127.0.0.1:3000",
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
