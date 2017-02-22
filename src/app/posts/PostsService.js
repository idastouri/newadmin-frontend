function PostsService($http, $rootScope, UserService, Config) {
  return {
    getPosts(options) {

      var _options = options || {};

      if (_options.offset === undefined) {
        $rootScope.viewLoading = true;
      }

      const params = {
        sessionToken: UserService.sessionToken,
        userId: UserService.user.userId,
        brandId: $rootScope.currentBrand,
        offset: _options.offset || 0,
        limit: Config.postsLimit,
        childPostsFlag: _options.getChildren || 1
      };

      return $http({
        method: 'POST',
        url: `${$rootScope.currentEnv.apiUrl}/posts/getPostsByCategory`,
        data: $.param(params)
      }).finally(() => {
        $rootScope.viewLoading = false;
      });
    }
  }
}

PostsService.$inject = ['$http', '$rootScope', 'UserService', 'Config'];

export default PostsService;
