class Platform
{
  constructor(dist, velocity)
  {
  //  this.image = loadImage("Images/Background line.jpg");
    this.x = dist;
    this.y = height - 11; //11px is the height of the platform
    this.velocity = velocity;
  }

  outOfBounds()
  {
    if(this.x <= -width)
    this.x = width;
  }

  update()
  {
    this.x -= this.velocity;
  }

  show()
  {
    image(platformImg, this.x, this.y);
  }

}
