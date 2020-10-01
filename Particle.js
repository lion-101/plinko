class Particle 
{
    constructor(x,y,width,height,radius,color)
    {
    var options=
    {
        //isstatic=true
    }
    this.body=Bodies.circle
    }
    display()
    {
        ellipse(x,y,this.r,options)
        ellipseMode(CENTER)
        this.color=color (random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
}