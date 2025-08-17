import * as basicScroll from 'basicscroll';

/** @type {NodeListOf<HTMLLIElement>} */
const serviceItems = document.querySelectorAll('.services-list--animate .services-list__item');

serviceItems.forEach((item) => {
  const instance = basicScroll.create({
    elem: item,
    from: 'middle-bottom',
    to: 'top-middle',
    direct: true,
    props: {
      '--translate': {
        from: 10,
        to: 0,
      },
      '--opacity': {
        from: 0,
        to: 1,
      },
    }
  });

  instance.start();
});

/** @type {NodeListOf<HTMLParagraphElement>} */
const serviceTexts = document.querySelectorAll('.services-list--animate .service-card__text');

serviceTexts.forEach((text) => {
  const instance = basicScroll.create({
    elem: text,
    from: 'bottom-bottom',
    to: 'top-middle',
    direct: true,
    props: {
      '--translate': {
        from: 20,
        to: 0,
      },
      '--opacity': {
        from: 0,
        to: 1,
      },
    }
  });

  instance.start();
});
