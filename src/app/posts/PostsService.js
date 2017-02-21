function PostsService($http, $rootScope, UserService) {
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
        limit: 30
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

PostsService.$inject = ['$http', '$rootScope', 'UserService'];

export default PostsService;
