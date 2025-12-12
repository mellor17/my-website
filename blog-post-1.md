## N-Body Problem Physics Calculator - MMU Project
###         Ben Mellor

This is a blog post about the things I learned, how I learned them and what I did to implement them for my Intro to
Programming course in Java.

First for a little bit of context regarding ths

Below is an excerpt of my `Body` class in Java
```
private final String name;
    private final double mass;
    private double positionX, positionY, positionZ;
    private double velocityX, velocityY, velocityZ;
    private double netForceX, netForceY, netForceZ;
    private final double radius;

    public Body(String name, double initial_mass, double initial_x, double initial_y, double initial_z, double initial_vx, double initial_vy,  double initial_vz, double radius) {
        this.name = name;
        this.mass = initial_mass;
        this.positionX = initial_x;
        this.positionY = initial_y;
        this.positionZ = initial_z;
        this.velocityX = initial_vx;
        this.velocityY = initial_vy;
        this.velocityZ = initial_vz;
        this.netForceX = 0;
        this.netForceY = 0;
        this.netForceZ = 0;
        this.radius = radius;
    }
```