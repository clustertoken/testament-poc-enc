/**
 * Created by Steve on 15/08/2017.
 */
$.blockUI.defaults.overlayCSS.opacity = .2;
$(document).ready(function() {

    console.log('jquery2 ready');
    $('.panel-default').block({ message: 'Loading drives..' });
    listDrives();

});


$('.upload-btn').on('click', function (){
    $('#upload-input').click();
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');

});

$('#upload-input').on('change', function(){

    var files = $(this).get(0).files;

    if (files.length > 0){
        // create a FormData object which will be sent as the data payload in the
        // AJAX request
        var formData = new FormData();

        // loop through all the selected files and add them to the formData object
        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            // add the files to formData object for the data payload
            formData.append('uploads[]', file, file.name);
            formData.append('driveID', $("#DRIVE_LIST").val());
        }

        $.ajax({
            url: '/api/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data){
                console.log('upload successful! : ' + data.filename);
                $(".progress-state").text(data.filename +  ' successfuly stored on the blockchain.');
                $('.panel-default').unblock();
                toastr.success(data.filename + ' stored on the blockhain', 'Upload success')
            },
            xhr: function() {
                // create an XMLHttpRequest
                var xhr = new XMLHttpRequest();

                // listen to the 'progress' event
                xhr.upload.addEventListener('progress', function(evt) {

                    if (evt.lengthComputable) {
                        // calculate the percentage of upload completed
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);

                        // update the Bootstrap progress bar with the new percentage
                        $('.progress-bar').text(percentComplete + '%');
                        $('.progress-bar').width(percentComplete + '%');

                        // once the upload reaches 100%, set the progress bar text to done
                        if (percentComplete === 100) {
                            $('.progress-bar').html('Done');
                            $(".progress-state").text('Local upload done, storing in the blockchain...');
                            $('.panel-default').block({ message: 'Storing files on the blockchain..' });
                        }

                    }

                }, false);

                return xhr;
            }
        });

    }
});


/*********************************************************************************
 *                                      DRIVES                                   *
 *********************************************************************************/

/* Get the drives available */
function listDrives() {
    $.ajax({
        method: 'GET',
        url: '/api/buckets/list'
    }).done(function(buckets) {

        if (buckets.status === 'fail') {
            // Error handling
            toastr.error(buckets.message, 'Error occured!')
        }
        if (buckets.status === 'success') {

            var options = $("#DRIVE_LIST");

            buckets.buckets.forEach(function(bucket) {
                console.log(bucket);
                options.append('<option value=' + bucket.id + '>' + bucket.name + '</option>');
            });

        }
        $( ".drive-actions" ).show();
        $('.panel-default').unblock();
    })
}
