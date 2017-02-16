function PostsConfig($stateProvider) {
  $stateProvider
    .state('posts', {
      url: '/posts',
      views: {
        'main@': {
          controller: 'PostsController as posts',
          template: '<posts-list></posts-list>'
        }
      },
    })
}

PostsConfig.$inject = ['$stateProvider'];

export default PostsConfig;
