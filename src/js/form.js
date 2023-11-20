// // document.addEventListener('DOMContentLoaded', function () {
// //     const form = document.querySelector(".form");

// //     form.addEventListener('submit', formSend);

// //     async function formSend(e) {
// //         e.preventDefault();

// //         let error = formValidate(form);
// //     }

// //     function formValidate(form) {
// //         let error= 0;
// //         let formReq = document.querySelector('.req')

// //         for (let index = 0; index < formReq.clientHeight; index++) {
// //             const input = formReq[index];
// //             formRemoveError(input);

// //             if (input.classList.contains('email')) {
// //                 if (emailTest(input)) {
// //                     formAddError(input);
// //                     error ++;
// //                 }
// //             }
// //         }
// //     }

// // function formAddError(input) {
// //     input.parentElement.classList.add('_error');
// //     input.classList.add("_error");
// // }
// // function formRemoveError(input) {
// //   input.parentElement.classList.remove("_error");
// //   input.classList.remove("_error");
// // }

// // //////TEST EMAIL

// // function emailTest(input) {
// //     return !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(input.value);
// // }

// // });


