$(document).ready(function () {

    var healthObi = 120;
    var healthLuke = 100;
    var healthSidi = 150;
    var healthMaul = 180;

    $("#Obi-Health").text(healthObi);
    $("#Luke-Health").text(healthLuke);
    $("#Sidi-Health").text(healthSidi);
    $("#Maul-Health").text(healthMaul);


    var hasBeenClicked = false;
    $(".picked").on("click",function () {
        hasBeenClicked = true;console.log(hasBeenClicked);
    });

    console.log(hasBeenClicked);    
    if (hasBeenClicked === true) {
        $("#myCharacter").append($("#Obi-Health"));
    };


    // var myCharacter = $("#myCharacter");

    // $(".picked").on("click", function () {
    //     $("#characters").hide();
    //     $("#myCharacter").append($(this));
    // })

    // $("#Luke").on("click", function () {
    //     $("#characters").hide();
    //     $("#myCharacter").append($(this));
    //     $("#enemies").append($("#Obi-Wan"), $("#Sidi"), $("#Maul"));
    // })

    // $("#Sidi").on("click", function () {
    //     $("#characters").hide();
    //     $("#myCharacter").append($(this));
    //     $("#enemies").append($("#Obi-Wan"), $("#Luke"), $("#Maul"));
    // })

    // $("#Maul").on("click", function () {
    //     $("#characters").hide();
    //     $("#myCharacter").append($(this));
    //     $("#enemies").append($("#Obi-Wan"), $("#Luke"), $("#Sidi"));
    // });
});
