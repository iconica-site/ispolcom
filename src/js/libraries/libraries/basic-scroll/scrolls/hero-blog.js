import * as basicScroll from 'basicscroll';

/** @type {NodeListOf<HTMLLIElement>} */
const blogItems = document.querySelectorAll('.blog-list--animate .blog-list__item');

blogItems.forEach((item, index) => {
  const instance = basicScroll.create({
    elem: item,
    from: 'middle-bottom',
    to: 'middle-middle',
    direct: true,
    props: {
      '--translate': {
        from: 50 * (index % 3 + 1),
        to: 0,
      },
    }
  });

  instance.start();
});
