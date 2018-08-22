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

    //When the Attack button is clicked the health of the enemy is lowered and your characters health is lowered as well
    $("#myAttack").on("click", function () {

        //Different conditions that can happen
        var myObiAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Obi-Wan"));
        var myLukeAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Luke"));
        var mySidiAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Sidi"));
        var myMaulAttacking = $.contains(document.getElementById("myCharacter2"), document.getElementById("Maul"));

        var myEnemyObi = $.contains(document.getElementById("myEnemy2"), document.getElementById("Obi-Wan"));
        var myEnemyLuke = $.contains(document.getElementById("myEnemy2"), document.getElementById("Luke"));
        var myEnemySidi = $.contains(document.getElementById("myEnemy2"), document.getElementById("Sidi"));
        var myEnemyMaul = $.contains(document.getElementById("myEnemy2"), document.getElementById("Maul"));

        //Obi-Wan attacking and Luke is enemy 
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

        //Obi-Wan attacking and Sidi is enemy 
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

        //Obi-Wan attacking and Maul is enemy 
        else if (myObiAttacking && myEnemyMaul) {
            attackObi += 8;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackObi + " damage");
            healthMaul -= attackObi

            if (healthMaul <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Maul");
            }
            else if (healthObi <= 0) {
                $("#myDamage").hide();
                $("#myResult").show();
                $("#myResult").text("You have been defeated");
                $("#myReset").show();
            }
            else {
                healthObi -= startAttackMaul;
            };
            
        }
        else {
            $("#myDamage").hide();
            $("#myResult").show();
            $("#myResult").text("No enemy here");
        };

        //Luke attacking and Obi-Wan is enemy 
        if (myLukeAttacking && myEnemyObi) {
            attackLuke += 5;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");
            healthObi -= attackLuke;

            if (healthObi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
            }
            else {
                healthLuke -= startAttackObi;
            };
        }

        //Luke attacking and Sidi is enemy 
        else if (myLukeAttacking && myEnemySidi) {
            attackLuke += 5;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");


            if (healthSidi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Sidious");
            }
            else if (healthLuke <= 0) {
                $("#myDamage").hide();
                $("#myResult").show();
                $("#myResult").text("You have been defeated");
                $("#myReset").show();
            }
            else {
                healthLuke -= startAttackSidi;
                healthSidi -= attackLuke;
            };
        }

        //Luke attacking and Maul is enemy 
        else if (myLukeAttacking && myEnemyMaul) {
            attackLuke += 5;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackLuke + " damage");


            if (healthMaul <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Maul");
            }
            else if (healthLuke <= 0) {
                $("#myDamage").hide();
                $("#myResult").show();
                $("#myResult").text("You have been defeated");
                $("#myReset").show();
            }
            else {
                healthLuke -= startAttackMaul;
                healthMaul -= attackLuke;
            };
        };

        //Sidi attacking and Obi is enemy
        if (mySidiAttacking && myEnemyObi) {
            attackSidi += 20;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackSidi + " damage");

            if (healthObi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
            }
            else {
                healthObi -= attackSidi;
                healthSidi -= startAttackObi;
            };
        }

        //Sidi attacking and Luke is enemy
        else if (mySidiAttacking && myEnemyLuke) {
            attackSidi += 20;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackSidi + " damage");

            if (healthLuke <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Luke Skywalker");
            }
            else {
                healthLuke -= attackSidi;
                healthSidi -= startAttackLuke;
            };
        }

        //Sidi attacking and Maul is enemy
        else if (mySidiAttacking && myEnemyMaul) {
            attackSidi += 20;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackSidi + " damage");

            if (healthMaul <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Maul");
            }
            else if (healthSidi <= 0) {
                $("#myDamage").hide();
                $("#myResult").show();
                $("#myResult").text("You have been defeated");
                $("#myReset").show();
            }
            else {
                healthMaul -= attackSidi;
                healthSidi -= startAttackMaul;
            };
        };

        //Maul attacking and Obi-Wan is enemy
        if (myMaulAttacking && myEnemyObi) {
            attackMaul += 25;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackMaul + " damage");

            if (healthObi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Obi-Wan Kenobi");
            }
            else {
                healthObi -= attackMaul;
                healthMaul -= startAttackObi;
            };
        }

        //Maul attacking and Luke is enemy
        else if (myMaulAttacking && myEnemyLuke) {
            attackMaul += 25;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackMaul + " damage");

            if (healthLuke <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Luke Skywalker");
            }
            else {
                healthLuke -= attackMaul;
                healthMaul -= startAttackLuke;
            };
        }

        //Maul attacking and Sidi is enemy
        else if (myMaulAttacking && myEnemySidi) {
            attackMaul += 25;
            $("#myDamage").show();
            $("#myDamage").text("You attacked for: " + attackMaul + " damage");

            if (healthSidi <= 0) {
                $("#myEnemy2").empty();
                $("#myResult").show();
                $("#myResult").text("Congrates! You have defeated Darth Sidious");
            }
            else {
                healthSidi -= attackMaul;
                healthMaul -= startAttackSidi;
            };
        };

        $("#Obi-Health").text(healthObi);
        $("#Luke-Health").text(healthLuke);
        $("#Sidi-Health").text(healthSidi);
        $("#Maul-Health").text(healthMaul);

    });

$("#myReset").on("click",function(){
    location.reload();
});

});
