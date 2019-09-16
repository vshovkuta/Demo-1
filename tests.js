import {test1} from './src/test1.js';
import {test3} from "./src/test3.js";
import {test4} from './src/test4.js';
import {test5} from "./src/test5.js";
import {test6} from './src/test6.js';
import {test7} from "./src/test7.js";

mocha.setup('bdd');

  test1();
  test3();
  test4();
  test5();
  test6();
  test7();

mocha.run();
