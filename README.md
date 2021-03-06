# Demo Instance Messager Project

Demo Instance Messager is a self-hosted web application built on purely javascript. The fontend is built on ReactJs and the backend is relied on expressJs framework.

### What do you expect to do with this IM
  - User Registration via email
  - Search your friend with email
  - One to One simple text chat

## Getting started

The project is broken down into a client and server folder.

### How to run and test the application
#### Prerequisite
Make sure you have mongoDB running in your localhost. Here is the docker command to create a mongo instance.
```sh
$ docker run --name hatchways-IM -p 27017:27017 -d mongo:latest
```
You only need to run the above commend once to create db instance. And pls make sure the stance is started before startup the application
```sh
$ docker start hatchways-IM
```
You can access the instance and create database or collection with the commands below
```sh
$ docker exec -it hatchways-IM mongo
> create database HATCHWAYS_IM;
> use HATCHWAYS_IM
> db.createCollections(users)
```

#### Backend side
#### Variable
| Variable Name | Usage | Example |
| ------ | ------ | ------ |
| DB_URL | config database url | mongodb://localhost:27017/HATCHWAYS_IM |
| PORT | config backend server port listening, 3001 if not configed | 8080 |
| JWT_SECRET | Secret which is used to sign a token | any string |
| JWT_EXPIRY | config JWT token expiry period | 1h, 1d or 1y |

You can run the backend side with the following code
```sh
$ cd server
$ npm install .
$ npm run dev
```
You can run the test with the following command
```sh
$ npm run test
```

#### API List

| API | Method | Need auth | Parameter | Usage | Response code | Response Body |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|rest/user| GET | Y | NAN | Return user info (userName for now) if user is logged in | 200, 401 | userName
|rest/user| POST | N | email, userName, password | User Registration | 201, 400 | empty body with jwt token in session |
|rest/login| POST | N | email, userName, password | User login | 200, 401 | empty body with jwt token in session |


### Tech

Demo-IM uses a number of open source projects to work properly:

* [react.js] - Web apps JS framework
* [node.js] - Javascript server runtime
* [express] - Node.js web application framework
* [mongo] - object database
* [docker] - Self-sufficient containers
* [socket.io] - Enables real-time, bidirectional and event-based communication

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [React.js]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [socket.io]: <https://socket.io>
   [docker]: <https://www.docker.com>
   [mongo]: <https://www.mongodb.com/2>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>.md>
