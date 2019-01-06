# time-tracking
Time Tracking is a software that I use to register the time I spend on my projects to create correct invoices for my customers.

## Table of contents
- [Local Setup](#local-setup)
- [Installation](#installation)
- [Contributing](#contributing)

### Local Setup
To preview the website locally you have to install on your local machine the listed software below:
1. Install [git](https://git-scm.com/) to manage Git repository.
2. Install [yarn](https://yarnpkg.com/lang/en/) to run the web server or to run test service.
3. You also need to install [nodejs](https://nodejs.org/en/) on your local machine to execute the source code.

### Installation

Clone the git repository

```sh
$ git clone https://github.com/FabioAnsaldi/time-tracking.git
```

Go to the new folder directory and run the following commands:

```sh
$ cd time-tracking
$ yarn install
```
You will see listed the modules required and installed in you local machine 
Now the server is ready to be used

###### Custom settings (optional)

If you want to set a custom configuration for IP address or service port:
Go to ***config*** directory and edit the ***custom_name.json*** file
Insert your custom configuration for web server
```json
  "web": {
    "address": "LOCAL_IP_ADDRESS,
    "port": "LOCAL_PORT"
  },
```
Insert your custom configuration for database service
```json
  "database": {
    "address": "LOCAL_IP_ADDRESS",
    "port": "LOCAL_PORT",
    "user": "CUSTOM_USER",
    "password": "CUSTOM_PASSWORD"
  }
```

You have to run the server with the optional parameter like below:

```sh
$ yarn run start custom_name.json
```

If the your_local_address_ip is 127.0.0.1 and the port is 8080, you will see something like below:

```sh
Server listening on http://127.0.0.1:8080/
```

### Contributing

Feel free to make changes to the template files and to the document files.
