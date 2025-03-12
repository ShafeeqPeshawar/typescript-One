

/*

6-F-Modules folder is like a package
we sholdnt have to mentione the individual files from inside the package

but for this we need to make one change in the tsconfig.json file

"moduleResolution": "node", 

we have un comment
by default the moduleresolution is classic by un commenting ti we make it to NODE

*/


export  {message, CircleMM1, BoxMM1,LineMM1 } from "./6-F-Modules"
export {QAMessage1, QAMessage2,First ,QAMessage3} from "./6-F-Modules"
