// Log ke konsol saat file dimuat
console.log("Mock Test Report Loaded");

// Menambahkan tahun dinamis di footer
const footerElement = document.querySelector("footer p");
if (footerElement) {
  footerElement.innerText += ` | ${new Date().getFullYear()}`;
}