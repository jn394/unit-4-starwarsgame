$(document).ready(function () {

    $("#myFight").hide();
    $("#myAttack").hide();
    $("#myReset").hide();
    $("#myDamage").hide();

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
            $("#myResult").hide();
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
            $("#myResult").hide();
            $("#myDamage").hide();
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
            $("#myResult").hide();
            $("#myDamage").hide();
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
            $("#myResult").hide();
            $("#myDamage").hide();
        };
    });



// function canObiDie() {
//     if (healthObi <=0) {
//         $("#myResult").text("You have been defeated");
//         $("#myReset").show();
//     }
//     else {

//     };
// };




    //When the Attack button is clicked the health of the enemy is lowered and your characters health is lowered as well
    $("#myAttack").on("click", function () {
        var myObiAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Obi-Wan"));
        var myLukeAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Luke"));
        var mySidiAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Sidi"));
        var myMaulAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Maul"));

        var myEnemyObi = $.contains(document.getElementById("myEnemy2"), document.getElementById("Obi-Wan"));
        var myEnemyLuke = $.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"));
        var myEnemySidi = $.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"));
        var myEnemyMaul = $.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"));

        if (myObiAttacking && myEnemyLuke) {
            attackObi += 8;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackObi + " damage");
            healthLuke -= attackObi;
            $("#myResult").hide();

            if (healthLuke <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Luke Skywalker");
            }
            else {
                healthObi -= startAttackLuke;
            };
        }
        
        else if (myObiAttacking && myEnemySidi) {
            attackObi += 8;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackObi + " damage");
            healthSidi -= attackObi;
            $("#myResult").hide();

            if (healthSidi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Sidious");
            }
            else {
                healthObi -= startAttackSidi;
            };
        }

        else if (myObiAttacking && myEnemyMaul) {
            attackObi += 8;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackObi + " damage");
            

            if (healthMaul <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Maul");
            }
            else if (healthObi <=0) {
                $("#myDamage").hide();
                $("#myResult").show();
                $("#myResult").text("You have been defeated");
                $("#myReset").show();
            }
            else {
                healthObi -= startAttackMaul;
                healthMaul -= attackObi;
            };
        }
        else {  
            $("#myDamage").hide();
            $("#myResult").show();
            $("#myResult").text("No enemy here");
        };



        if (myLukeAttacking && myEnemyObi) {
            attackLuke += 5;
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");
            healthObi -= attackLuke;

            if (healthObi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
            }
            else {
                healthLuke -= startAttackObi;
            };
        };

        if (myLukeAttacking && myEnemySidi) {
            attackLuke += 5;
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");
            healthSidi -= attackLuke;

            if (healthSidi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").text("Congrates! You have defeated Darth Sidious");
            }
            else {
                healthLuke -= startAttackSidi;
            };
        };

        if (myLukeAttacking && myEnemyMaul) {
            attackLuke += 5;
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");
            healthMaul -= attackLuke;

            if (healthMaul <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").text("Congrates! You have defeated Darth Maul");
            }
            else {
                healthLuke -= startAttackMaul;
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

        $("#Obi-Health").text(healthObi);
        $("#Luke-Health").text(healthLuke);
        $("#Sidi-Health").text(healthSidi);
        $("#Maul-Health").text(healthMaul);





    });





});
