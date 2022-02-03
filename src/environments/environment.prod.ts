export const environment = {
  production: false,
  env: {
    hostURL: process.env.NG_APP_HOST_URL || '',
    storeLog: process.env.NG_APP_STORE_LOG || false
  }
};
