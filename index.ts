import { renderScene, Scene, HNode } from '@hiberworld/code-kit';
import { createExamples } from './examples';

/**
 * Create a world
 *
 * Use the transform prop to move the world one step down
 * so that the player is spawned above the ground
 */
const world: HNode = {
  transform: {
    pos: [0, -1, 0],
  },
  children: [],
};

/**
 * Create a floor to stand on
 *
 * Use a prefab which a premade object with specific properties like materials and shape.
 * Use the transform prop to scale it up so that the player can stand on it
 */
const floor: HNode = {
  prefabId: 'smooth_rock_cylinder_01',
  transform: { scale: [8, 0.88, 8] },
  children: [],
};

/**
 * Add the floor to the world
 *
 * This is done by adding it as a child of the world object
 */
world.children?.push(floor);

/**
 * Add examples to the world
 *
 * Check inside the examples folder to see how the examples are built
 *
 * Remove this line to get rid of the examples
 */
world.children?.push(createExamples());

/**
 * Create the scene and add the world object to it
 *
 * Also set the environment to `above_clouds_01`
 * You can change the environment by changing the string to something else
 */
const scene: Scene = {
  root: world,
  environment: 'above_clouds_01',
};

/**
 * Render the scene to the canvas
 */
renderScene('canvas', scene, { saveToFile: true });
