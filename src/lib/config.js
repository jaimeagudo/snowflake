module.exports = {
  PARSE: {
    APP_ID: '',
    REST_API_KEY: '',
    SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY'
  },
  HAPI: {
    local: {
      url: 'http://127.0.0.1:5000'
    },
    remote: {
      url: 'https://mysnowflake.rhcloud.com'
    }
  },
  backend: {
    parse: false,
    hapiRemote: false,
    hapiLocal: true
  }
}
