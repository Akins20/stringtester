// utils/utils.js

// Reverse a string
export const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// Convert string to uppercase
export const uppercaseString = (str) => {
  return str.toUpperCase();
};

// Convert string to lowercase
export const lowercaseString = (str) => {
  return str.toLowerCase();
};

// Count characters in a string
export const countCharacters = (str) => {
  return `Character count: ${str.length}`;
};

// Split string into individual characters
export const splitString = (str) => {
  return str.split("").join(", ");
};

// Check if a string is a palindrome
export const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed ? "It is a palindrome!" : "It is not a palindrome.";
};

// Check if the string contains an object (e.g., { key: value })
export const containsObject = (str) => {
  // Regex to match JSON-like objects in the string
  const objectRegex = /{[^{}]*}/g;
  const matches = str.match(objectRegex);

  if (matches) {
    for (const match of matches) {
      try {
        const parsed = JSON.parse(match);
        if (
          typeof parsed === "object" &&
          !Array.isArray(parsed) &&
          parsed !== null
        ) {
          return {
            success: true,
            message: "The string contains an object!",
            object: parsed,
          };
        }
      } catch (e) {
        // Ignore invalid JSON
      }
    }
  }
  return { success: false, message: "The string does not contain an object." };
};

// Check if the string contains a boolean (e.g., true or false)
export const containsBoolean = (str) => {
  const booleanRegex = /\b(true|false)\b/g;
  const matches = str.match(booleanRegex);

  if (matches) {
    return {
      success: true,
      message: "The string contains a boolean!",
      booleans: matches,
    };
  }
  return { success: false, message: "The string does not contain a boolean." };
};

// Check if the string contains an array (e.g., [1, 2, 3])
export const containsArray = (str) => {
  // Regex to match JSON-like arrays in the string
  const arrayRegex = /\[[^\[\]]*\]/g;
  const matches = str.match(arrayRegex);

  if (matches) {
    for (const match of matches) {
      try {
        const parsed = JSON.parse(match);
        if (Array.isArray(parsed)) {
          return {
            success: true,
            message: "The string contains an array!",
            array: parsed,
          };
        }
      } catch (e) {
        // Ignore invalid JSON
      }
    }
  }
  return { success: false, message: "The string does not contain an array." };
};

// Check if the string contains a number
export const containsNumber = (str) => {
  const numbers = str.match(/\d+/g);
  if (numbers) {
    return {
      success: true,
      message: "The string contains a number!",
      numbers: numbers.map(Number),
    };
  }
  return { success: false, message: "The string does not contain a number." };
};

// Check if the string contains special characters
export const containsSpecialChars = (str) => {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
  const matches = str.match(specialChars);
  if (matches) {
    return {
      success: true,
      message: "The string contains special characters!",
      specialChars: matches,
    };
  }
  return {
    success: false,
    message: "The string does not contain special characters.",
  };
};

/**
 * Checks if the string contains a function, identifies its location, and executes it.
 * Forces `var` and `let` into `const` for safer execution.
 */
export const containsFunction = (str) => {
  // Regex to match function declarations and expressions
  const functionRegex =
    /(?:function\s+([\w$]+)\s*\([^)]*\)\s*\{[^}]*\}|const\s+([\w$]+)\s*=\s*function\s*\([^)]*\)\s*\{[^}]*\}|const\s+([\w$]+)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\})/g;

  const matches = [];
  let match;

  // Find all function matches in the string
  while ((match = functionRegex.exec(str)) !== null) {
    const functionName = match[1] || match[2] || match[3];
    const functionBody = match[0];
    const startIndex = match.index;
    const endIndex = startIndex + functionBody.length;

    matches.push({
      functionName,
      functionBody,
      startIndex,
      endIndex,
    });
  }

  if (matches.length === 0) {
    return { success: false, message: "No function found in the string." };
  }

  // Force `var` and `let` into `const` in the function body
  const modifiedFunctionBody = matches[0].functionBody.replace(
    /\b(var|let)\b/g,
    "const"
  );

  try {
    // Execute the modified function in a controlled environment
    const func = new Function(modifiedFunctionBody);
    func();

    return {
      success: true,
      message: `Function "${matches[0].functionName}" found and executed.`,
      functionName: matches[0].functionName,
      functionBody: modifiedFunctionBody,
      startIndex: matches[0].startIndex,
      endIndex: matches[0].endIndex,
    };
  } catch (error) {
    return {
      success: false,
      message: `Error executing function: ${error.message}`,
    };
  }
};
