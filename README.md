### Resume Builder

This simple app allows you to quickly and easily customize your CV or resume.  It uses a simple JSON file to store, your data.  This file is saved to your local storage.

## history
Since I have been applying for many new jobs, I find that each one has a slightly different skill set needed, and so I found myself adjust resumes semi-frequently.  I have also over the years, created many resumes and when it comes time to update one, I cant seem to find it.  

So I created, this website to help facilitate my resume needs.  I was aiming for the following criteria:
1) Easy to use
2) Easy to view
3) Can send out a link to view resume
4) saves data for updates
5) customization of resume

Now, while I admit that it is still a work in progress, and I have not made all of my criteria, I am moving in the right direction.

## How it works
The basic data structure that updates is a JSON file from www.jsonresume.org.  I used their basic structure, adn added and removed some pieces to customize it for my use.  On first load, the website will create a copy of the JSON file in your localStorage which will then update in realtime.  