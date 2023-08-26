  const accordionItemHeaders = document.querySelectorAll(
    ".section__faq-block-question"
  );
  const answer = document.querySelector(".section__faq-block-answer-wrapper");

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".section__faq-block-question.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.classList.remove(
          "open"
        );
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {

        accordionItemBody.classList.add("open");
      } else {

        accordionItemBody.classList.remove("open");
      }
    });
  });
