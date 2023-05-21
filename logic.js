$(document).ready(function () {
  var images = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
    "/images/home5.jpg",
    "/images/home6.jpg",
  ];
  var text = [
    "IEEE First event in suez university",
    "crash courses sessions in university",
    "The 1st in seaperch compition",
  ];
  var currentIndex = 0;
  var eventDiv = $(".event");
  var prevLink = $("#prev");
  var nextLink = $("#next");
  var fadeInOut = 400;
  // Set initial background image
  eventDiv.css("background-image", "url(" + images[currentIndex] + ")");

  // Bind click events to links
  prevLink.click(function (e) {
    e.preventDefault();
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    eventDiv.fadeOut(fadeInOut, function () {
      eventDiv.css("background-image", "url(" + images[currentIndex] + ")");
      eventDiv.fadeIn(fadeInOut);
    });
  });

  nextLink.click(function (e) {
    e.preventDefault();
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    eventDiv.fadeOut(fadeInOut, function () {
      eventDiv.css("background-image", "url(" + images[currentIndex] + ")");
      eventDiv.fadeIn(fadeInOut);
    });
  });
});

// -------------------------------------------------------------

// const home = document.querySelector(".home_page");
// const communities = document.querySelector(".communities_page");
// const about = document.querySelector(".about_page");
// const contact = document.querySelector(".contact_page");

// const link_1 = document.querySelector(".link_home");
// const link_2 = document.querySelector(".link_communities");
// const link_3 = document.querySelector(".link_about");
// const link_4 = document.querySelector(".link_contact");

// link_1.addEventListener("click", () => {
//   home.style.display = "block";
//   communities.style.display = "none";
//   about.style.display = "none";
//   contact.style.display = "none";

// });

// link_2.addEventListener("click", () => {
//   home.style.display = "none";
//   communities.style.display = "block";
//   about.style.display = "none";
//   contact.style.display = "none";

// });

// link_3.addEventListener("click", () => {
//   home.style.display = "none";
//   communities.style.display = "none";
//   about.style.display = "block";
//   contact.style.display = "none";

// });

// link_4.addEventListener("click", () => {
//   about.style.display = "none";
//   home.style.display = "none";
//   communities.style.display = "none";
//   contact.style.display = "block";
// });

// ---------------------------------------

// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = link.getAttribute("href");

    // Navigate to the appropriate page
    window.location.href = href;
  });
});
// -----------------------------------------------

const vvDivs = document.querySelectorAll(".vv");
const infoCommH3 = document.querySelector(".info-comm h3");
const infoCommLis = document.querySelectorAll(".info-comm li");

vvDivs.forEach((vvDiv) => {
  vvDiv.addEventListener("click", () => {
    const comTitle = vvDiv.nextElementSibling.textContent;
    const comInfo = getInfoForCom(comTitle);

    infoCommH3.textContent = comTitle + ":";
    infoCommLis.forEach((li, i) => {
      li.textContent = comInfo[i];
    });
  });
});
function getInfoForCom(title) {
  switch (title) {
    case "Multimedia":
      return [
        "Designing and creating multimedia content such as graphics, video, and audio.",
        "Working with clients to understand their needs and develop customized multimedia solutions.",
        "Collaborating with other team members such as writers, editors, and developers to create cohesive multimedia projects.",
        "Keeping up-to-date with the latest trends and technologies in multimedia design and production.",
        "Managing multimedia projects from conception to completion, including budgeting and scheduling.",
      ];
    case "Operation":
      return [
        "Overseeing day-to-day operations of the organization, including financial management, human resources, and IT.",
        "Developing and implementing policies and procedures to ensure the organization runs smoothly and efficiently.",
        "Monitoring and evaluating the organization's performance and making adjustments as needed.",
        "Managing relationships with stakeholders such as customers, vendors, and government agencies.",
        "Leading and motivating teams to achieve organizational goals and objectives.",
      ];
    case "Computer":
      return [
        "Computers are an integral part of modern education",
        "Facilitate research and provide access to up-to-date information",
        "Enable collaboration among students and teachers",
        "Computers offer multimedia tools that enhance presentation skills",
        "Provide easy access to online learning resources",
      ];
    case "Human Resource":
      return [
        "HR plays a crucial role in organizing student activities and events.",
        "Provides support to student leaders by offering guidance on organizational.",
        "Responsible for overseeing the safety and well-being of students during activities.",
        "Manages the recruitment, selection, and training of student volunteers and leaders for various activities.",
        "Facilitates communication between students, faculty, and administration to ensure that student activities.",
      ];
  }
}
// -------------------------------------------------

const comDivs = document.querySelectorAll(".com");
comDivs.forEach((comDiv) => {
  comDiv.addEventListener("click", () => {
    // Remove "red" class from all "vv" divs
    const vvDivs = document.querySelectorAll(".vv");
    vvDivs.forEach((vvDiv) => {
      vvDiv.classList.remove("red");
    });

    // Add "red" class to corresponding "vv" div
    const vvDiv = comDiv.querySelector(".vv");
    vvDiv.classList.add("red");
  });
});

// ---------------------------------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxG-s3poyJ72gmkEKZunCrdq03lKJBG-Jv5v-2CuF6Q_hpg_JPhpNJCeGqDdGVND9wT/exec";

const form = document.querySelector(".sheetform");
const submitButton = document.querySelector(".submit");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});
