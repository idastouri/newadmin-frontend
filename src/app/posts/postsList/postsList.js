const postsList = {
  restrict: 'E',
  template: require('./postsList.html'),
  bindings: {
    posts: '<',
    totalPostCount: '<'
  },
  controller: PostsListController
}

function PostsListController($rootScope, $state, PostsService, $sce) {
  this.$onInit = () => {
    this.isLoadingMorePosts = false;
    this.filtersPosts = {
      isFeaturedPosts: false,
      orderBy: 'date'
    };
    this.postsJson = angular.copy(this.posts);
    this.posts = this.getPreparedPosts(this.posts);

    $rootScope.$on('brandChange', () => {
      this.fetchPosts(this.filtersPosts);
    });
  };

  this.fetchPosts = (options) => {
    PostsService.getPosts(options).then((response) => {
      this.posts = this.getPreparedPosts(response.data.postJson);
      this.totalPostCount = response.data.totalPostCount;
    });
  };

  this.getPreparedPosts = (posts) => {
    return posts.map((post) => {
      post.childPostText = $sce.trustAsHtml(post.childPostText);
      return post;
    });
  };

  this.loadMorePosts = () => {
    if (this.posts.length === this.totalPostCount) return;

    this.isLoadingMorePosts = true;
    PostsService.getPosts(Object.assign({offset: this.posts.length}, this.filtersPosts)).then((response) => {
      this.posts = this.posts.concat(this.getPreparedPosts(response.data.postJson));
    }).finally(() => {
      this.isLoadingMorePosts = false;
    });
  };

  this.setPostFilter = () => this.fetchPosts(this.filtersPosts);
}

PostsListController.$inject = ['$rootScope', '$state', 'PostsService', '$sce'];

export default postsList;
