class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.2,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y,r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("pink")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}