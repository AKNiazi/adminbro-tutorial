const AdminBro = require('admin-bro');
const { User, Company } = require('../models');
const { UserResource, CompanyResource } = require('./resources');
const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  company: {
    name: 'Company Management',
    icon: 'Product'
  }
};
const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
      resource: User,
      options: {
        ...UserResource,
        parent: sidebarGroups.user,
      }
    }, {
      resource: Company,
      options: {
        ...CompanyResource,
        parent: sidebarGroups.company,
      }
    }
  ],
  branding: {
    companyName: 'AdminBro Tutorial',
    softwareBrothers: false,
  }
});

module.exports = adminBro;