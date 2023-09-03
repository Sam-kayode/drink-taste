/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    images: [
      "/assets/img/pic1.png",
      "/assets/img/pic1.png",
      "/assets/img/pic1.png",
    ],
    services: [
      {
        src: "/assets/img/pic1.png",
        title: "Cocktail",
        description:
          "We offer a well prepared, neat and sweet cocktail drinks. Most commonly, cocktails are either a single spirit or a combination of spirits, mixed with other ingredients such as juices, flavored syrups, tonic water, shrubs, and bitters. Cocktails vary widely across regions of the world",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Mocktail",
        description:
          "Mocktail is almost the same thing like cocktail, they just have a little difference.  Mocktail is usually iced drink made with any of various ingredients (such as juice, herbs, and soda water) but without alcohol : a nonalcoholic cocktail",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Drinks supply",
        description:
          "Our services Include; supply of drinks, drinks cooling, waiters and cocktails assorted wine, Cooling chests, vans and uniformed waiters. Outdoor drinks icing with refigerated truck and haulage. We Supply and serve all Categories of Drinks, including chapman, ice cream and other cocktails.",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Bar & drinks management ",
        description:
          "Drinks & Bar management, we specialize in organizing events that revolve around the serving and consumption of drinks, such as beer festivals, wine tastings, and cocktail parties.  typically we offer a range of services to help plan and execute events",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Venue Selection",
        description:
          " Identifying the best location for the event based on the type of drinks being served and the expected attendance.",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Drinks selection and procurement",
        description:
          "Curating a selection of drinks for the event, including sourcing and purchasing the necessary quantities.",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Staffing",
        description:
          "we have professional staff that can serve drinks and assist with the event, including bartenders, servers, and other personnel.",
      },
      {
        src: "/assets/img/pic1.png",
        title: "Marketing and promotion",
        description:
          "Promoting the event through social media, email marketing, and other channels to attract attendees.",
      },
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
