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
    this.postJsonStr = angular.toJson(this.postJson, true);

    // Options for angular-jsoneditor
    this.editJsonOptions = {mode: "tree"};
  };

  this.changePost = () => {
    this.editPostForm.$setValidity('jsonParseError', false);
  }

  this.saveChanges = () => {
    try {
      this.postJson = angular.fromJson(this.postJsonStr);
    }
    catch(err) {
      this.editPostForm.$setValidity('jsonParseError', true);
    }
  };

  this.closeModal = () => {
    $rootScope.$emit('closeEditPostModal');
  }
}

EditPostController.$inject = ['$rootScope', '$state', 'PostsService', '$sce'];

export default editPostModal;
