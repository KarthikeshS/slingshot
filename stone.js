class Stone{
    constructor(bodyA, pointB){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone = loadImage("images/stone.png");
    }
}