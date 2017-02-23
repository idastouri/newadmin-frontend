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
    this.showEditPostModal = false;
    this.postsJson = angular.copy(this.posts);
    this.posts = this.getPreparedPosts(this.posts);

    $rootScope.$on('brandChange', () => {
      PostsService.getPosts().then((response) => {
        this.posts = this.getPreparedPosts(response.data.postJson);
        this.totalPostCount = response.data.totalPostCount;
      });
    });

    $rootScope.$on('closeEditPostModal', () => {
      this.showEditPostModal = false;
    });
  };

  this.getPreparedPosts = (posts) => {
    return posts.map((post) => {
      post.postText = $sce.trustAsHtml(post.postText);
      post.childPostText = $sce.trustAsHtml(post.childPostText);
      return post;
    });
  };

  this.loadMorePosts = () => {
    if (this.posts.length === this.totalPostCount) return;
    this.isLoadingMorePosts = true;
    PostsService.getPosts({offset: this.posts.length}).then((response) => {
      this.posts = this.posts.concat(this.getPreparedPosts(response.data.postJson));
    }).finally(() => {
      this.isLoadingMorePosts = false;
    });
  };

  this.editPost = (post) => {
    this.editPostJson = post;
    this.showEditPostModal = true;
  }
}

PostsListController.$inject = ['$rootScope', '$state', 'PostsService', '$sce'];

export default postsList;
