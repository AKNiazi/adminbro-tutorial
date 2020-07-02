const express = require("express");
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = require('./admin');
const { authenticate, sessionStorage } = require('./admin/util');

const PORT = 3000;
const app = express();

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookiePassword: 'admin-panel-tutorial',
  authenticate,
}, null, sessionStorage);

app.use(adminBro.options.rootPath, router);
app.use(adminBro.options.loginPath, router);
app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});
