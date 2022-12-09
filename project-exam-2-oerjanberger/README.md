# Project Exam 2 RE:ACT

![image](./public/images/backgroundImages/IndexPageImage.jpg)

This is the final project exam for Ørjan Grøttvedt Berger while studying front-end development at Noroff. The exam is made to be a social media website that a student or teacher with a noroff email address can register a user and login to interact with the rest of the students. The image selected for this ReadMe file is only used because we were not allowed to change any other parts of the repo then the ReadMe file.

## Description
For the brief I got information that an existing Social Media company has approached me to create a brand new front end for their application. While they have a list of required features that I have listed below as user stories, the design and user experience had not been specified. 

This is the user stories that is the base for what functionality the website provides:

- A user with a stud.noroff.no email may `register`
- A registered user may `login`
- A registered user may update their `avatar` and `banner`
- A registered user may `logout`
- A registered user may view a list of `Posts`
- A registered user may view a list of `Profiles`
- A registered user may view a single `Post` by `id`
- A registered user may view a single `Profile` by `name`
- A registered user may create a `Post`
- A registered user may update a `Post` they own
- A registered user may delete a `Post` they own
- A registered user may create a `Comment` on any `Post`
- A registered user may `react` to any `Post` with an `emoji`
- A registered user may `follow` and `unfollow` another Profile

For this project I had to work with Noroff's own Social Media API. I had to make the logo and come up with a name for the Social media website as well.

When a new user opens the website it will open on the Home page.

### Home Page
On the Home page a user may select to register, for a new user, or Login for an existing. The footer will also take the user to a About page or a Contact Page

### Register Page
Has a form where a new user can register their noroff.no or stud.noroff.no email, a username and password. Submitting this form will take the user to the Login page.

### Login Page
Has a form that logs in a user if the email and password is correct or registered. Submitting the a form with correct data will save an Auth user to the local storage and navigate the user to the Post List page. The Nav will now look different and have more pages to navigate to, these being Post List, Profile List, Users Profile Page and a logout button. The logo will now navigate a user to the Post list page when pressed.

### Log Out Button
In the nav there is a logout icon that when clicked by a user will show a modal where a user can confirm or cancel the log out. Logging out will set the value of the Auth key in local storage to null.

### Create Post Button
When a user is logged in there is a create post button in the bottom right corner. This button is available on the next pages that will be mentioned
### Post List Page
On this page a logged in user can view all posts that is posted to the social media API. There is show more buttons at the bottom of the page if there is more then a 100 post. Clicking this will scroll the window to the top and show the next 100 posts. If there is no more posts a message will be shown. There will also be a show previous button that lets the user navigate to the posts they have passed when clicking the show more button. 

If a post has reactions, emojis, on it a logged in user can click the emojis and increase the count of this emoji. If no emojis is added already the post will show 0 reactions. The post cards also has a limit of characters on the body text that, if reached will show as three dots ... . To see the entire body text a user can click on the post to navigate to the specific post page

A user may also click on the Avatar image or name of the Author to navigate to the specific profile page.

### Specific Post Page
On this page the user is able to add a comment on the post and react to the post with a large amount of emojis. The body text will also be shown with the full amount of characters.
Clicking on the image of the post will display it in a modal.

### Profile List Page
On this page a user can view all profiles that is registered on the social media API. A user may follow or unfollow a user by clicking the button. There is show more buttons at the bottom of the page if there is more then a 100 profiles. Clicking this will scroll the window to the top and show the next 100 profiles. If there is no more profiles a message will be shown. There will also be a show previous button that lets the user navigate to the profiles they have passed when clicking the show more button.

On the profile card it will show the avatar, banner and username of the profile. The profile card will also display the number of followers and posts that this profile has
A user may click on the profile card and be navigated to the specific profile page

### Specific Profile Page
On this page a user can view the profile of another user. A user can click the avatar or banner image and have them shown in full size through a modal. The page will show how many followers and how many profiles this specific user is following. Pressing these buttons will take the user to a following and a followers page. A user is also able to follow or unfollow the profile from this page.

On the page the number of posts will be displayed and a user is able to scroll through the posts that specific profile has made.

### Following Page
On this page a user can see what profiles a certain profile is following. The following status of the logged in user will be shown on the buttons so the user can follow and unfollow profiles here as well. The following card will show the avatar and username of a profile.

### Followers Page
On this page a user can see all profiles that is following a certain profile. The following status of the logged in user will be shown on the buttons so the user can follow and unfollow profiles here as well. The following card will show the avatar and username of a profile.

### User specific Page
A user may navigate to this page by selecting the avatar icon in the navigation. This page is similar to the specific profile page but with the added functionality of being able to edit the Avatar and Banner images of the user. These can be updated using urls directly to an image. 
It is also here that a user can edit and delete a Post they have created.

### About Page
A short description of the company and what the website is
### Contact page
Contact page to report errors or give feedback. Right now it is a fictitious email.

## Built With

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Sass](https://sass-lang.com/)
- JavaScript
- [Axios](https://axios-http.com/docs/intro)
- [React router](https://reactrouter.com/en/main)
- [Yup](https://github.com/jquense/yup)
- [react hook form](https://react-hook-form.com/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:Noroff-FEU-Assignments/project-exam-2-oerjanberger.git
```

2. Install the dependencies:

```
npm install react-bootstrap bootstrap node-sass axios react-router-dom react-hook-form yup @hookform/resolvers unicode-emoji
```

### Running

To run the app, run the following commands in the terminal:

```bash
cd project-exam-2-oerjanberger
```

```bash
npm run start
```

The page will reload when you make changes.
You may also see any lint errors in the console.

### How to login
When the project is open in [http://localhost:3000](http://localhost:3000), you can register a new user with a `@noroff.no` or `@stud.noroff.no` email. Choose a suitable username and password and register your new user. You can now use this user to login to the website.

### Adding images
When you add images to a post or if you are changing your banner/avatar image it is important that you us the full image url. Otherwise the image will not be be show. For example you can use [unsplash](https://unsplash.com) to do this. Find the image you want that is free to use. Right click it and select `copy image address`. Paste this in the url field of the form and submit it.
## Contributing

Make sure to open a pull request so code can be reviewed.

## Contact

[My LinkedIn page](https://www.linkedin.com/in/%C3%B8rjan-berger-80a05889/)

## License

The API used for this is Noroff's

## Acknowledgments

- [Images for style tile and wireframes](https://unsplash.com)
- [Icons](https://react-icons.github.io/react-icons/)
- [Fonts](https://fonts.google.com/)
- [NPM package for Emojis](https://www.npmjs.com/package/unicode-emoji)
- [Mail to solution](https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea)
- [onkeydown to solution](https://reactgo.com/react-trigger-button-click/)
- [useLocalStorage hook](https://usehooks.com/useLocalStorage/)

## My Report as required in Project Exam 2 delivery
Following is the full report for the project exam 2. In the report I will take you through all the stages I went trough these seven weeks to make my Project Exam 2. I will take you through my thought processes, decision making, and struggles. I have broken the main section up in smaller pieces where I will take you trough the planning, design and coding. 
### Planning and Research
#### Planning
I had already started to plan how to do the hotel booking site and got a bit confused when we suddenly had to do a different project. Having to work with a new API that I was unfamiliar with created its own problems down the line as well. But adapting to fast changing environment and new ways of doing things is all a part of what we will do in the job as front-end developers so in that regards it was good practice.
I started with planning the steps I had to take to make the site. Not knowing quite what I needed but generalizing and listing the things I could think of. I made the Kanban board in Trello first and then made the Gantt chart in Clickup with the main parts from the Kanban board. This made the Gantt chart a more overall timeline and Kanban a detailed timeline to work from.
I gave myself some extra time both in the design phase and the Coding phase in case I ran into problems that would slow me down. This was a good thing as I ran into several problems, when working with react in a more comprehensive way than before and working with an API I have no control over.
I have purposely not moved the cards on the Trello board to done or doing, since we are delivering it as a URL and not a screenshot.
#### Research
For research I had a good comprehension on how different social media websites looked like and did not need that much time to study them, but for the API there were a lot of new details to get to know. Through the requirement from the brief, and reading the API documentation, it became clear what pages I would need and what functionality the API was able to give me.

### Design
While designing the page I hit a bit of a wall. I didn’t want to copy the design of the social media websites I know, which includes almost all of them. This made the process slow down as I was always second guessing my design decisions.
I started with making a quick low fidelity prototype that gave me the basics of what I felt I needed of functionality and used this to get some early feedback to see if I was heading down the correct path. 

For the colour scheme I originally had a playful orange colour as my primary colour but running this through WCAG contrast checker I could not get it to work with any colour for the text, so I used a colour that was darker and browner. When I had time in the final week of the project, I got around to finding a brighter, eye-catching and more inviting pink/purple colour.

For the font I did research on what type of font is used on the different social media websites and based on that I found a baseline to go from. It had to be easy to read and inviting, but not be distracting from the content on the page. I feel my choices are good and complement each other nicely.

The Logo and name of the page I decided to not spend too much time on. This is content that would be provided by a client and a graphic designer. But I am happy with the look of the logo and that the name of the site sets the purpose of the website which is reacting and interacting with your fellow students at Noroff.

#### Wireframing
When designing the wireframes, I planned it out based on the research I had done with regards to what pages were needed and what functionality I could expect to be able to deliver based on the API. I made the conscious decision to only have icons in my nav menu. This is based on the user base being young technology students or teachers that would understand the meaning of the icons and have no issue using the site based on it. Through the research of other social media websites, I also saw that this was something they did as well.

The wireframing was relatively straight forward seeing as I had the general idea for the layout. I could have been better at making parts into components to make the job a little faster but am overall happy with the process. I ended up changing some things when I was coding the website, that I think made the site better. Among those things is having a “create post” button not in the nav and locked on the user’s profile page. I felt it was better to have it as a bigger button that was easily accessible and easy to see. There are also some colour and content changes on the “follow” buttons that I felt made them look more inviting and makes it easier to spot if the user is following a profile or not.

Even though it was not part of the brief I added a contact page and an about page as I feel all websites should have this.


#### Prototyping and testing
The prototyping was simple enough, but I did struggle with content that is being toggled through states which will be displayed behind other parts of the site. This is especially noticeable for the edit post buttons. I could not find a solution for this but felt that even though it was a bug, it would not impair the test users too much when it is used with an instructor and having them explain it. This was my experience when testing the medium fidelity prototype with users. 

I also had to add some more pages for following and followers in the coding part as this is not something I had considered when designing the page but was pointed out in the user testing that it should be added. It was too late to add them to the wireframes as I was already a little behind schedule.

I purposefully didn’t add a functionality for adding tags, based on the documentation this was an optional point when adding posts. At the point of making the wireframes and for most of the coding of the website there was also not an easy way to get posts based on tags. Having them be optional and not have default tags in the API would cause chaos because of misspelling and a lot of posts would not have tags.

I originally had a reply icon for the comments but did not have enough time to code this so I removed it from the wireframes. Hopefully I will be able to work more on this in the portfolio 2 course.

### Coding
Coding started well. I was quickly able to set up the react app and start making the components needed. I felt accomplishment and I felt I could see how far I had come when I was planning the code needed and how to implement it. I was able to use my experience with dev tools to solve most of my problems and for the first two weeks of coding I felt like I was cruising along and would be able to implement functionality I hadn’t thought I would be able to make in time for the deadline. 

Then I hit a wall when I wanted to be able to check if a user was following a profile and having the status of the follow button be correct, without using localstorage, so the status would not reset on different devices or browsers. This gave me problems for almost two weeks. After a few days of trying this, I started working on other parts of the website to distract my brain and hopefully it would come to me. But after a while I was stuck again on another problem, and I eventually had to ask in the discord on how to solve the follow button issue and was able to get help from MJ. He gave me a tutorial of how to use the find() method and this gave me a good understanding on how to solve the problem. I had through trial and error a good idea of how to implement it and had the bones of the components ready to go. After being pointed in the correct direction, I used two hours to solve the problem I had been stuck with on and off for two weeks. I know I could have asked for help much earlier, but this process gave me a lot of new knowledge of React and JavaScript and when there is still time for trial and error it’s, in my opinion, the best way of learning.

One other place I was stuck was the reacting with emojis part of the assignment. I noticed that the count for reactions only took into account how many different emojis were used to react to a post, but not the count of each of these. I had to change my design of how the post card for all posts worked. I do not feel it is visually beautiful having that many emojis shown on the postcard, but to be able to show the correct amount of emojis, this was the best way of doing it.
I wanted to be able to toggle an emoji on a post but quickly discovered that this was not part of the functionality of the API. Then I had to find the best way of sending the data of the emoji. 
Seeing all the emojis that were added to the different posts I felt I needed a way to select many emojis, and adding them all through hardcoding each would make the code cluttered and take a lot of time. Therefore I searched for a library that I could install via NPM and add as a React component, but this also had to send the correct data. The first one I tried didn’t send the correct data seeing as it could not be a URL for an image. I found another one that would send the correct data and was able to give the user ability to react with a large selection of emojis. 

Through the coding phase I learnt that the posts and profiles only show the first 100 objects. This was not something that I saw mentioned in the documentation, but it was a question in the forum on discord and a solution to this was added there. 
I had to add buttons so the user could paginate through the posts and profiles. This was not in my opinion implemented in the best way, but it was the only way I could make it work before I reached the deadline for the project. This was some of the last things I was able to implement before sending the page out to user testing.

User testing the page I got feedback that I used to update and change the main colour theme, spacing and some small bugs. There was one user that had a bug where they clicked an existing emoji on a post, and it added to the count of that symbol until there were too many calls to the API server and they got an error. I was not able to replicate this error and could not see a solution for it in time for the deadline

There are still things I would like to implement and fix on the website that I did not have time for or was able to figure out how to do before the deadline. These include:
-	Adding a placeholder image if the image URL gives a CORB error.
-	A message or alert that there are no posts added on a user’s profile, that a post has no comments, that the user is not following anyone or have any followers yet.
-	That a logged in user should be directed to post list and not home. Tried a solution for this but it gave an error when there was no auth.name in localstorage.
-	Add a reply to comment functionality.
-	Maybe add tags, but it still does not feel right to have unless there are default tags.
-	Add a search functionality based on title of post, body of post or author name. This is not easy to do without a change in the API as I could not find a way to get all posts/profiles in one call.
-	I would like to have the pages update with new emojis and following status without the need to refresh the page.


### Conclusion
I am glad I always add more time than I need at the end of the projects when planning them, especially around user testing. There is always more to do, added functionality that is needed or getting stuck on some point in the coding. Having that extra space in the plan really helps with this and makes it possible to deliver on deadline.
I am happy with the look and feel of the page. I feel I have completed the assignment based on the requirements but am also aware there is still more to fix and do. I don’t think there is ever not something that could be fixed on a project and I guess this is one of the key parts of being a front-end developer, there is always more to do.

#### Feedback to Noroff and things I would like to improve
-	I would have liked much more time working with this new Noroff API before getting it thrown at us in our final project, but I appreciate the experience of working in an environment and with tools that is ever changing. 
-	There should be default tags in the API that could be toggled for a post. Similar to discord forum.
-	I wish there were emoji symbols added to the API. Then we could us show those in our projects and they could be toggled to true or false. Having all students that is creating a social media website choose which emojis their projects have and that that everyone have to take those into account on their own website is in my opinion not good practice.



