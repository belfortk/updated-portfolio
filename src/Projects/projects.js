export default function projects() {
  return [
    {
      title: "MoxiWorks",
      url: "moxiworks",
      description: "My current employer!",
      github: "",
      liveLink: "https://moxiworks.com/",
      summary: `Pretty early on into my bootcamp, I realized I wanted to work as a software engineer in Seattle. I had visited the city one August and fell in the love with the thriving tech scene and utterly gorgeous natural beauty. After months of applying, I finally interviewed and accepted an offer at MoxiWorks, where I have been since spring 2018. MoxiWorks makes agents and brokerage more profitable by providing them with the tools they need to be successful. We have a suite a product offerings that all integrate into our fabulous platform. The projects I have been a part of are the Windermere.com redesign, our Roster product, and Moxi Engage, our best in class CRM.
      <p> I am deeply grateful to MoxiWorks for believing in and hiring me. I was their first junior developer ever! I am truly blessed to be learning from a bunch of bad ass super intelligent and thoughtful senior engineers. I have learned <i> so much</i> since coming here. We currently use Ruby on Rails to power most of our applications with various JS frameworks on the front-end, mostly Angular and Vue, or just ERB/HAML. I have a much better understand of server-side programming compared to when I finished my program. I no longer feel like a huge fraud. Now I feel like given enough time, I could maybe possibly actually do this.</p>
      <p>Javascript is still my favorite language, though. You never forget your first.</p>`,
      heroImg: "/images/MoxiWorks/HERO.png",
      supportingImg1: "/images/MoxiWorks/supportingImage1.png",
      supportingImg2: "/images/MoxiWorks/supportingImage2.png",
      builtWith: []
    },
    {
      title: "Stop It. Git Some Help.",
      url: "git-some-help",
      description: "Try git commands committment free in the browser.",
      github: "https://github.com/belfortk/stop-it-git-some-help",
      liveLink: "https://stopitgitsomehelp.herokuapp.com/",
      summary: `<p> Weren’t we all absolutely terrified of git and the command-line when we first started out? No? Just me? This is still a work in progress, but I have a grand plan to make it look cool and like a file editor inspired by VS Code, my editor of choice. </p> This app was suggested to me by a friend who wished there was a way to try git commands without risking his files. I found this <a href=“https://github.com/isomorphic-git/isomorphic-git”> cool project</a> that is an isomorphic implementation of git. Isomorphic basically means you can run the application on the server-side or on the client (in the browser!). I knew I wanted to resharpen my React and Redux skills since we don’t use those frameworks at my job (I’m trying my best to change that) and I thought this would be a cool project. In building this, I got to finally try out the Bulma css framework in a real application, really hammer down my understand of the new async await syntax, and try this new concept I learned about on HackerNews - using JS objects as switch statements.`,
      heroImg: "/images/StopItGitSomeHelp/HERO.png",
      supportingImg1: "/images/StopItGitSomeHelp/supportingImage1.png",
      supportingImg2: "/images/StopItGitSomeHelp/supportingImage2.png",
      builtWith: ["React", "Redux", "Bulma", "Isomorphic Git"]
    },
    {
      title: "Krillcoin Blockchain",
      url: "krillcoin",
      description: "Browser-based crytocurrency",
      github: null,
      liveLink: null,
      summary:
        "As part of my internship at Omni Holding, I am working on a team developing a new cryptocurrency. A fork of the Nimiq blockchain, Krillcoin is pure javascript, able to be mined in the browser, and breaks down the expense barrier to crypto-mining. I wrote the consumer facing views like the wallet and the mining interface. Currently, I am developing a site so users can easily monitor and visualize the blockchain (the series of Krillcoin transactions and mining activities) and a mobile app with React Native for <a href='https://www.hodlfeed.com'>HodlFeed </a>, the premier way to keep up-to-date with the latest crypto news.<br> <br>This project was really cool. I was (still am) pretty new to the world of cryptocurrencies and blockchain development, but I've learned a ton so far. Additionally, this was my first time working in a real development shop with professional developers and it was so fulfilling to be contributing to real products. I definitely learned a lot from my lead developer. Thanks to him, I've been introduced to the whole concept of styled components like Material UI and micro-interactions. And while there was a steep learning curve, I am definitely a better developer than I was before and am grateful to be a part of this amazing team.",
      heroImg: "/images/Krillcoin/HERO.png",
      supportingImg1: "/images/Krillcoin/supportingImage1.png",
      supportingImg2: "/images/Krillcoin/supportingImage2.png",
      builtWith: [
        "React",
        "Redux",
        "Material Ui",
        "React Native",
        "Nimiq",
        "Loopback",
        "MongDB"
      ]
    },
    {
      title: "OCA Teletype",
      url: "oca-teletype",
      description: "Combining Codepen and Google Docs realtime collaboration",
      github: null,
      liveLink: "https://oca-teletype.herokuapp.com",
      summary:
        "In this project, I worked with a team of fellow students to implement real-time collaboration to the Monaco editor from Microsft. We were inspired by the Atom Teletype feature and wanted to bring the capability to the browser based code editor Origin Code Academy was using to teach their students. With this new feature, students can work on challenges and problems across the globe and simply initiate the pairing process by sharing a their URL link to their room instance. Anyone who has the link can see what is being typed and contribute to the editing. The work is saved for as long as the room is not deleted as well so students and teachers can always come back. It was a new experience being given a large existing code base then figuring out enough about it to be to effectively work within it. Some of the challenges I had to face included learning new technologies like websockets, real-time conflict resolution libraries like ShareDB, and WebRTC for audio chat. This project was a good introduction to the process of doing R&D for software and we learned a lot about how to reach out to developers and track bugs/issues through the depths of github.",
      heroImg: "/images/OCA-Teletype/HERO.gif",
      supportingImg1: "/images/OCA-Teletype/supportingImage1.png",
      supportingImg2: "/images/OCA-Teletype/supportingImage2.png",
      builtWith: [
        "React",
        "Redux",
        "React Router",
        "Websocket",
        "Socket.io",
        "Monaco",
        "Sharedb",
        "Loopback",
        "MongDB"
      ]
    },
    {
      title: "MealHouse",
      url: "mealhouse",
      description: "Full stack GrubHub clone application",
      github: "https://github.com/belfortk/mealhouse",
      liveLink: "https://mealhouse.herokuapp.com/",
      summary:
        "I was the team lead in creating a full stack scalable GrubHub clone product with authentication. This was my first time working with a group to produce an Minimum Viable Project for a product owner and my introduction to the software development cycle. As part of an Agile team, I led the daily SCRUM, the creation of user stories, and assignment of tickets. In this project we implemented a RESTful MongoDb backend with Loopback. In the front end, we integrated Google Places and Stripe to handle location and checkout services. I was also responsible in the user sign-up and customer shopping experience. The biggest challenge we faced was getting our Git workflow down and effectively collaborating on the different aspects of the project. Currently under construction as I fix some bugs =(",
      heroImg: "/images/MealHouse/HERO.png",
      supportingImg1: "/images/MealHouse/supportingImage1.png",
      supportingImg2: "/images/MealHouse/supportingImage2.png",
      builtWith: [
        "React",
        "Redux",
        "React Router",
        "Google Places API",
        "Sharedb",
        "Loopback",
        "MongDB",
        "Node",
        "Express",
        "Bootstrap"
      ]
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
      supportingImg2: "/images/CodeNames/supportingImage2.png",
      builtWith: ["React", "Bootstrap", "Java"]
    },
    {
      title: "Movie Finder",
      url: "movie-finder",
      description:
        "A React/Redux application to search through the Open Movie Database for entertainment",
      github: "https://github.com/belfortk/movie-finder-redux",
      liveLink: "https://kjb-redux-movie-finder.herokuapp.com/#/",
      summary:
        "I built this project as part of my learning React Redux and React Router. It utilizes the Open Movie Database to find media properties that match the inputted search term. In this app, I also learned how to use carousel elements after being inspired by one on the an NPR page. In addition to learning how to implement page navigation with React or with other SPA's, this project thought me a lot about about how React works under the hood and how its manipulation of DOM elements don't always play nicely with other methods. ",
      heroImg: "/images/MovieFinder/HERO.png",
      supportingImg1: "/images/MovieFinder/supportingImage1.png",
      supportingImg2: "/images/MovieFinder/supportingImage2.png",
      builtWith: [
        "React",
        "Redux",
        "React Router",
        "Open Movie Database",
        "Bootstrap"
      ]
    },
    {
      title: "Weather App",
      url: "weather-app",
      description:
        "A weather application. Because everyone has made a weather application",
      github: "https://github.com/belfortk/weather-app",
      liveLink: "https://kjb-weather-app.herokuapp.com/",
      summary:
        "Inspired by FreeCodeCamp's Weather app project (and because I've seen so many cool examples of weather apps made by developers), I made my own with React+Redux and by consuming the Open Weather Map API. This project was a my introduction to Redux and more complicated state management beyond vanilla React. I  also challenged myself to play around with the HTML5 geolocation API so that a user's local weather would automatically populate.",
      heroImg: "/images/Weather-App/HERO.png",
      supportingImg1: "/images/Weather-App/supportingImage1.png",
      supportingImg2: "/images/Weather-App/supportingImage2.png",
      builtWith: [
        "React",
        "Redux",
        "React Router",
        "Open Weather Map API",
        "Bootstrap"
      ]
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
      supportingImg2: "/images/US-Drone-Strikes/supportingImage2.png",
      builtWith: [
        "React",
        "Bootstrap",
        "New York Times Articles API",
        "Mapquest API",
        "Dronestream API"
      ]
    }
  ];
}
