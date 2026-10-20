console.log("Products frontend javascript file");
// bu mantiq Dish dagi DRINK tanlansa Volume litrda korsat boshqa payt normal, large korsat deyish uchun yozildi
$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();
    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $("#product-volume").show();
    } else {
      $("#product-volume").hide();
      $("#product-collection").show();
    }
  });

  // bu yerda yangi maxsulot qoshish jadvali doimiy yo'q bo'lishi qachonki < New Product > tugmasi bosilgandagina ochilishi uchun yozildi
  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(400);
    $("#process-btn").css("display", "none");
  });

  // bu yerda maxsulot hosil qilish jadvalini yopuvchi CANCEL tugmasi bosilganda jadval yopilish mantig'i yozildi
  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display", "flex");
  });
});

function validateForm() {
  const productName = $(".product-name").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();
  const productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details!");
    return false;
  } else return true;
}

// bu yerda yangi maxsulot jadvalda maxsulot rasmini qoshganda o'sha qo'shilgan maxsulotni rasmini korsatish uchun yozildi
function previewFileHandler(input, order) {
  const imgClassName = input.className;
  console.log("input:", input);

  const file = $(`.${imgClassName}`).get(0).files[0];
  const fileType = file["type"];
  const validImageType = ["image/jpg", "image/jpeg", "image/png"];

  if (!validImageType.includes(fileType)) {
    alert("Please insert only jpeg, jpg and png!");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
