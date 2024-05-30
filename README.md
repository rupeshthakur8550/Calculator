# React Calculator

This is a simple calculator application built with React. The application is designed to be responsive, functioning well on both mobile and desktop devices. 

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Percentage calculation.
- Clear (`CLR`) and All Clear (`AC`) functionalities.
- Responsive design that adapts to various screen sizes.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/react-calculator.git
    cd react-calculator
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

Your application will be running at `http://localhost:5173`.

## Live Demo

Check out the live demo of the application [here](https://calculator-weld-gamma.vercel.app/).

## Usage

### Buttons

- **AC (All Clear):** Resets the current expression and result, and clears the history.
- **CLR (Clear):** Clears the current expression without affecting the result or history.
- **⌫ (Backspace):** Removes the last character of the current expression.
- **= (Equals):** Evaluates the current expression and displays the result.

### Keyboard Support

The calculator supports keyboard inputs for the following keys:

- Numbers (`0-9`)
- Operators (`+`, `-`, `*`, `/`)
- Decimal point (`.`)
- Enter (`=`) to evaluate the expression
- Backspace (`Backspace`) to remove the last character
- Clear (`Delete`) to clear the current expression

## Project Structure

- `src/components/Pages/Calculator.js`: The main calculator component.
- `src/components/Input.js`: Handles the input buttons and user interactions.
- `src/components/Output.js`: Displays the current expression and result.
- `src/context/DataContext.js`: Context to manage calculator data and state.

