import AdminJS, { AdminJSOptions, ResourceWithOptions } from "adminjs";
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import BlogPost from "../models/BlogPost.js";

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const blogPostResource: ResourceWithOptions = {
  resource: BlogPost,
  options: { properties: { content: { type: 'richtext' } } }
}

const adminOptions: AdminJSOptions = {
  resources: [blogPostResource]
};

const admin = new AdminJS(adminOptions);

export const adminRouter = AdminJSExpress.buildRouter(admin);

export default admin;