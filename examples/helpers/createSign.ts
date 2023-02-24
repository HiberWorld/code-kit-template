import { create } from '@hiberworld/code-kit-utils';

export const createSignContent = (header: string, body: string) => {
  const signContent = create({
    transform: {
      pos: [0, 0.84, 0.2],
      scale: [0.9, 0.57, 0.01],
    },
    infoPanel: {
      header,
      body,
    },
    remoteTexture: {
      textureUrl: `https://placehold.co/200x100/111/FFF/JPG?text=${header}`,
    },
    rendering: { meshID: 'en_b_cube_01' },
  });
  return signContent;
};

export const createSign = (header: string, body: string) => {
  const signContent = createSignContent(header, body);

  const sign = create({
    transform: {
      pos: [-1, 0, -3],
      rot: [0, 180, 0],
    },
    infoPanel: {
      header,
      body,
    },
    rendering: { meshID: 'en_p_wooden_sign_01', materialID: 'palette_01_black' },
  }).add(signContent);

  return sign;
};
