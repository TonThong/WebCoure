window.onscroll = () => {
  const speed = document.getElementById("speed");
  speed.style.transform = `translateY(${-(
    document.documentElement.scrollTop - 1200
  )}px)`;
};

//Fake Api

usercomments = [
  {
    name: "Sue Lang",
    time: "49 minutes ago",
    comments: "I’ve actioned all your comments. Let me know what you think!",
  },
  {
    name: "Jackson Brodie",
    time: "just now",
    comments: "The wireframes are ready for review @sarah 🙌🏾",
  },
  {
    name: "Sarah Smith",
    time: "25 minutes ago",
    comments: "Damn you got this over so quick! No further changes from me 🥰",
  },
];

const users = document.querySelectorAll(".collaboration-user");

users.forEach(function (user, index) {
  const comments = document.querySelector(".collaboration-comments");

  user.addEventListener("click", function () {
    console.log(usercomments);
    comments.innerHTML = `
        <div class="collaboration-comments-title">
            <div class="collaboration-comments-name">${usercomments[index].name}</div>
            <div class="collaboration-comments-time">.${usercomments[index].time}</div>
        </div>
        <div class="collaboration-comments-content">${usercomments[index].comments}</div>`;
  });
});

const navbarMobile = document.querySelector(".navbar-mobile");

navbarMobile.addEventListener("click", function () {
  const navbar = document.querySelector(".introduce-navbar-items");
  console.log(navbar);
  navbar.classList.toggle("display-block");
  if (navbar.classList.contains("display-block")) {
    navbar.style.transform = "translateY(0)";
  } else {
  }
});
