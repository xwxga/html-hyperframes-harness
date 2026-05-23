(function () {
  const languageButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
  const viewButtons = Array.from(document.querySelectorAll("[data-view-switch]"));
  const frameButtons = Array.from(document.querySelectorAll("[data-frame-select]"));

  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.langSwitch || "en")));
  viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.viewSwitch || "overview")));
  frameButtons.forEach((button) => button.addEventListener("click", () => selectFrame(button.dataset.frameSelect || "frame-01")));

  setLanguage(document.body.dataset.lang || "en");
  setView(document.body.dataset.activeView || "overview");
  selectFrame(document.body.dataset.activeFrame || "frame-01");

  function setLanguage(lang) {
    const next = lang === "zh" ? "zh" : "en";
    document.body.dataset.lang = next;
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.langSwitch === next)));
    selectFrame(document.body.dataset.activeFrame || "frame-01");
  }

  function setView(view) {
    const next = view === "frames" ? "frames" : "overview";
    document.body.dataset.activeView = next;
    document.querySelectorAll("[data-view]").forEach((viewEl) => viewEl.classList.toggle("is-active", viewEl.dataset.view === next));
    viewButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.viewSwitch === next)));
  }

  function selectFrame(frameId) {
    const next = frameId || "frame-01";
    document.body.dataset.activeFrame = next;
    document.querySelectorAll("[data-frame]").forEach((frame) => frame.classList.toggle("active-frame", frame.dataset.frame === next));
    frameButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.frameSelect === next)));
    const label = document.getElementById("selected-frame-label");
    const motion = document.getElementById("selected-frame-motion");
    if (label) label.textContent = next;
    if (motion) motion.textContent = getFrameMotion(next);
  }

  function getFrameMotion(frameId) {
    const frame = Array.from(document.querySelectorAll("[data-frame]")).find((item) => item.dataset.frame === frameId);
    if (!frame) return "Motion intent not specified for this frame.";
    const isZh = (document.body.dataset.lang || "en") === "zh";
    return cleanText(
      (isZh ? frame.dataset.motionZh : frame.dataset.motionEn) || frame.dataset.motion || frame.dataset.frameMotion || frame.dataset.motionIntent || "",
      2000
    ) || "Motion intent not specified for this frame.";
  }

  function cleanText(value, maxLength) {
    return String(value || "").trim().slice(0, maxLength);
  }
})();
