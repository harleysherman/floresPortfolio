import furCompanion from "../../Assets/furCompanion.png";
import employeeTracker from "../../Assets/employeeTracker.gif";
import techBlog from "../../Assets/techBlog.png";
import socialNetworkAPI from "../../Assets/socialNetworkAPI.gif";
import weatherAPI from "../../Assets/weatherAPI.png";
import workDayStarter from "../../Assets/workDayStarter.png";

const projectDev = [
    {
      id: 1,
      name: "FurCompanion",
      category: "HTML/CSS",
      description: "Fur Companion Pilot is an innovative application designed to aid in the pet selection process. Your Fur Companion Pilot will provide you with insight to be make the process of researching if and which fur companion is right for you. By offering a owner oriented approach to determining the potential breeds that have been identified as an appropriate match based on your needs, the needs of different species/breeds and your lifestyle.",
      imageURL: furCompanion,
      deployedURL: "https://harleysherman.github.io/fur-companion-pilot/",
      githubURL: "https://github.com/harleysherman/fur-companion-pilot",
    },
    {
      id: 2,
      name: "TechBlog",
      category: "Handlebars/Sequelize",
      description: "This project goal was to understand how to create a CMS-style blog site using handlebars and sequelize. The main challenge of this project was creating the proper routes using handlebars to modularize each element. This blog focuses on all things tech. The theme of the blog is futuristic and energetic. Users are able to create a new account, create a blog post, update a post, add a comment to some else's post, and delete a post.",
      imageURL: techBlog,
      deployedURL: "https://mighty-shelf-93751-8304233a0599.herokuapp.com",
      githubURL: "https://github.com/harleysherman/techBlog",
    },
    {
      id: 3,
      name: "EmployeeTracker",
      category: "MySQL/Inquirer",    
      description: "This project was to create an employee database that can be changed when needed for any company. The goal of this project was to use MySQL and Inquirer to make a employee database from scratch. The database contains management of departments, roles, and employees of the company. The challenge to overcome in this project was not using express and instead using inquirer and MySQL to create a dynamic database.",
      imageURL: employeeTracker,
      deployedURL:
        "https://drive.google.com/file/d/1FX9_ctLQVc7LxgwdFC8XcpXLMlmiaVue/view",
      githubURL: "https://github.com/harleysherman/employeeTracker",
    },
    {
      id: 4,
      name: "SocialNetworkAPI",
      category: "MongoDB/Insomnia",
      description: "The project priority was to create a basic social network using mongoDB, express, javascript date library, seed data, insomnia, and mongoose. Here on this network a user can share their thoughts, react to other's thoughts, and create a friend list. The goal of this project was to create a network and verify if the routes are correct through insomnia.",
      imageURL: socialNetworkAPI,
      deployedURL:
        "https://drive.google.com/file/d/17T2H6v49b6ak8QSqHOo-EZ_3_c5uuGCR/view",
      githubURL: "https://github.com/harleysherman/socialNetworkAPI",
    },
    {
      id: 5,
      name: "WeatherAPI",
      category: "Local Storage/Open Weather API",
      description: "The Weather API goal is to display weather for five days when the user enters in a city so that they can plan a trip more accurately. The project uses Open Weather API to pull weather data for a particular city and for the next five days. It also uses local storage to store data to make it persistent.",
      imageURL: weatherAPI,
      deployedURL: "https://harleysherman.github.io/weatherAPI/",
      githubURL: "https://github.com/harleysherman/weatherAPI",
    },
    {
      id: 6, 
      name: "WorkDayStarter",
      category: "JQuery/Local Storage",
      description: "The work day app is to help create a day planner for work. It uses local storage to store the events entered by the user. JQuery and Day.js is used in this project to run in the browser and dynamically update the HTML/CSS.",
      imageURL: workDayStarter,
      deployedURL: "https://harleysherman.github.io/workDayStarter/",
      githubURL: "https://github.com/harleysherman/workDayStarter",
      // CHANGE TO HYPE ME HYPE YOU PROJECT
    },
  ];

  export default projectDev;