(function () {
  const storageKey = "hf-director-workbench-comments";
  const targets = Array.from(document.querySelectorAll('[data-commentable="true"]'));
  const targetInput = document.getElementById("comment-target");
  const scopeInput = document.getElementById("comment-scope");
  const priorityInput = document.getElementById("comment-priority");
  const textInput = document.getElementById("comment-text");
  const form = document.getElementById("comment-form");
  const list = document.getElementById("comment-list");
  const exportBox = document.getElementById("comment-export");
  const importBox = document.getElementById("import-comments");
  const exportButton = document.getElementById("export-comments");
  const clearButton = document.getElementById("clear-comments");
  const loadButton = document.getElementById("load-comments");
  const languageButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
  const viewButtons = Array.from(document.querySelectorAll("[data-view-switch]"));
  const frameButtons = Array.from(document.querySelectorAll("[data-frame-select]"));
  const allowedScopes = ["layout", "copy", "motion", "style", "mainline"];
  const allowedPriorities = ["low", "medium", "high"];
  const allowedStatuses = ["open", "resolved", "rejected", "pending", "pending-target"];
  const maxComments = 500;
  const maxTextLength = 2000;
  let selectedTarget = null;
  let comments = loadComments();

  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.langSwitch || "en")));
  viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.viewSwitch || "overview")));
  frameButtons.forEach((button) => button.addEventListener("click", () => selectFrame(button.dataset.frameSelect || "frame-01")));

  targets.forEach((target) => {
    target.setAttribute("tabindex", "0");
    target.addEventListener("click", () => selectTarget(target));
    target.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTarget(target);
      }
    });
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!selectedTarget || !textInput.value.trim()) return;
      const targetId = selectedTarget.dataset.commentTargetId;
      const targetType = selectedTarget.dataset.commentTargetType || "component";
      comments.push({
        comment_id: `cmt-${String(Date.now()).slice(-8)}`,
        target_type: targetType,
        target_id: targetId,
        selector: buildSelector(selectedTarget, targetId, targetType),
        page_id: selectedTarget.dataset.pageId || "",
        asset_id: selectedTarget.dataset.assetId || "",
        aspect_mode: selectedTarget.dataset.aspectMode || "",
        frame_id: selectedTarget.dataset.frame || "",
        scope: scopeInput.value,
        comment: cleanText(textInput.value, maxTextLength),
        priority: priorityInput.value,
        status: "open",
        source_language: document.body.dataset.lang || "en",
        workbench_view: document.body.dataset.activeView || "overview"
      });
      textInput.value = "";
      persist();
      render();
    });
  }

  if (exportButton) exportButton.addEventListener("click", () => { exportBox.textContent = JSON.stringify(comments, null, 2); });
  if (clearButton) exportButton && clearButton.addEventListener("click", () => { comments = []; localStorage.removeItem(storageKey); render(); });
  if (loadButton) {
    loadButton.addEventListener("click", () => {
      try {
        const parsed = JSON.parse(importBox.value || "[]");
        if (!Array.isArray(parsed)) return;
        comments = parsed.slice(0, maxComments).map(normalizeComment).filter(Boolean);
        persist();
        render();
      } catch (error) {
        exportBox.textContent = `Invalid JSON / JSON 无效: ${error.message}`;
      }
    });
  }

  setLanguage(document.body.dataset.lang || "en");
  setView(document.body.dataset.activeView || "overview");
  selectFrame(document.body.dataset.activeFrame || "frame-01");
  render();

  function setLanguage(lang) {
    const next = lang === "zh" ? "zh" : "en";
    document.body.dataset.lang = next;
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.langSwitch === next)));
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
    const explicitMotion = cleanText(frame.dataset.motion || frame.dataset.frameMotion || frame.dataset.motionIntent || "", maxTextLength);
    if (explicitMotion) return explicitMotion;
    const inlineMotion = frame.querySelector("[data-motion-intent], [data-frame-motion]");
    if (inlineMotion) {
      const text = cleanText(inlineMotion.textContent, maxTextLength);
      if (text) return text;
    }
    const sourceCard = frame.querySelector(".source-card");
    if (sourceCard) {
      const text = cleanText(sourceCard.textContent, maxTextLength);
      if (text) return `Source asset motion: ${text}`;
    }
    return "Motion intent not specified for this frame.";
  }

  function selectTarget(target) {
    targets.forEach((item) => item.classList.remove("is-selected"));
    selectedTarget = target;
    selectedTarget.classList.add("is-selected");
    if (targetInput) targetInput.value = selectedTarget.dataset.commentTargetId || "";
    if (textInput) textInput.focus();
  }

  function loadComments() {
    try {
      const stored = localStorage.getItem(storageKey);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed.slice(0, maxComments).map(normalizeComment).filter(Boolean) : [];
    } catch (error) {
      console.warn("Unable to load stored comments / 无法读取本地评论", error);
      return [];
    }
  }

  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(comments.slice(0, maxComments)));
    } catch (error) {
      exportBox.textContent = `Unable to save comments locally / 无法保存本地评论: ${error.message}`;
    }
  }

  function buildSelector(target, targetId, targetType) {
    const parts = [`[data-comment-target-id='${escapeSelectorValue(targetId)}']`, `[data-comment-target-type='${escapeSelectorValue(targetType)}']`];
    if (target.dataset.frame) parts.push(`[data-frame='${escapeSelectorValue(target.dataset.frame)}']`);
    if (target.dataset.aspectMode) parts.push(`[data-aspect-mode='${escapeSelectorValue(target.dataset.aspectMode)}']`);
    if (target.dataset.criticalFrame) parts.push(`[data-critical-frame='${escapeSelectorValue(target.dataset.criticalFrame)}']`);
    return parts.join("");
  }

  function normalizeComment(item) {
    if (!item || typeof item !== "object") return null;
    const commentId = cleanText(item.comment_id, 80);
    const targetId = cleanText(item.target_id, 160);
    if (!commentId || !targetId) return null;
    const scope = allowedScopes.includes(item.scope) ? item.scope : "layout";
    const priority = allowedPriorities.includes(item.priority) ? item.priority : "medium";
    const status = allowedStatuses.includes(item.status) ? item.status : "open";
    return {
      comment_id: commentId,
      target_type: cleanText(item.target_type || "component", 80),
      target_id: targetId,
      selector: cleanText(item.selector || `[data-comment-target-id='${escapeSelectorValue(targetId)}']`, 300),
      page_id: cleanText(item.page_id || "", 120),
      asset_id: cleanText(item.asset_id || "", 120),
      aspect_mode: cleanText(item.aspect_mode || "", 40),
      frame_id: cleanText(item.frame_id || "", 80),
      scope,
      comment: cleanText(item.comment || "", maxTextLength),
      priority,
      status,
      source_language: cleanText(item.source_language || "", 40),
      workbench_view: cleanText(item.workbench_view || "", 40)
    };
  }

  function cleanText(value, maxLength) { return String(value || "").trim().slice(0, maxLength); }
  function escapeSelectorValue(value) { return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'"); }

  function render() {
    const counts = comments.reduce((map, comment) => map.set(comment.target_id, (map.get(comment.target_id) || 0) + 1), new Map());
    targets.forEach((target) => target.classList.toggle("has-comments", (counts.get(target.dataset.commentTargetId) || 0) > 0));
    if (list) {
      list.innerHTML = "";
      comments.forEach((comment) => {
        const item = document.createElement("li");
        item.innerHTML = `<strong>${escapeHtml(comment.target_id)}</strong><span>${escapeHtml(comment.scope)} · ${escapeHtml(comment.priority)} · ${escapeHtml(comment.status)}</span><br>${escapeHtml(comment.comment)}`;
        list.appendChild(item);
      });
    }
    if (exportBox) exportBox.textContent = comments.length ? JSON.stringify(comments, null, 2) : "No comments yet / 暂无评论";
  }

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
  }
})();
