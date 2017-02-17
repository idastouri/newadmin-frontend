const postsList = {
  restrict: 'E',
  template: require('./postsList.html'),
  bindings: {
    posts: '<'
  },
  controller: PostsListController
}

function PostsListController() {
}

PostsListController.$inject = [];

export default postsList;
