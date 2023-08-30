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



// // document.addEventListener("DOMContentLoaded", function () {
// //   const form = document.getElementById("form");
// //   const username = document.getElementById("username");
// //   const email = document.getElementById("email");
// //   //   const password = document.getElementById("password");
// //   //   const password2 = document.getElementById("password2");

// //   form.addEventListener("submit", (e) => {
// //     e.preventDefault();

// //     validateInputs();
// //   });

// //   function formAddError(input) {
// //       input.parentElement.classList.add('error');
// //       input.classList.add("error");
// //   }
// //   function formRemoveError(input) {
// //     input.parentElement.classList.remove("error");
// //     input.classList.remove("error");
// //   }

// //   const isValidEmail = (email) => {
// //     const re =
// //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(String(email).toLowerCase());
// //   };

// //   const validateInputs = () => {
// //     const usernameValue = username.value.trim();
// //     const emailValue = email.value.trim();


// //     if (usernameValue === "") {
// //       setError(username, "Username is required");
// //     } else {
// //       setSuccess(username);
// //     }

// //     if (emailValue === "") {
// //       setError(email, "Email is required");
// //     } else if (!isValidEmail(emailValue)) {
// //       setError(email, "Provide a valid email address");
// //     } else {
// //       setSuccess(email);
// //     }

// //   };
// // });



// const usernameEl = document.querySelector("#username");
// const emailEl = document.querySelector("#email");
// const phoneEl = document.querySelector("#phone");

// const form = document.querySelector(".form");

// const checkUsername = () => {
//   let valid = false;

//   const min = 3,
//     max = 25;

//   const username = usernameEl.value.trim();

//   if (!isRequired(username)) {
//     showError(usernameEl, "Username cannot be blank.");
//   } else if (!isBetween(username.length, min, max)) {
//     showError(
//       usernameEl,
//       `Username must be between ${min} and ${max} characters.`
//     );
//   } else {
//     showSuccess(usernameEl);
//     valid = true;
//   }
//   return valid;
// };

// const checkEmail = () => {
//   let valid = false;
//   const email = emailEl.value.trim();
//   if (!isRequired(email)) {
//     showError(emailEl, "Email cannot be blank.");
//   } else if (!isEmailValid(email)) {
//     showError(emailEl, "Email is not valid.");
//   } else {
//     showSuccess(emailEl);
//     valid = true;
//   }
//   return valid;
// };

// const isEmailValid = (email) => {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// const isRequired = (value) => (value === "" ? false : true);
// const isBetween = (length, min, max) =>
//   length < min || length > max ? false : true;

// const showError = (input, message) => {
//   // get the form-field element
//   const formField = input.parentElement;
//   // add the error class
//   formField.classList.remove("success");
//   formField.classList.add("error");

//   // show the error message
//   const error = formField.querySelector("small");
//   error.textContent = message;
// };

// const showSuccess = (input) => {
//   // get the form-field element
//   const formField = input.parentElement;

//   // remove the error class
//   formField.classList.remove("error");
//   formField.classList.add("success");

//   // hide the error message
//   const error = formField.querySelector("small");
//   error.textContent = "";
// };

// form.addEventListener("submit", function (e) {
//   // prevent the form from submitting
//   e.preventDefault();

//   // validate fields
//   let isUsernameValid = checkUsername(),
//     isEmailValid = checkEmail();
// });

// const debounce = (fn, delay = 500) => {
//   let timeoutId;
//   return (...args) => {
//     // cancel the previous timer
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     // setup a new timer
//     timeoutId = setTimeout(() => {
//       fn.apply(null, args);
//     }, delay);
//   };
// };

// form.addEventListener(
//   "input",
//   debounce(function (e) {
//     switch (e.target.id) {
//       case "username":
//         checkUsername();
//         break;
//       case "email":
//         checkEmail();
//         break;
//     }
//   })
// );