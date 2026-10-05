const wrap = $("#beforeAfter")

if (wrap) {
  const applyMobileState = () => {
    const before = $("#baBefore")
    const after = $("#baAfter")
    const divider = $("#baDivider")
    const hint = $("#dragHint")

    if (window.innerWidth <= 767) {
      if (before) {
        before.style.display = "none"
        before.style.clipPath = "none"
        before.style.width = "0"
        before.style.opacity = "0"
      }

      if (after) {
        after.style.width = "100%"
        after.style.left = "0"
        after.style.right = "0"
        after.style.clipPath = "none"
        after.style.opacity = "1"
      }

      if (divider) divider.style.display = "none"
      if (hint) hint.style.display = "none"
    } else {
      if (before) {
        before.style.display = ""
        before.style.clipPath = "inset(0 50% 0 0)"
      }

      if (divider) divider.style.display = ""
      if (hint) hint.style.display = ""
    }
  }

  applyMobileState()
  window.addEventListener("resize", applyMobileState)

  let drag = false

  const move = (x) => {
    const r = wrap.getBoundingClientRect()
    const p = Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100))

    const before = $("#baBefore")
    const divider = $("#baDivider")
    const hint = $("#dragHint")

    if (window.innerWidth <= 767) {
      if (before) before.style.display = "none"
      if (divider) divider.style.display = "none"
      if (hint) hint.style.display = "none"
      return
    }

    if (before) {
      before.style.clipPath = `inset(0 ${100 - p}% 0 0)`
    }

    if (divider) {
      divider.style.left = p + "%"
    }

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
