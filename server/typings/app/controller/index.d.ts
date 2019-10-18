// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
    users: ExportUsers;
  }
}
