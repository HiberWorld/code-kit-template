import { renderScene, create } from "@hiberworld/code-kit";

/**
 * Create a world
 *
 * Use the transform prop to move the world one step down
 * so that the player is spawned above the ground
 *
 * NOTE: Make sure to press R for 'respawn' first time you land in the world.
 */
const world = create({ y: -1 });

/**
 * Create a ground to stand on
 *
 * 1. Use a prefab which a premade object with specific properties like materials and shape.
 * 2. Scale it up so that the player can stand on it
 * 3. Add some mist to it
 * 4. Add it to the world
 */
create("smooth_rock_cylinder_02", { scaleX: 3, scaleY: 0.88, scaleZ: 3 })
  .add(create("fx_particlesystem_mist_01"))
  .addTo(world);

/**
 * Add some water to the world
 */
create("water_plane_01", { y: -1, scaleX: 200, scaleZ: 200 })
  .add(create("plane_01", { y: -0.4 }))
  .addTo(world);

/**
 * Add a floating island with some shrubbery, a waterfall and an animated platform.
 * The platform is constructed as an animated group, to illustrate using a wall as
 * a platform by rotating it 90 degrees without having to counter-rotate the animation.
 */
const platform = create()
  .animate({ x: [-6, 0], y: [-9, 0] }, { duration: 4 })
  .add(create("en_m_wooden_platform_01_wall", { z: 3, rotX: 90 }));

create("smooth_rock_cylinder_02", { x: 20, y: 10 })
  .add(create("fx_particlesystem_waterfall_01", { x: -3.9, y: 1.9 }))
  .add(create("grass_tuft_02_cluster", { scale: 1, x: -3, z: 1, y: 1.5 }))
  .add(create("cherry_tree_01", { y: 2.8, scale: 1.5 }))
  .add(platform)
  .add(create("goal_01", { y: 2, x: 3, z: -2, material: "palette_02_gold" }))
  .add(create("particle_jar_of_fireflies_01"))
  .addTo(world);

/**
 * Add a sign with Getting started information
 */
create("sign_wooden_01_exclamtion", {
  x: -3,
  y: 2,
  rotY: -80,
  infoPanel: {
    header: "Welcome to Hiber Code-Kit!",
    body: "This is The Getting Started world. Press O to learn how to build it!",
    url: "https://hiberworld.github.io/codekit/getting-started/rendering-a-scene",
    isOpenInNewTabEnabled: true,
  },
}).addTo(world);

/**
 * Add a circle of cliffs in the horizon using the addMany helper method
 */
create()
  .addMany(10, (index, total) =>
    create({ rotY: (360 / total) * index }).add(
      create("cliff_01_wall", { x: 90, rotY: 90, scale: 4, y: -10 })
    )
  )
  .addTo(world);

/**
 * Add a spawn point with a custom material
 */
create("gpl_spawn_point_01", {
  material: "t_pearl_01",
  rotY: -80,
  y: 1,
  x: -10,
  z: 4,
}).addTo(world);

/**
 * Render the scene
 */
renderScene({ root: world, environment: "sunrise_01" });

/**
 * Next steps: Go to
 */
