$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 610, 800, 10, "black");
    createPlatform(100, 0, 10, 650, "black");
    createPlatform(300, 500, 30, 10, "black");
    createPlatform(100, 400, 130, 10, "black");
    createPlatform(40, 300, 30, 10, "black");
    createPlatform(30, 500, 30, 10, "black");
    createPlatform(1000, 200, 1, 1);
    createPlatform(400, 300, 100, 10, "black");
    createPlatform(1200, 200, 1, 1);
    createPlatform(1300, 100, 400, 400, "black");
    createPlatform(500, 350, 100, 10, "black");
    createPlatform(700, 300, 300, 10, "lightBlue");

    // TODO 3 - Create Collectables
    createCollectable("grace", 30, 520, 1, 1);
    createCollectable("database", 300, 400,);
    createCollectable("kennedi", 1300, 50, 1, 1);
    createCollectable("max", 800, 400,);

    // TODO 4 - Create Cannons
    createCannon("right", 600, 600);
    createCannon("top", 600, 600);
    createCannon("top", 200, 400)
    createCannon("top", 200, 600)
    createCannon("top", 385, 3000)
    createCannon("top", 1110, 800)
    createCannon("top", 1300, 900)
    createCannon("left", 650, 15000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
