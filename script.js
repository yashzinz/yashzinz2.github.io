function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Getting all video elements with the class 'autoplay-video'
const videos = document.querySelectorAll(".cooling-vid");

// Setting up the Intersection Observer for each video
videos.forEach((video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the video is fully in view, play it
          video.play();
        } else {
          // If the video is not in view, pause it
          video.pause();
        }
      });
    },
    {
      threshold: 1, // 1 means fully in view
    }
  );

  //observing each video
  observer.observe(video);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".features-flexbox");
  const prevButton = document.querySelector(".left-btn");
  const nextButton = document.querySelector(".right-btn");
  let currentIndex = 0;

  // Function to move the slider to the specified index
  const moveToIndex = (index) => {
    const translateValue = -index * 25 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
  };

  // Event listener for the previous button
  prevButton.addEventListener("click", function () {
    currentIndex = Math.max(0, currentIndex - 1);
    moveToIndex(currentIndex);
  });

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    currentIndex = Math.min(slider.children.length - 1, currentIndex + 1);
    moveToIndex(currentIndex);
  });
});

let scrollTop = document.getElementById("to-top");

window.onscroll = function () {
  scrollfunction();
};
function scrollfunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}
