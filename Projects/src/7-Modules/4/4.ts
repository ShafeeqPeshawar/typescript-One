/*

   if want to import every thing from the module

   every thing which 4-A.Modules is exporting are importeed and stored in the object Everything
*/

import * as EveryThing from "./4-A-Modules"


EveryThing.message()

let Ref12:EveryThing.CircleMM = new EveryThing.CircleMM()

Ref12.drawCircle()