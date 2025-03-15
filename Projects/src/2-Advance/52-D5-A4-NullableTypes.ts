/*

3️⃣ Optional Parameters (? vs. undefined)

    Instead of explicitly adding undefined, you can use ?:

*/

function printMessage(message?: string) {
    console.log(message ?? "Default message");
  }
  
  printMessage("Hello!"); // Hello!
  printMessage();         // Default message

    // The ? makes message optional (same as message: string | undefined).
    // The ?? (nullish coalescing operator) ensures a default value is used 
    // when null or undefined is passed.


/*

    The nullish coalescing operator (??) in TypeScript is used to provide a default value when 
    dealing with null or undefined. 
    It is similar to the logical OR (||) operator but with a key difference:

    || returns the right-hand operand if the left-hand operand is falsy (false, 0, '', null, undefined, etc.).
    ?? returns the right-hand operand only if the left-hand operand is null or undefined.

    */

    /*
        In TypeScript (and JavaScript), falsy values are those that evaluate to false 
        when used in a boolean context (e.g., inside an if statement). 
        
        The falsy values in TypeScript are:

        1-  false – The boolean false value.
        2–  0 The number zero.
        3-  -0 Negative zero.
        5-  "" (empty string) – A string with no characters.
        6-  null – The absence of a value.
        7-  undefined – A variable that has not been assigned a value.
        8- NaN – "Not a Number," usually the result of invalid math operations.

        Any value that is not falsy is considered truthy. For example:
        - Non-zero numbers (1, -1, 3.14, Infinity, etc.)
        - Non-empty strings ("hello", "0", "false", etc.)
        - Objects ({}, [])
        - true
        - Functions

        
                ||
                || returns the right-hand operand if the left-hand operand is falsy (false, 0, '', null, undefined, etc.)
    */
        console.log("---- || ---")
        let data0:(number|string|undefined|null|boolean)
        data0="Shafeeq"
        console.log(data0||"London") // will print Shafeeq

        data0=""
        console.log(data0||"London") // will print London

        data0=0
        console.log(data0||"London") // will print London
        
        data0=null
        console.log(data0||"London") // will print London

        data0=undefined
        console.log(data0||"London") // will print London

    /*
                
    
            ??
            ?? returns the right-hand operand only if the left-hand operand is null or undefined.
    */

            console.log("---- ?? ---")    
            let data1:(string|undefined|null|boolean)

            data1="Shafeeq"
            console.log(data1??"hello") // will print Shafeeq
            console.log("-------------------")
            
            data1=undefined
            console.log(data1??"hello") // will print Hello
            console.log("-------------------")

            data1=null
            console.log(data1??"hello") // will print Hello
            console.log("-------------------")

            data1=false
            console.log(data1??"hello") // will print false
            console.log("-------------------")


    
