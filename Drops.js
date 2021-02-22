class Drops{
    constructor(x,y){
        var maxDrops=100;

        for(var i=0; i<maxDrops; i++){
            drops.push(new CreateDrop(0,400),random(0,400));
        }
    }
    
}
this.r = 10;
this.body = Bodies.circle(x, y, this.r, options);

World.add(world, this.body);

display() 

var pos = this.body.position;

push();

translate(pos.x, pos.y);
imageMode(CENTER);
noStroke();
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();


