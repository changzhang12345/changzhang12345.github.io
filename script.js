const header = document.querySelector("[data-header]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const videoLab = document.querySelector("[data-video-lab]");

if (videoLab) {
  const mainVideo = videoLab.querySelector("[data-main-video]");
  const status = videoLab.querySelector("[data-video-status]");
  const controls = [...videoLab.querySelectorAll("[data-video-src]")];

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const nextSource = control.dataset.videoSrc;
      const nextLabel = control.dataset.videoLabel;

      controls.forEach((item) => {
        const isActive = item === control;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      if (nextSource && mainVideo) {
        mainVideo.pause();
        mainVideo.src = nextSource;
        mainVideo.load();
      }

      if (nextLabel && status) status.textContent = nextLabel;
    });
  });
}

document.querySelectorAll("video").forEach((video) => {
  const playbackRate = Number(video.dataset.playbackRate || "1");

  const applyVideoPolicy = () => {
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.playbackRate = playbackRate;
  };

  applyVideoPolicy();
  video.addEventListener("loadedmetadata", applyVideoPolicy);
  video.addEventListener("contextmenu", (event) => event.preventDefault());
  video.addEventListener("volumechange", () => {
    if (!video.muted || video.volume !== 0) {
      video.muted = true;
      video.volume = 0;
    }
  });

  video.addEventListener("play", () => {
    document.querySelectorAll("video").forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.classList.contains("hero-video")) {
        otherVideo.pause();
      }
    });
  });
});
