# React Studies - Lesson 5: Login Form with Validation and Fake API

This repository is part of a React study series, focusing on Lesson 5. Here, we implemented a complete login form with form validation, state management, routing, and integration with a fake API to simulate user authentication. The project demonstrates practical frontend development concepts with React, including custom error handling and redirection after successful login.

## Overview
In Lesson 5, we built a login form inspired by modern designs (e.g., DIO - Digital Innovation One), featuring:
- Form field validation (email and password) using **React Hook Form** and **Zod**.
- Integration with a fake API using **Axios** to fetch and validate users.
- Backend simulation with **json-server** for CRUD operations on a JSON file.
- Routing with **React Router DOM** for navigation between pages (login and profile).
- Custom error handling (e.g., "Invalid email or password") displayed in the form.
- Redirection to the profile page (`/profile`) after successful login, passing user data via navigation state.

The project runs locally with a React development server (port 3000) and a fake API server (port 4000 via json-server). The frontend can be deployed to GitHub Pages, but the fake backend requires a separate host (e.g., My JSON Server).

## Technologies Used
- **React**: Core framework for building user interfaces.
- **React Hook Form**: Efficient form management with integrated validation.
- **Zod**: Robust schema validation for email and password fields.
- **Axios**: HTTP client for asynchronous API requests (GET for user fetching).
- **json-server**: RESTful fake server to simulate a backend using a JSON file (`user-list.json`).
- **React Router DOM**: For navigation between pages (e.g., from `/login` to `/profile`).
- **Styled-Components**: For styling components (e.g., `Form`, `FormButton`, `AuthButton`).
- **Create React App**: Base project structure.

Other dependencies: `@hookform/resolvers` (to integrate Zod with React Hook Form).

## Project Structure
- **src/components/LoginForm.js**: Main login form component with validation, authentication, and redirection.
- **src/pages/Profile.js**: Profile page that receives and displays logged-in user data (via `useLocation` from React Router).
- **src/services/user-list.json**: Fake data file for json-server (contains an array of users with `id`, `email`, and `password`).
- **src/style.js**: Styled components (e.g., `FormWrapper`, `FormInput`, `FormButton`).
- **src/HeaderButton.js** (optional): Reusable button for the form.
- **src/types.js** (if applicable): Type definitions (but the project uses plain JavaScript).
- **src/App.js**: Root component with routing.
- **src/index.js**: Entry point with React Router configuration (using `HashRouter` for static deploy compatibility).
- **package.json**: Scripts, API proxy, and dependencies configuration.

Example `user-list.json` structure:
```json
{
  "users": [
    { "id": 1, "email": "joao@email.com", "password": "123456" },
    { "id": 2, "email": "maria@email.com", "password": "654321" }
  ]
}
```
## Installation and Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/luizgdsmdev/react-studies.git
   cd react-studies/aula-5
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   - This installs React Hook Form, Zod, Axios, json-server, React Router DOM, and Styled-Components.

3. **Set up json-server (fake API)**:
   - Ensure `src/services/user-list.json` exists with user data.
   - The script is already in `package.json`: `"server": "json-server --watch src/services/user-list.json --port 4000"`.

4. **Set up proxy** (to avoid CORS issues):
   - In `package.json`, add:
     ```json
     "proxy": "http://localhost:4000"
     ```

## How to Run
1. **Start the fake API server (json-server)**:
   ```bash
   npm run server
   ```
   - Check http://localhost:4000/users to verify data.

2. **Start the React development server**:
   ```bash
   npm start
   ```
   - Access http://localhost:3000 (or http://localhost:3000/#/login if using HashRouter).
   - The proxy redirects requests like `axios.get('/users')` to http://localhost:4000/users.

3. **Test the flow**:
   - Go to the login page.
   - Enter a valid email and password (e.g., `joao@email.com` / `123456`).
   - Click "Login": It should redirect to `/profile` and display user data.
   - Enter invalid credentials: It should display the custom error "Invalid email or password".
   - Zod validations: Email must be valid; password must be at least 6 characters.

## Key Features
- **Form Validation**: Using Zod for schemas and React Hook Form for management.
- **Fake Authentication**: Fetches users from json-server via Axios and validates credentials.
- **Custom Errors**: Uses `setError` from React Hook Form to display messages like "Invalid email or password".
- **Redirection**: Navigates to `/profile` after login, passing user data via `navigate` with `state`.
- **Profile Page**: Displays user data (email and ID) using `useLocation`.
- **Styling**: Responsive components with SVG icons and company images.

## Deployment
- **Frontend (React) on GitHub Pages**:
  1. Install `gh-pages`: `npm install --save-dev gh-pages`.
  2. Add scripts to `package.json`:
     ```json
     "homepage": "https://yourUser.github.io/repoName",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build -b gh-pages --dest",
       "server": "json-server --watch users.json --port 4000"
     }
     ```
  3. Run `npm run deploy`.
  4. Configure Pages in GitHub (select `gh-pages` branch).
  - Use `HashRouter` in `index.js` to ensure routes like `/profile` work in static sites (e.g., `/#/profile`).

- **Backend Fake (json-server)**:
  - GitHub Pages does not support servers. Use:
    - **My JSON Server**: Update the json link to `https://raw.githubusercontent.com/yourUser/repoName/users.json`.
    - Update Axios in the code: `axios.get('https://raw.githubusercontent.com/yourUser/repoName/users.json')`.
    - Alternatives: Render.com or Replit for hosting json-server for free.

## Common Issues and Solutions
- **404 Error on Axios Requests**: Ensure json-server is running and the proxy is set. Use absolute URLs for testing.
- **CORS in Deployment**: Use a remote backend like My JSON Server to avoid CORS issues.
- **Routing in gh-pages**: Use `HashRouter` to prevent 404 errors on routes like `/profile`.
- **Zod Validations**: Errors like "Use a valid email" or "Password must be at least 6 characters" are displayed automatically.
- **Git Issues**: If you encounter "unrelated histories", use `git pull origin master --allow-unrelated-histories`.

## Contributing
Feel free to fork, clone, and contribute! This is a study project, so suggestions for improvements (e.g., adding JWT authentication or more pages) are welcome. Open issues or pull requests in the main repository: https://github.com/luizgdsmdev/react-studies.

## License
MIT License - see the LICENSE file in the main repository.

## Contact
- Author: Luiz Gustavo (luizgdsmdev)
- Repository: https://github.com/luizgdsmdev/react-studies/tree/master/aula-5

Thank you for studying React with me! 🚀