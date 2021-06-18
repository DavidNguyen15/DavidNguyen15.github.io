var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;
    function getStarColor() {                           // for random star color
        return Math.ceil(Math.random()*140+45);
    }
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
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

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
        }
        createSawBlade(400, 300);
        createSawBlade(800, 300);
        createSawBlade(1000, 300);
        createSawBlade(1400, 300);
        createArrow(550, 200);
        createArrow(650, 200);
        createArrow(1200, 200);

        // below creates enemies

        function createEnemy (x, y) {
            var enemy = game.createGameItem('enemy', 35);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            var star = draw.circle(35,'rgb(' + getStarColor() + ',36,199)', 'white', 5);
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
                game.increaseScore(2000);
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
            game.increaseScore(6000);
            reward.fadeOut();
            game.changeIntegrity(100);
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
