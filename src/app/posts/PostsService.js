function PostsService($http, $rootScope, UserService, Config) {
  return {
    getPosts({ offset = 0, getChildren = 1} = {}) {
      $rootScope.viewLoading = true;

      const params = {
        sessionToken: UserService.sessionToken,
        userId: UserService.user.userId,
        brandId: $rootScope.currentBrand,
        offset: offset,
        limit: Config.postsLimit,
        childPostsFlag: getChildren
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
