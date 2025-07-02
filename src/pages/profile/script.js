let token = localStorage.getItem("token");

if (!token) {
  location.href = "/login/";
} else {
  document.getElementById("nameInput").value = localStorage.getItem("fullName") || "";
  document.getElementById("emailInput").value = localStorage.getItem("email") || "";
  document.getElementById("profileName").textContent = localStorage.getItem("fullName") || "User";
}

document.getElementById("logoutBtn").onclick = () => {
  localStorage.clear();
  location.href = "/login/";
};
