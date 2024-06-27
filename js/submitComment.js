$(document).ready(() => {
  $(document).on("click", "#submit", () => {
    let comment = $("#comment").val();

    $("#comments").append(
      "<div class='rounded-lg w-1/2 p-4 bg-[#F1EFE7] text-[#000]'>" +
        `<p class='p-4'>${comment}</p>` +
        "</div>"
    );
  });

  $("#comment").val("");
});
