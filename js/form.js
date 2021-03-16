class Form{
    constructor(){
        this.input= createInput("Name")
        this.button= createButton("Login")
        this.greeting= createElement("h1")
        this.reset= createButton("Let's Play Again")
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title= createElement("h2")
        title.html("Turbo Car Racing")
        title.position(displayWidth/2-50,0)
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)   
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth/2-70,100)
        this.reset.size(200,40)
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            Player.updateCars(0)
        })
        this.button.mousePressed(()=>{
            this.input.hide()
        this.button.hide()
        player.name= this.input.value();
        playerCount++;
        player.index= playerCount;
        player.update()
        player.updateCount(playerCount);   
        this.greeting.html("Hello! "+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }
   
  
}