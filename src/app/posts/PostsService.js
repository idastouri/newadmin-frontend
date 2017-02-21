function PostsService($http, $rootScope, UserService, Config) {
  return {
    getPosts(offset) {
      if (offset === undefined) {
        $rootScope.viewLoading = true;
      }

      const params = {
        sessionToken: UserService.sessionToken,
        userId: UserService.user.userId,
        brandId: $rootScope.currentBrand,
        offset: offset ? offset : 0,
        limit: Config.postsLimit
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
