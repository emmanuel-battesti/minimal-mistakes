---
title: Environment
header:
  overlay_image: /assets/images/lidar-maya.jpg
---
<!-- ![image-env](/assets/images/lidar-maya.jpg){: width="100%" } -->

## Drones

Drones is a version of what is called **agent** in *Simple-Playgrounds*.
Drones are composed of different body parts attached to a *Base*.

The actuators controlling the base and body parts are managed by a controller.
The controller can be:
- Random: each actuator is set randomly at every time-step.
- Keyboard: the drone is controlled by pressing keys on the Keyboard.
- External: used to set the actions from outside the simulators.

Drones perceive their surroundings through 3 first-person view sensors:
- Lidar
- Touch Sensor
- Semantic Sensors Cones

Drones have also a communication system.

### Lidar

In the code, class *DroneLidar*.

It emulates a lidar.

- *fov* (field of view): 360 degrees
- *resolution* (number of rays): 90
- *max range* (maximum range of the sensor): 300 pix

You can find an example of lidar use in the *solutions/my_drone_lidar_communication.py* file.

### Touch Sensor

In the code, class *DroneTouch*.

Touch Sensors detect close proximity of entities (objects or walls) near the drone.

It emulates artificial skin,

- *fov* (field of view): 360 degrees
- *resolution* (number of rays): 12
- *max range* (maximum range of the sensor): 5 pix

The return value is between 0 and 1.

You can find an example of touch sensor use in the *examples/example_touch_sensor.py* and the *solutions/my_drone_random.py* files.


### Semantic Sensors Cones

In the code, class *DroneSemanticCones*.

Semantic Cones sensors allow to determine the nature of an object, without data processing, around the drone.

- *fov* (field of view): 360 degrees
- *max range* (maximum range of the sensor): 200 pix
- *n_cones*, number of cones evenly spaced across the field of view: 36
- *rays_per_cone*, number of ray per cone: 4

You can find an example of semantic cones use in the *examples/example_semantic_cones.py* file. For this competition, you can only use the detection of WoundedPerson, RescueCenter and other Drones, but not the Walls (use lidar for this).
The sensor DroneSemanticCones used in your drone is a modified version of the class SemanticCones of SPG.

Each cone of the sensor provides a data with :
- *data.distance* : distance of the nearest object detected
- *data.angle* : angle of the cone in radians
- *data.entity_type* : type of the detected object
- *data.grasped* : is the object grasped by a drone or an agent ?


### Communication

Each drone can communicate with all the drones in a certain range (currently, 200 pixels).
At each time step, data can be sent and/or received.

You have the possibility to configure the content of the messages yourself.

You can find an example of communication use in the *solutions/my_drone_lidar_communication.py* file.


### Actuators

At each time step, you must provide values for your actuators.

You have 3 values to move your drone :
- *longitudinal_force*, a float value between -1 and 1. This is a force apply to your drone in the longitudinal way.
- *lateral_force*, a float value between -1 and 1. This is a force apply to your drone in the lateral way.
- *rotation_velocity*, a float value between -1 and 1. This is the speed of rotation. For a value of 1.0, we have rotation speed of 0.3 rad/s.

You have 2 values to interact with the world :
- You can *grasp* certain *graspable* thing. To move a *wounded person*, you will have to *grasp* it.
This value *grasp*  is either 0 or 1.
- You can *activate* certain *activable* thing. This value *activate*  is either 0 or 1.

You can find examples of actuator use in almost all files in *examples/* and *solutions/*.

## Playground

Drones act and perceive in a *Playground*.

A *playground* is composed of scene elements, which can be fixed or movable. A drone can grasp or activate certain scene elements. Depending on their nature, particular scene elements will provide reward to the drone interacting with them. The playground with all its elements, except for the drones, are called "Map" within this *Swarm-Rescue* repository.

### Coordinate System

A playground is described using a Cartesian coordinate system.

Each element has a position (x,y, theta), with x along the horizontal axis, y along the vertical axis, and theta the orientation in radians, aligned on the horizontal axis. The position (0, 0) is at the top-left of the map. The value of theta is between 0 an 2*Pi. Theta increases with a clockwise rotation of the drone. For theta = 0, the drone is oriented towards the right. A playground has a size [width, length], with the width along x-axis, and length along y-axis. When applicable, the length of a scene element follows the element's x-axis.

## Wounded Person

A *Wounded Person* are element that appear in yellow in the map. As its name suggests, it is injured person that need help from the drone.  

The drones must approach them, *grasped* them and take them to the rescue center.

You can find an example of grasping a wounded person in the *examples/example_semantic_cones.py* file.

## Rescue Center

*Rescue Center* is an orange element in the map where the drones should bring the *Wounded Person*.

A reward is given to a drone each time it give a *Wounded Person* to the *Rescue Center*.

You can find an example of rescue center use in the *examples/example_semantic_cones.py* file.

## Special zones

There are zones that alter the abilities of the drones.

Those zones will be implemented in a future release.

### No-Communication zone

*No-Communication zone* where a drone loses the ability to communicate with other drones.
This zone cannot be directly detected by the drone.

### No-GPS zone

*No-GPS zone* where a drone loses the possibility to know its real position.
This zone cannot be directly detected by the drone.

### Killing zone

*Killing zone* where a drone is destroyed automatically.
This zone cannot be detected by the drone.
