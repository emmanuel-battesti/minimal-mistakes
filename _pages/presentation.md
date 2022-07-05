---
datatable: true
title: Presentation
toc: true
toc_sticky: true
header:
  overlay_image: /assets/images/courses-de-drones.jpg
---
<!-- ![image-course](/assets/images/courses-de-drones.jpg){: width="100%" } -->

## The Competition

The objective of the mission is to map an unknown, potentially hostile area, detect targets (injured or healthy people), and guide them out of the area. A typical use case is to investigate the basement of a collapsed building in the dark, in order to locate trapped people and rescue them.

Each team will have a fleet of 10 drones. Each drone will be equipped with communication functions and sensors.

Your job is to make these drones completely autonomous by programming them in *Python*.

The drones will have to manage the limited range of the communication means, collaborate between them to acquire information and re-transmit it to an operator outside the zone, be able to manage sensor and communication means failures and unforeseen events such as the loss of drones in order to conduct this mission autonomously.

The work on the challenge will be done exclusively in this simulation environment, with maps of increasing complexity. The final evaluation will be done on an unknown map made available to each team at the time of the demonstration. Every proposition will be tested on a same computer and a score related to the performance will be computed.

The Challenge does not require any particular technical skills (beyond basic knowledge of *Python*), and will mainly mobilize creativity and curiosity from the participants.

## Score

Depending on the scenario evolution before the final evaluation, the score calculation may be slightly modified.

First, the execution of your algorithms will be stopped after a while. There are two time limits :
- time step limit : a number of loops in the simulation
- real time limit : a limit in minutes, depending of the map and the computer speed : 2 to 5 minutes.

When the first limit is reached, the game is over. If your algorithm is fast, you will reach the "step time limit" first. If your algorithm is too slow, you will reach the "real time limit" before the "time step limit" .

To calculate the score, the following elements will be taken into account:
- the part of the territory explored : you have to explore a maximum of the map
- the number of fixed targets detected, brought back to the base,
- the number of mobile targets detected, brought back to the base.

If all the targets are brought back to base and all the map is explored, the speed in "time step" will be taken into account.

### Details on the rules

- You can only use the detection of WoundedPerson, RescueCenter and other Drones with the Semantic Cones, but not the Walls (as it is unrealistically giving you the full wall size and position). Use Lidar to detect/avoid Walls.

## Simple-Playgrounds

This program *Swarm-Rescue* is an extension of the *Simple-Playgrounds* (SPG) software library: https://github.com/mgarciaortiz/simple-playgrounds. However, in the current installation of *Swarm-Rescue*, it is the branch *swarm-rescue* of a fork of *Simple-Playgrounds* that is used: https://github.com/embaba/simple-playgrounds.

It is recommended to read the documentation of *Simple-Playgrounds*.

*Simple-Playgrounds* is an easy-to-use, fast and flexible simulation environment. It bridges the gap between simple and efficient grid environments, and complex and challenging 3D environments. It proposes a large diversity of environments for embodied drones learning through physical interactions. The playgrounds are 2D environments where drones can move around and interact with scene elements.

The game engine, based on [Pymunk](http://www.pymunk.org) and [Pygame](https://www.pygame.org), deals with simple physics, such as collision and friction. Drones can act through continuous movements and discrete interactive actions. They perceive the scene with realistic first-person view sensors, top-down view sensors, and semantic sensors.

### Game Engine

In *Simple-Playgrounds*, the game engine used is *Pygame*. Drones enter a Playground, and start acting and perceiving within this environment. The perception/action/communication loop is managed by the game engine. At each time step, all perception is acquired, all communication are done. Then according to actions to do, drones are moved. Everything is synchronized, unlike what you would get on a real robot.

### Physics Engine

In *Simple-Playgrounds*, the 2d physics library *Pymunk* is used. The physic engine deals with simple physics, such as collision and friction. This give a mass and inertia to all objects.



## Contact

If you have questions about the code, you can contact :
emmanuel . battesti at ensta-paris . fr
