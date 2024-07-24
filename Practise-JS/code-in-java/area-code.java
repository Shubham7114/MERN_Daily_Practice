class Area {
    double length, breadth, radius_, side, base, height;


   
    public Area() {}

    
    public Area(double length, double breadth) {
        this.length = length;
        this.breadth = breadth;
    }

  
    public Area(double side) {
        this.side = side;
    }


    public Area(double radius_, boolean isCircle) {
        this.radius_ = radius_;
    }

   
    public Area(double base, double height, boolean isTriangle) {
        this.base = base;
        this.height = height;
    }

   
    public double area(double radius_) {
        return Math.PI * radius_ * radius_;
    }

    public double area(double side, boolean isSquare) {
        return side * side;
    }

    public double area(double length, double breadth) {
        return length * breadth;
    }

    public double area(double base, double height, boolean isTriangle, boolean isTriangleMethod) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {
        Area rectangle = new Area(5, 10);
        Area square = new Area(4);
        Area circle = new Area(3, true);
        Area triangle = new Area(6, 8, true);

        System.out.println("Area of Rectangle: " + rectangle.area(5, 10));
        System.out.println("Area of Square: " + square.area(4, true));
        System.out.println("Area of Circle: " + circle.area(3));
        System.out.println("Area of Triangle: " + triangle.area(6, 8, true, true));
    }
}