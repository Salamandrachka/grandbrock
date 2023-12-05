$(document).ready(function () {
  $(".phone").inputmask("+380 (99) 999 99 99");

  // $(function () {
  //   $.jMaskGlobals.translation["9"] = $.jMaskGlobals.translation["0"]; // reset 0 on 9
  //   delete $.jMaskGlobals.translation["0"]; // delete 0 as key

  //   $(".phone").mask("+380 (99) 999 99 99"); // mask
  // });

  // $(".phone").mask("+380 (99) 999 99 99", {
  //   translation: {
  //     9: {
  //       pattern: /[0-9]/,
  //     },
  //   },
  // });
  // $(".phone").mask("+380 (99) 999 99 99");
  // Добавляем кастомное правило для телефонного номера

  $(".form-validate").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        phoneUS: true,
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
        phoneUS: "введіть свій номер телефону",
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
