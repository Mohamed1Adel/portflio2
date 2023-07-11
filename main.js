const title = document.querySelector(".title");
let typed1 = new Typed(".name", {
  strings: ["Mohamed Adel <br /> Frontend Developer"],
  typeSpeed: 100,
  looped: true,
});

// side menu

const menu = document.querySelector(".menu");

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", (e) => {
  console.log(menu);
  menu.classList.toggle("active");
});

// back to top button
const toTop = document.querySelector(".to-top");

// side prigress
let el = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;

  if (this.scrollY > 0) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
  toTop.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// contact me

const form = document.querySelector(".form");
const sendMsg = document.querySelector(".send-msg");

// get repos

let projectsSec = document.querySelector(".projects-row");

const request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/Mohamed1Adel/repos");
request.send();
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let project = `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="card ">
              <div class="project ">
                <div class="project-name">
                  ${data[i].name}
                </div>
                <div class="project-img">
                  <img src="${data[i].owner.avatar_url}" alt="project photo">
                </div>
                <div class="project-disc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="project-link">
                  <a href=${data[i].svn_url} target="_blank">Look at project</a>
                </div>
              </div>
            </div>
          </div>`;
      projectsSec.innerHTML += project;
    }
  }
};
