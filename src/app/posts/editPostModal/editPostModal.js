const editPostModal = {
  restrict: 'E',
  template: require('./editPostModal.html'),
  bindings: {
    postJson: '=',
  },
  controller: EditPostController
}

function EditPostController($rootScope, $state, PostsService, $sce) {
  this.$onInit = () => {
    this.postJsonForChange = angular.copy(this.postJson);
    this.jsoneditorOptions = {mode: "tree"};
  };

  this.saveChanges = () => {
    //
    //  Call to backend for saving;
    //
  };

  this.closeModal = () => {
    $rootScope.$emit('closeEditPostModal');
  }
}

EditPostController.$inject = ['$rootScope', '$state', 'PostsService', '$sce'];

export default editPostModal;
