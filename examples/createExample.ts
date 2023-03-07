import { create, HNodeWithMethods, Vec3 } from '@hiberworld/code-kit';
import { clone } from '@hiberworld/code-kit-utils';
import { createSign, createSignContent } from './helpers/createSign';

export const createExample = (
  example: HNodeWithMethods,
  miniatureScale: number,
  pos: Vec3,
  header: string,
  body: string,
  direction: number
) => {
  const wrapper = create({ rotY: direction, x: pos[0], y: pos[1], z: pos[2] });

  const sign = create({
    x: -5,
    y: 5,
    z: 3,
  }).add(createSignContent(header, body));

  const miniature = create()
    .animate(
      {
        rotY: [0, 180, 360],
      },
      { duration: 8, loop: 'RESTART', easing: 'LINEAR' }
    )
    .add(
      create()
        .animate(
          {
            y: [0.8, 1.5, 0.8],
          },
          { duration: 2, easing: 'EASE_IN_OUT_QUAD' }
        )
        .add(create({ ...clone(example), scale: miniatureScale }))
    );

  const roadLength = 20;
  const distancePerItem = 3;
  const distance = roadLength * distancePerItem;

  const road = create({}).addMany(roadLength, index =>
    create('gpl_booster_plate_02', { scale: 2, z: index * distancePerItem, rotY: 180 })
  );

  const fileSign = createSign(header, body);

  const islandFloor = create('smooth_rock_01', {
    rotZ: 180,
    scaleX: 5,
    scaleY: 5,
    scaleZ: 10,
    y: -1,
  });

  const island = create({
    z: distance + 22,
  }).add(islandFloor, example, fileSign);

  const islandWrapper = create({
    x: -5,
  }).add(road, island);

  const podium = create('gpl_air_lift_01', { scale: 1.5 });

  wrapper.add(podium, sign, miniature, islandWrapper);

  return wrapper;
};
