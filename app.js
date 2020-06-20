const express = require("express");
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')

const PORT = 3000;
const app = express();

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/',
});

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router);


app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});
