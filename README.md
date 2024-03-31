# The Coffee House
Welcome to the coffee recipe web app. This platform offers a user-friendly interface powered by Node.js, Express, and EJS, ensuring seamless browsing experience. With the dynamic content generation, you can explore a wide range of coffee recipes tailored to your preferences. Start breqing like a pro and discover the perfect cup of coffee for every moment!

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) 20.11.1

# Getting Started
- git clone
```
git clone https://github.com/yash3108/Supplyframe-Challenge.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3500`

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **controller**           | Contains the code to control the flow of execution  |
| **errors**               | Contains the code for error landling and logging                               |
| **model**                | Model define schemas that will be used in storing and retrieving data from Application database 
| **public**               | Contains the public page styling and images to be served |
| **routes**               | Contain all express routes, separated by module/area of application |  
| **view**                 | Contains the partials and templates for pages |
| server.js                | Entry point to express app |                    
| response.test.js         | Contains Jest test case  |                                                       
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   |

# Snapshots
## Home Page
![image](https://github.com/yash3108/Supplyframe-Challenge/assets/55008416/061dfecb-a908-4918-a47c-9ee91beef63d)

## Menu (page1)
![image](https://github.com/yash3108/Supplyframe-Challenge/assets/55008416/3e75f002-a11b-40d8-9e51-10d2f1e4a568)

## Recipe (page2)
![image](https://github.com/yash3108/Supplyframe-Challenge/assets/55008416/f3069e82-3654-4fab-8f28-b475c53f139c)
