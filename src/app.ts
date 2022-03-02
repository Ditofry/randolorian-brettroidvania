import kaboom from "kaboom";

kaboom();

add([
  text("hello, world"),
  pos(120, 80),
]);

const beanPng = new URL('game_assets/kaboom_defaults/bean.png', import.meta.url);
loadSprite("bean", beanPng.href);

add([
  sprite("bean"),
  pos(0, 0),
])
