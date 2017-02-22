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
    this.isLoadingMorePosts = false;
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
      post.postText = $sce.trustAsHtml(post.postText);
      return post;
    });
  };

  this.loadMorePosts = () => {
    this.isLoadingMorePosts = true;
    PostsService.getPosts(this.posts.length).then((response) => {
      this.posts = this.posts.concat(this.getPreparedPosts(response.data.postJson));
    }).finally(() => {
      this.isLoadingMorePosts = false;
    });
  };
}

PostsListController.$inject = ['$rootScope', '$state', 'PostsService', '$sce'];

export default postsList;
