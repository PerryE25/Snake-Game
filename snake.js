class Snake {
  
    // a function to "setup" or give instructions to
    // construct/create a snake object
    constructor() {
      // this. is a generic reference to same instances of obj
      // and used in classes to declare variables
      
        this.body = [];
      this.body[0] = createVector(floor(w/2), floor(h/2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
    }
    
    // (1,0) right
    // (-1,0) left
    // (0,1) up
    // (0,-1) down
    setDir(x, y) {
        this.xdir = x;
      this.ydir = y;
    }
    
    // have a head at the "tail" and add one to 
    update() {
        // first trial run
      // this.body[0].x += this.xdir;
      // this.body[0].y += this.ydir;
      
      // gets a copy of the head block and adds it to the body as a new tail end
      let head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
    
    // grabs a copy of the head/"tail" and adds it to
    // the front of it
    grow() {
        let head = this.body[this.body.length-1].copy();
      
      // increase the body length whenever it grows
      this.len++;
      this.body.push(head);
    }
    
    // using the head's x and y value
    // if the head touches any edge or if the head
    // touches any other part of the body return true
    endGame() {
        // find the snake head's x and y values
      let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      
      // determine if the snake head hit any of the walls
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
      }
      // checks if the head touches any part of the body
      // array and goes through each tail body part
      for(let i = 0; i < this.body.length-1; i++) {
          let part = this.body[i];
        if(part.x == x && part.y == y) {
          // we know that the head is at crossroads
          // with another part of its body
            return true;
        }
      }
      // the snake can live another day if reaches here
      return false;
    }
    
    // if head touches food, then it shall eat and
    // expand in length
    eat(pos) {
        // grab the snake's head x and y values
      let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      if(x == pos.x && y == pos.y) {
        // we know at this point that the head is
        // on the same point on the map as the food
        this.grow();
        return true;
      }
      // we know if it goes to this point in coding that
      // the snake hasn't reach food
      return false;
    }
    
    // display the snake as a sequence of head block
    // copies. For loop because we have multiple similar
    // of tail points to go through and display
    show() {
        for(let i = 0; i < this.body.length; i++) {
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1);
      }
    }
  
  }