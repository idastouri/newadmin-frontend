const postItem = {
  restrict: 'E',
  template: require('./postItem.html'),
  bindings: {
    post: '<'
  },
  controller: PostItemController
}

function PostItemController($rootScope, $sce, $uibModal, toaster) {
  this.$onInit = () => {
    this.resize('reduce');
  };

  this.editPost = (post) => {
    const modalInstance = $uibModal.open({
      animation: true,
      component: 'editPostModal',
      size: 'lg',
      resolve: {
        post: function () {
          return post;
        }
      }
    });

    modalInstance.result.then((newPost) => {
      // Compare with 'post' and call to backend
    }, () => {
      toaster.error('Oops', 'Modal error!'); // Fix me
    });
  };

  this.resize = (type) => {
    if (type === 'expand') {
      this.isExpanded = true;
      this.postContent = $sce.trustAsHtml(this.post.postText);
    } else if (type === 'reduce') {
      this.isExpanded = false;
      this.postContent = $sce.trustAsHtml(this.truncate(this.post.postText));
    }
  }

  this.truncate = (text) => {
    return text.split(/\s+?/).slice(0, 20).join(' ') + '...'
  }
}

PostItemController.$inject = ['$rootScope', '$sce', '$uibModal', 'toaster'];

export default postItem;
