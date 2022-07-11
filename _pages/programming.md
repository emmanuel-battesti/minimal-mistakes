---
title: Programming
permalink: /programming/
header:
  overlay_image: /assets/images/programming.jpg
---
<!-- ![image-prog](/assets/images/programming.jpg){: width="100%" } -->

## Architecture

### file *launcher.py*

*launcher.py* is the main program file to launch a swarm of drones using your code. This file will run everything needed to perform the evaluation.

It will launch the 10 drones that you will have customized in the map that you want, make it run and give the final score.

This file needs almost no modification to work, except those lines at the beginning of the file:

```python
class MyMap(MyMapCompet01):
    pass


class MyDrone(MyAwesomeDrone):
    pass
```

*MyMap* must inherit from the class of the map you want to use (here, in the example *MyMapCompet01*). This map will be located in the folder *maps*.

*MyDrone* must inherit from the class of the drone that you created (here, in the example, your awesome drone *MyAwesomeDrone*). This drone will be located in the folder *solutions*.

### directory *spg_overlay*

As its name indicates, this folder is a software overlay of the spg (simple-playground) code.

The files it contains must *not* be modified. It contains the definition of the class *Drone*, of the class of the sensors, of the wounded persons, etc.

### directory *maps*

This directory contains the maps in which the drones can move. New maps may appear for new missions with the updates of this repository. You can also make your own maps based on existing ones.

Each map must inherit from the class *MapAbstract*.

### directory *solutions*

This repository will contain your solutions. Taking inspiration from what is there and going beyond, you will put in the code that will define your drones and how they interact with their environment.

Each Drone must inherit from the class *DroneAbstract*. You have 2 mandatory member functions: **define_message()** that will define the message sent between drone, and **control()** that will give the action to do for each time step.

Keep in mind, that the same code will be in each of the 10 drones. Each drone will be an instance of your Drone class.

For your calculation in the control() function, it is mandatory to use only the sensor and communication data, without directly accesssing the class members. In particular, you should not use the  *position* and *angle* variables, but use the *measured_position()* and *measured_angle()* functions to have access to the position and orientation of the drone. These values are noisy, representig more realistic sensors, and can be altered by special zones in the map where the position information can be scrambled.

The true position of the drone can be accessed with the functions *true_position()* and *true_angle()* (or directly with the variable *position* and *angle*), BUT it is only for debugging or logging.

Some examples are provided:
- *my_drone_random.py* shows the use of touch sensors and actuators
- *my_drone_lidar_communication.py* shows the use of lidar and communication between drones

### directory *examples*

In the folder, you will find stand-alone programs to help you program with examples. In particular :
- *example_semantic_cones.py* shows the use of semantic cones and actuators, and how to grasp a wounded person and bring it back to the rescue area.
- *example_touch_sensor.py* shows the use of touch sensors and actuators.

### directory *tuto_spg_jupyter*

In this directory, you will find the code contained in the jupyter notebooks of the simple-playground library.

### directory *tools*

In this directory, you may find some tools... For example, the program *image_to_map.py* allows to build a map from a black and white image.

## Submission

At the end, you will have to submit your solution to your evaluator. The evaluator of your code will have this same software to evaluate your solution.

Be careful, you will provide only :
- the code to run your simulated drone, which will only come from the *solutions* directory,
- the list of new dependencies needed to make your drone work.

## Various tips

- To exit after launching a map, press 'q'.
