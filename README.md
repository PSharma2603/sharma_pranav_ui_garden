# Dockerized React Component Library - Assignment 12

This project is a UI Component Library built using React, Storybook, TypeScript, and follows best development practices with Husky, ESLint, Prettier, and Jest tests. The project is Dockerized and runs inside a container at port 8018, ensuring a production-ready Storybook environment.

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


Installing the new dependencies by running the following commands 

npx husky-init && npm install
npx husky install

npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier


Modifications
Make modifications to the code and adding necessary folders like the .github to the project.

checking if the all the tests are passing.
npm test
npm run storybook #running the storybook on port 6006 on the local machine

Docker Environment
Building Docker image using this command in the terminal
'docker build -t sharma_pranav_coding_assignment13 .'

then running the container at port 8018
'docker run -p 8018:6006 --name sharma_pranav_coding_assignment13 sharma_pranav_coding_assignment13' using this command.

Stopping the container:
'docker stop sharma_pranav_coding_assignment13
by using this command
```
