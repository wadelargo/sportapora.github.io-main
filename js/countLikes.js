$(document).ready(() => {
  var likes = 0;

  $("#likeCount").text(likes);

  $(document).on("click", "#like", () => {
    $("#like")
      .removeClass("text-[#F1EFE7] hover:bg-[#F1EFE7] hover:text-[#000]")
      .addClass("bg-gray-200 text-[#000]")
      .attr("disabled", true);

    likes += 1;

    $("#likeCount").text(likes);
  });
});
