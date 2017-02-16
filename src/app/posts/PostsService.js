function PostsService($http, ApiUrl) {
  return {
    getPosts() {
      const params = {
        sessionToken: 'dcae4dae4da7b77ed5a59e348c704e94',
        userId: '31057',
        offset: 0,
        limit: 5
      };

      return $http({
        method: 'POST',
        url: `${ApiUrl}/posts/getPostsByCategory`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param(params)
      })
      .finally((data) => {
        $log.log(`Response: ${JSON.stringify(data)}`);
      })
    }
  }
}

PostsService.$inject = ['$http', 'ApiUrl'];

export default PostsService;
