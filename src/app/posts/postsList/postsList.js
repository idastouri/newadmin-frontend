const postsList = {
  restrict: 'E',
  template: require('./postsList.html'),
  bindings: {
    posts: '<'
  },
  controller: PostsListController
}

function PostsListController($rootScope, $state, PostsService, $sce) {
  this.$onInit = () => {
    this.posts = this.getPreparedPosts(this.posts);

    $rootScope.$on('brandChange', () => {
      PostsService.getPosts().then((response) => {
        this.posts = this.getPreparedPosts(response.data.postJson);
      });
    });
  };

  this.getPreparedPosts = (posts) => {
    return posts.map((post) => {
      post.childPostText = $sce.trustAsHtml(post.childPostText);
      return post;
    });
  };
}

PostsListController.$inject = ['$rootScope', '$state', 'PostsService', '$sce'];

export default postsList;
