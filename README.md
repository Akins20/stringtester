# String Operations App

The **String Operations App** is a web-based application built with **Next.js** that allows users to perform various operations on strings. It provides a user-friendly interface where users can input a string, select an operation, and view the result in real-time. The app supports a wide range of string operations, including reversing, converting case, counting characters, checking for palindromes, and more. Additionally, it includes advanced features like detecting and executing functions within the input string.

---

## Features

### 1. **String Operations**
   - **Reverse**: Reverses the input string.
   - **Uppercase**: Converts the input string to uppercase.
   - **Lowercase**: Converts the input string to lowercase.
   - **Count Characters**: Counts the number of characters in the input string.
   - **Split Characters**: Splits the input string into individual characters.
   - **Check Palindrome**: Checks if the input string is a palindrome.
   - **Check for Object**: Detects if the input string contains a valid JSON object.
   - **Check for Boolean**: Detects if the input string contains a boolean value (`true` or `false`).
   - **Check for Array**: Detects if the input string contains a valid JSON array.
   - **Check for Number**: Detects if the input string contains numeric values.
   - **Check for Special Characters**: Detects if the input string contains special characters.
   - **Check for Function**: Detects if the input string contains a function, identifies its location, and executes it (with `var` and `let` forced into `const` for safer execution).

### 2. **Responsive Design**
   - The app is fully responsive and works seamlessly on both **mobile** and **desktop** screens.
   - On mobile devices, the layout stacks the input and result sections vertically.
   - On desktop devices, the layout displays the input and result sections side by side.

### 3. **Custom CSS Styling**
   - The app uses custom CSS for styling, ensuring a clean and modern design.
   - Features like hover effects, transitions, and gradients enhance the user experience.

### 4. **Dynamic Result Display**
   - The result of the selected operation is displayed in real-time.
   - The result section is scrollable, making it easy to view long outputs.

---

## How to Use

1. **Input a String**:
   - Enter your string in the textarea provided in the left column.

2. **Select an Operation**:
   - Choose an operation from the dropdown menu. The available operations include:
     - Reverse
     - Uppercase
     - Lowercase
     - Count Characters
     - Split Characters
     - Check Palindrome
     - Check for Object
     - Check for Boolean
     - Check for Array
     - Check for Number
     - Check for Special Characters
     - Check for Function

3. **Perform the Operation**:
   - Click the **Perform Operation** button to execute the selected operation.

4. **View the Result**:
   - The result of the operation will be displayed in the right column. If the result is an object or array, it will be formatted for easy readability.

---

## Installation

To run this application locally, follow these steps:

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Akins20/stringtester.git
   cd string-operations-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Open the App**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure

```
string-operations-app/
├── public/                  # Static assets
├── src/
│   ├── pages/               # Next.js pages
│   │   ├── index.js         # Homepage component
│   ├── styles/              # CSS files
│   │   ├── Homepage.module.css # Custom CSS for the homepage
│   ├── utils/               # Utility functions
│   │   ├── utils.js         # String operation functions
├── package.json             # Project dependencies
├── README.md                # Project documentation
```

---

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **CSS Modules**: For scoped and modular CSS styling.
- **JavaScript**: For implementing the logic and functionality of the app.

---

## Customization

### Adding New Operations
To add a new operation:
1. Open the `utils.js` file in the `src/utils/` directory.
2. Add a new function to perform the desired operation.
3. Update the `handleOperation` function in the `Homepage` component to include the new operation.

### Styling
To customize the styling:
1. Open the `Homepage.module.css` file in the `src/` directory.
2. Modify the CSS classes as needed.

---

## Example Inputs and Outputs

### Example 1: Reverse a String
- **Input**: `Hello, World!`
- **Operation**: Reverse
- **Output**: `!dlroW ,olleH`

### Example 2: Check for Object
- **Input**: `{"name": "John", "age": 30}`
- **Operation**: Check for Object
- **Output**: 
  ```
  The string contains an object! {
    "name": "John",
    "age": 30
  }
  ```

### Example 3: Check for Function
- **Input**: 
  ```javascript
  function greet() {
    console.log("Hello, world!");
  }
  greet();
  ```
- **Operation**: Check for Function
- **Output**: 
  ```
  Function "greet" found and executed.
  ```

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Next.js** for providing a powerful framework for building React applications.
- **Tailwind CSS** for inspiration on responsive design and utility-first CSS.

---

## Contact

For questions or feedback, please reach out to:

- **Name**: [ogunbiye@gmail.com](mailto:ogunbiye@gmail.com)
- **GitHub**: [Akins20](https://github.com/Akiins20)

---

Enjoy using the **String Operations App**! 🚀