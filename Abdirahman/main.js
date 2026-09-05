const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    const whatsappNumber = "252634794375";
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    const mobileLinks = document.querySelectorAll(".mobileLink");

    function setMenuState(isOpen) {
      mobileMenu.classList.toggle("hidden", !isOpen);
      menuIcon.classList.toggle("hidden", isOpen);
      closeIcon.classList.toggle("hidden", !isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    }

    menuButton.addEventListener("click", function () {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(false);
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        setMenuState(false);
      }
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !subject || !message) {
        displayMessage("Please fill in all fields.", "error");
        return;
      }

      const whatsappMessage = `Hello Abdirahman Hussein,

I am contacting you through your portfolio website.

Name: ${name}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      displayMessage(
        "WhatsApp is opening. Please press Send to deliver your message.",
        "success"
      );

      window.open(whatsappURL, "_blank", "noopener,noreferrer");

      contactForm.reset();
    });

    function displayMessage(text, type) {
      formStatus.textContent = text;
      formStatus.classList.remove(
        "hidden",
        "border-green-500/30",
        "bg-green-500/10",
        "text-green-300",
        "border-red-500/30",
        "bg-red-500/10",
        "text-red-300"
      );

      if (type === "success") {
        formStatus.classList.add(
          "border",
          "border-green-500/30",
          "bg-green-500/10",
          "text-green-300"
        );
      } else {
        formStatus.classList.add(
          "border",
          "border-red-500/30",
          "bg-red-500/10",
          "text-red-300"
        );
      }
    }