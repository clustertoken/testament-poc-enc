/**
 * Created by Steve on 15/08/2017.
 */
$(document).ready(function() {

    console.log('Userlogic ready');

}); //


/*********************************************************************************
 *                                      LOGIN                                    *
 *********************************************************************************/

// Plaintext key
$('.btn-plaintext').on('click', function(event) {

    event.preventDefault();

    var data = {};
    data.key = $('#txt_plain_key').val();
    data.message = "message";

    $.ajax({
        method: 'POST',
        url: '/api/keypair',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(response) {

        console.log(response.message);
        if (response.status === 'fail') {
            // Error handling
            toastr.error(response.message, 'Error occured!')
        }
        if (response.status === 'success') {
            // Error handling
            toastr.success(response.message, 'Success!');
            window.location = '/api';

        }
    })

});

// Hashed key
$('.btn-get-keys-from-hash').on('click', function(event) {

    event.preventDefault();

    var data = {};
    data.cHash = $('#RECEIVED_HASH').val();
    data.cSharing = $('#RECEIVED_SHARING').val();
    data.message = "message";

    $.ajax({
        method: 'POST',
        url: '/api/keypair/blockchain',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(response) {

        console.log(response.message);
        if (response.status === 'fail') {
            // Error handling
            toastr.error(response.message, 'Error occured!')
        }
        if (response.status === 'success') {
            // Error handling
            window.location = '/api/';
            toastr.success(response.message, 'Success!!');


        }
    })

});


/*********************************************************************************
 *                                      REGISTER                                 *
 *********************************************************************************/

$('.btn-register-user-1').on('click', function(event) {

    event.preventDefault();
    $( ".panel-main" ).hide();
    $( ".panel-register" ).show(500);

});

$('.btn-register-user').on('click', function(event) {

    event.preventDefault();

    var data = {};
    data.user = $('#txt-user-email').val();
    data.pass = $('#txt-user-pass').val()
    data.message = "message";

    $.ajax({
        method: 'POST',
        url: '/api/register',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(response) {

        console.log(response.message);
        if (response.status === 'fail') {
            // Error handling
            toastr.error(response.message, 'Error occured!')
        }
        if (response.status === 'success') {
            // Error handling
            toastr.success(response.message, 'Success!');
            $( ".reg-step1" ).hide();
            $( ".reg-step2" ).show(500);
            //window.location = '/';
        }
    })

});

$('.btn-generate-keypair').on('click', function(event) {

    event.preventDefault();

    var data = {};
    data.user = $('#txt-user-email').val();
    data.pass = $('#txt-user-pass').val();
    data.message = "message";


    $.ajax({
        method: 'POST',
        url: '/api/generate/keypair',
        data: JSON.stringify(data),
        contentType:  'application/json',
        processData: false
    }).done(function(response) {

        console.log(response.message);
        if (response.status === 'fail') {
            // Error handling
            toastr.error(response.message, 'Error occured!')
        }
        if (response.status === 'success') {
            // Error handling
            toastr.success(response.message, 'Success!');
            window.location = '/';
        }
    })

});