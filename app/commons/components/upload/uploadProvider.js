function uploadFileChunk(http, url, chunk, fileName, fileInfo, callBack, partCount, totalParts) {
  var FD = new FormData();
  FD.append('file', chunk, fileName);
  
  http({
    url: url,
    method: 'POST',
    data: FD,
    headers: {
      'Content-Type': undefined
    },
  }).then(function () {
    if (callBack) {
      if (partCount === totalParts) {
        callBack(fileInfo.gid, fileInfo.file.name);
      }      
    }
  });
}
const uploadProvider = {
  removeUploadFile(http, url, gid) {
    http.delete(url + '?id=' + gid);
  },
  uploadFile(http, url, fileInfo, callBack) {
    // create array to store the buffer chunks
    var fileChunk = [];
    // the file object itself that we will work with
    var file = fileInfo.file;
    // set up other initial vars
    var maxFileSizeMB = 1;
    var bufferChunkSize = maxFileSizeMB * (1024 * 1024);
    var fileStreamPos = 0;
    // set the initial chunk length
    var endPos = bufferChunkSize;
    var size = file.size;

    // add to the FileChunk array until we get to the end of the file
    while (fileStreamPos < size) {
      // "slice" the file from the starting position/offset, to  the required length
      fileChunk.push(file.slice(fileStreamPos, endPos));
      fileStreamPos = endPos; // jump by the amount read
      endPos = fileStreamPos + bufferChunkSize; // set next chunk length
    }
    // get total number of "files" we will be sending
    var totalParts = fileChunk.length;
    var partCount = 0;
    // loop through, pulling the first item from the array each time and sending it
    var chunk = null;
    while (chunk = fileChunk.shift()) {
      partCount++;
      // file name convention
      var filePartName = fileInfo.gid + '_' + file.name + '.part_' + partCount + '.' + totalParts;
      // send the file
      uploadFileChunk(http, url, chunk, filePartName, fileInfo, callBack, partCount, totalParts);
    }
  }
}
export default uploadProvider;
