import * as basicScroll from 'basicscroll';

/** @type {NodeListOf<HTMLLIElement>} */
const teamItems = document.querySelectorAll('.team-list--animate .team-list__item');

teamItems.forEach((item) => {
  const instance = basicScroll.create({
    elem: item,
    from: 'middle-bottom',
    to: 'middle-middle',
    direct: true,
    props: {
      '--opacity': {
        from: 0,
        to: 1,
      },
    }
  });

  instance.start();
});
