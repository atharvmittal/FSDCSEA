const startBtn = document.getElementById("startBtn");
      const inputContainer = document.getElementById("inputContainer");
      const clickMeBtn = document.getElementById("clickMeBtn");
      const bulbContainer = document.getElementById("bulbContainer");

      startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        inputContainer.style.display = "block";
      });

      clickMeBtn.addEventListener("click", () => {
        const bulbCount = document.getElementById("bulbCountInput").value;
        bulbContainer.innerHTML = "";

        for (let i = 0; i < bulbCount; i++) {
          const bulbWrapper = document.createElement("div");
          bulbWrapper.classList.add("bulb-wrapper");
          const bulb = document.createElement("img");
          bulb.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
          bulb.classList.add("bulb");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
              bulb.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
            } else {
              bulb.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
            }
          });
          bulbWrapper.appendChild(bulb);
          bulbWrapper.appendChild(checkbox);
          bulbContainer.appendChild(bulbWrapper);
        }
      });