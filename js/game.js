class Game{
    constructor(){
      this.element= createElement('h1')
    }
    getState(){
    var gameStateRef= database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState= data.val()
    })
    }

    update(state){
   database.ref("/").update({gameState: state})
    }
  async start(){
    //  this.element.hide()
       if(gameState===0){
            player= new Player()
            var playerCountRef= await database.ref('playerCount').once('value')
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val()
            player.getCount();
            }
            form= new Form()
          form.display();
       }
       car1= createSprite(100,200,30,30)
       car2= createSprite(300,200,30,30)
       car3= createSprite(500,200,30,30)
       car4= createSprite(700,200,30,30)
       car1.addImage(i1)
       car2.addImage(i2)
       car3.addImage(i3)
       car4.addImage(i4)
       cars=[car1,car2,car3,car4];
   }

   play(){
       form.hide();
      // this.element.hide()
       textSize(30)
      
       text('Game Has Started',120,100)
       Player.getPlayerInfo()
       player.getCarAtEnd()
       if(allPlayers !== undefined){
           background(198,135,103)
           image(i6,0,-displayHeight*4,displayWidth,displayHeight*5)
         var index=0;
         var x=175;
         var y;
           for(var plr in allPlayers){
               index++;
               x+=200;
               y= displayHeight-allPlayers[plr].distance;
               cars[index-1].x=x;
               cars[index-1].y=y;
               if(index==player.index)   {
                   stroke(0)
                   fill(255,0,0)
                   strokeWeight(7)
                   ellipse(x,y,100,100)
                   cars[index-1].shapeColor=rgb(255,0,0);
                  camera.position.x=displayWidth/2;
                  camera.position.y= cars[index-1].y;
               }
           }
       }
       if(keyIsDown(UP_ARROW) && player.index!== null){
           player.distance+=50;
           player.update();
       }
       if(player.distance>4860){
           gameState=2;
          player.rank+=1;
          Player.updateCars(player.rank);
          
       }
       drawSprites();
   }
   end(){
       console.warn('Game Ended')
       rectMode(CENTER)
       strokeWeight(8)
       stroke(255,255,0)
       fill(255);
       rect(displayWidth/2-20,displayHeight/2,200,200)
       this.element.position(displayWidth/2-20,displayHeight/2)
       this.element.html(player.name+': Rank: '+ player.rank);
       image(i6,0,-displayHeight*4,displayWidth,displayHeight*5)
       drawSprites();
   }
}