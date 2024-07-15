class Area {
    double length, breadth, radius, side, base, height;

    // Constructor overloading
    // Default constructor
    public Area() {}

    // Constructor for rectangle
    public Area(double length, double breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    // Constructor for square
    public Area(double side) {
        this.side = side;
    }

    // Constructor for circle
    public Area(double radius, boolean isCircle) {
        this.radius = radius;
    }

    // Constructor for triangle
    public Area(double base, double height, boolean isTriangle) {
        this.base = base;
        this.height = height;
    }

    // Method overloading
    public double area(double radius) {
        return Math.PI * radius * radius;
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