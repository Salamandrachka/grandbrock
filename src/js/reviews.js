// $(document).ready(function () {
//   var apiKey = "ВАШ_API_КЛЮЧ";
//   var placeId = "МЕСТО_С_ID"; // ID места, для которого вы хотите получить отзывы
//   var apiUrl =
//     "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
//     placeId +
//     "&key=" +
//     apiKey;

//   $.ajax({
//     url: apiUrl,
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//       var reviews = data.result.reviews;
//       var reviewsContainer = $(".section-reviews__block"); // Контейнер для отзывов

//       for (var i = 0; i < reviews.length; i++) {
//         var review = reviews[i];

//         // Создаем новый блок отзыва
//         var newReviewBlock = $(
//           '<div class="swiper-slide section-reviews__block"></div>'
//         );

//         // Заполняем блок данными из отзыва
//         newReviewBlock.append(
//           '<div class="section-reviews__block-shadow">' +
//             '<div class="section-reviews__block-person">' +
//             '<img src="' +
//             review.profile_photo_url +
//             '" alt="buy car" />' +
//             "<span>" +
//             review.author_name +
//             "</span>" +
//             "</div>" +
//             '<div class="section-reviews__block-text">' +
//             review.text +
//             "</div>" +
//             '<div class="section-reviews__block-date">' +
//             review.relative_time_description +
//             "</div>" +
//             "</div>"
//         );

//         // Добавляем новый блок в контейнер для отзывов
//         reviewsContainer.append(newReviewBlock);
//       }
//     },
//     error: function (error) {
//       console.error("Error fetching reviews: " + error.statusText);
//     },
//   });
// });
