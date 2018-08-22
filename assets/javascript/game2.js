$(document).ready(function () {

    $("#myFight").hide();
    $("#myAttack").hide();

    var healthObi = 120;
    var healthLuke = 100;
    var healthSidi = 150;
    var healthMaul = 180;

    var attackObi = 0;
    var attackLuke = 0;
    var attackSidi = 0;
    var attackMaul = 0;

    $("#Obi-Health").text(healthObi);
    $("#Luke-Health").text(healthLuke);
    $("#Sidi-Health").text(healthSidi);
    $("#Maul-Health").text(healthMaul);

    //When Obi-Wan is clicked, i looks at where Obi-Wan is located and then does the following when its in different places.
    $("#Obi-Wan").on("click", function () {
        var option1 = $.contains(document.getElementById("characters"), document.getElementById("Obi-Wan"));
        var option2 = $.contains(document.getElementById("enemies"), document.getElementById("Obi-Wan"));
        if (option1) {
            $("#myCharacter2").append($(this));
            $("#enemies2").append($("#Luke"), $("#Sidi"), $("#Maul"));
        }
        else if (option2) {
            $("#myEnemy2").append($(this));
            $("#myFight").show();
            $("#myAttack").show();
        };
    });

    //When Luke is clicked, i looks at where Luke is located and then does the following when its in different places.
    $("#Luke").on("click", function () {
        var option1 = $.contains(document.getElementById("characters"), document.getElementById("Luke"));
        var option2 = $.contains(document.getElementById("enemies"), document.getElementById("Luke"));
        if (option1) {
            $("#myCharacter2").append($(this));
            $("#enemies2").append($("#Obi-Wan"), $("#Sidi"), $("#Maul"));
        }
        else if (option2) {
            $("#myEnemy2").append($(this));
            $("#myFight").show();
            $("#myAttack").show();
        };
    });

    //When Sidi is clicked, i looks at where Sidi is located and then does the following when its in different places.
    $("#Sidi").on("click", function () {
        var option1 = $.contains(document.getElementById("characters"), document.getElementById("Sidi"));
        var option2 = $.contains(document.getElementById("enemies"), document.getElementById("Sidi"));
        if (option1) {
            $("#myCharacter2").append($(this));
            $("#enemies2").append($("#Obi-Wan"), $("#Luke"), $("#Maul"));
        }
        else if (option2) {
            $("#myEnemy2").append($(this));
            $("#myFight").show();
            $("#myAttack").show();
        };
    });

    //When Maul is clicked, i looks at where Maul is located and then does the following when its in different places.
    $("#Maul").on("click", function () {
        var option1 = $.contains(document.getElementById("characters"), document.getElementById("Maul"));
        var option2 = $.contains(document.getElementById("enemies"), document.getElementById("Maul"));
        if (option1) {
            $("#myCharacter2").append($(this));
            $("#enemies2").append($("#Obi-Wan"), $("#Luke"), $("#Sidi"));
        }
        else if (option2) {
            $("#myEnemy2").append($(this));
            $("#myFight").show();
            $("#myAttack").show();
        };
    });



    //When the Attack button is clicked the health of the enemy is lowered and your characters health is lowered as well
    $("#myAttack").on("click", function () {
        var myObiAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Obi-Wan"));
        var myLukeAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Luke"));
        var mySidiAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Sidi"));
        var myMaulAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Maul"));


        if (myObiAttacking) {
            attackObi += 8;
            $("#myDamage").text("You attacked for: " + attackObi + " damage");

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"))) {
                healthLuke -= attackObi;
                if (healthLuke <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Luke Skywalker");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"))) {
                healthSidi -= attackObi;
                if (healthSidi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Sidious");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"))) {
                healthMaul -= attackObi;
                if (healthMaul <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Maul");
                };
            };
        };

        if (myLukeAttacking) {
            attackLuke += 5;
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Obi-Wan"))) {
                healthObi -= attackLuke;
                if (healthObi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"))) {
                healthSidi -= attackLuke;
                if (healthSidi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Sidious");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"))) {
                healthMaul -= attackLuke;
                if (healthMaul <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Maul");
                };
            };
        };

        if (mySidiAttacking) {
            attackSidi += 20;
            $("#myDamage").text("You attacked for: " + attackSidi + " damage");

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Obi-Wan"))) {
                healthObi -= attackSidi;
                if (healthObi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"))) {
                healthLuke -= attackSidi;
                if (healthLuke <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Luke Skywalker");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"))) {
                healthMaul -= attackSidi;
                if (healthMaul <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Maul");
                };
            };
        };

        if (myMaulAttacking) {
            attackMaul += 25;
            $("#myDamage").text("You attacked for: " + attackMaul + " damage");

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Obi-Wan"))) {
                healthObi -= attackMaul;
                if (healthObi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"))) {
                healthLuke -= attackMaul;
                if (healthLuke <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Luke Skywalker");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"))) {
                healthSidi -= attackMaul;
                if (healthSidi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Sidious");
                };
            };
        };


        $("#Obi-Health").text(healthObi);
        $("#Luke-Health").text(healthLuke);
        $("#Sidi-Health").text(healthSidi);
        $("#Maul-Health").text(healthMaul);





    });





});
