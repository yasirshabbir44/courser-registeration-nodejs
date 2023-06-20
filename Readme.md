# Online Backend Tuition Managment Application

Build a Restful API for Online Tuition system  using Node.js, Express and MongoDB. In this application user can register course and course can have multiple students.
This repository contains the backend service for a minimalistic tuition centre. The service is designed to handle various functionalities related to managing students, courses, and session within a tuition centre.

### Technology used

* Node.js: A JavaScript runtime environment for executing server-side code.
* Express: A minimalistic web framework for building RESTful APIs.
* MongoDB: A NoSQL database for storing and retrieving data.
* Mongoose: An object data modeling (ODM) library for MongoDB and Node.js, providing a straightforward way to interact with the database.
* Bycrypt: A library to help you hash passwords.
* JWT: 
* JIO validation

###  Prerequisites
Before running the backend service, ensure that the following software is installed on your system:

* Node.js (version 12 or above)
* MongoDB


## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
node server.js
```

You can browse the apis at <http://localhost:3000>


## API Endpoints
The following API endpoints are available for interacting with the backend service:

* ### Students:

* GET /students - Retrieve all students
* GET /students/:id - Retrieve a specific student by ID
* POST /students - Create a new student
* PUT /students/:id - Update a specific student by ID
* DELETE /students/:id - Delete a specific student by ID


* ### Courses:

* GET /courses - Retrieve all courses
* GET /courses/:id - Retrieve a specific course by ID
* POST /courses - Create a new course
* PUT /courses/:id - Update a specific course by ID
*  DELETE /courses/:id - Delete a specific course by ID

* ### Registration:

* POST /signup - Normal User can sign up
* POST /signup-admin - Admin User can sign up

* ### Login:

* POST /login - Normal User can sign in 
* POST /login-admin - Admin User can sign in

## API usage with Postman

* Request URL for Registration or Signup User

`curl --location 'localhost:3000/signup' \
--header 'Content-Type: application/json' \
--data '{
"name":"Yasir Shabbir",
"username":"yasir123",
"password":"abc123abc"
}'`
<img alt="Screenshot of Get All Request" height="500" src="./doc/Signup.png" width="800"/>


* Request URL for Login

`curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{
    "username":"yasir123",
     "password":"abc123abc"
}'`

<img alt="Screenshot of Get All Request" height="500" src="./doc/login.png" width="800"/>



* Request URL for Registration or Signup for ADMIN User

`curl --location 'localhost:3000/signup-admin' \
--header 'Content-Type: application/json' \
--data '{
"name":"Yasir Shabbir Admin",
"username":"yasirAdmin",
"password":"abc123abc"
}'`

<img alt="Screenshot of Get All Request" height="500" src="./doc/AdminSignup.png" width="800"/>


* Request URL for ADMIN Login

`curl --location 'localhost:3000/login-admin' \
--header 'Content-Type: application/json' \
--data '{
    "username":"yasirAdmin",
     "password":"abc123abc"
}''`

<img alt="Screenshot of Get All Request" height="500" src="./doc/admin-login.png" width="800"/>



* Request URL for Saving Student

`curl --location 'localhost:3000/student' \
--header 'Content-Type: application/json' \
--data '{
    "name":"Ali Ahmed",
    "age":22
}'`

<img alt="Screenshot of Get All Request" height="500" src="./doc/PostCallStudent.png" width="800"/>


* Request URL for Get All Student

`curl --location 'localhost:3000/student'`

<img alt="Screenshot of Get All Request" height="500" src="./doc/GetStudents.png" width="800"/>
