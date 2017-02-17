function PostsConfig($stateProvider) {
  $stateProvider
    .state('posts', {
      url: '/posts',
      controller: 'PostsController as posts',
      template: '<posts-list posts="posts.posts.postJson"></posts-list>',
      resolve: {
        posts(PostsService) {
          return PostsService.getPosts().then((res) => res.data);
        }
      }
    })
}

PostsConfig.$inject = ['$stateProvider'];

export default PostsConfig;
