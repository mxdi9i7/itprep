$(function () {

    $('#submitWebIntro').click(function () {
        var password = $('#webIntroCode').val();

        var pass1="0212";
        if (password==pass1) {
            window.setTimeout(function () {
                $('#message').html("<b class='fa fa-star'>Verification success! Your exam page will open in 3..2..1..</b>")
            }, 500);
            window.setTimeout(function () {
                window.location = "webintrofinal.html";
            }, 3000);

        }
        else {

            alert("Exam code did not match!");
            window.location="exam.html";
        }
    });

    $('#finish').click(function () {
        var totalPoints = 0;


        if ($('#a1').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a2').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a3').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a4').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a5').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a6').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a7').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a8').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a9').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a10').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a11').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a12').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a13').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a14').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a15').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a16').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a17').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a18').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a19').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a20').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a21').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a22').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a23').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a24').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a25').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a26').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a27').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a28').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a29').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a30').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a31').val() === 'b') {
            totalPoints += 1;
        }

        if ($('#a32').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a33').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a34').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a35').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a36').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a37').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a38').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a39').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a40').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a41').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a42').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a43').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a44').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a45').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a46').val() === 'b') {
            totalPoints += 1;
        }
        if ($('#a47').val() === 'd') {
            totalPoints += 1;
        }
        if ($('#a48').val() === 'a') {
            totalPoints += 1;
        }
        if ($('#a49').val() === 'c') {
            totalPoints += 1;
        }
        if ($('#a50').val() === 'b') {
            totalPoints += 1;
        }

        var wrongAnswer = 50-totalPoints;
        var fullName = $('#fullName').val();
        var age = $('#age').val();
        alert(fullName + '!' + ' You are ' + age + ' years old, and ' + ' you scored: ' + totalPoints*2 + ', ' + ' You missed: ' + wrongAnswer + ', ' + ' and You got ' + totalPoints + ' questions right! Good Job!');
    });



});


