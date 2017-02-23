const postItem = {
  restrict: 'E',
  template: require('./postItem.html'),
  bindings: {
    post: "<"
  },
  controller: PostItemController
}

function PostItemController($rootScope, $sce) {
  this.$onInit = () => {
    this.isExpanded = false;
    this.postContent = $sce.trustAsHtml(this.truncate(this.post.postText));
  };
  this.expand = () => {
    this.isExpanded = true;
    this.postContent = $sce.trustAsHtml(this.post.postText);
  }
  this.hide = () => {
    this.isExpanded = false;
    this.postContent = $sce.trustAsHtml(this.truncate(this.post.postText));
  }
  this.truncate = (text) => {
    return text.split(/\s+?/).slice(0,20).join(" ") + " ..."
  }
}

PostItemController.$inject = ['$rootScope', '$sce'];

export default postItem;
