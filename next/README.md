# Pam's Next.js Project
Originally written during the React Udemy course. Some minor facelifts done during the Docker/Kubernetes course.

## Set up
1. `npm install`

## Running
1. `npm run-script build`
1. `npm start`
**or**
1. `sh start.sh` - this will not run redis so the page counter will not work.

**or**
1. `docker-compose up` - runs redis and node containers
1. `docker-compose up --build` - builds containers and then runs them.
