const editPostModal = {
  restrict: 'E',
  template: require('./editPostModal.html'),
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: EditPostController
}


function EditPostController() {
  this.$onInit = () => {
    this.oldPost = this.resolve.post;
    this.newPost = angular.copy(this.resolve.post);
    this.jsoneditorOptions = {mode: "tree"};
  };

  this.save = () => {
    this.close({$value: this.newPost});
  }

  this.cancel = () => {
    this.close({$value: null});
  }
}

EditPostController.$inject = [];

export default editPostModal;
