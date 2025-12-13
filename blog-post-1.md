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

A Java-based physics simulation program that models gravitational interactions between celestial bodies (planets and stars) in 3D coordinate space.
Please read below if any definitions or terms are unfamiliar, I've done my best to explain them in the **Definitions** section.
<br>


## Language Features
- **Basic User Input** - takes a number for choice of preset simulation
- **Selection** - Various methods use selection (if, else, switch) to allow for variety in program options
- **Loops, Methods** - There are lots of methods in each file, `CalculationEngine.java` holds most of them, loops are also used in the main simulation to carry out the primary logic

#### Project Structure
- **`Body.java`** (abstract): Base class for all celestial bodies with position, velocity, mass, and force tracking
- **`Planet.java`**: Extends `Body.java` with planet-specific types (Gas Giant, Terrestrial, Dwarf, Ice Giant, Exoplanet)
- **`Star.java`**: Extends `Body` with star-specific types (Red Giant, Blue Giant, Brown Dwarf, White Dwarf, Neutron Star, Yellow Dwarf)
- **`CalculationEngine.java`**: Core physics calculations (forces, energy, collisions)
- **`CalculationBody`**: Simulation setup and preset scenarios


#### Running Preset Simulations
After running `Main.java` you can choose from preset options:
- **Option 1**: Sun and Earth (two-body system, 1 year simulation)
- **Option 2**: Sun, Earth, and Mars (three-body system, 1 year simulation)
- **Option 3**: Custom N-body simulation

### Testing
The project includes JUnit tests in `CalculationTest.java`:
- **Energy Conservation Tests**: Verify total energy remains constant over time
- **Orbital Stability Tests**: Check that gravitational and centripetal forces balance for circular orbits
- **Collision Detection Tests**: Ensure bodies collide when their surfaces touch

- <br>

eifbewofboew hello