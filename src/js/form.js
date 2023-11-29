$(document).ready(function () {
  $(".phone").inputmask("+(999) 999-9999");
  // Add a custom method for phone number validation
  // $.validator.addMethod(
  //   "phoneUS",
  //   function (phone_number, element) {
  //     phone_number = phone_number.replace(/\s+/g, "");
  //     return (
  //       this.optional(element) ||
  //       (phone_number.length > 9 &&
  //         phone_number.match(/^\+(?:[0-9] ?){6,14}[0-9]$/))
  //     );
  //   },
  //   "Please specify a valid phone number"
  // );
  // $.validator.addMethod("phoneUS", function (phone_number, element) {
  //     phone_number = phone_number.replace(/\D/g, ""); // Remove non-numeric characters
  //     return this.optional(element) || phone_number.length >= 10;
  // }, "Please enter a valid phone number");

  $(".form-validate").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        number: true,
        // phoneUS: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        email: true,
        required: true,
        minlength: 3,
      },
      message: {
        required: true,
        minlength: 3,
      },
      message2: {
        required: true,
        minlength: 3,
      },
      message3: {
        required: true,
        minlength: 3,
      },
      date: {
        required: true,
      },
    },

    messages: {
      name: {
        required: "Будьласка введіть своє ім'я",
        minlength: "Мінімальна довжина 2 букви",
      },
      phone: {
        required: "Будьласка введіть свій номер телефону",
        // phoneUS: "Please enter a valid phone number",
      },
      email: {
        required: "Будьласка введіть свою пошту",
        email: "Будьласка введіть валідну пошту",
        minlength: "Мінімальна довжина 3 символи",
      },
      message: {
        required: "Будьласка опишіть свою ситуацію",
        minlength: "Мінімальна довжина 3 символи",
      },
      message2: {
        required: "Будьласка опишіть свою ситуацію",
        minlength: "Мінімальна довжина 3 символи",
      },
      message3: {
        required: "Будьласка опишіть свою ситуацію",
        minlength: "Мінімальна довжина 3 символи",
      },
      date: {
        required: "Будьласка вкажіть дату завантаження",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
