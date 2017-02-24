function PostsService($http, $rootScope, UserService, Config) {
  return {
    getPosts({ offset = 0, getChildren = 1, isFeaturedPosts = 0} = {}) {
      $rootScope.viewLoading = true;

      const params = {
        sessionToken: UserService.sessionToken,
        userId: UserService.user.userId,
        brandId: $rootScope.currentBrand,
        offset: offset,
        limit: Config.postsLimit,
        childPostsFlag: getChildren,
        featuredFlag: isFeaturedPosts | 0,
        userFlag: 0,
        userStatsFlag: 0,
        channelFlag: 0
      };

      return $http({
        method: 'POST',
        url: `${$rootScope.currentEnv.apiUrl}/posts/getPostsByCategory`,
        data: $.param(params)
      }).finally(() => {
        $rootScope.viewLoading = false;
      });
    },

    updatePost(post, options) {
      $rootScope.viewLoading = true;

      const params = {
        sessionToken: UserService.sessionToken,
        userId: UserService.user.userId,
        brandId: $rootScope.currentBrand,
        postId: post.postId,
        post: post
      };

      return $http({
        method: 'POST',
        url: `${$rootScope.currentEnv.apiUrl}/posts/updatePost`,
        data: $.param(params)
      }).finally(() => {
        $rootScope.viewLoading = false;
      });
    }
  }
}

PostsService.$inject = ['$http', '$rootScope', 'UserService', 'Config'];

export default PostsService;
