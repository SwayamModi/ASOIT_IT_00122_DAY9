//instance od array
var a = ["swayam", "Modi"];
document.write(a instanceof Array);

document.write("<br/>");

//class instance of
class Rectangle{
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
}
var R=new Rectangle(10,20);
document.write(R instanceof Rectangle);
document.write("<br/>");

document.write(R.height+R.width);