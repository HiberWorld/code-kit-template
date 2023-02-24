import { create } from '@hiberworld/code-kit-utils';

export const createImagesExample = () => {
  const example = create();

  const imageWall = create({
    prefabId: 'cube_01',
    remoteTexture: {
      textureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYSNrvZLKn2lXb1_IYvM9bA88aNdnKncggy7chstn&s',
    },
    transform: {
      pos: [4, 0, 0],
      scale: [16 / 9, 1, 0.1],
    },
  });

  const imageWall2 = create({
    prefabId: 'cube_01',
    remoteTexture: {
      textureUrl:
        'https://images.ctfassets.net/jcfs1gimcmty/7mcRNmecRZ6zGobnQEUKhZ/e0c2bda3856279fe70eabd0dc2eb337b/hero.jpg?fm=jpg&q=75&w=3000&fl=progressive',
    },
    transform: {
      pos: [-4, 0, 0],
      scale: [16 / 9, 1, 0.1],
    },
  });

  const imageWall3 = create({
    prefabId: 'cube_01',
    remoteTexture: {
      textureUrl:
        'https://images.ctfassets.net/jcfs1gimcmty/7mcRNmecRZ6zGobnQEUKhZ/e0c2bda3856279fe70eabd0dc2eb337b/hero.jpg?fm=jpg&q=75&w=3000&fl=progressive',
    },
    transform: {
      pos: [0, 4, 0],
      scale: [16 / 9, 1, 0.1],
    },
  });

  example.add(imageWall, imageWall2, imageWall3);

  return example;
};
