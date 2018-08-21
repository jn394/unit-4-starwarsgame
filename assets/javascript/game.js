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
        $("#myCharacter2").append($(this));
        $("#enemies2").append($("#Luke"), $("#Sidi"), $("#Maul"));
        myObi();
    })

    $("#Luke").on("click", function () {
        $("#characters").hide();
        $("#myCharacter2").append($(this));
        $("#enemies2").append($("#Obi-Wan"), $("#Sidi"), $("#Maul"));
        myLuke();
    })

    $("#Sidi").on("click", function () {
        $("#characters").hide();
        $("#myCharacter2").append($(this));
        $("#enemies2").append($("#Obi-Wan"), $("#Luke"), $("#Maul"));
        mySidi();
    })

    $("#Maul").on("click", function () {
        $("#characters").hide();
        $("#myCharacter2").append($(this));
        $("#enemies2").append($("#Obi-Wan"), $("#Luke"), $("#Sidi"));
        myMaul();
    })

    // if($('#Obi-Wan option:selected')) {
    //     $("#enemies").append($("#Luke"),$("#Sidi"),$("#Maul"))
    // };

//     function myPick(){
//     $(".picked").on("click", function () {
//         $("#myCharacter2").append($("#Obi-Wan"));
//         $("#enemies2").hide();
//         $("#title").hide();
//         $("#myEnemy2").append($(this));
//     });
// };


    //Obi-Wan's Chain
    function myObi() {
        if ($("#enemies2").has($("#Luke"), $("#Sidi"), $("#Maul"))) {
            // myPick();
            $("#Luke").on("click", function () {
                $("#myCharacter2").append($("#Obi-Wan"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Luke"), $("#Sidi"), $("#Maul"))) {
            $("#Sidi").on("click", function () {
                $("#myCharacter2").append($("#Obi-Wan"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Luke"), $("#Sidi"), $("#Maul"))) {
            $("#Maul").on("click", function () {
                $("#myCharacter2").append($("#Obi-Wan"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };
    };

    //Luke's Chain
    function myLuke() {
        if ($("#enemies2").has($("#Obi-Wan"), $("#Sidi"), $("#Maul"))) {
            // myPick();
            $("#Obi-Wan").on("click", function () {
                $("#myCharacter2").append($("#Luke"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Obi-Wan"), $("#Sidi"), $("#Maul"))) {
            $("#Sidi").on("click", function () {
                $("#myCharacter2").append($("#Luke"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Obi-Wan"), $("#Sidi"), $("#Maul"))) {
            $("#Maul").on("click", function () {
                $("#myCharacter2").append($("#Luke"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };
    };

    //Sidi's Chain
    function mySidi() {
        if ($("#enemies2").has($("#Obi-Wan"), $("#Luke"), $("#Maul"))) {
            // myPick();
            $("#Obi-Wan").on("click", function () {
                $("#myCharacter2").append($("#Sidi"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Obi-Wan"), $("#Luke"), $("#Maul"))) {
            $("#Luke").on("click", function () {
                $("#myCharacter2").append($("#Sidi"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Obi-Wan"), $("#Luke"), $("#Maul"))) {
            $("#Maul").on("click", function () {
                $("#myCharacter2").append($("#Sidi"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };
    };

    //Maul's Chain
    function myMaul() {
        if ($("#enemies2").has($("#Obi-Wan"), $("#Luke"), $("#Sidi"))) {
            // myPick();
            $("#Obi-Wan").on("click", function () {
                $("#myCharacter2").append($("#Maul"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Obi-Wan"), $("#Luke"), $("#Sidi"))) {
            $("#Luke").on("click", function () {
                $("#myCharacter2").append($("#Maul"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };

        if ($("#enemies2").has($("#Obi-Wan"), $("#Luke"), $("#Sidi"))) {
            $("#Sidi").on("click", function () {
                $("#myCharacter2").append($("#Maul"));
                $("#enemies2").hide();
                $("#title").hide();
                $("#myEnemy2").append($(this));
            });
        };
    };




});

