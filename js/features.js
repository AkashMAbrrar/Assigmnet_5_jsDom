// show donation
document
  .getElementById("donation_section_show")
  .addEventListener("click", function () {
    showSectionById("donation_department");
  });

document.getElementById("blogs_btn").addEventListener("click", function (e) {
  e.preventDefault();
  showSectionById("faq_blogs");
});

document
  .getElementById("history_section_show")
  .addEventListener("click", function () {
    showSectionById("donation_history");
  });

// document
//   .getElementById("history_section_show")
//   .addEventListener("click", function () {
//     showSectionById("donation_history");
//   });
