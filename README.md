![Screenshot](/public/images/acnhTrackingTools.gif)

# Introduction

This is a fullstack version of my other repo [acnhTrackingTools](https://github.com/ChrisThompsonDev/acnhTrackingTools). 

My partner and I love to play Animal Crossing together every morning. Recently we decided to collect all of the songs in the game, only to find that there are over 100! We got tired of running to the house everyday to check our stereos so I made this app to help us keep track of what we have!

Over time, we started finding it difficult to keep track of other things, so now this tool has been upgraded to include Fossils and Art as well. Media Queries and more collections to come! I've only focused on mobile layout so far because that is the only way that we use this.

# Check Out the Live Application!

I am currently testing this app on several different hosting sites since Heroku has announced their plans to drop their free hosting. 

[Heroku](https://acnhtracking.herokuapp.com/)

[Cyclic](https://acnhtracking.cyclic.app/)

[Render](https://acnhtrackingtools.onrender.com/)

---

> Be sure to add that lovely star 😀

---

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, Express, MongoDB



## Optimizations

I have added a lot of features to this over time. It started as simple text and checkboxes. It now has images and nicer formatting.

I originally started by using the Animal Crossing API to create new DOM elements with checkboxes. When checked, the data is kept in local storage. The songs from the newest update were not in the API, so I created a separate factory and manually copied the links from Nookipedia.

Each tab was also a separate webpage. 

I felt that this was not the best approach for progressive rendering and it could be a bit slow. I hard coded the HTML for everything and put everything on the same page. This allows for the site to load instantly.

## Lessons Learned:

Every project is a lesson learned in CSS!

I also became more comfortable with navigating MVC architecture. 

## Future Improvements:

Currently this project is still a WIP.

I plan to add Google Auth as a login option.

This is being built using Mobile First ideology. I will be updating this with media queries for landscape and larger screen sizes.

The CSS needs work on the landing, login and signup pages. 

I plan to build an API with all of the collection information.

Plan to reduce the image sizes for faster loading

Will be replacing the hard coded HTML with more ejs loops using the new API.

Will add other collections, such as clothing, fish, bugs, and more. 

## Other Projects
Also check out other projects of mine like this one! I used the same API for this one:

[Animal Crossing Music Player](https://github.com/ChrisThompsonDev/Animal-Crossing-KK-Slider-Music-Player)



# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file, place it in your config folder, and add the following as a `key: value` pair
  - PORT = 2121 (can be any port example: 3000) 
  - DB_STRING = your database URI
 


