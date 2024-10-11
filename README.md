# CS260Startup
CS 260 Web programming project

# Music Practice Scheduler

## Specification Deliverable

### Elevator pitch

Have you ever wanted to learn an instrument, or improve at singing but you lack the structure and motivation to continue? With JamPlan you can set practice goals and compete with others to get the longest practicing streak. JamPlan also offers integration with google drive so you can store your sheet music, warm-ups, fingering charts, and anything else you need to take you musicianship to the next level!

### Design 

This is what it will look like when you first load up the page
![Mock](WebsiteOutlinePictures/Homepage.jpg)
This is what it will look like when you login/register a user
![Mock](WebsiteOutlinePictures/LoginPage.jpg)
This is what it will look like when you register and are on Home tab
![Mock](WebsiteOutlinePictures/LogPage.jpg)
This is what it will look like when you are on the scoreboard tab
![Mock](WebsiteOutlinePictures/ScoreboardPage.jpg)
This is what it will look like when you are on the Friends tab
![Mock](WebsiteOutlinePictures/FriendsListPage.jpg)

### Key Features

- Secure login over HTTPS
- Ability to set time goals for practicing 
- Tracks your practice streak and notifies others in your friend group when new high is reached 
- Scoreboard to see who has the longest practice streak (overall and among friends)
- Folder connected to google drive to store music documents


### Technologies 

I am using the required technology in the following ways:

- **HTML** - Uses HTML structure for framework of the Website. Multiple HTML pages for things such as login screen, scoreboard, practice log, and virtual piano(maybe). 
- **CSS** - Application styling that looks good and makes it easy to find things.
- **React** - Provides login, inserting practice times, displaying others scores, and use of React for routing and components 
- **Service** - Backend service with endpoints for:
   - login
   - inserting practice times
   - google drive implementation 
   - retrieving practice streak scores 
- **DB/Login** - Store users, practice times, current practice streak, and top streak in database. Register and login users. Credentials securely stored in database so that people can't add practice times unless authorized by the login
**WebSocket** - Whenever a user gets a new highest practice streak, a message is sent to everyone in their freiend group. People in friend groups can send messages to each other

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML

- **HTML pages** - 6 HTML pages for Index,Login,Register,Home(logpage),FriendsList,Scoreboard,Message
   - Index - Displays the option to login or register a new user
   - Register - Displays the option to register a user providing username,password, and email
   - Home - Displays the practice log page which is very empty and non functional right now
   - FriendsList - Displays your list of friends and the option to message one of them
   - Scoreboard - Displays Either the total scoreboard or friends scoreboard
   - Message - Is just a place holder for the websocket sending messages to friends 
   - Google Drive - Is just a place holder for API call later on
- **Links** - The different buttons/ links take you to different places on the Application
   - Menu - Once logged in you can go to Home,Scoreboard, or FriendsList throught the menu
   - Logout/Exit - this allows you to go back to index from anywhere once not in index
   - Login button goes to login.html, Register button goes to register.html
   - A link to my github is displayed on the index page
- **Placeholder for 3rd party service**
   - Google drive box that pops up an alert that says it doesnt work yet
- **Application images** 
   - Piano and guitar added to home page of application, not formated 
- **DB/Login**
   - Info from login stored in a database and username displayed in top corner
   - Streak number would be pulled from database and displayed as well of the scoreboard information
- **WebSocket**
   - When you click on message next to a friends name, another page pops up as a placeholder for websocket messaging

## CSS Deliverable

- **Header,footer, and main content body** - properly styled elements using CSS
- **Navigation Elements** - properly styled elements using CSS
   - The nav element for current page is white but the rest are light blue and they are placed in the top left of the page
- **Responsive to window resizing** - properly inplemented with CSS
   - When the window is shorter than a certain height, or width, the elements stay or dissapear depending on their importance on the page. The header and footer also dissapear after a certain height is crossed using media queries
- **Application Elements** - properly styled with CSS
- **Application Text Content** - properly styled with CSS
   - Most of the text is changed into a different font imported from google fonts
- **Application Images** - properly styled with CSS
   - images size was changed and location on the screen was change for visual appeal
   

