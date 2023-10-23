class Bird
{
  constructor()
  {
    this.x = 200;
    this.y = height/2;
    this.r = 30;
    this.velocity = 0.0;
    this.gravity = 0.5;
    this.airResistance = 0.4;
    this.upForce = -18;
    this.upwardMovement = false;
    this.rotation = PI / 12;
      this.xOff = 18; 
      this.yOff = 12; 

  } 

  update()
  {
    this.rotation += PI/(20*4);
    this.rotation = constrain(this.rotation, -PI/3, PI/6);
    this.velocity += this.gravity;
    this.velocity += this.airResistance;
    this.y += this.velocity;
  //  this.y.limit(10);
    this.edges();
  }

  show()
  {
    //stroke(0);
    //fill(50, 255, 255);
    //ellipse(this.x, this.y, this.r, this.r);
      
    /*if(this.upwardMovement)
    {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      image(bird, 0, 0);
      pop();
      this.upwardMovement = false;
    }
    else
    {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      image(bird, 0, 0);
      pop();
     }*/

    stroke(0);
    fill(50, 255, 255, 100);
    //ellipse(this.x, this.y, this.r, this.r);

  //  ellipse(this.x, this.y, this.r, this.r);
    image(bird, this.x - this.xOff, this.y - this.yOff);
  }

  jump()
  {
    this.upwardMovement = true
    this.rotation -= PI/4;
    //this.rotation.limit(PI/2);
    this.rotation = constrain(this.rotation, -PI/3, PI/6);
    this.velocity += this.upForce;

    //this.velocity = constrain(this.velocity,-10,30);
  }

  edges()
  {
    if(this.y > height - 20)
    {
      this.y = height - 20;
      this.velocity = 0;
    }

    else if (this.y < 0)
    {
        this.y = 0;
      this.velocity = 0;
    }


  }

}
