import { create } from '@hiberworld/code-kit-utils';

export const createDocsExample = () => {
  // Create documentation area
  const documentation = create();

  // Create first row of bookshelves
  for (let i = 0; i < 5; i++) {
    create('en_p_bookshelf', { x: -4 + i * 2, rotY: 180 }).addTo(documentation);
  }

  // Create second row of bookshelves
  for (let i = 0; i < 3; i++) {
    create('en_p_bookshelf', { x: -2 + i * 2, y: 3, rotY: 180 }).addTo(documentation);
  }

  return documentation;
};
