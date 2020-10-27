class dustbin
{
    constructor(x,y)
    {
        var options={
            isStatic:true
          //  restitution:0.3,
            //friction:1.2


        }
        this.x=x;
        this.y=y;
        
        this.body=Bodies.rectangle(this.x,this.y,options)
        World.add(world,this.body);
    }
    display()
    {

        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        rect(0,0);
        pop()
    }

}