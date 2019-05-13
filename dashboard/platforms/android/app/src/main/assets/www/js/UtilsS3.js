 
var albumBucketName = 'garanitofiap';
var bucketRegion = 'us-east-1';
AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:f1e4a6a0-9d38-43d1-8a38-d61c71790e0d'
    })
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: albumBucketName }
});

function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
}
function getName() {
    var fullPath = document.getElementById("photo").src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
  return filename;
}

function addPhoto(albumName) {
    var albumPhotosKey = encodeURIComponent(albumName);
 
    var photoKey = albumPhotosKey + ".png";
    /*var canvasInternal = document.getElementById("canvas");
    var canvasContext = canvasInternal.getContext("2d");
    canvasContext.drawImage(img, 60, 60)
    var dataUrl = canvasInternal.toDataURL("image/jpg");
   */
    debugger
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("photo");
    ctx.drawImage(img, 10, 10)
    var dataUrl = c.toDataURL("image/png");
    var blobData = dataURItoBlob(dataUrl);
    s3.upload({
        Key: photoKey,
        Body: blobData,
        ACL: 'public-read'
    }, function (err, data) {
        if (err) {
            return alert('There was an error uploading your photo: ', err.message);
        }
        alert('Successfully uploaded photo.');
        // viewAlbum(albumName);
    });
}
/*
function createAlbum(albumName) {
    albumName = albumName.trim();
    if (!albumName) {
        return alert('Album names must contain at least one non-space character.');
    }
    if (albumName.indexOf('/') !== -1) {
        return alert('Album names cannot contain slashes.');
    }
    var albumKey = encodeURIComponent(albumName) + '/';
    s3.headObject({ Key: albumKey }, function (err, data) {
        if (!err) {
            return alert('Album already exists.');
        }
        if (err.code !== 'NotFound') {
            return alert('There was an error creating your album: ' + err.message);
        }
        s3.putObject({ Key: albumKey }, function (err, data) {
            if (err) {
                return alert('There was an error creating your album: ' + err.message);
            }
            alert('Successfully created album.');
            viewAlbum(albumName);
        });
    });
}
*/
 