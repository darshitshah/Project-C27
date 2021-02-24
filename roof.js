class Roof{
    constructor(){
        var options = {
            isStatic:true
        }
       
        
        this.width = 300;
        this.height = 10;
        this.body = Bodies.rectangle(400,100,300,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}