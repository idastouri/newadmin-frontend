const postsList = {
  restrict: 'E',
  template: require('./postsList.html'),
  bindings: {
    posts: '@'
  },
  controller: PostsListController
}

function PostsListController() {
  console.log(this.posts);
}

PostsListController.$inject = ['$scope'];

export default postsList;
