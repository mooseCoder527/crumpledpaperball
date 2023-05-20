class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true,
        }
        this.ground = Matter.Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.ground)
        this.w = w
        this.h = h
    }
    display(){
        push()
        translate(this.ground.position.x,this.ground.position.y)
        rectMode(CENTER)
        fill('yellow')
        rect(0,0,this.w,this.h)
    
        pop()
    }
}