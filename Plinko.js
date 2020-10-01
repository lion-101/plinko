class Plinko 
{
    constructor (x,y)
    {
        var options = 
        {
            restitution:1,
            friction:0,
            isstatic:true

        }
    this.radius=10


    }
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    
    push();
    translate (pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    nostroke();
    fill(white)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop();
    }
}