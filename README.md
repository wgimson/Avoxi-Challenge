
# Project Title

Avoxi Code Challenge

---
### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
---

## Install

    $ git clone https://github.com/wgimson/Avoxi-Challenge.git
    $ cd PROJECT_TITLE
    $ npm install

## Running the project

    $ npm start

    now open a browser and navigate to `http:localhost:3000/verifyIp/{id}`, and supply either 1, 2, or 3 as the id (these are the 'userIds' I mocked as a multi-client db..)

    some examples outputs...

    `http://localhost:3000/verifyIp/1`

    ...should return true, since that users IP address is whitelisted..

    `http://localhost:3000/verifyIp/13`

    ...should return `unauthorized`, since there is no userId of 13 in the mocked db..

    `http://localhost:3000/verify`

    ...should return a 404 error as this is not a valid route in the app

## Running as Docker Contianer

run 
`docker build -t <user-name>/<project-name> .`
`docker run -p <public-port>:3000 -d <user-name>/<project-name>`

the application is now accessible via Docker on the <public-port>
