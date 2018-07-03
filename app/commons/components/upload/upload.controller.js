import random from '../../utility/random';
import uploadProvider from './uploadProvider';
import _ from 'lodash';

function uploadController($scope, $element, $attrs, $timeout,
  $http, oauthDataFactory, downloadFactory) {
  
  var url = oauthDataFactory.urlMain()  + ($scope.url ? $scope.url : 'api/upload');
  var vm = this;
  vm.files = [];

  var _css = ''; 
  if (!$attrs.class && !$attrs.ngClass) {
    _css = '';    
  }
  else {
    _css = $attrs.ngClass ? $attrs.ngClass : $attrs.class;
  }

  var button = $element.find('button').addClass('btn btn-primary btn-sm');  
  var fileField = $element.find('input');
  var ul = $element.find('ul');

  var _appendFileInfo = function (fileInfo) {
    vm.files.push(fileInfo);
    var name =  fileInfo.file.name;
    var gid = fileInfo.gid ;    
    ul.append('<li id="item-' + gid + '" class="list-group-item">' + 
    '<span class="file-info">' + name + '</span>' +
    '<i id="loading-' + gid + '" class="fa fa-spinner fa-spin text-primary"></i>' + 
    '</li>');
  }

  var _deleteUploadFile = function (gid) {
    $('#item-' + gid).remove();
    _.remove(vm.files, {
      gid: gid
    });
    uploadProvider.removeUploadFile($http, url, gid);
  }

  var _atferUploadFile = function (gid, name) {
    $('#loading-' + gid).removeClass('fa-spinner');
    $('#loading-' + gid).removeClass('fa-spin');
    $('#loading-' + gid).addClass('fa-check');

    $('#loading-' + gid).parent().append(
      '<i id="delete-' + gid + '" class="fa fa-times text-danger" ' +
      'style="padding-left: 5px;cursor: pointer;"></i>'
    );

    $timeout(function () {
      $('#delete-' + gid).bind('click', function () {
        _deleteUploadFile($(this).attr('id').replace('delete-', ''));
      })
    });
    fileField.val(null);
    if ($attrs.multiple) {
      $scope.ciFileName.push(name);
      $scope.ciStoreFileName.push(gid);
    }
    else {
      $scope.ciFileName = name,
      $scope.ciStoreFileName = gid
    }
  }

  
  //If an ACCEPT attribute was provided, add it to the input.
  if ($attrs.accept) {
    fileField.attr('accept', $attrs.accept);
  }
  if ($attrs.multiple) {
    fileField.attr('multiple', $attrs.multiple);
  }

  fileField.bind('change', function (event) {
    vm.files = [];
    ul.html('');
    if ($attrs.multiple) {
      $scope.ciFileName = [],
      $scope.ciStoreFileName = []; 
    }
    else {
      $scope.ciFileName = '';
      $scope.ciStoreFileName = '';
    }
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      var fileInfo = {file: files[i], gid: random.guid('')};
      _appendFileInfo(fileInfo);
      uploadProvider.uploadFile($http, url, fileInfo, _atferUploadFile);
    }    
  });
  fileField.bind('click', function (e) {
    e.stopPropagation();
  });
  button.bind('click', function (e) {
    e.preventDefault();
    fileField[0].click();
  });

  var _initExistFile = function (storeFileName, fileName) {
    ul.append('<li id="item-' + storeFileName + '" class="list-group-item">' + 
      '<span class="file-info">' + fileName + '</span>' +      
      '<i id="delete-' + storeFileName + '" class="fa fa-times text-danger" ' +
      'style="padding-left: 5px;cursor: pointer;"></i>' +
      '<i id="download-' + storeFileName + '" class="fa fa-download text-primary" ' +
      'style="padding-left: 5px;cursor: pointer;"></i>' +
      '</li>');
    $timeout(function () {
      $('#delete-' + storeFileName).bind('click', function () {
        _deleteUploadFile($(this).attr('id').replace('delete-', ''));
      })
      $('#download-' + storeFileName).bind('click', function () {
        downloadFactory.download($(this).attr('id').replace('download-', ''));
      })
    }, 250);
  }

  function init() {
    if ($attrs.multiple) {
      for (var i = 0; i < $scope.ciFileName.length; i++) {        
        if ($scope.ciStoreFileName[i] && $scope.ciStoreFileName[i] !== '' && 
        $scope.ciFileName[i] && $scope.ciFileName[i] !== '') {
          _initExistFile($scope.ciStoreFileName[i], $scope.ciFileName[i]);
        }     
      }
    }
    else {      
      if ($scope.ciStoreFileName && $scope.ciStoreFileName !== '' && 
      $scope.ciFileName && $scope.ciFileName !== '') {
        _initExistFile($scope.ciStoreFileName, $scope.ciFileName);
      }      
    }
  }
  init();
}

/* @ngInject */
export default uploadController;
