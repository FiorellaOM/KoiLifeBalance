
    let menuActive = false;

    function toggleMenu() {
      const menu = document.getElementById("xsMenu");
      if(menuActive == false) {
        menu.style.display = "block";
        menuActive = true;
      } else {
        menu.style.display  = "none";
        menuActive = false;
      }
    }
