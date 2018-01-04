export default function projects() {
  return [
    {
      title: "OCA Teletype",
      url: "oca-teletype",
      description: "Adding Google Docs-like real-time collaboration to a code editor",
      github: null,
      liveLink: "https://oca-teletype.herokuapp.com",
      summary:
        "In this project, I worked with a team of fellow students to implement real-time collaboration to the Monaco editor from Microsft. We were inspired by the Atom Teletype feature and wanted to bring the capability to the browser based code editor Origin Code Academy was using to teach their students. With this new feature, students can work on challenges and problems across the globe and simply initiate the pairing process by sharing a their URL link to their room instance. Anyone who has the link can see what is being typed and contribute to the editing. The work is saved for as long as the room is not deleted as well so students and teachers can always come back. It was a new experience being given a large existing code base then figuring out enough about it to be to effectively work within it. Some of the challenges I had to face included learning new technologies like websockets, real-time conflict resolution libraries like ShareDB, and WebRTC for audio chat. This project was a good introduction to the process of doing R&D for software and we learned a lot about how to reach out to developers and track bugs/issues through the depths of github.",
      heroImg: "/images/OCA-Teletype/HERO.gif",
      supportingImg1: "/images/OCA-Teletype/supportingImage1.png",
      supportingImg2: "/images/OCA-Teletype/supportingImage2.png"
    },
    {
      title: "MealHouse",
      url: "mealhouse",
      description: "Full stack GrubHub clone application",
      github: "https://github.com/belfortk/mealhouse",
      liveLink: "https://mealhouse.herokuapp.com/",
      summary:
      "I was the team lead in creating a full stack scalable GrubHub clone product with authentication. This was my first time working with a group to produce an Minimum Viable Project for a product owner and my introduction to the software development cycle. As part of an Agile team, I led the daily SCRUM, the creation of user stories, and assignment of tickets. In this project we implemented a RESTful MongoDb backend with Loopback. In the front end, we integrated Google Places and Stripe to handle location and checkout services. I was also responsible in the user sign-up and customer shopping experience. The biggest challenge we faced was getting our Git workflow down and effectively collaborating on the different aspects of the project.",      heroImg: "/images/MealHouse/HERO.png",
      supportingImg1: "/images/MealHouse/supportingImage1.png",
      supportingImg2: "/images/MealHouse/supportingImage2.png"
    },
    {
      title: "CodeNames",
      url: "codenames",
      description: "An online version of the popular board name Codenames",
      github: "https://github.com/belfortk/Codenames",
      liveLink: "https://kjb-codenames.herokuapp.com/",
      summary:
        "Initially, I built a console-only version of the party game in Java with a friend. It was my first passion project after taking my first computer science class. It was great introduction into pair programming and building on the Object-Oriented Programming principles I learned in the class. However, after gaining some frontend web development skills, I knew I could improve the game and make it more playable and the web. I built this game as an SPA on the side as a passion project during my bootcamp to reinforce what I had learned about React. Although it is playable now, I plan on going back and adding web socket/communication support so that you can play across multiple computers.",
      heroImg: "/images/CodeNames/HERO.png",
      supportingImg1: "/images/CodeNames/supportingImage1.png",
      supportingImg2: "/images/CodeNames/supportingImage2.png"
    },
    {
      title: "Movie Finder",
      url: "movie-finder",
      description: "A React/Redux application to search through the Open Movie Database for entertainment",
      github: "https://github.com/belfortk/movie-finder-redux",
      liveLink: "https://kjb-redux-movie-finder.herokuapp.com/#/",
      summary:
        "I built this project as part of my learning React Redux and React Router. It utilizes the Open Movie Database to find media properties that match the inputted search term. In this app, I also learned how to use carousel elements after being inspired by one on the an NPR page. In addition to learning how to implement page navigation with React or with other SPA's, this project thought me a lot about about how React works under the hood and how its manipulation of DOM elements don't always play nicely with other methods. ",
      heroImg: "/images/MovieFinder/HERO.png",
      supportingImg1: "/images/MovieFinder/supportingImage1.png",
      supportingImg2: "/images/MovieFinder/supportingImage2.png"
    },
    {
      title: "Weather App",
      url: "weather-app",
      description: "A weather application. Because everyone has made a weather application",
      github: "https://github.com/belfortk/mealhouse",
      liveLink: "https://mealhouse.herokuapp.com/",
      summary:
        "I was the team lead in creating a full stack scalable GrubHub clone product with authentication. This was my first time working with a group to produce an Minimum Viable Project for a product owner and my introduction to the software development cycle. As part of an Agile team, I led the daily SCRUM. In this project we implemented a RESTful MongoDb backend with Loopack. In the front end, we integrated Google Places and Stripe to handle location and checkout services. I was also responsible in the user sign-up and customer shopping experience. The biggest challenge we faced was getting our Git workflow down and effectively collaborating on the different aspects of the project.",
      heroImg: "/images/MealHouse/HERO.png",
      supportingImg1: "/images/MealHouse/supportingImage1.png",
      supportingImg2: "/images/MealHouse/supportingImage2.png"
    },
    {
      title: "US Drone Strikes",
      url: "us-drone-strikes",
      description: "My submission for the Origin Code Academy Hackathon",
      github: "https://github.com/belfortk/Drone-Strike-Hackathon-Project",
      liveLink: "https://kjb-us-drone-strikes.herokuapp.com/",
      summary:
        "This SPA was my submission for the Origin 72 Hour Hackathon and my first React application I built from scratch. The requirements were to consume at least 2 API's. I used 3: the Mapquest API (Google had a bug and wasn't giving me an API key to use for their Maps API), the New York Times Article's API, and a the Dronestream API for strike data. I've always been interested in public policy/politics and I was inspired to create something that people in that space could potentially use. I created an app that generates a map of the last 10 US drone strikes. You can generate a new map of the last 10 strikes customized by country, town, and minimum death tool. On the right is a feed of the latest NYT articles on US drone activity and policy. While this app is a good start, I plan on going back and swapping out the static Mapquest maps with zoomable and more dynamic Google Maps.",
      heroImg: "/images/US-Drone-Strikes/HERO.png",
      supportingImg1: "/images/US-Drone-Strikes/supportingImage1.png",
      supportingImg2: "/images/US-Drone-Strikes/supportingImage2.png"
    }
  ];
}
