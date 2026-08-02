document.addEventListener("DOMContentLoaded", function () {
  const loanInput = document.getElementById("loanAmount");
  const loanDisplay = document.getElementById("loanDisplay");

  if (loanInput) {
    loanInput.value = 500000;

    loanInput.addEventListener("input", function () {
      let value = parseInt(this.value);
      if (loanDisplay) {
        loanDisplay.textContent = value.toLocaleString("vi-VN") + " đ";
      }
    });
  }

  const loanForm = document.getElementById("loanForm");

  if (loanForm) {
    loanForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!loanForm.checkValidity()) {
        e.stopPropagation();
        loanForm.classList.add("was-validated");
        alert("Vui lòng điền đầy đủ và chính xác các thông tin được yêu cầu!");
        return;
      }

      loanForm.classList.add("was-validated");

      if (typeof showStatusNotification === "function") {
        showStatusNotification(
          "loading",
          "Đang xử lý",
          "Vui lòng chờ trong giây lát...",
        );
      }

      setTimeout(() => {
        window.location.href = "step2.html";
      }, 600);
    });
  }
});

function showStatusNotification(type, title, message) {
  const statusModalEl = document.getElementById("statusModal");
  if (!statusModalEl) return;

  const myModal = new bootstrap.Modal(statusModalEl);

  const loadingEl = document.getElementById("modal-loading");
  const errorEl = document.getElementById("modal-error");
  const successEl = document.getElementById("modal-success");

  if (loadingEl) loadingEl.classList.remove("d-none");
  if (errorEl) errorEl.classList.add("d-none");
  if (successEl) successEl.classList.add("d-none");

  myModal.show();
}
