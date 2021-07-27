
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
   // const Constraint = Matter.Constraint;
    
    
    var roof;
    //Create multiple bobs, mulitple ropes varibale here
    var bob1,bob2,bob3,bob4,bob5;
    var rope1,rope2,rop3,rope4,rope5;
    //var con1,con2,con3,con4,con5;
    
    
    function setup() {
        createCanvas(800, 600);
        
    
        engine = Engine.create();
        world = engine.world;
    
        var roof_options={
            isStatic:true			
        }
    
        var ball_options={
            restitution:0.8,
           // isStatic:true
        }
    
        roof = Bodies.rectangle(370,100,230,20,roof_options);
        World.add(world,roof);
    
        bob1 = Matter.Bodies.circle(290,350,20,ball_options);
        World.add(world,bob1);
        bob2 = Matter.Bodies.circle(330,350,20,ball_options);
        World.add(world,bob2);
        bob3 = Matter.Bodies.circle(370,350,20,ball_options);
        World.add(world,bob3);
        bob4 = Matter.Bodies.circle(410,350,20,ball_options);
        World.add(world,bob4);
        bob5 = Matter.Bodies.circle(450,350,20,ball_options);
        World.add(world,bob5);
        //rope1 = Matter.Bodies.rect(bob1,roof,-80,0);
        //World.add(world,rope1)
        
    
        
        con1 =  Matter.Constraint.create({
            bodyA:roof,
            pointG:{x:290,y:110},
            bodyB:bob1,
            pointB:{x:0,y:0},
            length:250,
            stifness:0.1
        });
        World.add(world,con1)
        con2 =  Matter.Constraint.create({
            bodyA:roof,
            pointC:{x:330,y:110},
            bodyB:bob2,
            pointB:{x:0,y:0},
            length:250,
            stifness:0.1
        });
        World.add(world,con2)
        con3 = Matter.Constraint.create ({
            bodyA:roof,
            pointD:{x:370,y:110},
            bodyB:bob3,
            pointB:{x:0,y:0},
            length:250,
            stifness:0.1
        });
        World.add(world,con3)
        con4 =  Matter.Constraint.create({
            bodyA:roof,
            pointE:{x:410,y:110},
            bodyB:bob4,
            pointB:{x:0,y:0},
            length:250,
            stifness:0.1
        });
        World.add(world,con4)
        con5 =  Matter.Constraint.create({
            bodyA:roof,
            pointF:{x:450,y:110},
            bodyB:bob5,
            pointB:{x:0,y:0},
            length:250,
            stifness:0.1
        });
        World.add(world,con5)
    
        
        rectMode(CENTER);
      ellipseMode(RADIUS);
      
    }
    
    function draw() {
     // rectMode(CENTER);
      //ellipseMode(RADIUS);
      background("#99004d");
      Engine.update(engine);
    
     rect(roof.position.x,roof.position.y,230,20);
     
      
    
      ellipse(bob1.position.x,bob1.position.y,20);
      ellipse(bob2.position.x,bob2.position.y,20);
      ellipse(bob3.position.x,bob3.position.y,20);
      ellipse(bob4.position.x,bob4.position.y,20);
      ellipse(bob5.position.x,bob5.position.y,20);
      
      //rect(rope1.position.x,rope1.position.y,80,70);
      //rope1.display();
      push();
      strokeWeight(2);
      stroke(255);
    line(con1.pointG.x,con1.pointG.y,bob1.position.x,bob1.position.y);
    line(con2.pointC.x,con2.pointC.y,bob2.position.x,bob2.position.y);
    line(con3.pointD.x,con3.pointD.y,bob3.position.x,bob3.position.y);
    line(con4.pointE.x,con4.pointE.y,bob4.position.x,bob4.position.y);
    line(con5.pointF.x,con5.pointF.y,bob5.position.x,bob5.position.y);
    pop();
      
    }
    //function keyPressed(){
    
        //if(keyCode === UP_ARROW){
            //body.applyForce(bob1,{x:0,y:0},{x:-1,y:0});
        //}
   // }
    function keyPressed()
{
  if(keyCode===RIGHT_ARROW)
    {
      Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
    }
}
    

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
