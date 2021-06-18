var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var bar;
        var tree;
        var lines = [];
        var buildings = [];
        var windows = [];
        var silhouettes = [];
        function getStarColor() {                           // for random star color
            return Math.ceil(Math.random()*140+45);
        }
        function getStarRadius() {
            return Math.ceil(Math.random()*5);
        }
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a lavender color
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY, 'black');
            background.addChild(backgroundFill);


            // TODO: 3 - Add a moon and starfield
            // below creates the starfield
                for (var i = 0; i < 150; i++) {
                    var circle = draw.circle(getStarRadius(),'white','rgb(' + getStarColor() + ',36,199)', 3);
                    circle.x = canvasWidth*Math.random();
                     circle.y = groundY*Math.random();
                    background.addChild(circle);
                }
            // below creates the moon
            var moon = draw.bitmap('img/moon.png');
            moon.x = 1000;
            moon.y = 10;
            moon.scaleX = 0.5;
            moon.scaleY = 0.5;
            background.addChild(moon);

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0;i<19;i++) {
                var silhouetteHeight = Math.abs(Math.ceil(groundY - Math.random()*150)-200);
                var silhouette = draw.rect(75,silhouetteHeight, 'rgb(40,20,40)');
                silhouette.x =75*i;
                silhouette.y = groundY-silhouetteHeight;
                background.addChild(silhouette);
                silhouettes.push(silhouette);
            }
            for(var i=0;i<8;i++) {
                var buildingHeight = Math.abs(Math.ceil(groundY - Math.random()*150)-50);
                var building = draw.rect(100,buildingHeight,'rgb(86,0,100)','rgb(185, 40, 255)',4);
                building.x = 200*i+25;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
                if (buildingHeight > 60) {
                    var windowHeight = 50;
                    var window = draw.rect(20, windowHeight, 'yellow', 'brown', 2);
                    window.x = 200*i+45;
                    window.y = groundY-windowHeight-5;
                    background.addChild(window);
                    windows.push(window);
                }
                if (buildingHeight > 60) {
                    var windowHeight = 50;
                    var window = draw.rect(20, windowHeight, 'yellow', 'brown', 2);
                    window.x = 200*i+85;
                    window.y = groundY-windowHeight-5;
                    background.addChild(window);
                    windows.push(window);
                }
                if (buildingHeight > 130) {
                    var windowHeight = 50;
                    var window = draw.rect(20, windowHeight, 'yellow', 'brown', 2);
                    window.x = 200*i+45;
                    window.y = groundY-windowHeight-windowHeight-20;
                    background.addChild(window);
                    windows.push(window);
                }
                if (buildingHeight > 130) {
                    var windowHeight = 50;
                    var window = draw.rect(20, windowHeight, 'yellow', 'brown', 2);
                    window.x = 200*i+85;
                    window.y = groundY-windowHeight-windowHeight-20;
                    background.addChild(window);
                    windows.push(window);
                }
                if (buildingHeight > 200) {
                    var windowHeight = 50;
                    var window = draw.rect(20, windowHeight, 'yellow', 'brown', 2);
                    window.x = 200*i+45;
                    window.y = groundY-windowHeight-windowHeight-20-windowHeight-20;
                    background.addChild(window);
                    windows.push(window);
                }
                if (buildingHeight > 200) {
                    var windowHeight = 50;
                    var window = draw.rect(20, windowHeight, 'yellow', 'brown', 2);
                    window.x = 200*i+85;
                    window.y = groundY-windowHeight-windowHeight-20-windowHeight-20;
                    background.addChild(window);
                    windows.push(window);
                }
            }
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = 500;
            tree.y = 70;
            background.addChild(tree);

            // below creates the bar for the points
            bar = draw.rect(400, 30, 'lightGray', 'white', 1);
            bar.x = 1100;
            bar.y = 0;
            background.addChild(bar);

            // below creates the arrow heads and arrow feathers
            function createLine(x,y) {
                var line = draw.line(x-12,y+12, x+10,y-10, 'blue', 7);
                background.addChild(line);
                lines.push(line);
                var lineB = draw.line(x-10,y+10, x+15, y+27, 'blue', 7);
                background.addChild(lineB);
                lines.push(lineB);
                var lineC = draw.line(x+40, y+12, x+52, y, 'lightBlue', 4);
                background.addChild(lineC);
                lines.push(lineC);
                var lineD = draw.line(x+42, y+10, x+52, y+24, 'lightBlue', 4);
                background.addChild(lineD);
                lines.push(lineD);
                var lineE = draw.line(x+50, y+12, x+62, y, 'lightBlue', 4);
                background.addChild(lineE);
                lines.push(lineE);
                var lineF = draw.line(x+52, y+10, x+62, y+24, 'lightBlue', 4);
                background.addChild(lineF);
                lines.push(lineF);
                var lineG = draw.line(x+60, y+12, x+72, y, 'lightBlue', 4);
                background.addChild(lineG);
                lines.push(lineG);
                var lineH = draw.line(x+62, y+10, x+72, y+24, 'lightBlue', 4);
                background.addChild(lineH);
                lines.push(lineH);
            }
            createLine(550, 200);
            createLine(650, 200);
            createLine(1200, 200);
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            // below moves the silhouettes
            for (var i=0; i<silhouettes.length;i++) {
                var eachElementC = silhouettes[i];
                eachElementC.x -=0.25;
                if (eachElementC.x < -100) {
                    eachElementC.x = canvasWidth;
                }
            }
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 5;

            if(tree.x < -200) {
                tree.x = canvasWidth;
            }
            // below moves the windows
            for (var i=0; i<windows.length;i++) {
                var eachElementB = windows[i];
                eachElementB.x -=1;
                if (eachElementB.x < -200) {
                    eachElementB.x = canvasWidth;
                }
            }

            // below moves the buildings
            for (var i = 0; i < buildings.length; i++) {
                var eachElement = buildings[i];
                eachElement.x -= 1;
                if (eachElement.x < -200) {
                    eachElement.x = canvasWidth;
                }
            }
            // below moves the arrow heads/arrow feathers
            for (var i=0; i<24; i++) {
                var eachElement = lines[i];
                eachElement.x -= 2;
            }
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
