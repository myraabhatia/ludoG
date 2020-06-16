class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(200,200,50,50);
     
      
      car2 = createSprite(400,100);
     

      car3 = createSprite(600,100);

      car4 = createSprite(800,100);
     


      cars = [car1,car2, car3, car4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
      //  background(rgb(198,135,103));
        image(backgroundImage,0,5,displayWidth*1, displayHeight-120);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var y = 0;
        var x = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          y = y + 180;
          //use data form the database to display the cars in y direction
          x = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.y = displayWidth/2;
            camera.position.x = cars[index-1].x;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance == -6400){
        gameState = 2;
      }
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  