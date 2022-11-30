# Final Fantasy 14 Character Website
This is a public version of a private project, which was created as a Christmas Present. Originally, the website displayed information about a friend's Final Fantasy 14 character. Instead, this version keeps all the functionality but displays information for one of the main NPCs, Tataru Taru!


**Link to project:** (https://tataru.onrender.com/)

[TataruPartOne.webm](https://user-images.githubusercontent.com/101692334/204751393-7349a015-6414-4ed1-a8f7-ee156c4c9f89.webm)

[TataruPartTwo.webm](https://user-images.githubusercontent.com/101692334/204756225-3703c66e-f651-481b-a779-8cf2ecc244fe.webm)


## How It's Made:





**Tech used:** HTML, CSS, TailwindCss, JavaScript, React, Node.JS, React Router, GIMP. 

I used a mix of Tailwindcss and vanilla CSS to style this website. In addition, I did some photo editing with GIMP. 

For example, I edited the quest template shown on https://tataru.onrender.com/. I removed the button images on the template, placed and sized an image of Tataru Taru to show in the middle of the quest box, and wrote the text. 

React Router made it possible for React to render multiple pages, and I linked the pages to the nav bar links..

I used React to create a highly responsive website. I created components and instructed the virtual DOM regarding how the page should be laid out. 

I used JavaScript to code the decline button. The first time the user clicks it, an image pops up. The user can close the image pop-up by clicking the decline button again.

## Optimizations
Known bugs:

1. Server-side Routing. Although it worked locally, now that its hosted if you bypass the homepage and go directly to "https://tataru.onrender.com/AboutTataru" you'll get a 404 error. This was enlightening for why that happens! https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually I'll probably use hash history later to fix it.
2. Button gradients break on samsung internet

Optimization:
1. Button styling is repeated on two pages. I would eventually like to make it so the styling is imported into these two pages instead of needlessly repeating the code. 
2. The images sometimes load slow, I would like to eventually experiement with lazy loading to improve the user experience. 
3. 
## Lessons Learned:

This was my first project with React and Tailwindcss so learned lots about their syntax and got ample practice with creating components and passing props. I learned you can use Tailwindcss by using className and that you can also use vanilla css, when the styling needs more fine tuning.

I extended the colors in the tailwindcss config and used these colors within the project.

I had struggled some time with centering the pop-up image when the user clicks the decline button, but after some experimentation with positioning and other styling properties, I managed to get it centered where I needed it to be. 

