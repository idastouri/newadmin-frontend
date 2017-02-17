function PostsController($scope, posts) {
  this.posts = posts;
}

PostsController.$inject = ['$scope', 'posts'];

export default PostsController;
