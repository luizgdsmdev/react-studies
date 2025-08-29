# React Studies - Aula 3: Calculator

This repository contains the code for a calculator application developed as part of the "React Studies" project, specifically the third lesson (`aula-3`). The application is built using React and styled with `styled-components`, demonstrating basic React concepts and component-based architecture.

## Technologies and Techniques

### Technologies
- **React**: A JavaScript library for building user interfaces, used to create reusable components for the calculator.
- **React Scripts**: A set of scripts for creating and managing a React project, including development server and build tools.
- **Styled-Components**: A CSS-in-JS library for styling React components with scoped and dynamic styles.
- **JavaScript (ES6+)**: The primary programming language, utilizing modern features like arrow functions and modules.
- **HTML/CSS**: Used via React's JSX syntax and styled-components for the structure and presentation of the calculator.
- **npm**: Package manager for installing dependencies and running scripts.

### Techniques
- **Component-Based Architecture**: The calculator is broken into reusable components (e.g., `Visor`, `ButtonWrapper`) to promote modularity.
- **State Management**: Basic state management in React to handle calculator operations (e.g., input values, results).
- **Event Handling**: Implementation of event listeners for button clicks and user interactions.
- **Build and Deployment**: Use of `react-scripts` for building the project and `gh-pages` for deploying to GitHub Pages.

## Installation

To run this project locally on your machine, follow these steps:

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (version 14.x or higher recommended). Download it from [nodejs.org](https://nodejs.org/).
- **npm**: Comes with Node.js, used for managing packages.
- **Git**: Optional, but recommended for cloning the repository. Download from [git-scm.com](https://git-scm.com/).

### Steps
1. **Clone the Repository**
   - Open a terminal and run:
     ```bash
     git clone https://github.com/luizgdsmdev/react-studies.git
     ```
   - Navigate to the `aula-3` folder:
     ```bash
     cd react-studies/aula-3
     ```

2. **Install Dependencies**
   - Run the following command to install all required packages:
     ```bash
     npm install
     ```

3. **Start the Development Server**
   - Launch the app in development mode:
     ```bash
     npm start
     ```
   - Open your browser and visit `http://localhost:3000` to see the calculator. (Note: If the `homepage` field in `package.json` affects the URL, it may appear as `http://localhost:3000/react-studies/aula-3`. Adjust accordingly or temporarily remove the `homepage` field for local testing.)

4. **Build for Production**
   - To create an optimized production build, run:
     ```bash
     npm run build
     ```
   - This generates a `build` folder with the production-ready files.

## Deployment
- The project is deployed to GitHub Pages at `https://luizgdsmdev.github.io/react-studies/aula-3/`.
- To redeploy after changes, ensure the `homepage` field in `package.json` is set to `"https://luizgdsmdev.github.io/react-studies/aula-3"`, then run:
  ```bash
  npm run deploy
- Note: The `deploy` script uses `gh-pages` and requires the repository to be properly configured with a `gh-pages` branch.

## Project Structure
- `public/`: Contains the `index.html` file and static assets.
- `src/`: Contains the React components and styles (e.g., `App.js`, `styles.js` or similar files using `styled-components`).
- `build/`: Generated after `npm run build`, contains the production build files.

## Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Ensure you follow the project structure and test locally before submitting.

## License
This project is open-source and available under the MIT License.
