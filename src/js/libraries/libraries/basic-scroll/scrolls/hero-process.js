import * as basicScroll from 'basicscroll';

/** @type {NodeListOf<HTMLParagraphElement>} */
const processTexts = document.querySelectorAll('.process--animate :is(.process-information, .process__text)');

processTexts.forEach((text) => {
  const instance = basicScroll.create({
    elem: text,
    from: 'top-bottom',
    to: 'bottom-bottom',
    direct: true,
    props: {
      '--translate': {
        from: 30,
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

/** @type {NodeListOf<HTMLLIElement>} */
const processCards = document.querySelectorAll('.process--animate .process-card');

processCards.forEach((card) => {
  const instancePrimary = basicScroll.create({
    elem: card,
    from: 'bottom-bottom',
    to: 'top-middle',
    direct: true,
    props: {
      '--translate-1': {
        from: 10,
        to: 0,
      },
      '--opacity-1': {
        from: 0,
        to: 1,
      },
    }
  });

  const instanceSecondary = basicScroll.create({
    elem: card,
    from: 'top-middle',
    to: 'middle-middle',
    direct: true,
    props: {
      '--translate-2': {
        from: 10,
        to: 0,
      },
      '--opacity-2': {
        from: 0,
        to: 1,
      },
    }
  });

  instancePrimary.start();
  instanceSecondary.start();
});
