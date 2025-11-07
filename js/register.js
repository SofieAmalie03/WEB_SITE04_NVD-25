(function () {
  if (document.body.id !== "register") return;

  const form = document.getElementById("webform");
  if (!form) return;

  const submitBtn = document.getElementById("submitBtn");
  const consent = document.getElementById("ok");
  const summaryArticle = document.getElementById("summary-article");

  const toggleBtn = () => {
    submitBtn.disabled = !consent.checked;
  };
  consent.addEventListener("change", toggleBtn);
  toggleBtn();

  form.addEventListener(
    "invalid",
    function (e) {
      e.preventDefault();
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus({ preventScroll: false });
    },
    true
  );

  const esc = (s) =>
    String(s || "")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  const getChecked = (name) => {
    const el = form.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : "";
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const firstName = (data.get("firstName") || "").trim();
    const lastName = (data.get("lastName") || "").trim();
    const email = (data.get("email") || "").trim();
    const phone = (data.get("phone") || "").trim();
    const reportType = getChecked("reportType");
    const area = data.get("area") || "";
    const date = data.get("date") || "";
    const details = (data.get("details") || "").trim();

    summaryArticle.innerHTML = `
        <div class="summary-card">
          <h3>Tak for din indberetning</h3>
          <ul class="summary-list">
            <li><strong>Navn:</strong> ${esc(firstName)} ${esc(lastName)}</li>
            <li><strong>E-mail:</strong> ${esc(email)}</li>
            <li><strong>Tlf.:</strong> ${esc(phone)}</li>
            <li><strong>Hændelse:</strong> ${esc(reportType)}</li>
            <li><strong>Område:</strong> ${esc(area)}</li>
            <li><strong>Dato:</strong> ${esc(date)}</li>
          </ul>
          <div class="summary-details">
            <strong>Beskrivelse:</strong>
            <p>${esc(details)}</p>
          </div>
        </div>
      `;

    document
      .getElementById("form-summary")
      ?.scrollIntoView({ behavior: "smooth" });

    form.reset();
    toggleBtn();
  });
})();
