/*

we have to import the export from 2 modules

import * as EveryThing1 from "./6-A-Modules"
import * as EveryThing2 from "./6-B-Modules"

*/

import * as EveryThing1 from "./6-A-Modules"
import * as EveryThing2 from "./6-B-Modules"



EveryThing1.message()

let Ref12:EveryThing1.CircleMM1 = new EveryThing1.CircleMM1()

Ref12.drawCircle()
EveryThing2.QAMessage3()