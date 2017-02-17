function PostsService($http, ApiUrl, $log) {
  return {
    getPosts() {
      const params = {
        sessionToken: '4bc9ce361611fbbed32fbf86ece79076',
        userId: '31057',
        offset: 0,
        limit: 5,
        brandId: 'Events'
      };

      return $http({
        method: 'POST',
        url: `${ApiUrl}/posts/getPostsByCategory`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param(params)
      });
    }
  }
}

PostsService.$inject = ['$http', 'ApiUrl', '$log'];

export default PostsService;
