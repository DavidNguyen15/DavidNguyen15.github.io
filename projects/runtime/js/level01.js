var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;
    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": 300 },
                { "type": "sawblade", "x": 800, "y": 300 },
                { "type": "sawblade", "x": 1000, "y": 300 },
                { "type": "sawblade", "x": 1400, "y": 300 },
                { "type": "arrow", "x": 550, "y": 200 },
                { "type": "arrow", "x": 650, "y": 200 },
                { "type": "arrow", "x": 1200, "y": 200},
                { "type": "enemy", "x": 500, "y": 275},
                { "type": "enemy", "x": 1100, "y": 275},
                { "type": "enemy", "x": 1800, "y": 275},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);   
            var obstacleImage = draw.bitmap('img/sawblade.png');
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage); 
        }
        function createArrow(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 50;
            var arrowHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            arrowHitZone.x = x;
            arrowHitZone.y = y;
            game.addGameItem(arrowHitZone);
            var obstacleImage = draw.rect(75, 5, 'brown', 'white', 0.5);
            obstacleImage.x = -25;
            obstacleImage.y = 10;
            arrowHitZone.addChild(obstacleImage);
            var line = draw.line(x-580,y-185, x-558,y-207, 'red', 7);
            arrowHitZone.addChild(line);
            var lineB = draw.line(x-578,y-187, x-553,y-170, 'red', 7);
            arrowHitZone.addChild(lineB);
            var lineC = draw.line(x-528,y-190, x-516,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineC);
            var lineD = draw.line(x-526,y-192, x-516,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineD);
            var lineE = draw.line(x-518,y-190, x-506,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineE);
            var lineF = draw.line(x-516,y-192, x-506,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineF);
            var lineG = draw.line(x-508,y-190, x-496,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineG);
            var lineH = draw.line(x-506,y-192, x-496,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineH);
        }
        function createArrowB(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 50;
            var arrowHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            arrowHitZone.x = x;
            arrowHitZone.y = y;
            game.addGameItem(arrowHitZone);
            var obstacleImage = draw.rect(75, 5, 'brown', 'white', 0.5);
            obstacleImage.x = -25;
            obstacleImage.y = 10;
            arrowHitZone.addChild(obstacleImage);
            var line = draw.line(x-680,y-185, x-658,y-207, 'red', 7);
            arrowHitZone.addChild(line);
            var lineB = draw.line(x-678,y-187, x-653,y-170, 'red', 7);
            arrowHitZone.addChild(lineB);
            var lineC = draw.line(x-628,y-190, x-616,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineC);
            var lineD = draw.line(x-626,y-192, x-616,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineD);
            var lineE = draw.line(x-618,y-190, x-606,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineE);
            var lineF = draw.line(x-616,y-192, x-606,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineF);
            var lineG = draw.line(x-608,y-190, x-596,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineG);
            var lineH = draw.line(x-606,y-192, x-596,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineH);
        }
        function createArrowC(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 50;
            var arrowHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            arrowHitZone.x = x;
            arrowHitZone.y = y;
            game.addGameItem(arrowHitZone);
            var obstacleImage = draw.rect(75, 5, 'brown', 'white', 0.5);
            obstacleImage.x = -25;
            obstacleImage.y = 10;
            arrowHitZone.addChild(obstacleImage);
            var line = draw.line(x-1230,y-185, x-1208,y-207, 'red', 7);
            arrowHitZone.addChild(line);
            var lineB = draw.line(x-1228,y-187, x-1203,y-170, 'red', 7);
            arrowHitZone.addChild(lineB);
            var lineC = draw.line(x-1178,y-190, x-1166,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineC);
            var lineD = draw.line(x-1176,y-192, x-1166,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineD);
            var lineE = draw.line(x-1168,y-190, x-1156,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineE);
            var lineF = draw.line(x-1166,y-192, x-1156,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineF);
            var lineG = draw.line(x-1158,y-190, x-1146,y-202, 'lightBlue', 4);
            arrowHitZone.addChild(lineG);
            var lineH = draw.line(x-1156,y-192, x-1146,y-178, 'lightBlue', 4);
            arrowHitZone.addChild(lineH);
        }
        createSawBlade(400, 300);
        createSawBlade(800, 300);
        createSawBlade(1000, 300);
        createSawBlade(1400, 300);
        createArrow(550, 200);
        createArrowB(650, 200);
        createArrowC(1200, 200);

        // below creates enemies

        function createEnemy (x, y) {
            var enemy = game.createGameItem('enemy', 35);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            var star = draw.circle(35,'red', 'white', 5);
            star.x = 0;
            star.y = 0;
            enemy.addChild(star);
            enemy.velocityX -= 2;
            enemy.rotationVelocity = 10;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-50);
                enemy.flyTo(900,500);
                game.increaseScore(-1000);
            }
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
                game.increaseScore(1500);
                enemy.flyTo(900,500);
            }
        }
        createEnemy(500, 275);
        createEnemy(1100, 275);
        createEnemy(1800, 275);
        var reward = game.createGameItem('reward', 20);
        reward.x = 2000;
        reward.y = 200;
        game.addGameItem(reward);
        var gold = draw.circle(20, 'yellow', 'white', 2);
        gold.x = 0;
        gold.y = 0;
        reward.addChild(gold);
        reward.velocityX -= 2;
        reward.onPlayerCollision = function() {
            console.log('Halle received the gold');
            game.increaseScore(5500);
            reward.fadeOut();
            game.changeIntegrity(100);
        }
        for (var i=0; i<levelData.gameItems.length; i++) {
            var eachElement = levelData.gameItem[i];
            if (eachElement.type === "sawblade") {
                createSawBlade(eachElement.x, eachElement.y);
            }
            else if (eachElement.type === "arrow") {
                createArrow(eachElement.x, eachElement.y);
            }
            else {
                createEnemy(eachElement.x, eachElement.y);
            }
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
