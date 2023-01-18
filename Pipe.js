class Pipe
{
  constructor(velocity)
  {
    this.x = width;
    this.width = 94;
    this.contact = false;
    //this.up = random(height/2);
    //this.bottom = random(height/2)
    this.minSpace = 100;

    this.minBoundary = 38 + 10; //length of broad part of pipe + min length of pipe
    this.up = random(this.minBoundary, height - this.minSpace - this.minBoundary);
    //this.bottom = random(this.up + this.minSpace, height - this.minBoundary - 11);
    this.bottom = this.up + this.minSpace;
    this.velocity = velocity;

  }

  update()
  {
    //this.velocity = this.difficulty;
    this.x -= this.velocity;
    //this.difficulty += 0.1
  }

  offscreen()
  {
    return (this.x + this.width < 0);
  }

  show()
  {
   //  if(this.contact)
   //    fill(200,255,255);
   //  else
   //    fill(90, 255, 255);
   //  stroke(0);
   //
   //
   // rect(this.x, 0, this.width, this.up);
   //  rect(this.x, this.bottom, this.width, height - this.bottom - 11);
    push();
    translate(this.x + 94 , this.up);
    rotate(PI);
    //rotate(PI, 0);
    image(pipe, 0,0);
    push();
    scale(-1.0, 1.0);
    image(pipe, -pipe.width, 0);
    pop();

    pop();
    //pipe.mask(platformImg);
    image(pipe, this.x, this.bottom);
    //console.log(height);
  //  rect(this.x, 0, this.width, this.up);
    //rect(this.x, this.bottom, this.width, height - this.bottom - 11);

  }

  collides(B)
  {
    //image(bird, 50, 50;)
    //cons
    //horizontalCollision = B.x+B.r > this.x && B.x+B.r < this.x+this.width;
    //verticalCollision = B.y+B.r > this.bottom && B.y+B.r < this.up-this.minSpace;
    if((B.x+B.r > this.x && B.x-B.r < this.x+this.width) &&
   (B.y+B.r > this.bottom || B.y+B.r < this.up-this.minSpace))
    //if((B.x > this.x && B.x < this.x+this.width) &&
      //(B.y > this.bottom || B.y < this.up-this.minSpace))
    {
      this.contact = true;
       return this.contact;
    }
    else
    {
        this.contact = false;
        return this.contact;
    }

  }


}
