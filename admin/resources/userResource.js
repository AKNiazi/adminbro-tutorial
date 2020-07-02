module.exports = {
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
    password: {
      type: 'password',
      isVisible: {
        show: false,
        edit: true,
        list: false,
        filter: false
      }
    }
  }
};