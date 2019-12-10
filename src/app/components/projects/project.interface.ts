export interface Project {
  name: string;
  caption: string;
  coverIcon: string;
  techStack: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Pycoal Parallel",
    caption: "Python Toolkit",
    coverIcon: "../../../assets/projects/pycoal-parallel.png",
    techStack: "Python, NumPy, GitHub",
    description: `
      <h4>Project Background</h4>
      The project's primary purpose is to identify coal mines and correlate them with geographic features such as rivers and lakes.
      It uses hyperspectral imagery to compare the light signature of pixels from hyperspectral images with the known light signature of minerals/coal.
      <br />
      The problem is that the program takes a very long time to classify the images (environmental correlation is faster).
      It took me about 5 days when I first tried to classify an 18GB hyperspectral image file, so our main focus has been on reducing the runtime of that algorithm.
      <br />
      <h4>Team Contributions</h4>
      I currently work as part of a 5-student team on this capstone project, serving as the point of contact between our team and the stakeholder from NASA JPL.
      We coordinate Agile-style weekly sprint meetings over Slack/WebEx to discuss ways to improve the project and what we've done over the previous week and plan to do in the upcoming week.
      As a team we've improved the project's quality of life (documentation updates, bug fixes, and code quality improvements) and explored numerous options to speed up the project's mineral classification algorithm.
      Early results show that we may have sped up the project by up to 300% just by using more efficient NumPy operations and fixing non-optimally-designed portions of the algorithm.
      We're also continuing to explore using PyTorch and Dask for parallelizing the mineral classification process, as well as using AWS for running it in a distributed fashion.
      You can view my specific contributions from the link below (it links to the GitHub issues and Pull Requests I've created).
      
      
      <h4>Source Code</h4>
      The source code can be found <a class="link" href="https://github.com/capstone-coal">here</a>, and more information on COAL can be found <a class="link" href="https://capstone-coal.github.io/">here</a>.
      <br />
      For a list of my individual contributions, click <a class="link" href="https://github.com/capstone-coal/pycoal/issues?utf8=%E2%9C%93&q=author%3ALactem+">here</a>
      `
  },
  {
    name: "theoilie.com",
    caption: "Personal Website",
    coverIcon: "../../../assets/projects/personal-site.png",
    techStack:
      "Angular 7, JavaScript/TypeScript, HTML5/CSS3, Linux, Apache Web Server",
    description: `
      I built this portfolio website with the 3 main purposes of:
      <div style="padding-left: 3%;">
      1. Gaining a better understanding of Angular and front-end design
      <br />
      2. Putting myself out there to developers and other talented staff who might want to work with me on a startup (send me a message in the contact section!)
      <br />
      3. Having a front-end project to show off
      </div>
      <br />
      I used Angular 7 with Less CSS.
      I also rented a Linux machine to deploy the site with Apache Web Server.
      The site is made mobile-first and responsive, with the goal of supporting as many modern devices and browsers as possible.
      I've tested it on iPhone 7, iPhone X, iPad, and screen sizes 11 inches through 27 inches -- plus on Safari, Chrome, and FireFox. 

      <h4>Source Code</h4>
      Since this website is partially meant to be a demonstration of my front-end abilities, it would make sense to have the source code available.
      You can view it <a class="link" href="https://github.com/Lactem/portfolio-website">here</a>.
      `
  },
  {
    name: "TradeCatcher",
    caption: "Automated Stocks Trading Bot",
    coverIcon: "../../../assets/projects/tradecatcher.jpg",
    techStack: "Java, Docker, MongoDB, Redis, Linux",
    description: `
      TradeCatcher is a fully automated stocks trading bot with 3 components: collection, analysis, and trading.
      <h4>Setup</h4>
      I configured an Artifactory repository on an OVH-hosted Linux machine to store common dependencies used across the 3 Java projects involved in TradeCatcher, as well as their Gradle scripts for building and deploying the artifacts.
      I also wrote Docker scripts that build the 3 projects and create a network that includes databases (Redis and Mongo).

      <h4>Data Collection</h4>
      Using the APIs provided by IEX and AlphaVantage, I developed a portion of the bot to collect minute-by-minute data from multiple sources, remove any minutes with missing information, and store it all in MongoDB.
      
      <h4>Data Analysis</h4>
      The bot originally tried to learn from the data and fit it into models.
      Since people have been trying that approach for decades with little success, we decided to instead use a collection of well-known performance indicators.
      Rather than attempting to predict the best stock to buy or sell, the bot filters stocks down to the least risky ones and buys those.
      <br />
      Since analysis originally took a long time when fitting to machine learning models, I used Netty (a non-blocking I/O framework) to create a central proxy with which multiple analysis computers could send data.
      I used Google's Protocol Buffers mechanism to establish a way for the multiple instances of analysis servers to send standardized messages (the results of their analysis) to the proxy.
      This way, the analysis from many different symbols could be available in one program.
      Each analysis server knows which symbols to collect based on a central Redis server that it communicates to. This also lets the proxy know how many / which analysis servers are online.
      
      <h4>Trading</h4>
      The trading portion was primarily developed by someone else.
      It utilizes TD Ameritrade's public API to query an account, allowing the bot to buy and sell without any human intervention.

      <h4>Future</h4>
      The bot was originally coded in Java and built to handle resource-intensive analysis of many stock symbols.
      The complexity is hard to maintain with only 2 people, and Java had some issues with machine learning support.
      As a result, we're currently rebuilding a smaller version of the bot in Python.
      I also plan to create a web panel for better visualization of the data, as well as to understand why the bot makes certain trades.
      `
  },
  {
    name: "201-scheduler",
    caption: "Collaborative Calendar Website",
    coverIcon: "../../../assets/projects/201-scheduler.png",
    techStack: "Apache Spring, HTML/CSS, MongoDB, JavaScript/jQuery, Docker",
    description: `
      As a final project for a Java/Web class, I led a group of 3 students through the creation of an idea we came up: a website for clubs and organizations to share calendars, edit them concurrently, and easily view conflicts with other club/organizations' calendars.
      My individual responsibilities included:
      <div style="padding-left: 3%;">
      * Setting up the Apache Spring project with Maven, and providing documentation for the other students to install the dependencies (the team used both Windows and Mac, so we had to support both).
      <br />
      * Dockerizing the project so that the MongoDB database shipped with it.
      This eliminated the need for new admins to install a database and made starting the project as easy as:
      <br />
      Cloning the project: git clone https://github.com/Lactem/201-scheduler.git && cd 201-scheduler
      <br />
      and then running the project: docker pull tilie/scheduler && docker-compose up
      <br />
      * Created endpoints and functionality for user registration and login, as well as calendar creation, editing, and sharing.
      <br />
      * Used WebSockets (using StompJS) to implement concurrent calendar editing (like Google Docs but with calendar events instead of text)
      </div>

      <br />
      As a team we presented to the class and professor for 10 minutes about our technology stack, features, and overall experiences.
      We also gave a 5-minute live demonstration.

      <h4>Source Code</h4>
      The source code is available <a class="link" href="https://github.com/lactem/201-scheduler">here</a>.
      `
  },
  {
    name: "Snap MySQL Plugin",
    caption: "Intel's Data-Collection Agent",
    coverIcon: "../../../assets/projects/snap.png",
    techStack: "GoLang, MySQL",
    description: `
      Snap is Intel's telemetry agent.
      It collects information on clusters of devices, processes it, and then publishes it for system administrators to view.
      My contribution to the project is a plugin that receives information from the Snap framework and publishes it to a MySQL database.
      This plugin includes unit and integration tests.

      <h4>Source Code</h4>
      The source code is available <a class="link" href="https://github.com/intelsdi-x/snap-plugin-publisher-mysql">here</a>.
      `
  },
  {
    name: "GameDispenser",
    caption: "Minigame Framework",
    coverIcon: "../../../assets/projects/gamedispenser.png",
    techStack: "Java, MySQL, Code Documentation/JavaDocs",
    description: `
      <h4>Framework</h4>
      My earliest coding projects were for the popular open-world game Minecraft.
      I worked with a more experienced developer to create a framework for other developers to make their own mini-games within Minecraft.
      Some of the key features include:
      <div style="padding: 3%;">
      * Selecting 3D points to create arenas, as well as designating sub-sections of the arenas for customizable functionality
      <br />
      * Game cycle logic with various phases (waiting, starting, playing, ending, spectating) and ability to instantiate multiple games
      <br />
      * Utily code for tasks such as sending messages and saving/loading item and 3D map information to/from files
      </div>
      
      <h4>TNT Run</h4>
      As a demonstration of the framework, I coded a mini-game called TNT Run.
      Players in this game would run around on exploding layers of ground and the last player standing won.
      I partnered with a popular mini-game network to feature TNT Run to their userbase of over 1 million unique players.

      <h4>Plants Versus Zombies</h4>
      As a larger game, I re-made the popular mobile game Plants Versus Zombies (PvZ) in Minecraft.
      This involved devising an algorithm to assign players to either the plants or zombies team, and then placing players in different rows so that each row has a plants-to-zombies ratio that is challenging enough for both teams.
      I also created a rewards and randing system that stores information in a MySQL database and allows players to compare various statistics such as win rate with other players.
      The project received over 7,000 downloads on CurseForge (a popular gaming site), and a YouTuber with 70,000 subscribers released a tutorial video on the mini-game.

      <h4>Source Code</h4>
      There is public source code available for all 3 projects:
      <div style="padding: 3%;">
      * <a class="link" href="https://github.com/Lactem/GameDispenser">GameDispenser</a> (more non-technical information available at <a class="link" href="https://bukkit.org/threads/gamedispenser-minigame-manager-and-library.304104/">Bukkit/CurseForge</a>)
      <br />
      * <a class="link" href="https://github.com/Lactem/Arkham-TNT-Run">TNT Run</a>
      <br />
      * <a class="link" href="https://github.com/Lactem/PvZ">Plants Versus Zombies</a> (more non-technical information available at <a class="link" href="https://dev.bukkit.org/projects/plants-vs-zombies">Bukkit/CurseForge</a>)
      </div>
      `
  }
];