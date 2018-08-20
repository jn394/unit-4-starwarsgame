$(document).ready(function () {

    var healthObi = 120;
    var healthLuke = 100;
    var healthSidi = 150;
    var healthMaul = 180;

    $("#Obi-Health").text(healthObi);
    $("#Luke-Health").text(healthLuke);
    $("#Sidi-Health").text(healthSidi);
    $("#Maul-Health").text(healthMaul);

    // $(".image").

    $("#Obi-Wan").on("click", function () {
        $("#characters").hide();
        $("#myCharacter").append($("#Obi-Wan"));
    })

    $("#Luke").on("click", function () {
        $("#characters").hide();
        $("#myCharacter").append($("#Luke"));
    })

    $("#Sidi").on("click", function () {
        $("#characters").hide();
        $("#myCharacter").append($("#Sidi"));
    })

    $("#Maul").on("click", function () {
        $("#characters").hide();
        $("#myCharacter").append($("#Maul"));
    })

if()
});

