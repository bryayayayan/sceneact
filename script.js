function generateStars() {
    const nightBackground = document.querySelector(".night-background");
    const numberOfStars = 100;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`; 
      star.style.left = `${Math.random() * 100}vw`; 
      nightBackground.appendChild(star);
    }
  }

  window.onload = function() {
    generateStars();
  };

  let logoIndex = 0;
  const logos = [
    "APPLE LOGO.png",
    "IT LOGO.png",
    "TECH LOGO.png"
  ];

  function changeLogo() {
    const logo = document.getElementById("logo");
    logo.classList.remove("fade-in");

    setTimeout(() => {
      logoIndex = (logoIndex + 1) % logos.length;
      logo.src = logos[logoIndex];
      logo.classList.add("fade-in");
    }, 100);
  }

  let fontIndex = 0;
  const fonts = [
    "Arial, sans-serif",
    "'Courier New', Courier, monospace",
    "'Lucida Handwriting', cursive",
    "'Times New Roman', serif",
    "'Comic Sans MS', cursive"
  ];

  function changeFont() {
    const text = document.getElementById("text");
    fontIndex = (fontIndex + 1) % fonts.length;
    text.style.fontFamily = fonts[fontIndex];
  }

  let colorIndex = 0;
  const colors = ["#000000", "#00796b", "#e91e63", "#3f51b5", "#ff5722"];

  function changeTextColor() {
    const text = document.getElementById("text");
    colorIndex = (colorIndex + 1) % colors.length;
    text.style.color = colors[colorIndex];
  }

  function toggleMode() {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    document.querySelector(".day-background").style.display = isDarkMode ? "none" : "block";
    document.querySelector(".night-background").style.display = isDarkMode ? "block" : "none";
  }

  document.querySelector(".day-background").style.display = "block";
  document.querySelector(".night-background").style.display = "none";