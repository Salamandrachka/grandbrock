$(document).ready(function () {
  $(".phone").mask("+380 (99) 999 99 99");

  $(".form-validate").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        minlength: 19,
        maxlength: 19,
        phoneFormat: true,
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
        minlength: "Будьласка введіть повний номер телефону",
        phoneFormat:
          "Please enter a valid phone number in the format +380 (99) 999 99 99",
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

  $.validator.addMethod(
    "phoneFormat",
    function (value, element) {
      return /^(\+380 \(\d{2}\) \d{3} \d{2} \d{2})$/.test(value);
    },
    "Please enter a valid phone number in the format +380 (99) 999 99 99"
  );
  
});
