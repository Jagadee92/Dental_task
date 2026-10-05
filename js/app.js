"use strict";

/* =========================================================
   COMMON HELPERS
========================================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   DOCUMENT READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initTreatmentTabs();
  initBeforeAfterSliders();
  initMobileMenu();
  initSmoothScroll();
  initRevealAnimations();
  initCounterAnimations();
  initModalSystem();
  initToastSystem();
});


/* =========================================================
   1. TREATMENT TABS
   ---------------------------------------------------------
   HTML expected:

   <button class="treatment-tab active" data-treatment="implant">
      Full Arch All-on-4 Dental Implant
   </button>

   <button class="treatment-tab" data-treatment="aligner">
      Invisible Clear Aligners
   </button>

   <button class="treatment-tab" data-treatment="veneers">
      Porcelain Veneers
   </button>


   <div class="treatment-content active" data-treatment-content="implant">
      ...
   </div>

   <div class="treatment-content" data-treatment-content="aligner">
      ...
   </div>

   <div class="treatment-content" data-treatment-content="veneers">
      ...
   </div>
========================================================= */

function initTreatmentTabs() {
  const tabs = $$(".treatment-tab");
  const contents = $$(".treatment-content");

  if (!tabs.length || !contents.length) {
    return;
  }

  function activateTreatment(treatmentName) {
    /* Remove active from every tab */
    tabs.forEach((tab) => {
      tab.classList.remove("active");

      const tabTreatment =
        tab.dataset.treatment ||
        tab.getAttribute("data-treatment");

      if (tabTreatment === treatmentName) {
        tab.classList.add("active");
      }
    });

    /* Hide every treatment */
    contents.forEach((content) => {
      content.classList.remove("active");

      const contentTreatment =
        content.dataset.treatmentContent ||
        content.getAttribute("data-treatment-content");

      if (contentTreatment === treatmentName) {
        content.classList.add("active");
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const treatmentName =
        tab.dataset.treatment ||
        tab.getAttribute("data-treatment");

      if (!treatmentName) {
        console.warn(
          "This treatment tab does not have data-treatment:",
          tab
        );
        return;
      }

      activateTreatment(treatmentName);
    });
  });

  /* Make sure the first active tab/content is displayed */
  const activeTab = tabs.find((tab) =>
    tab.classList.contains("active")
  );

  if (activeTab) {
    const treatmentName =
      activeTab.dataset.treatment ||
      activeTab.getAttribute("data-treatment");

    if (treatmentName) {
      activateTreatment(treatmentName);
    }
  } else {
    /*
      If no tab is active, activate the first tab.
    */
    const firstTab = tabs[0];

    const treatmentName =
      firstTab.dataset.treatment ||
      firstTab.getAttribute("data-treatment");

    if (treatmentName) {
      activateTreatment(treatmentName);
    }
  }
}


/* =========================================================
   2. BEFORE / AFTER SLIDER
========================================================= */

function initBeforeAfterSliders() {
  const sliders = $$(".ba-wrap");

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const beforeLayer = $(".ba-layer.before", slider);
    const divider = $(".ba-divider", slider);

    if (!beforeLayer || !divider) {
      return;
    }

    let dragging = false;

    function setSliderPosition(clientX) {
      const rect = slider.getBoundingClientRect();

      let position =
        ((clientX - rect.left) / rect.width) * 100;

      /* Keep slider between 0% and 100% */
      position = Math.max(0, Math.min(100, position));

      beforeLayer.style.clipPath =
        `inset(0 ${100 - position}% 0 0)`;

      divider.style.left = `${position}%`;
    }

    /* Mouse */
    divider.addEventListener("mousedown", (event) => {
      event.preventDefault();
      dragging = true;
    });

    document.addEventListener("mousemove", (event) => {
      if (!dragging) {
        return;
      }

      setSliderPosition(event.clientX);
    });

    document.addEventListener("mouseup", () => {
      dragging = false;
    });

    /* Touch */
    divider.addEventListener(
      "touchstart",
      (event) => {
        dragging = true;
        event.preventDefault();
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      (event) => {
        if (!dragging) {
          return;
        }

        if (!event.touches.length) {
          return;
        }

        setSliderPosition(event.touches[0].clientX);
      },
      { passive: false }
    );

    document.addEventListener("touchend", () => {
      dragging = false;
    });

    /* Click anywhere inside slider */
    slider.addEventListener("click", (event) => {
      /*
        Do not move if clicking directly on the divider button.
      */
      if (
        event.target === divider ||
        divider.contains(event.target)
      ) {
        return;
      }

      setSliderPosition(event.clientX);
    });
  });
}


/* =========================================================
   3. MOBILE NAVIGATION
========================================================= */

function initMobileMenu() {
  const menuButton =
    $("#menuBtn") ||
    $(".navbar-toggler");

  const navLinks =
    $("#navLinks") ||
    $(".navbar-collapse");

  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  $$(".nav-link", navLinks).forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}


/* =========================================================
   4. SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#" ||
        targetId.length <= 1
      ) {
        return;
      }

      const target = $(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}


/* =========================================================
   5. SCROLL REVEAL ANIMATION
========================================================= */

function initRevealAnimations() {
  const elements = $$(".reveal");

  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}


/* =========================================================
   6. NUMBER COUNTERS
========================================================= */

function initCounterAnimations() {
  const counters = $$("[data-counter]");

  if (!counters.length) {
    return;
  }

  function animateCounter(element) {
    const target = Number(
      element.dataset.counter || 0
    );

    if (!Number.isFinite(target)) {
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      const value = Math.floor(
        target * eased
      );

      element.textContent =
        value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent =
          target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animateCounter(entry.target);

        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.5,
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}


/* =========================================================
   7. MODAL SYSTEM
========================================================= */

function initModalSystem() {
  const openButtons =
    $$("[data-modal-target]");

  const closeButtons =
    $$("[data-modal-close]");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId =
        button.dataset.modalTarget;

      if (!modalId) {
        return;
      }

      const modal =
        document.getElementById(modalId);

      if (!modal) {
        return;
      }

      openModal(modal);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal =
        button.closest(".modal-shell");

      if (modal) {
        closeModal(modal);
      }
    });
  });

  $$(".modal-shell").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const openedModal =
      $(".modal-shell.show");

    if (openedModal) {
      closeModal(openedModal);
    }
  });
}


function openModal(modal) {
  modal.classList.add("show");

  document.body.style.overflow = "hidden";
}


function closeModal(modal) {
  modal.classList.remove("show");

  document.body.style.overflow = "";
}


/* =========================================================
   8. TOAST SYSTEM
========================================================= */

function initToastSystem() {
  const toast =
    $(".toast-msg");

  if (!toast) {
    return;
  }

  window.showToast = function (message, duration = 2500) {
    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
      window.__toastTimer
    );

    window.__toastTimer =
      setTimeout(() => {
        toast.classList.remove("show");
      }, duration);
  };
}


/* =========================================================
   9. BOOKING BUTTONS
========================================================= */

$$(".book-treatment, .doctor-book, .btn-primary-glow")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const modal =
        $("#bookingModal") ||
        $(".modal-shell");

      if (modal) {
        openModal(modal);
      }
    });
  });


/* =========================================================
   10. PROTOCOL / DEMO BUTTONS
========================================================= */

$$(".protocol-btn, .demo-link")
  .forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof window.showToast === "function") {
        window.showToast(
          "Treatment details will be shown here."
        );
      }
    });
  });


/* =========================================================
   11. CASE TABS
========================================================= */

function initCaseTabs() {
  const tabs = $$(".case-tabs button");
  const cases = $$(".case-content");

  if (!tabs.length || !cases.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target =
        tab.dataset.case;

      tabs.forEach((item) => {
        item.classList.remove("active");
      });

      cases.forEach((item) => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

      const selectedCase =
        document.querySelector(
          `[data-case-content="${target}"]`
        );

      if (selectedCase) {
        selectedCase.classList.add("active");
      }
    });
  });
}

initCaseTabs();


/* =========================================================
   12. FILTER BUTTONS
========================================================= */

function initFilters() {
  const filterButtons =
    $$(".filter-row button");

  const treatmentCards =
    $$(".treatment-card");

  if (
    !filterButtons.length ||
    !treatmentCards.length
  ) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter =
        button.dataset.filter ||
        button.textContent.trim();

      filterButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      treatmentCards.forEach((card) => {
        const category =
          card.dataset.category;

        if (
          filter === "all" ||
          filter === "All Procedures" ||
          filter === category
        ) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

initFilters();


/* =========================================================
   13. EMI CALCULATOR
========================================================= */

function initEMICalculator() {
  const amountInput =
    $("#emiAmount");

  const rateInput =
    $("#emiRate");

  const tenureInput =
    $("#emiTenure");

  const result =
    $("#emiResult");

  if (
    !amountInput ||
    !rateInput ||
    !tenureInput ||
    !result
  ) {
    return;
  }

  function calculateEMI() {
    const principal =
      Number(amountInput.value);

    const annualRate =
      Number(rateInput.value);

    const months =
      Number(tenureInput.value);

    if (
      principal <= 0 ||
      months <= 0
    ) {
      result.textContent = "₹0";
      return;
    }

    const monthlyRate =
      annualRate / 12 / 100;

    let emi;

    if (monthlyRate === 0) {
      emi = principal / months;
    } else {
      emi =
        (principal *
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            months
          )) /
        (Math.pow(
          1 + monthlyRate,
          months
        ) - 1);
    }

    result.textContent =
      `₹${Math.round(emi).toLocaleString()}`;
  }

  amountInput.addEventListener(
    "input",
    calculateEMI
  );

  rateInput.addEventListener(
    "input",
    calculateEMI
  );

  tenureInput.addEventListener(
    "input",
    calculateEMI
  );

  calculateEMI();
}

initEMICalculator();


/* =========================================================
   14. DISABLE BODY SCROLL WHEN MODAL IS OPEN
========================================================= */

function updateBodyModalState() {
  const modal =
    $(".modal-shell.show");

  document.body.style.overflow =
    modal ? "hidden" : "";
}

const modalObserver =
  new MutationObserver(() => {
    updateBodyModalState();
  });

$$(".modal-shell").forEach((modal) => {
  modalObserver.observe(modal, {
    attributes: true,
    attributeFilter: ["class"],
  });
});


/* =========================================================
   15. CONSOLE MESSAGE
========================================================= */

console.log(
  "SmileCare Dental Clinic website JavaScript loaded successfully."
);