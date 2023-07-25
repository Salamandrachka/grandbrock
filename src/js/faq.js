    // Получаем все элементы с вопросами и ответами
  const faqBlocks = document.querySelectorAll(".section__faq-block");

  // Обрабатываем клик на каждый элемент с вопросом
  faqBlocks.forEach((faqBlock) => {
    const question = faqBlock.querySelector(".section__faq-block-question");
    const answer = faqBlock.querySelector(".section__faq-block-answer");
    const angleDown = question.querySelector(".fa-angle-down");
    const angleUp = question.querySelector(".fa-angle-up");

    angleUp.style.display = "none"; // Скрываем стрелку вверх при загрузке страницы

    question.addEventListener("click", () => {
      // Переключаем класс активности для ответа
      answer.classList.toggle("active");

      // Переключаем свойство display для стрелок
      if (angleDown.style.display === "none") {
        angleDown.style.display = "inline";
        angleUp.style.display = "none";
      } else {
        angleDown.style.display = "none";
        angleUp.style.display = "inline";
      }
    });
  });
