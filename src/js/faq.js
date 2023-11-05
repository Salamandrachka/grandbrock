  // const accordionItemHeaders = document.querySelectorAll(
  //   ".section-faq__question"
  // );

  // accordionItemHeaders.forEach((accordionItemHeader) => {
  //   accordionItemHeader.addEventListener("click", (event) => {
  //     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

  //     const currentlyActiveAccordionItemHeader = document.querySelector(
  //       ".section-faq__question.active"
  //     );
  //     if (
  //       currentlyActiveAccordionItemHeader &&
  //       currentlyActiveAccordionItemHeader !== accordionItemHeader
  //     ) {
  //       currentlyActiveAccordionItemHeader.classList.toggle("active");
  //       currentlyActiveAccordionItemHeader.nextElementSibling.classList.remove(
  //         "open"
  //       );
  //     }
  //     accordionItemHeader.classList.toggle("active");
  //     const accordionItemBody = accordionItemHeader.nextElementSibling;
  //     if (accordionItemHeader.classList.contains("active")) {

  //       accordionItemBody.classList.add("open");
  //     } else {

  //       accordionItemBody.classList.remove("open");
  //     }
  //   });
  // });


    const faqs = document.querySelectorAll(
    ".section-faq__block"
  );

  faqs.forEach( faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    })
  })