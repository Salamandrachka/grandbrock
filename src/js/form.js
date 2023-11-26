$(document).ready(function () {
  $(".phone").inputmask("+(999) 999-9999");

  $(".form-validate").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        number: true,
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
      phone: "Будьласка введіть свій номер телефону",
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
