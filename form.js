function showStatusNotification(type, title, message) {
  // Khởi tạo Modal từ Bootstrap
  const myModal = new bootstrap.Modal(document.getElementById("statusModal"));

  // Reset lại trạng thái ban đầu (Hiện xoay xoay, ẩn X và Check đi)
  document.getElementById("modal-loading").classList.remove("d-none");
  document.getElementById("modal-error").classList.add("d-none");
  document.getElementById("modal-success").classList.add("d-none");

  // Mở hộp thoại lên
  myModal.show();

  // Giả lập hiệu ứng xoay xoay trong 1.5 giây rồi đổi icon
  setTimeout(() => {
    // Ẩn vòng tròn xoay đi
    document.getElementById("modal-loading").classList.add("d-none");

    if (type === "error") {
      // Hiển thị giao diện Thất bại (Dấu X)
      document.getElementById("error-title").textContent = title;
      document.getElementById("error-msg").textContent = message;
      document.getElementById("modal-error").classList.remove("d-none");
    } else if (type === "success") {
      // Hiển thị giao diện Thành công (Dấu Tích)
      document.getElementById("success-title").textContent = title;
      document.getElementById("success-msg").textContent = message;
      document.getElementById("modal-success").classList.remove("d-none");
    }
  }, 600);
}

const loanForm = document.getElementById("loanForm");
if (loanForm) {
  loanForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Chặn load lại trang

    // Gọi hàm báo lỗi (Hiện dấu X đỏ): Vui lòng đăng nhập trước
    showStatusNotification(
      "error",
      "Cảnh Báo",
      "Vui lòng đăng nhập trước khi thực hiện đăng ký khoản vay!",
    );
  });
}
