"use client";

import { useState } from "react";
import styles from "./Homepage.module.css"; // Import the CSS module
import {
  reverseString,
  uppercaseString,
  lowercaseString,
  countCharacters,
  splitString,
  isPalindrome,
  containsObject,
  containsBoolean,
  containsArray,
  containsNumber,
  containsSpecialChars,
  containsFunction,
} from "@/utils/utils";

export default function Homepage() {
  const [inputString, setInputString] = useState("");
  const [operation, setOperation] = useState("reverse");
  const [result, setResult] = useState("");

  const handleOperation = () => {
    let output;
    switch (operation) {
      case "reverse":
        output = reverseString(inputString);
        break;
      case "uppercase":
        output = uppercaseString(inputString);
        break;
      case "lowercase":
        output = lowercaseString(inputString);
        break;
      case "count":
        output = countCharacters(inputString);
        break;
      case "split":
        output = splitString(inputString);
        break;
      case "palindrome":
        output = isPalindrome(inputString);
        break;
      case "object":
        output = containsObject(inputString);
        break;
      case "boolean":
        output = containsBoolean(inputString);
        break;
      case "array":
        output = containsArray(inputString);
        break;
      case "number":
        output = containsNumber(inputString);
        break;
      case "specialChars":
        output = containsSpecialChars(inputString);
        break;
      case "function":
        output = containsFunction(inputString);
        break;
      default:
        output = "Invalid operation";
    }

    // Handle the new return format
    if (typeof output === "object" && output !== null) {
      setResult(`${output.message} ${JSON.stringify(output, null, 2)}`);
    } else {
      setResult(output);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Left Column: Input and Controls */}
        <div className={styles.column}>
          <h1 className={styles.title}>String Operations App</h1>
          <textarea
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Enter a string"
            className={styles.inputField}
            cols={10}
            rows={8}
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className={styles.selectField}
          >
            <option value="reverse">Reverse</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="count">Count Characters</option>
            <option value="split">Split Characters</option>
            <option value="palindrome">Check Palindrome</option>
            <option value="object">Check for Object</option>
            <option value="boolean">Check for Boolean</option>
            <option value="array">Check for Array</option>
            <option value="number">Check for Number</option>
            <option value="specialChars">Check for Special Characters</option>
            <option value="function">Check for Function</option>
          </select>
          <button onClick={handleOperation} className={styles.button}>
            Perform Operation
          </button>
        </div>

        {/* Right Column: Result Display */}
        <div className={styles.column}>
          <div className={styles.resultContainer}>
            <h2 className={styles.resultTitle}>Result:</h2>
            <pre className={styles.resultText}>{result}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
