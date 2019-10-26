// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportTag from '../../../app/model/tag';
import ExportTagArticle from '../../../app/model/tag_article';
import ExportUsers from '../../../app/model/users';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Tag: ReturnType<typeof ExportTag>;
    TagArticle: ReturnType<typeof ExportTagArticle>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
