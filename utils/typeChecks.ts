/**
 * Utility functions for checking variable types in TypeScript
 */

/**
 * Check if a value is undefined
 * @param value - The value to check
 * @returns boolean indicating if the value is undefined
 */
export function isUndefined(value: unknown): boolean {
  // Method 1: Direct comparison (most common)
  return value === undefined;
}

/**
 * Check if a value is defined (not undefined)
 * @param value - The value to check
 * @returns boolean indicating if the value is defined
 */
export function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

/**
 * Examples of different ways to check for undefined values
 */
export function exampleUsage() {
  let someVar;
  const someObject = { prop: "value" };
  
  // Method 1: Direct comparison (===)
  if (someVar === undefined) {
    console.log("someVar is undefined");
  }
  
  // Method 2: Using typeof
  if (typeof someVar === 'undefined') {
    console.log("someVar is undefined using typeof");
  }
  
  // Method 3: Optional chaining for nested properties
  const value = someObject?.nonExistentProp?.nestedProp;
  // value will be undefined without throwing an error
  
  // Method 4: Nullish coalescing operator (??) for default values
  const displayValue = someVar ?? "Default Value";
  
  // Method 5: Using the utility functions
  if (isUndefined(someVar)) {
    console.log("Using isUndefined utility");
  }
  
  const array = [1, undefined, 3];
  const definedNumbers = array.filter(isDefined);
  // TypeScript knows definedNumbers is number[]
}
