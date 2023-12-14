# JavaScript-

1. ## JavaScript Array Methods

   - **Array Length:** Returns the size of an array.
   - **Array toString()**: Converts an array to a comma-separated string of array values.
   - **Array pop():** Removes the last element from an array.
   - **Array push():** Adds a new element to the end of an array.
   - **Array shift():** Removes the first element and shifts other elements to a lower index.
   - **Array unshift():** Adds a new element to the beginning of an array and unshifts older elements.
   - **Array join():** Joins all array elements into a string, similar to toString(), but with a customizable separator.
   - **Array delete():** Deletes array elements, leaving undefined holes. Avoid using; use pop() or shift() instead.
   - **Array concat():** Creates a new array by merging existing arrays.
   - **Array flat():** Reduces array dimensionality by flattening sub-arrays to a specified depth.
   - **Array splice():** Adds new items to an array or removes items with optional parameters.
   - **Array slice():** Slices out a portion of an array into a new array without modifying the original.
   - **Automatic toString():** JavaScript automatically converts arrays to comma-separated strings when a primitive value is expected.
   - **Finding Max and Min Values:** Explains that there are no built-in functions for this.

2. ## JavaScript Functions 1
   A JavaScript function is a block of code designed to perform a specific task. It is executed when invoked or called.
      
      - **Syntax:** It is defined with the function keyword, followed by a name, and parentheses (), parameters are also listed inside the parentheses i.e function name(parameters). Function names can include letters, digits, underscores, and dollar signs. Code to be executed is enclosed in curly brackets {} e.g:
          ```
           function name(parameters){
                code to be executed
           }
           ```
      - **Parameters and Arguments:** Parameters are variables listed in the function definition while Arguments are the values passed to the function when it is invoked. They act as local variables inside the function.
      - **Invocation:** The function code executes when something invokes or calls the function. It can occur on events, from JavaScript code, or automatically (self-invoked).
      - **Return:** A return statement stops function execution. If invoked from a statement, execution returns to the code after the invoking statement.
      - **Purpose of Functions:** For writing code that can be used multiple times.We can use the same code with different arguments to produce different results with function.
      - **() Operator:** The () operator invokes or calls the function.
      - **Functions and Variables:** Functions can be used like variables in formulas, assignments, and calculations e.g:
         ```
         let text = "The temperature is " + toCelsius(77) + " Celsius";
         ```
      - **Local Variables:** Variables declared within a function are local to that function. They can only be accessed within the function.

3. ## JavaScript Functions 2

   Functions are blocks of code designed for specific tasks, executed when called.

      - **First-Class Objects:** Functions in JavaScript are first-class objects, enabling them to be passed, returned, and assigned like other objects.
      - **Return Value:** Functions return a value; if not specified, it defaults to undefined.
      - **Parameters and Arguments:** Functions use parameters (in declaration) and arguments (in invocation). Arguments are passed by value.
      - **Function Types:** JavaScript has regular functions, generator functions, async functions, and async generator functions.
      - **Function Definition:**
        - ``Declaration: function myFunction() { ... }``
        - ``Expression: const myFunction = function() { ... };``
        - ``Constructor: const myFunction = new Function("x", "y", "return x * y");``
      - **Special Syntaxes:**
        - ``Arrow Function: const multiply = (x, y) => x * y;``
        - ``Method: const obj = { multiply(x, y) { return x * y; } };``
      - **Function Scope:** Functions create a local scope; variables declared within are local and can't be accessed outside.
      - **Block-Level Functions:** In strict mode, functions inside blocks are scoped to that block.
      - **Function Parameters:** Default parameters, rest parameters, and destructuring enhance function parameter handling.
      - **Getter and Setter Functions:** Allow defining accessor properties for objects.
      - **Block-Level Functions in Non-Strict Mode:** Generally discouraged due to compatibility risks.
      - **Checking Function Existence:** We can determine whether a function exists by using the typeof operator. e.g:
         ```
         if (typeof window.noFunc === "function") { ... }
         ```

4. ## JavaScript Control Flow Statements

   Control flow statements in JavaScript, including if/else statements, switch statements, and loops, are pivotal for directing program execution based on conditions.

      - **If/Else Statements:** Execute code based on a true or false condition.
      - **Switch Statements:** Execute code based on the value of a variable.
      - **Loops:** Execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript: for loops and while loops.
      - **While and Do…While Loops:** The while loop executes a specified statement as long as the test condition evaluates to true. The do…while loop will first execute the code, then continue while the condition remains true.

   JavaScript conditionals handle multiple conditions using logical operators like ``&&``, ``||``, and ``!``.
   ``==`` performs type conversion, while ``===`` checks strict equality without type conversion.
   Loops can be stopped using the break statement; continue skips the current iteration.

5. ## JavaScript Functions 3

   Functions are essential in JavaScript, serving as building blocks for reusable code. Key concepts include:

     - **Function Declaration:**
       - Syntax: ``function name(parameters) { /* code */ }``
        - Functions prevent code duplication and enhance maintainability.
     - **Local Variables:** Variables declared inside a function are local and not visible outside. Functions can access and modify outer variables if not shadowed by locals.
    - **Global Variables:** Variables declared outside functions are global and accessible from any function.
    - **Parameters:** Functions can receive data through parameters e.g: 
       ```
       function showMessage(from, text) { alert(from + ': ' + text); }
       ```
    - **Default Values:** Default values for parameters prevent errors when not provided e.g: 
       ```
       function showMessage(from, text = "no text given") { /* code */ }
       ```
    - **Return Statement:** Functions can return a value to the calling code using the return statement e.g:
       ```
       function sum(a, b) { return a + b; }
       ```
    - **Function Naming:** Use clear, concise, and descriptive names for functions. Common prefixes include ``get…``, ``calc…``, ``create…``, and ``check…``
    - **One Action per Function:** Functions should have a single, clear purpose. Avoid combining multiple independent actions in one function.
    - **Ultrashort Function Names:** Exceptions like ``$`` in jQuery are rare; generally, favor concise and descriptive names.
    - **Functions == Comments:** Functions serve as self-describing blocks of code, enhancing readability.
