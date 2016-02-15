var bio = {
  "name": "Maxime St-jean",
  "role": "Web Developer",
  "contacts": {
    "email": "paramaxproduction@gmail.com",
    "twitter": "@BeardedNomad",
    "github": "paramaxproduction",
    "location": "Montreal, Canada",
    "linkedin": "mstjean"
  },
  "welcomeMessage": "Welcome to my interactive resume! My name is Maxime St-jean. I’m a Montreal based freelance Web Developer. Whether you want a modern responsive website built from scratch, from a PSD, hosted on Wordpress or simply an efficient Javascript application for your website, you are at the right place. I am also an IT Consultant that worked on many projects.",
  "skills": [
    "HTML", "CSS", "Bootstrap", "Wordpress", "Javascript", "jQuery", "PHP", "Git", "Sass", "Gulp", "Npm", "Emmet", "SEO", "Linux"
  ],
  "bioPic": "images/profil.jpg"
};

var work = {
  "jobs": [{
    "title": "Web Developer",
    "employer": "Freelance",
    "years": "2015 - present",
    "city": "Montreal",
    "description": "Web Development freelancer using HTML, CSS, Javascript and some PHP. I use Frameworks and CMS like Wordpress, Boostrap, jQuery and Sass. I also use various tools like Git, Gulp, NPM, Emmet and Linux.",
    "url": "http://maximestjean.com/"
  }, {
    "title": "Software QA Analyst",
    "employer": "Société de Transport de Montréal",
    "years": "2014 - 2015",
    "city": "Montreal",
    "description": "Software Analyst for a Windows 7 deployment project at STM. We migrated over 5000 workstations/laptops. My role was doing the QA of 1000 applications in SCCM with the help of Vsphere",
    "url": "http://www.stm.info/"
  }, {
    "title": "IT Technician",
    "employer": "OS4 Techno",
    "years": "2010 - 2014",
    "city": "Montreal",
    "description": "Level 1 and 2 technician with some sysadmin work. I have participated in several migration during my time, including the Windows 7 migration at Aptalis Pharma in St-Hilaire. Official technician for the Office 2010 deployment project at Aptalis Pharma for various sites like St-Hilaire, Houdan (france), Dayton (Ohio), New Jersey, Birmingham (Alabama) and Pessano (Italy). Principal Tech support during the Office365 deployment at Cascades and Groupe Germain Hotels. Remote support and Active Directory management for clients like Groupe Germain Hotels, Vetoquinol, Wabush Mines, Bouclair, Belron and Cooperators. Cellphone support, tape backup management and VPN admin.",
    "url": "http://www.os4techno.com/"
  }, {
    "title": "IT Consultant",
    "employer": "Metafore Inc.",
    "years": "2008 - 2009",
    "city": "Montreal",
    "description": "IT Consultant for various migration projects at La Presse, Astral Media and Airborne Mobile Inc.",
    "url": "http://www.metafore.ca/"
  }]
};

var education = {
  "schools": [{
    "name": "EMICA",
    "certificate": "DEP",
    "attended": "2007",
    "city": "Montreal",
    "url": "http://emica.csdm.ca/"
  }],
  "onlineCourses": [{
    "name": "FreeCodeCamp",
    "certificate": "Web Developer",
    "attended": "2015",
    "city": "Montreal",
    "url": "http://www.freecodecamp.com/"
  }, {
    "name": "Udacity",
    "certificate": "Advanced Javascript syntax, objects, JSON and testing.",
    "attended": "2016",
    "city": "Montreal",
    "url": "https://www.udacity.com/"
  }]
};

var projects = {
  "projects": [{
    "title": "Portfolio",
    "dates": "2016",
    "description": "Portfolio website to showcase my work.",
    "images": ["images/portfolio.jpg"],
    "url": "http://maximestjean.com/"
  }, {
    "title": "Bootstrap fun",
    "dates": "2015",
    "description": "Having fun with Bootstrap Jumbotron.",
    "images": ["images/jumbotron.jpg"],
    "url": "http://paramaxproduction.github.io/bootstrap-jumbotron-fun/"
  }, {
    "title": "Zombie Newsite",
    "dates": "2015",
    "description": "Zombie newsite made with Bootstrap grid system.",
    "images": ["images/zombie.jpg"],
    "url": "http://paramaxproduction.github.io/bootstrap-grid-fun/"
  }, {
    "title": "Star Wars bio's",
    "dates": "2015",
    "description": "Star Wars character's bio made with Bootstrap and jQuery.",
    "images": ["images/starwars.jpg"],
    "url": "http://paramaxproduction.github.io/star-wars-project/"
  }]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.linkedin));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

for (i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
}

function displayWork() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].years);
    $(".work-entry:last").append(formattedDate);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

projects.display = function() {
  if (projects.projects.length > 0) {
    for (i in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for (img in projects.projects[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
        $(".project-entry:last").append(formattedProjectImage);
      }


    }
  }
}

projects.display();

education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    for (i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].certificate);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].attended);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
    }

    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (i in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].certificate).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].attended);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }

  }
}

education.display();

$("#mapDiv").append(googleMap);
