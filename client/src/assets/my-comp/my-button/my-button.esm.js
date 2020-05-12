import { p as patchBrowser, b as bootstrapLazy } from './index-987d4632.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"value":[1],"primary":[4],"disabled":[32]},[[0,"click","handleClick"]]]]]], options);
});
