# React Studies - Lesson 4: GitHub Profile Searcher

This project is part of a series of React studies, focusing on Lesson 4. It implements an interactive GitHub profile searcher that retrieves user or organization profiles and their repositories. Features include searching by username, displaying profile details (avatar, name, bio), listing repositories, and smooth UI animations. The app leverages React’s Context API for global state management, styled-components for modern styling, and asynchronous GitHub API integration.

The goal is to demonstrate advanced React techniques for real-world applications, including custom hooks, conditional rendering, API error handling, and mobile optimizations (e.g., removing tap highlight effects).

Live link: https://luizgdsmdev.github.io/react-studies/aula-4/

## ✨ Key Features

- **Profile Search**: Enter a GitHub username (e.g., "uber" or "octocat") to fetch user or organization profiles via the GitHub API.
- **Profile Display**: Shows avatar, name, login, bio, and other profile details.
- **Repository Listing**: Loads and displays repositories with names and descriptions, supporting both users and organizations.
- **Animations & UX**: Smooth hover effects with animated fill (ease-in-out), transitions, and autofill handling for inputs.
- **State Management**: Uses Context API to share data across components (e.g., input, button, and listing) without prop drilling.
- **Error & Loading Handling**: Displays loading states, API errors, and validates empty inputs.
- **Responsive & Mobile-Friendly**: Removes tap highlight effects on mobile and applies transparent input styles.

## 🛠️ Technologies and Techniques

This project employs modern React practices and tools. Below is a summary of the key technologies and techniques used:

### Technologies
- **React (v18+)**: Core framework for building the UI, using functional components and JSX.
- **JavaScript (ES6+)**: Base language, with async/await for API requests.
- **Styled-Components**: CSS-in-JS library for dynamic styling (e.g., `SearchInput`, `ProfileInfoHolder`, `RepositoriesInfoHolder`) with CSS animations (@keyframes for hover fill effects).
- **GitHub API**: External API integration for fetching user data (`/users/{username}`) and repositories (`/users/{username}/repos` or `/orgs/{username}/repos` for organizations like "uber").
- **gh-pages**: Static site deployment to GitHub Pages (via `predeploy` and `deploy` scripts in package.json).

### React Techniques
- **Hooks**:
  - `useState`: Local state management for input values (`inputValue`) and loading states (`isLoading`).
  - `useContext`: Custom hook (`useData`) for accessing the Context API and sharing global state (e.g., `data`, `repos`, `inputValue`).
- **Context API**: Global state management without prop drilling. A `DataProvider` centralizes states and functions like `fetchData` and `fetchRepos`, enabling components in different directories (e.g., `Search`, `SearchButtonComponent`, `RepositoriesHolder`) to access shared data.
- **Asynchronous Requests**: Uses `fetch` with async/await for API calls, with error handling (try/catch, `response.ok` checks) and loading states.
- **Conditional Rendering**: Logic to display loading, errors, or content based on state (e.g., `{isLoading && <p>Loading...</p>}` or `{repos.map((repo) => ...)}`).
- **CSS Animations**: Smooth transitions (`transition: width 0.3s ease-in-out`) and animations (@keyframes for input `::after` fill on hover). Uses `ease-in-out` for fluid UX.
- **Form Optimizations**:
  - Controlled inputs with `value` and `onChange`.
  - Autofill override (`:-webkit-autofill` with `background-color: transparent` and `-webkit-text-fill-color` to maintain styles).
  - Validation with `required` and alerts for empty inputs.
- **Mobile & Accessibility**: `-webkit-tap-highlight-color: transparent` to remove tap effects on buttons and inputs.
- **Component Structure**: Modularized components in separate files (e.g., `components/Search.js`, `components/style.js`) with props and Context for communication.

### Key Dependencies (from package.json)
- `react`, `react-dom`: React core.
- `styled-components`: Styling.
- `gh-pages`: Deployment.
- No external API libraries (uses native browser `fetch`).

## 📁 Project Structure

```
aula-4/
├── src/
│   ├── components/
│   │   ├── Search.js              # Input component for search
│   │   ├── SearchButtonComponent.js # Search button with onClick
│   │   ├── RepositoriesHolder.js   # Repository listing with map
│   │   ├── ProfileHolder.js        # Profile display (image + text)
│   │   └── style.js                # Styled-components styles
│   ├── context/
│   │   └── DataContext.js          # Context API with useState and fetch
│   ├── App.js                      # Main component with DataProvider
│   └── index.js                    # React entry point
├── package.json                    # Build and deploy scripts
├── README.md                       # This file
└── ... (other CRA files)
```

## 🚀 Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/luizgdsmdev/react-studies.git
   cd react-studies/aula-4
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   (Or `yarn install` if using Yarn.)

3. **Run Locally**:
   ```bash
   npm start
   ```
   - The app runs at `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   - Access at `https://luizgdsmdev.github.io/react-studies` (update `homepage` in package.json if needed).

## 📖 Usage

1. Open the app in a browser.
2. Enter a GitHub username in the input (e.g., "uber" for an organization or "octocat" for a user).
3. Click "Search".
4. View the loaded profile with avatar, details, and repository list.
5. Hover over the input to see the red fill animation.

Example for "uber":
- Profile: Displays Uber’s logo and organization bio.
- Repositories: Lists items like "ludwig" with descriptions.

## 🤝 Contributing

Feel free to fork the repository, create issues, or submit pull requests! As a study project, suggestions for improvements (e.g., adding more API fields, tests with Jest, or React Router routing) are welcome.

1. Fork the project.
2. Create a branch (`git checkout -b feature/new-feature`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GitHub API**: For public user and repository data.
- **React Documentation**: Foundation for hooks and Context API.
- **Styled-Components**: For efficient styling.
