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

    var startAttackObi = 8;
    var startAttackLuke = 5;
    var startAttackSidi = 20;
    var startAttackMaul = 25;

    $("#Obi-Health").text(healthObi);
    $("#Luke-Health").text(healthLuke);
    $("#Sidi-Health").text(healthSidi);
    $("#Maul-Health").text(healthMaul);

    //When Obi-Wan is clicked, it looks at where Obi-Wan is located and then appends Obi-Wan in different places accordingly.
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

    //When Luke is clicked, it looks at where Obi-Wan is located and then appends Luke in different places accordingly.
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

    //When Sidi is clicked, it looks at where Obi-Wan is located and then appends Sidi in different places accordingly.
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

    //When Maul is clicked, it looks at where Obi-Wan is located and then appends Maul in different places accordingly.
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




    function defeatObi() {
        if (healthObi <= 0) {
            $("#myEnemy2").empty();
            $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
        };
    };

    function defeatLuke() {
        if (healthLuke <= 0) {
            $("#myEnemy2").empty();
            $("#myResult").text("Congrates! You have defeated Luke Skywalker");
        };
    };







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
                }
                else {
                healthObi -= startAttackLuke;
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"))) {
                healthSidi -= attackObi;
                healthObi -= startAttackSidi;
                if (healthSidi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Sidious");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"))) {
                healthMaul -= attackObi;
                healthObi -= startAttackMaul;
                if (healthMaul <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Maul");
                };
            };
        }

        if (myLukeAttacking) {
            attackLuke += 5;
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Obi-Wan"))) {
                healthObi -= attackLuke;
                healthLuke -= startAttackObi;
                if (healthObi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"))) {
                healthSidi -= attackLuke;
                healthLuke -= startAttackSidi;
                if (healthSidi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Sidious");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"))) {
                healthMaul -= attackLuke;
                healthLuke -= startAttackMaul;
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
                healthSidi -= startAttackObi;
                if (healthObi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"))) {
                healthLuke -= attackSidi;
                healthSidi -= startAttackLuke;
                if (healthLuke <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Luke Skywalker");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"))) {
                healthMaul -= attackSidi;
                healthSidi -= startAttackMaul;
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
                healthMaul -= startAttackObi;
                if (healthObi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"))) {
                healthLuke -= attackMaul;
                healthMaul -= startAttackLuke;
                if (healthLuke <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Luke Skywalker");
                };
            };

            if ($.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"))) {
                healthSidi -= attackMaul;
                healthMaul -= startAttackSidi;
                if (healthSidi <= 0) {
                    $("#myEnemy2").empty();
                    $("#myResult").text("Congrates! You have defeated Darth Sidious");
                };
            };
        };

        if (noAttack && noAttack2) {
            $("#myResults").text("No enemy here")
        };

        $("#Obi-Health").text(healthObi);
        $("#Luke-Health").text(healthLuke);
        $("#Sidi-Health").text(healthSidi);
        $("#Maul-Health").text(healthMaul);





    });





});
