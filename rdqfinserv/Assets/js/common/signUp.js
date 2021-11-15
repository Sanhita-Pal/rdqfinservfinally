$(document).ready(function () {


    $("#fname").keyup(() => {
        namevalid();
    });
    $("#email").change(() => {
        emailValid();
        var email = $("#email").val();
        var otp = Math.floor(100000 + Math.random() * 900000);
        sendOtpmail(email, otp);
        $("#mailotpval").val(otp);
    });

    $("#phone").change(() => {
        phoneValid();
        var mobile = $("#phone").val();
        var otp = Math.floor(100000 + Math.random() * 900000);
        sendOtp(mobile, otp);
        $("#phoneotpval").val(otp);
    });

    $("#pin").keyup(() => {
        validPin();
    });


    $("#sendbtn").click(() => {
        let fname = $("#fname").val();
        let lname = $("#fname").val();
        let otpmail = $("#otpmail").val();
        let phoneotp = $("#phoneotp").val();
        let pin = $("#pin").val();
        if (pin.length == 6 && otpmail.length == 6 && phoneotp.length == 6) {
            $("#fname").prop('disabled', true);
            $("#lname").prop('disabled', true);
            $("#pin").prop('disabled', true);
            $("#sendbtn").hide();
            $("#regbtn").show();
        }


        else {
            alert("Please Fill All The Fileds....")
        }

    });








    $("#regbtn").click(() => {

        $.ajax('https://rdqfinserv.com/api/sign_up', {
            type: 'POST',  // http method
            data: { fname: $("#fname").val(), lname: $("#lname").val(), email: $("#email").val(), phone: $("#phone").val(), pin: $("#pin").val() },  // data to submit
            success: function (data, status, xhr) {
                $("#fname").val('');
                $("#lname").val('');
                $("#email").val('');
                $("#phone").val('');
                $("#pin").val('');
                $('#regpage').hide();
                $('#compage').show();

            },
            error: function (jqXhr, textStatus, errorMessage) {
                alert('Please Try again Later');
            }
        });
    });
    $("#phoneotp").change(() => {
        var otp = $("#phoneotpval").val();
        var otpip = $("#phoneotp").val();
        //alert(otp);
        //alert(otpip);
        if (otp == otpip) {
            var pinReg = /^\d{6}$/;
            if (!pinReg.test($("#phoneotp").val())) {
                $("#mphoneotp").html("Invalid OTP");
            }
            else {

                $("#mphoneotp").html("");
                $("#phonesec").show();
                $("#phoneotpsec").hide();
                $("#capphone").html("Your Mobile No");
                $("#phone").prop('disabled', true);
            }
        }
        else {
            $("#mphoneotp").html("Invalid OTP");
        }
    });



    $("#otpmail").change(() => {
        var otp = $("#mailotpval").val();
        var otpip = $("#otpmail").val();
        if (otp != otpip) {
            $("#motpmail").html("Invalid OTP");
        }
        var pinReg = /^\d{6}$/;
        if (!pinReg.test($("#otpmail").val())) {
            $("#motpmail").html("Invalid OTP");
        }
        else {

            $("#motpmail").html("");
            $("#emailsec").show();
            $("#emailotpsec").hide();
            $("#capemail").html("Your Email Id");
            $("#email").prop('disabled', true);
        }
    });

});





function emailValid() {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($("#email").val())) {
        $("#memail").html("Enter a Valid Email");
    }
    else {
        $.ajax('https://rdqfinserv.com/api/sign_up', {
            type: 'GET',  // http method
            data: 'email=' + $("#email").val(),
            success: function (data, status, xhr) {
                $("#memail").html('Email Already Registerd');
            },
            error: function (jqXhr, textStatus, errorMessage) {
                $("#emailsec").hide();
                $("#emailotpsec").show();
                $("#memail").html("");
            }
        });


    }
}




function namevalid() {
    if ($("#fname").val().length < 1) {
        $("#mfname").html("First Name Cannot Blank");
    }
    else if (!$("#fname").val().match('^[a-zA-Z]{3,16}$')) {
        $("#mfname").html("First Name Not Valid");
    }
    else {
        $("#mfname").html("");
    }
}

function phoneValid() {
    var phoneReg = /^\d{10}$/;
    if (!phoneReg.test($("#phone").val())) {
        $("#mphone").html("Phone Number Not Valid");
    }
    else {
        $.ajax('https://rdqfinserv.com/api/sign_up', {
            type: 'GET',  // http method
            data: {
                phone: $("#phone").val(),
                a: 1
            },
            success: function (data, status, xhr) {
                $("#mphone").html('Phone Number Already Registerd');
                stat = 0;
            },
            error: function (jqXhr, textStatus, errorMessage) {
                $("#phonesec").hide();
                $("#phoneotpsec").show();
                $("#mphone").html("");
            }
        });
    }



}

function validPin() {
    var pinReg = /^\d{6}$/;
    if (!pinReg.test($("#pin").val())) {
        $("#mpin").html("Invalid Pin No");
    }
    else {
        $("#mpin").html("");
    }
}

function sendOtp(mobile, otp) {
    $.ajax({
        url: '/Home/sendotp',
        type: 'GET',

        data: {
            mobile: mobile,
            otp: otp
        },
        success: function (result) {
            alert("Otp Sent to your mobile");
        }
    });
}

function sendOtpmail(email, otp) {
    $.ajax({
        url: '/Home/sendotpmail',
        type: 'GET',

        data: {
            email: email,
            otp: otp
        },
        success: function (result) {
            alert("Otp Sent to your email");
        }
    });
}