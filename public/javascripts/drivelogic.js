/**
 * Created by Steve on 15/08/2017.
 */

$.blockUI.defaults.overlayCSS.opacity = .2;
$(document).ready(function() {

    console.log('jquery2 ready');
    $('.panel-default').block({ message: 'Loading drives..' });
    listDrives();

});

/* INHERIT */
$('.btn-inherit-step-2').on('click', function (e){
    e.preventDefault();

    $('.body-step-1').hide();
    $('.body-step-2').show();

    var data = {};
    data.drive = $( "#DRIVE_LIST").val();
    data.time = $( "#TIME_LIST").val();
    data.receiver = $('#FULL-NAME').val();
    data.birth = $('#BIRTH').val();
    data.email = $('#EMAIL').val();

    $.ajax({
        method: 'POST',
        url: '/api/inherit',
        data: data,
        processData: false,
        contentType: false
    }).done(function(buckets) {

        if (buckets.status === 'fail') {
            // Error handling
            toastr.error(buckets.message, 'Error occured!')
        }
        if (buckets.status === 'success') {
            $('#hashkey').text(buckets.data.nSalt);
            $('#enckey').text(buckets.data.hash);

        }

    })
    /*
     $.post("/inherit",data, function(data){
     if(data==='done')
     {
     alert("login success");
     }
     });
     */


});


$('.btn-inherit-step-3').on('click', function (e){
    e.preventDefault();

    $('.body-step-2').hide();
    $('.body-step-3').show();

});

$('#table-drives').on( 'click', 'button', function () {
    var table = $("#table");
    table.empty();
    listDrives();
    listFiles($(this).attr('data-drive'));

});

$('#table').on( 'click', 'button', function () {

    downloadFile($(this).attr('data-drive'), $(this).attr('data-filename'), $(this).attr('data-id'), $(this).attr('data-mime'));

});

$('.btn-add-drive').on('click', function(event) {
    event.preventDefault();
    createDrive($('#drive-name').val());
});

$('.file-action-inherit').on( 'click', 'button', function () {
    window.location = '/api/inherit';
});

/*********************************************************************************
 *                                      DRIVES                                   *
 *********************************************************************************/

function createDrive(name) {
    $('.panel-default').block({ message: 'Loading drives..' });

    var data = {};
    data.driveID = name;
    data.msg = 'none';


    $.ajax({
        method: 'POST',
        url: '/api/buckets/create',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(buckets) {

        if (buckets.status === 'fail') {
            // Error handling
            toastr.error(buckets.message, 'Error occured!')
        }
        if (buckets.status === 'success') {
            toastr.success(buckets.message, 'Success!')
        }
        $('.panel-default').unblock();
        listDrives();
    })
}

/* Get the drives available */
function listDrives() {
    $('.panel-default').block({ message: 'Loading drives..' });
    $.ajax({
        method: 'GET',
        url: '/api/buckets/list'
    }).done(function(buckets) {

        if (buckets.status === 'fail') {
            // Error handling
            toastr.error(buckets.message, 'Error occured!')
        }
        if (buckets.status === 'success') {
            // Error handling
            var table = $("#table-drives");
            table.empty();
            table.append("<thead><tr><td>Drive name</td><td>Driver ID</td><td>Actions</td></tr>");
            table.append("<tbody>");

            buckets.buckets.forEach(function(bucket) {
                table.append("<tr valign='middle'><td><strong>" + bucket.name + "</strong></td><td>" + bucket.id +"</td><td> " +
                    "<button class='btn btn-md btn-getdrive btn-success ion-ios-search-strong ion-icon-m' data-drive='"+ bucket.id +"'></button> " +
                    "<button class='btn btn-md btn-getdrive ion-ios-trash ion-icon-m'></button> " +
                    "</td></tr>");
            });
            table.append("</tbody>");


        }
        $( ".drive-actions" ).show();
        $('.panel-default').unblock();
    })
}

/*********************************************************************************
 *                                      FILES                                    *
 *********************************************************************************/


function listFiles(driveID) {

    var data = {};
    data.driveID = driveID;
    data.msg = 'none';


    console.log('requesting drive ' + driveID);
    $.ajax({
        method: 'POST',
        url: '/api/files/list',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(bucketsWithFiles) {

        if (bucketsWithFiles.status === 'fail') {
            // Error handling
            toastr.error(bucketsWithFiles.message, 'Error occured!')
        }
        if (bucketsWithFiles.status === 'success') {
            var table = $("#table");
            table.empty();

            table.append("<thead><tr><td>Filename</td><td>MIME</td><td>Action</td></tr>");
            table.append("<tbody>");

            $(".file-action-inherit").html("<button class='btn btn-md btn-primary' data-drive='" + driveID+ "'><i class='ion-locked ion-icon'></i>Make this drive inheritable</button>");


            bucketsWithFiles.files.forEach(function(bucket) {
                //console.log(bucket);
                table.append("<tr><td class='filenames'>" + add3Dots(bucket.filename, 20) + "</td><td>" + bucket.filename.split('.').pop() + "</td> " +
                    "<td><button class='btn btn-md btn-getfile btn-success ion-android-download ion-icon-m' data-mime='"+ bucket.filename.split('.').pop() +"' data-id='"+ bucket.id +"' data-drive='"+ bucket.bucket +"' data-filename='"+ bucket.filename +"'></button></td> " +
                    "</tr>");
            });
            table.append("</tbody>");
            $( ".file-actions" ).show();
        }

    })
}

/*********************************************************************************
 *                                 UPLOAD - DOWNLOAD                             *
 *********************************************************************************/


function downloadFile(containerID, filename, fileID, fileMime) {
    $('.panel-default').block({ message: 'Preparing download, please wait..' });

    var data = {};
    data.driveID = containerID;
    data.fileID = fileID;
    data.fileNAME = filename;
    data.MIME = fileMime;


    $.ajax({
        method: 'POST',
        /* /list/:id/download/:name/:fileid/mime/:mime */
        url: '/api/files/download',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(response) {

        $('.panel-default').unblock();
        if (response.status === 'fail') {
            // Error handling
            toastr.error(response.message, 'Error occured!')
        }
        if (response.status === 'success') {
            // Error handling
            toastr.success(response.message, 'Success!');
            window.location = '/api/files/download/local/' + filename ;
        }

    })

}

/*********************************************************************************
 *                                      FUNCTIONS                                 *
 *********************************************************************************/

function add3Dots(string, limit) {
    var dots = "...";
    if(string.length > limit)
    {
        // you can also use substr instead of substring
        string = string.substring(0,limit) + dots;
    }

    return string;
}

