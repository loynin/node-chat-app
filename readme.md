# Node Chat App Project

### Content

1. Overview
2. Structure of Project Files
3. Prerequisites
4. How to Run the Project
5. Output - Results
6. Project Improvement
7. Credit


## Overview

*Node Chat App* is a web application that uses `Node, Expess, and Socke.IO` to deliver a real time application that allow users to chat with each other online. With this app, users can communicate with each other on web UI while Node, Express, and SocketIO are working in the background.

### Project Introduction

  #### Technology Use
  *Node Chat App* uses `Node, Express, SocketIO, and moment` as the technology to render the application. In addition, it use `Mocha and Expect` as the technology to process the test case for the application.

  #### Project Output

  Upon complete running the app, the user will be able to log into the chatting app and start to chat with other users. The running version of this app is lived at http://chat.loynin.com


## Structure of Project Files
 #### File Structure
 The structure of the files are divided in to two parts. One is for web server and the other is for public hosting.

 - public
      - css
        + styles.css : is use to style the application
      - js
        + libs
          - deparam.js - the library use to get the query string from the url
          - jquery*.js - the jquery library
          - moment.js - moment library for date and time manipulation
          - mustache.js - library use to create javascript template to reduce redundant code
        + chat.js - file use to provide functions for the chat app
      - index.html - handle the main page of the application
      - chat.html - handle all chat functions to display chat, message, and user list

- server
    - utils
      + message.js - use to create message function for the application
      + users.js - use to create user, remove user, and display user list
      + validation.js - use to validate string
      + message.test.js - use to test the application processs
    - server.js - handle the process of the client and server communication such as `connect, join, and disconnect`


- package.json - npm configuration file
- readme.md - this readme file


## Prerequisites

To develop and run, this app is required the following:

  #### Dependencies
```
  "dependencies": {
    "express": "^4.16.4",
    "moment": "^2.22.2",
    "socket.io": "^2.1.1",
    "yarn": "^1.12.3"
  },
  "devDependencies": {
    "expect": "^23.6.0",
    "mocha": "^5.2.0",
    "nodemon": "^1.18.6"
  }
```
  #### Run-time Environment

This app is using JavaScript and Node as the platform. Therefore, this app needs NodeJS to run.

## How to Run the Project

The following is the process of running app on the local server:

1. Clone the repository to the local folder as folder name 'node-chat-app' or any name and run the following command:

```
git clone https://github.com/loynin/node-chat-app.git node-chat-app
cd node-chat-app
npm install
npm run start
```
Now the application should be lived on the local computer at http://localhost:3000

## Output - Results

- For live demo this app please visit http://chat.loynin.com

- Now the application should be lived on the local computer at http://localhost:3000

## Project Improvement

For the future of improvement, this app have many chances for improvement. One thing the most needed feature is the ability to select the previous chat room to join.

## Credit

This app is the out put from the study of the course `The Complete Node.js Developer Course (2nd Edition)` from `Andrew Mead` @ udemy.com
