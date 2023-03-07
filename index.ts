import { renderScene, Scene, create } from '@hiberworld/code-kit';
import { createExamples } from './examples/createExamples';

/**
 * Create a world
 *
 * Use the transform prop to move the world one step down
 * so that the player is spawned above the ground
 */
const world = create({ y: -1 });

/**
 * Create a floor to stand on
 *
 * Use a prefab which a premade object with specific properties like materials and shape.
 * Scale it up so that the player can stand on it
 * Lastly add it to the world
 */
create('smooth_rock_cylinder_01', { scaleX: 8, scaleY: 0.88, scaleZ: 8 }).addTo(world);

/**
 * Add examples to the world
 *
 * Check inside the examples folder to see how the examples are built
 *
 * Remove this line to get rid of the examples
 */
world.add(createExamples());

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
renderScene(scene, { saveToFile: true });
