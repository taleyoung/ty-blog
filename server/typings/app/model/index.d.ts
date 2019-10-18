// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportUsers from '../../../app/model/users';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
