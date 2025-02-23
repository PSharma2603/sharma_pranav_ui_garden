# Dockerized React Component Library - Assignment 12

This project demonstrates a **Dockerized React UI Component Library** using **React and Storybook** for **Assignment 12**.  
The app runs on **http://localhost:8083** using Docker.

---

## **📌 Prerequisites**
Before setting up the application, ensure you have the following installed:

- **Docker**: Download and install Docker
- **Git** (Optional): Used for cloning the repository

### **Verify Installations**
Run the following commands to verify installation:
```bash
docker --version    # Should return Docker version
git --version       # Should return Git version

 Overview
This project is built using React & Storybook and is containerized using Docker.
The goal is to create a UI Component Library that runs on localhost:8083.

Creating the React Component Library
Using this command "npx create-react-app sharma_pranav_ui_garden --template typescript" create the project.

Modifications
Make modifications to the code and add our components to the project.

Docker Environment
Building Docker image using this command in the terminal
'docker build -t sharma_pranav_coding_assignment12 .'

then running the container at port 8083 
'docker run -p 8083:6006 --name sharma_pranav_coding_assignment12 sharma_pranav_coding_assignment12' using this command.

Stopping the container:
'docker stop sharma_pranav_coding_assignment12'
by using this command