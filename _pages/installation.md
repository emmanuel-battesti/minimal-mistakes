---
title: Installation
permalink: /installation/
header:
  overlay_image: /assets/images/installation.jpg
---
<!-- ![image-install](/assets/images/installation.jpg){: width="100%" } -->

This installation procedure has been tested only with Ubuntu 18.04 and 20.04.

## libsdl1.2-dev installation
For the library *Simple-Playgrounds*, you might need to install *libsdl1.2-dev*.

You will obviously have to use the Git tool.

```bash
sudo apt update
sudo apt install git libsdl1.2-dev
```

## *Python* installation

We need, at least, *Python 3.8*.

- On *Ubuntu 20.04*, the default version of *Python* is 3.8.
- On *Ubuntu 18.04*, the default version of *Python* is 2.7.17. And the default version of *Python3* is 3.6.9.

But it is easy to install *Python* 3.8:
```bash
sudo apt update
sudo apt install python3.8 python3.8-venv
```

## *Pip* installation

- Install *Pip*:
```bash
sudo apt update
sudo apt install python3-pip
```

- When the installation is complete, verify the installation by checking the *Pip* version:

```bash
pip3.8 --version
```

- It can be useful to upgrade *Pip* to have the last version in local directory:

```bash
/usr/bin/python3.8 -m pip install --upgrade pip
```

To use his version you have to use `python3.8 -m pip` instead of `pip`, for example:

```bash
python3.8 -m pip --version
```

## Virtual environment tools

The safe way to work with *Python* is to create a virtual environment around the project.

For that, you should install some tools:

```bash
sudo apt update
sudo apt install python3-venv virtualenvwrapper
```
## Install this repository

- To install this git repository, go to the directory you want to work in (for example: *~/code/*).

- Git-clone the code of *Swarm-Rescue*:

```bash
git clone https://github.com/embaba/swarm-rescue.git
```

- Create your virtual environment. This command will create a directory *env* where all dependencies will be installed:
```bash
cd swarm-rescue
python3.8 -m venv env
```

- To use this newly create virtual environment, as each time you need it, use the command:

```bash
source env/bin/activate
```

To deactivate this virtual environment, simply type: `deactivate`

- With this virtual environment activated, we can install all the dependency with the command:

```bash
python3.8 -m pip install --upgrade pip
python3.8 -m pip install -r requirements.txt
```

- To test, you can launch:
```bash
python3.8 ./src/swarm-rescue/launcher.py
```

## Python IDE

Although not mandatory, it is a good idea to use an IDE to code in *Python*. It makes programming easier.

For example, you can use *PyCharm*. In this case, you have to set your *interpreter* path to your venv path to make it work.
