# **Getting Started**
To set up the project LOCALLY, follow these steps:

**1. Create and set the .env files in /client and /server**

**2. Run `npm i` in / , /client and /server**

**3. Set up the database locally (you can use psql or pgadmin)**

**4. Access the application at http://localhost:5173**g
(You also need to have redis running)
`docker run --name my-redis-container -p 6379:6379 -d redis`


To set up the project with DOCKER, follow these steps:

**1. Clone the repository:**
`git clone https://github.com/Malek-trez/DriveToGether.git`

**2. Make sure you have Docker installed on your machine. If not, you can download and install it from Docker's [official website](https://www.docker.com/products/docker-desktop/).**

**3. Navigate to the project directory:**
`cd <project_directory> `

**4. Build and run the project using Docker Compose:**
`docker-compose up --build `

**5. Once the setup is complete, you can access the web app at localhost:8000 and the pgAdmin web interface at localhost:8088.**

## Notes
- Make sure ports 8000 and 8088 are not already in use on your system.
- If needed, you can customize the configurations in the docker-compose.yml file.
- For development purposes, you may want to explore additional Docker Compose commands and options.

**That's it! You're now ready to explore and use the application locally. If you encounter any issues during setup or have any questions, feel free to reach out to us.Transportation is much easier with our app! 🚗🚌**
