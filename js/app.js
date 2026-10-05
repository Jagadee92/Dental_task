;(() => {
  "use strict"

  /* =========================================================
     1. FORCE PAGE TO START FROM TOP ON REFRESH
  ========================================================= */

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"
  }

  function scrollPageToTop() {
    /*
      If URL contains a section hash such as #treatments,
      allow the browser to go to that section.
      Otherwise always start from the top.
    */
    if (!window.location.hash) {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

  window.addEventListener("pageshow", () => {
    if (!window.location.hash) {
      setTimeout(() => {
        scrollPageToTop()
      }, 50)

      setTimeout(() => {
        scrollPageToTop()
      }, 300)
    }
  })

  window.addEventListener("load", () => {
    if (!window.location.hash) {
      setTimeout(() => {
        scrollPageToTop()
      }, 100)

      setTimeout(() => {
        scrollPageToTop()
      }, 500)
    }
  })

  /* =========================================================
     2. COMMON HELPERS
  ========================================================= */

  const $ = (s, r = document) => r.querySelector(s)

  const $$ = (s, r = document) => [...r.querySelectorAll(s)]

  /* =========================================================
     3. TREATMENT DATA
  ========================================================= */

  const T = [
    [
      "implant-single",
      "Single & Full Mouth Dental Implants",
      "Implants & Surgery",
      "Permanent titanium tooth replacement.",
      "60 mins",
      16999,
      1499,
      "Most Popular",
      "Implantologist",
      [
        "Digital 3D Bone Scan",
        "Painless Fixture Placement",
        "Zirconia Crown Placement",
      ],
    ],

    [
      "clear-aligners",
      "Invisible Aligners & Clear Braces",
      "Cosmetic & Aligners",
      "Zero-metal correction with a 3D smile scan.",
      "6-12 Months",
      44999,
      3499,
      "Zero Metal",
      "Orthodontist",
      ["3D Virtual Smile Plan", "Custom Tray Delivery", "Progress Reviews"],
    ],

    [
      "rct-laser",
      "Rotary Painless Root Canal (Single Sitting)",
      "Root Canal & Crowns",
      "Laser-assisted computerized rotary endodontics.",
      "45 mins",
      3499,
      null,
      "100% Painless",
      "Endodontist",
      ["Anaesthetic & Isolation", "Microscopic Canal Cleaning", "Crown Seal"],
    ],

    [
      "laser-whitening",
      "Laser Teeth Whitening & Polishing",
      "Cosmetic & Aligners",
      "Up to 8 shades brighter in one session.",
      "45 mins",
      4999,
      null,
      "Instant Glow",
      "Cosmetic Dentist",
      ["Enamel Inspection", "Gum Barrier", "Laser Activation"],
    ],

    [
      "veneers",
      "Porcelain Veneers & Smile Makeovers",
      "Cosmetic & Aligners",
      "Custom ceramic smile design and gap closure.",
      "2 sittings",
      12999,
      1199,
      "Smile Design",
      "Cosmetic Dentist",
      ["Digital Smile Design", "Trial Smile", "Ceramic Bonding"],
    ],

    [
      "wisdom",
      "Wisdom Tooth Microsurgery",
      "Implants & Surgery",
      "Painless extraction with sedation.",
      "45-60 mins",
      5999,
      null,
      "Sedation",
      "Oral Surgeon",
      ["3D Imaging", "Sedation & Guided Access", "Recovery Review"],
    ],

    [
      "kids",
      "Kids Pediatric Dentistry",
      "Pediatric (Kids)",
      "Fluoride therapy, cavity prevention and gentle care.",
      "30 mins",
      2499,
      null,
      "Gentle Care",
      "Pedodontist",
      ["Child-Friendly Exam", "Preventive Care", "Home Care Plan"],
    ],

    [
      "gum-laser",
      "Periodontal Gum Laser Therapy",
      "Root Canal & Crowns",
      "Deep cleaning and laser support for bleeding gums.",
      "45 mins",
      3999,
      null,
      "Laser Care",
      "Periodontist",
      ["Gum Assessment", "Deep Cleaning", "Laser Therapy & Review"],
    ],
  ]

  /* =========================================================
     4. DOCTOR DATA
  ========================================================= */

  const D = [
    [
      "doc-1",
      "Dr. Arvind Swaminathan, MDS",
      "Chief Implantologist & Maxillofacial Surgeon",
      "14 yrs exp",
      "MDS - Oral & Maxillofacial Surgery (AIIMS)",
      "4.9",
      "380",
      ["Mon", "Tue", "Thu", "Fri", "Sat"],
      "2,800+ implant surgeries",
      "Available Today @ 5:00 PM",
    ],

    [
      "doc-2",
      "Dr. Sneha Reddy, MDS",
      "Aesthetic Dentist & Invisible Aligner Specialist",
      "10 yrs exp",
      "MDS - Orthodontics & Dentofacial Orthopedics",
      "4.95",
      "420",
      ["Tue", "Wed", "Fri", "Sat"],
      "1,400+ smile cases",
      "Available Today @ 4:30 PM",
    ],

    [
      "doc-3",
      "Dr. Vikram Varma, MDS",
      "Endodontist & Microscopic Root Canal Specialist",
      "9 yrs exp",
      "MDS - Conservative Dentistry & Endodontics",
      "4.9",
      "310",
      ["Mon", "Wed", "Fri"],
      "1,900+ RCT cases",
      "Available Today @ 6:00 PM",
    ],

    [
      "doc-4",
      "Dr. Kavitha Nair, BDS",
      "Child & Preventative Dental Specialist",
      "8 yrs exp",
      "BDS, Fellowship in Pedodontics",
      "4.9",
      "265",
      ["Mon", "Tue", "Thu", "Sat"],
      "3,200+ child visits",
      "Available Today @ 5:00 PM",
    ],
  ]

  /* =========================================================
     5. REVIEW DATA
  ========================================================= */

  const S = [
    [
      "Priya Reddy",
      "Oct 2026",
      "Dr. Arvind",
      "The team explained every implant stage clearly.",
      "5",
    ],

    [
      "Arjun Kumar",
      "Sep 2026",
      "Dr. Vikram",
      "The root canal experience was comfortable and organised.",
      "5",
    ],

    [
      "Sneha Patel",
      "Sep 2026",
      "Dr. Sneha",
      "A welcoming aligner consultation with clear pricing.",
      "5",
    ],

    [
      "Vikram Rao",
      "Aug 2026",
      "Dr. Arvind",
      "Clean clinic, friendly staff and excellent consultation.",
      "5",
    ],

    [
      "Meera Sharma",
      "Aug 2026",
      "Dr. Kavitha",
      "My child was comfortable throughout the appointment.",
      "5",
    ],

    [
      "Rahul Varma",
      "Jul 2026",
      "Dr. Sneha",
      "The smile design explanation made the decision easy.",
      "5",
    ],
  ]

  /* =========================================================
     6. FAQ DATA
  ========================================================= */

  const F = [
    [
      "Is the root canal procedure completely painless?",
      "Modern local anaesthesia, rotary instruments and careful isolation are designed to make treatment comfortable.",
    ],

    [
      "How long do dental implants last?",
      "With proper planning, hygiene and maintenance, implants can be long-lasting.",
    ],

    [
      "What is the difference between traditional braces and clear aligners?",
      "Braces use fixed brackets and wires; aligners use a series of removable transparent trays.",
    ],

    [
      "Can I pay for dental treatment in monthly installments (EMI)?",
      "This prototype includes an EMI calculator; actual financing depends on the provider.",
    ],

    [
      "What sterilization protocols do you follow between patients?",
      "The prototype highlights 100% autoclave sterilisation and bio-waste management compliance.",
    ],

    [
      "Can I reschedule or cancel my booked slot?",
      "Contact the clinic before the appointment so the team can update or release the slot.",
    ],
  ]

  /* =========================================================
     7. BOOKING SLOTS
  ========================================================= */

  const slots = {
    morning: [
      ["09:30 AM", "a"],
      ["10:15 AM", "a"],
      ["11:00 AM", "b"],
      ["11:45 AM", "f"],
      ["12:30 PM", "a"],
    ],

    evening: [
      ["04:30 PM", "b"],
      ["05:15 PM", "a"],
      ["06:00 PM", "a"],
      ["06:45 PM", "f"],
      ["07:30 PM", "a"],
      ["08:00 PM", "a"],
    ],
  }

  /* =========================================================
     8. BOOKING STATE
  ========================================================= */

  let B = {
    step: 1,
    t: null,
    d: null,
    date: null,
    shift: "morning",
    slot: null,
  }

  /* =========================================================
     9. ESCAPE HTML
  ========================================================= */

  const esc = (x) =>
    String(x).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[c],
    )

  /* =========================================================
     10. MODALS
  ========================================================= */

  const modal = (id) => {
    const el = $("#" + id)

    if (el) {
      el.classList.add("show")
      el.setAttribute("aria-hidden", "false")
    }
  }

  const close = (id) => {
    const el = $("#" + id)

    if (el) {
      el.classList.remove("show")
      el.setAttribute("aria-hidden", "true")
    }

    document.body.style.overflow = ""
  }

  function open(id) {
    modal(id)
    document.body.style.overflow = "hidden"
  }

  /* =========================================================
     11. TREATMENT CARDS
  ========================================================= */

  function treatmentCards(filter = "All Procedures") {
    const grid = $("#treatmentGrid")

    if (!grid) return

    const list =
      filter === "All Procedures" ? T : T.filter((x) => x[2] === filter)

    grid.innerHTML = list
      .map(
        (x) => `
          <div class="col-md-6 col-xl-3">
            <article class="treatment-card reveal visible">

              <div class="treatment-head">
                <span class="category-badge">${x[2]}</span>
                <span class="duration">${x[4]}</span>
              </div>

              <h3>${x[1]}</h3>

              <p>${x[3]}</p>

              <div class="price">
                From ₹${x[5].toLocaleString("en-IN")}
              </div>

              <div class="emi-line">
                ${
                  x[6]
                    ? "EMI from ₹" + x[6].toLocaleString("en-IN") + "/mo"
                    : "Transparent one-time estimate"
                }
              </div>

              <div class="card-actions">
                <button
                  class="protocol-btn"
                  data-protocol="${x[0]}"
                >
                  View Protocol
                </button>

                <button
                  class="book-treatment"
                  data-book="${x[0]}"
                >
                  Book Slot
                </button>
              </div>

            </article>
          </div>
        `,
      )
      .join("")
  }

  /* =========================================================
     12. DATE FUNCTIONS
  ========================================================= */

  function dates() {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date()

      d.setHours(0, 0, 0, 0)
      d.setDate(d.getDate() + i)

      return d
    })
  }

  function dateText(d, i) {
    if (i === 0) return "Today"

    if (i === 1) return "Tomorrow"

    return (
      d.toLocaleDateString("en-IN", {
        weekday: "short",
      }) +
      " " +
      d.getDate()
    )
  }

  /* =========================================================
     13. BOOKING VIEW
  ========================================================= */

  function bookingView() {
    const c = $("#bookingContent")

    if (!c) return

    let h = ""
    let body = ""

    if (B.step === 1) {
      h = "Select your treatment"

      body = `
        <div class="choice-grid">

          ${T.map(
            (x) => `
              <button
                class="choice-card ${B.t === x[0] ? "selected" : ""}"
                data-t="${x[0]}"
              >
                <strong>${x[1]}</strong>
                <small>
                  ${x[4]} • From ₹${x[5].toLocaleString("en-IN")}
                </small>
              </button>
            `,
          ).join("")}

        </div>
      `
    } else if (B.step === 2) {
      h = "Choose your specialist"

      body = `
        <div class="choice-grid">

          <button
            class="choice-card ${B.d === "fastest" ? "selected" : ""}"
            data-d="fastest"
          >
            <strong>
              ⚡ First Available Specialist (Fastest)
            </strong>

            <small>
              Earliest suitable clinician
            </small>
          </button>

          ${D.map(
            (x) => `
              <button
                class="choice-card ${B.d === x[0] ? "selected" : ""}"
                data-d="${x[0]}"
              >
                <strong>${x[1]}</strong>
                <small>${x[2]}</small>
              </button>
            `,
          ).join("")}

        </div>
      `
    } else if (B.step === 3) {
      const ds = dates()

      body = `
        <div class="date-row">

          ${ds
            .map(
              (d, i) => `
                <button
                  class="date-pill ${
                    B.date === d.toISOString().slice(0, 10) ? "active" : ""
                  }"
                  data-date="${d.toISOString().slice(0, 10)}"
                >
                  ${dateText(d, i)}

                  <small>
                    ${d.toLocaleDateString("en-IN", {
                      month: "short",
                    })}
                  </small>
                </button>
              `,
            )
            .join("")}

        </div>

        <div class="shift-row">

          <button
            class="${B.shift === "morning" ? "active" : ""}"
            data-shift="morning"
          >
            ☀ Morning 9:00-1:00
          </button>

          <button
            class="${B.shift === "evening" ? "active" : ""}"
            data-shift="evening"
          >
            ◐ Evening 4:30-8:30
          </button>

        </div>

        <div class="slot-row">

          ${slots[B.shift]
            .map(
              (s) => `
                <button
                  class="
                    slot-chip
                    ${s[1] === "b" ? "booked" : ""}
                    ${s[1] === "f" ? "fast" : ""}
                    ${B.slot === s[0] ? "selected" : ""}
                  "
                  ${s[1] === "b" ? "disabled" : ""}
                  data-slot="${s[0]}"
                >
                  ${s[0]}

                  ${s[1] === "f" ? " • 1 left" : ""}

                  ${B.slot === s[0] ? " ✓" : ""}
                </button>
              `,
            )
            .join("")}

        </div>
      `
    } else {
      body = `
        <form
          id="patientForm"
          class="form-grid"
        >

          <label>
            Full Name *
            <input
              name="name"
              required
            >
          </label>

          <label>
            WhatsApp Mobile Number *
            <input
              name="phone"
              required
            >
          </label>

          <label>
            Age *
            <input
              name="age"
              type="number"
              required
              min="1"
              max="120"
            >
          </label>

          <label>
            Gender *

            <select name="gender" required>
              <option value="">
                Select
              </option>

              <option>
                Female
              </option>

              <option>
                Male
              </option>

              <option>
                Other
              </option>
            </select>
          </label>

          <label>
            Consultation Type *

            <select name="type" required>
              <option value="">
                Select
              </option>

              <option>
                In-Clinic Consultation
              </option>

              <option>
                Emergency Toothache
              </option>
            </select>
          </label>

          <label class="full">
            Chief Complaint

            <textarea
              name="complaint"
              rows="3"
            ></textarea>
          </label>

          <label class="full">

            <input
              name="wa"
              type="checkbox"
              checked
            >

            Receive instant appointment confirmation
            & reminders on WhatsApp

          </label>

          <div class="wizard-actions full">

            <button
              type="button"
              class="btn btn-outline-teal"
              data-back
            >
              ← Back
            </button>

            <button
              class="btn btn-primary-glow"
            >
              Confirm Appointment
            </button>

          </div>

        </form>
      `
    }

    c.innerHTML = `
      <span class="eyebrow">
        STEP ${B.step} OF 4
      </span>

      <h2>${h}</h2>

      ${
        B.step === 1
          ? "<p>Visual treatment cards with duration and starting price.</p>"
          : ""
      }

      ${body}

      ${
        B.step < 4
          ? `
            <div class="wizard-actions">

              ${
                B.step > 1
                  ? `
                    <button
                      class="btn btn-outline-teal"
                      data-back
                    >
                      ← Back
                    </button>
                  `
                  : "<span></span>"
              }

              <button
                class="btn btn-primary-glow"
                data-next
                ${
                  (B.step === 1 && !B.t) ||
                  (B.step === 2 && !B.d) ||
                  (B.step === 3 && (!B.date || !B.slot))
                    ? "disabled"
                    : ""
                }
              >
                Continue →
              </button>

            </div>
          `
          : ""
      }
    `
  }

  /* =========================================================
     14. CONFIRM APPOINTMENT
  ========================================================= */

  function confirm(p, t, d) {
    $("#bookingContent").innerHTML = `
      <div class="loader">

        <div class="loader-ring"></div>

        <h3>
          Securing your appointment slot...
        </h3>

        <p>
          0.8 second medical loader
        </p>

      </div>
    `

    setTimeout(() => {
      $("#bookingContent").innerHTML = `
        <div class="confirm-card">

          <span class="eyebrow">
            APPOINTMENT CONFIRMED
          </span>

          <h2>
            Your appointment is secured.
          </h2>

          <div class="token-big">
            ${p.token}
          </div>

          <div class="confirm-details">

            <div>
              <small>Patient</small>
              <strong>${esc(p.name)}</strong>
            </div>

            <div>
              <small>Treatment</small>
              <strong>${esc(t[1])}</strong>
            </div>

            <div>
              <small>Doctor</small>
              <strong>${esc(d[1])}</strong>
            </div>

            <div>
              <small>Date & Time</small>
              <strong>
                ${p.date} • ${p.slot}
              </strong>
            </div>

          </div>

          <div class="calendar-actions">

            <button
              class="btn btn-primary-glow"
              id="gcal"
            >
              Google Calendar
            </button>

            <button
              class="btn btn-outline-teal"
              id="ical"
            >
              Apple Calendar
            </button>

            <button
              class="btn btn-outline-teal"
              id="pslip"
            >
              Download PDF Slip
            </button>

          </div>

          <button
            class="btn btn-link"
            data-close-booking
          >
            Close
          </button>

        </div>
      `

      setTimeout(() => {
        const w = $("#whatsappToast")

        if (!w) return

        $("#waMessage").textContent =
          `Hello ${p.name}! Your appointment at Apex Dental Studio is confirmed. Token ${p.token}. Doctor: ${d[1]}. Date: ${p.date} at ${p.slot}. Tap for Google Maps directions.`

        w.classList.add("show")
      }, 1200)

      $("#gcal").onclick = () => gcal(p, t, d)

      $("#ical").onclick = () => ical(p, t, d)

      $("#pslip").onclick = () => pdf(p, t, d)
    }, 800)
  }

  /* =========================================================
     15. GOOGLE CALENDAR
  ========================================================= */

  function gcal(p, t, d) {
    const st = p.date.replaceAll("-", "") + "T" + to24(p.slot) + "00"

    const u =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent("Apex Dental " + p.token)}` +
      `&dates=${st}/${st}` +
      `&details=${encodeURIComponent(t[1] + " with " + d[1])}` +
      `&location=${encodeURIComponent(
        "Plot 18, Jubilee Hills Road No. 36, Hyderabad",
      )}`

    window.open(u, "_blank")
  }

  /* =========================================================
     16. TIME CONVERSION
  ========================================================= */

  function to24(t, add = 0) {
    const m = t.match(/(\d+):(\d+)\s*(AM|PM)/i)

    if (!m) return "0000"

    let h = +m[1]
    let n = +m[2]

    if (m[3].toUpperCase() === "PM" && h < 12) {
      h += 12
    }

    if (m[3].toUpperCase() === "AM" && h === 12) {
      h = 0
    }

    n += add

    h += Math.floor(n / 60)

    n %= 60

    return String(h).padStart(2, "0") + String(n).padStart(2, "0")
  }

  /* =========================================================
     17. DOWNLOAD FUNCTION
  ========================================================= */

  function dl(data, name, type) {
    const a = document.createElement("a")

    a.href = URL.createObjectURL(new Blob([data], { type }))

    a.download = name

    a.click()

    setTimeout(() => {
      URL.revokeObjectURL(a.href)
    }, 1000)
  }

  /* =========================================================
     18. APPLE CALENDAR
  ========================================================= */

  function ical(p, t, d) {
    const s = p.date.replaceAll("-", "") + "T" + to24(p.slot) + "00"

    dl(
      `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Apex Dental//EN
BEGIN:VEVENT
UID:${Date.now()}@apex
DTSTART:${s}
SUMMARY:Apex Dental ${p.token}
DESCRIPTION:${t[1]} with ${d[1]}
END:VEVENT
END:VCALENDAR`,
      "apex-dental.ics",
      "text/calendar",
    )
  }

  /* =========================================================
     19. PDF APPOINTMENT SLIP
  ========================================================= */

  function pdf(p, t, d) {
    const lines = [
      "APEX DENTAL & IMPLANT STUDIO",
      "Appointment Confirmation",
      "Token: " + p.token,
      "Patient: " + p.name,
      "Treatment: " + t[1],
      "Doctor: " + d[1],
      "Date: " + p.date,
      "Time: " + p.slot,
      "Type: " + p.type,
      "Plot 18, Jubilee Hills Road No. 36, Hyderabad",
      "Phone: +91 98480 22338",
    ]

    const stream =
      "BT /F1 16 Tf 50 800 Td " +
      lines
        .map((x) => `(${x.replace(/([\\()])/g, "\\$1")}) Tj 0 -25 Td`)
        .join(" ") +
      " ET"

    const objs = [
      "1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj",

      "2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj",

      "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>endobj",

      "4 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj",

      `5 0 obj<< /Length ${stream.length} >>stream
${stream}
endstream
endobj`,
    ]

    let out = "%PDF-1.4\n"

    const off = [0]

    objs.forEach((o) => {
      off.push(out.length)
      out += o + "\n"
    })

    const x = out.length

    out +=
      `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` +
      off
        .slice(1)
        .map((v) => String(v).padStart(10, "0") + " 00000 n \n")
        .join("") +
      `trailer<< /Size ${
        objs.length + 1
      } /Root 1 0 R >>\nstartxref\n${x}\n%%EOF`

    dl(out, "apex-dental-appointment-slip.pdf", "application/pdf")
  }

  /* =========================================================
     20. INITIALIZE PAGE
  ========================================================= */

  function init() {
    /* -------------------------------------------------------
       Safety: start from top after dynamic content loads
    ------------------------------------------------------- */

    if (!window.location.hash) {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 50)

      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 300)
    }

    /* -------------------------------------------------------
       Treatment Filters
    ------------------------------------------------------- */

    const f = $("#treatmentFilters")

    if (f) {
      f.innerHTML = [
        "All Procedures (8)",
        "Implants & Surgery",
        "Cosmetic & Aligners",
        "Root Canal & Crowns",
        "Pediatric (Kids)",
      ]
        .map(
          (x, i) => `
            <button
              class="${i ? "" : "active"}"
              data-filter="${i ? "" : "All Procedures"}"
            >
              ${x}
            </button>
          `,
        )
        .join("")

      treatmentCards()

      f.onclick = (e) => {
        const b = e.target.closest("button")

        if (!b) return

        $$("button", f).forEach((x) => x.classList.remove("active"))

        b.classList.add("active")

        treatmentCards(b.dataset.filter || "All Procedures")
      }
    }

    /* -------------------------------------------------------
       Before / After Case Tabs
    ------------------------------------------------------- */

    const caseTabs = $("#caseTabs")

    if (caseTabs) {
      caseTabs.innerHTML = [
        "Full Arch All-on-4 Dental Implant",
        "Invisible Clear Aligners - Crowding Correction",
        "Porcelain Veneers - Gap Closure & Whitening",
      ]
        .map(
          (x, i) => `
            <button
              class="${i ? "" : "active"}"
              data-case="${i}"
            >
              ${x}
            </button>
          `,
        )
        .join("")

      caseTabs.onclick = (e) => {
        const b = e.target.closest("button")

        if (!b) return

        /*
          FIXED:
          Previously:
          $$("button", "#caseTabs")

          Correct:
          $$("button", caseTabs)
        */

        $$("button", caseTabs).forEach((x) => x.classList.remove("active"))

        b.classList.add("active")
      }
    }

    /* -------------------------------------------------------
       Before / After Slider
    ------------------------------------------------------- */

    const wrap = $("#beforeAfter")

    if (wrap) {
      let drag = false

      function updateBeforeAfter(position) {
        const before = document.getElementById("baBefore")
        const after = document.getElementById("baAfter")
        const divider = document.getElementById("baDivider")
        const beforeLabel = document.querySelector(".ba-label.left")
        const afterLabel = document.querySelector(".ba-label.right")

        if (!before || !after || !divider) return

        position = Math.max(0, Math.min(100, position))

        before.style.clipPath = `inset(0 ${100 - position}% 0 0)`
        divider.style.left = `${position}%`

        const beforeWatermark = position < 10 ? 0 : position < 35 ? 0.06 : 0.15
        const afterWatermark = position > 90 ? 0 : position > 65 ? 0.06 : 0.15

        before.style.setProperty("--watermark-opacity", beforeWatermark)
        after.style.setProperty("--watermark-opacity", afterWatermark)

        if (beforeLabel) {
          beforeLabel.style.opacity = position < 18 ? "0" : "1"
        }

        if (afterLabel) {
          afterLabel.style.opacity = position > 82 ? "0" : "1"
        }
      }

      const move = (x) => {
        const r = wrap.getBoundingClientRect()
        const p = ((x - r.left) / r.width) * 100

        updateBeforeAfter(p)

        const hint = $("#dragHint")
        if (hint) {
          hint.style.display = "none"
        }
      }

      wrap.onpointerdown = (e) => {
        drag = true

        move(e.clientX)

        wrap.setPointerCapture(e.pointerId)
      }

      wrap.onpointermove = (e) => {
        if (drag) {
          move(e.clientX)
        }
      }

      wrap.onpointerup = () => {
        drag = false
      }

      wrap.onpointercancel = () => {
        drag = false
      }
    }

    /* -------------------------------------------------------
       Doctors
    ------------------------------------------------------- */

    const doctorGrid = $("#doctorGrid")

    if (doctorGrid) {
      doctorGrid.innerHTML = D.map(
        (x) => `
            <article class="doctor-card">

              <div class="doctor-avatar">
                🧑‍⚕️
              </div>

              <div class="doctor-body">

                <h3>${x[1]}</h3>

                <div class="doctor-title">
                  ${x[2]}
                </div>

                <div class="doctor-meta">

                  <span>
                    ★ ${x[5]} (${x[6]})
                  </span>

                  <span>
                    ${x[3]}
                  </span>

                  <span>
                    Medical Council ✓
                  </span>

                  <span>
                    ${x[8]}
                  </span>

                  ${x[7].map((v) => `<span>${v}</span>`).join("")}

                  <span class="available">
                    ${x[9]}
                  </span>

                </div>

                <small>
                  ${x[4]}
                </small>

                <button
                  class="doctor-book"
                  data-doctor="${x[0]}"
                >
                  Book with Dr.
                  ${x[1].split(" ")[1]}
                </button>

              </div>

            </article>
          `,
      ).join("")
    }

    /* -------------------------------------------------------
       Reviews
    ------------------------------------------------------- */

    const reviewsGrid = $("#reviewsGrid")

    if (reviewsGrid) {
      reviewsGrid.innerHTML = S.map(
        (x) => `
            <article class="review">

              <div class="stars">
                ★★★★★
              </div>

              <p>
                “${x[3]}”
              </p>

              <div class="reviewer">
                <b>${x[0]}</b>

                <span>
                  ${x[1]} • ✓ ${x[2]}
                </span>
              </div>

            </article>
          `,
      ).join("")
    }

    /* -------------------------------------------------------
       FAQ
    ------------------------------------------------------- */

    const faqAccordion = $("#faqAccordion")

    if (faqAccordion) {
      faqAccordion.innerHTML = F.map(
        (x, i) => `
            <div class="accordion-item">

              <h2 class="accordion-header">

                <button
                  class="accordion-button ${i ? "collapsed" : ""}"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq${i}"
                >
                  ${x[0]}
                </button>

              </h2>

              <div
                id="faq${i}"
                class="accordion-collapse collapse ${i ? "" : "show"}"
              >

                <div class="accordion-body">
                  ${x[1]}
                </div>

              </div>

            </div>
          `,
      ).join("")
    }

    /* -------------------------------------------------------
       Current Year
    ------------------------------------------------------- */

    const year = $("#year")

    if (year) {
      year.textContent = new Date().getFullYear()
    }

    /* =======================================================
       21. GLOBAL CLICK EVENTS
    ======================================================= */

    document.addEventListener("click", (e) => {
      /* ---------------------------------------------------
           Book Appointment
        --------------------------------------------------- */

      if (e.target.closest("[data-open-booking]")) {
        B = {
          step: 1,
          t: null,
          d: null,
          date: null,
          shift: "morning",
          slot: null,
        }

        bookingView()

        open("bookingModal")

        return
      }

      /* ---------------------------------------------------
           Book Treatment
        --------------------------------------------------- */

      const bt = e.target.closest("[data-book]")

      if (bt) {
        B = {
          step: 3,
          t: bt.dataset.book,
          d: "fastest",
          date: dates()[0].toISOString().slice(0, 10),
          shift: "morning",
          slot: null,
        }

        bookingView()

        open("bookingModal")

        close("protocolModal")

        return
      }

      /* ---------------------------------------------------
           Doctor Booking
        --------------------------------------------------- */

      const db = e.target.closest("[data-doctor]")

      if (db) {
        B = {
          step: 1,
          t: null,
          d: db.dataset.doctor,
          date: null,
          shift: "morning",
          slot: null,
        }

        bookingView()

        open("bookingModal")

        return
      }

      /* ---------------------------------------------------
           Treatment Protocol
        --------------------------------------------------- */

      const tt = e.target.closest("[data-protocol]")

      if (tt) {
        const t = T.find((x) => x[0] === tt.dataset.protocol)

        if (!t) return

        $("#protocolContent").innerHTML = `
            <span class="eyebrow">
              ${t[2]}
            </span>

            <h2>
              ${t[1]}
            </h2>

            <p>
              ${t[3]}
            </p>

            <div class="roadmap-line">

              ${t[8]
                .map(
                  (s, i) => `
                    <article>
                      <b>
                        0${i + 1}
                      </b>

                      <h3>
                        ${s}
                      </h3>

                      <p>
                        Preparation,
                        comfort-first treatment
                        and review.
                      </p>
                    </article>
                  `,
                )
                .join("")}

            </div>

            <p>
              <b>
                Starting from
                ₹${t[5].toLocaleString("en-IN")}
              </b>

              ${
                t[6]
                  ? " • EMI from ₹" + t[6].toLocaleString("en-IN") + "/mo"
                  : ""
              }
            </p>

            <button
              class="btn btn-primary-glow"
              data-book="${t[0]}"
            >
              Book this treatment
            </button>
          `

        open("protocolModal")

        return
      }

      /* ---------------------------------------------------
           Close Booking
        --------------------------------------------------- */

      if (e.target.closest("[data-close-booking]")) {
        close("bookingModal")
        return
      }

      /* ---------------------------------------------------
           Generic Modal Close
        --------------------------------------------------- */

      const closeBtn = e.target.closest("[data-close]")

      if (closeBtn) {
        close(closeBtn.dataset.close)
        return
      }

      /* ---------------------------------------------------
           Back
        --------------------------------------------------- */

      if (e.target.closest("[data-back]")) {
        if (B.step > 1) {
          B.step--
          bookingView()
        }

        return
      }

      /* ---------------------------------------------------
           Next
        --------------------------------------------------- */

      if (e.target.closest("[data-next]")) {
        if (B.step < 4) {
          B.step++

          if (B.step === 3 && !B.date) {
            B.date = dates()[0].toISOString().slice(0, 10)
          }

          bookingView()
        }

        return
      }

      /* ---------------------------------------------------
           Treatment Selection
        --------------------------------------------------- */

      const t = e.target.closest("[data-t]")

      if (t) {
        B.t = t.dataset.t
        bookingView()
        return
      }

      /* ---------------------------------------------------
           Doctor Selection
        --------------------------------------------------- */

      const d = e.target.closest("[data-d]")

      if (d) {
        B.d = d.dataset.d
        bookingView()
        return
      }

      /* ---------------------------------------------------
           Date Selection
        --------------------------------------------------- */

      const dt = e.target.closest("[data-date]")

      if (dt) {
        B.date = dt.dataset.date

        bookingView()

        return
      }

      /* ---------------------------------------------------
           Shift Selection
        --------------------------------------------------- */

      const sh = e.target.closest("[data-shift]")

      if (sh) {
        B.shift = sh.dataset.shift

        B.slot = null

        bookingView()

        return
      }

      /* ---------------------------------------------------
           Slot Selection
        --------------------------------------------------- */

      const sl = e.target.closest("[data-slot]")

      if (sl && !sl.disabled) {
        B.slot = sl.dataset.slot

        bookingView()

        return
      }

      /* ---------------------------------------------------
           Close WhatsApp Toast
        --------------------------------------------------- */

      if (e.target.closest("#closeWa")) {
        $("#whatsappToast")?.classList.remove("show")

        return
      }

      /* ---------------------------------------------------
           Virtual Tour
        --------------------------------------------------- */

      if (e.target.closest("#playTour")) {
        alert(
          "Virtual tour preview: Reception → Consultation → Digital Scan → Surgery → Recovery.",
        )

        return
      }

      /* ---------------------------------------------------
           Smile Assessment
        --------------------------------------------------- */

      if (e.target.closest("[data-open-assessment]")) {
        assessment()
      }
    })

    /* =======================================================
       22. FORM SUBMISSION
    ======================================================= */

    document.addEventListener("submit", (e) => {
      if (e.target.id !== "patientForm") {
        return
      }

      e.preventDefault()

      const f = new FormData(e.target)

      const t = T.find((x) => x[0] === B.t)

      const d = B.d === "fastest" ? D[0] : D.find((x) => x[0] === B.d) || D[0]

      if (!t || !d) {
        alert("Please select a treatment and specialist.")

        return
      }

      const p = {
        name: f.get("name"),
        phone: f.get("phone"),
        age: f.get("age"),
        gender: f.get("gender"),
        type: f.get("type"),
        complaint: f.get("complaint"),

        token:
          "#APX-" +
          new Date().getFullYear() +
          "-" +
          Math.floor(1000 + Math.random() * 9000),

        date: B.date,
        slot: B.slot,
      }

      localStorage.setItem("apexLastAppointment", JSON.stringify(p))

      confirm(p, t, d)
    })

    /* =======================================================
       23. 60 SECOND ASSESSMENT
    ======================================================= */

    function assessment() {
      let step = 0
      const a = []

      const q = [
        [
          "What is your primary dental goal?",
          [
            "Severe tooth pain",
            "Replace missing teeth",
            "Straighten teeth",
            "Whiter smile",
          ],
        ],

        [
          "How long have you experienced this issue?",
          ["Less than a week", "1-6 months", "Over a year"],
        ],

        [
          "Do you experience dental anxiety or fear of needles?",
          ["Yes, need pain-free sedation", "No, comfortable"],
        ],
      ]

      const render = () => {
        $("#assessmentContent").innerHTML =
          step < 3
            ? `
              <span class="eyebrow">
                60-SECOND SMILE ASSESSMENT
                • ${step + 1}/3
              </span>

              <h2>
                ${q[step][0]}
              </h2>

              <div class="assessment-options">

                ${q[step][1]
                  .map(
                    (o) => `
                      <button
                        data-answer="${o}"
                      >
                        ${o}
                      </button>
                    `,
                  )
                  .join("")}

              </div>
            `
            : `
              <span class="eyebrow">
                YOUR RESULT
              </span>

              <h2>
                Recommended Treatment Plan
              </h2>

              <div class="result-plan">

                <h3>
                  ${
                    a[0] === "Replace missing teeth"
                      ? "Computerized Implant Evaluation + 3D CBCT Scan"
                      : a[0] === "Straighten teeth"
                        ? "3D Clear Aligner Smile Plan"
                        : a[0] === "Whiter smile"
                          ? "In-Clinic Laser Whitening Consultation"
                          : "Urgent Dental Examination & Pain-Relief Consultation"
                  }
                </h3>

                <p>
                  Recommended Specialist:
                  <b>
                    ${
                      a[0] === "Straighten teeth"
                        ? "Dr. Sneha Reddy, MDS"
                        : a[0] === "Replace missing teeth"
                          ? "Dr. Arvind Swaminathan, MDS"
                          : a[0] === "Whiter smile"
                            ? "Dr. Sneha Reddy, MDS"
                            : "Dr. Vikram Varma, MDS"
                    }
                  </b>
                </p>

                <strong>
                  ₹500 Consultation Waiver Applied to Token
                </strong>

              </div>

              <button
                class="btn btn-primary-glow mt-3"
                data-open-booking
              >
                Book This Solution
              </button>
            `
      }

      const assessmentContent = $("#assessmentContent")

      assessmentContent.onclick = (e) => {
        const b = e.target.closest("[data-answer]")

        if (b) {
          a[step++] = b.dataset.answer

          render()
        } else if (e.target.closest("[data-open-booking]")) {
          close("assessmentModal")

          B = {
            step: 1,
            t: null,
            d: null,
            date: null,
            shift: "morning",
            slot: null,
          }

          bookingView()

          open("bookingModal")
        }
      }

      render()

      open("assessmentModal")
    }

    /* =======================================================
       24. EMI CALCULATOR
    ======================================================= */

    const ec = $("#emiCost")

    const em = $("#emiMonths")

    function emi() {
      if (!ec || !em) return

      const c = +ec.value
      const m = +em.value

      const costOut = $("#emiCostOut")

      const monthsOut = $("#emiMonthsOut")

      const result = $("#emiResult")

      if (costOut) {
        costOut.textContent = "₹" + c.toLocaleString("en-IN")
      }

      if (monthsOut) {
        monthsOut.textContent = m + " months"
      }

      if (result) {
        result.textContent = "₹" + Math.round(c / m).toLocaleString("en-IN")
      }
    }

    if (ec && em) {
      ec.oninput = emi
      em.oninput = emi

      emi()
    }

    /* =======================================================
       25. COUNTERS + REVEAL ANIMATION
    ======================================================= */

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              if (e.target.dataset.count) {
                const n = +e.target.dataset.count

                const start = performance.now()

                const f = (t) => {
                  const p = Math.min(1, (t - start) / 1000)

                  e.target.textContent =
                    Math.floor(n * (1 - (1 - p) ** 3)).toLocaleString("en-IN") +
                    "+"

                  if (p < 1) {
                    requestAnimationFrame(f)
                  }
                }

                requestAnimationFrame(f)
              }

              e.target.classList.add("visible")

              io.unobserve(e.target)
            }
          })
        },
        {
          threshold: 0.2,
        },
      )

      $$(".reveal,[data-count]").forEach((e) => io.observe(e))
    } else {
      $$(".reveal").forEach((e) => e.classList.add("visible"))
    }

    /* =======================================================
       26. FINAL SCROLL RESET
       Important because dynamic treatment/doctor/review
       content changes page height during initialization.
    ======================================================= */

    if (!window.location.hash) {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)

        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      })
    }
  }

  /* =========================================================
     27. START APPLICATION
  ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true })
  } else {
    init()
  }
})()
