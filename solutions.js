// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.

document.getElementsByTagName('nav')[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.

let sideBar = document.getElementById('sidebar-left');

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.

document.getElementsByClassName('pages')[0];

document.getElementsByClassName('groups')[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".

sideBar = document.getElementById('sidebar-left').getElementsByTagName('h5')[0];
sideBar.innerHTML = "Least Favs"

// Exercise 5): Find the first of the ads in the sidebar and hide it.

let adSlot1 = document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0]
adSlot1.style.visibility = 'hidden';

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.

let adSlot1 = document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0]
adSlot1.style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.


let adSlot1 = document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0]
adSlot1.setAttribute("http://placebear.com/200/300")

document.getElementsByTagName('textarea')[0].placeholder = "whats good, homie?!"


// Exercise 8): Find Sam's post and change its text to something incredible.

document.getElementsByClassName('media-body')[4].getElementsByTagName('p')[0].innerText = "My javascript skills are incredible"


// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.

let firstPost = document.getElementsByClassName('inline-list post-actions')[0];
let like = firstPost.getElementsByTagName('li')[0];
like.className = like.className + `.post-liked`


let favorites = document.getElementsByClassName('favorites')[0];
let eventsLink = favorites.getElementsByTagName('li')[2];
eventsLink.className = eventsLink.className + ' active'

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
