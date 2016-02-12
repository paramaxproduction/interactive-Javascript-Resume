var name = "Maxime St-jean";
var role = "Web Developer";
var bio = {
  "name": "Maxime St-jean",
  "role": "Web Developer",
  "contacts": {
    "email": "paramaxproduction@gmail.com",
    "twitter": "@BeardedNomad",
    "github": "paramaxproduction",
    "location": "Montreal"
  },
  "welcome message": "Welcome to my interactive resume!",
  "skills": [
    "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Sass", "Git", "Wordpress", "Gulp", "Npm", "Emmet", "SEO", "Linux"
  ],
  "bioPic": "images/profil.jpg"
};
var work = {
  "position": "Web Developer",
  "employer": "Freelance",
  "years": 1,
  "city": "Montreal"
};
var education = {
  "school": "EMICA",
  "attended": "2007-2008",
  "city": "Montreal"
};


$("#main").append(work.position);
$("#main").append(education.school);






/*var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedEmail = HTMLemail.replace("%data", bio.contacts.email);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(formattedContact);
$("#main").append(formattedEmail);*/
