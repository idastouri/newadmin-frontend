import PostsController from './PostsController';

import postsList from './postsList/postsList';
import editPostModal from './editPostModal/editPostModal.js';

import PostsService from './PostsService';

import PostsConfig from './PostsConfig';

const MODULE_NAME = 'CrazeAdmin.posts';

angular.module(MODULE_NAME, [])
  .controller('PostsController', PostsController)

  .component('postsList', postsList)
  .component('editPostModal', editPostModal)

  .factory('PostsService', PostsService)

  .config(PostsConfig);

export default MODULE_NAME;
