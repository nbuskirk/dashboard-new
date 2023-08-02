## DASHBOARD

**Installation**
 - Clone the project and run `yarn install` -- This will install all the required project dependencies and node packages. By default the dashboard projects comes bundled with esLint and prettier for code and syntax highlighting. This project is built with [vite.js](https://vitejs.dev/) with react enabled.

**Development**
 - To run the development server, open a terminal window, and run `yarn dev` Hot reloading is handled by [vite.js](https://vitejs.dev/).

**VSCode Setup**
 - To enable prettier highlighting in VSCode, open user settings (CMD+SHIFT+P) and search for 'default formatter' Set this to prettier - code formatting. You may need to install the prettier extension for VSCode, (CMD+SHIFT+X) search for prettier - code formatter and install the extension.
 - Some default user settings to keep all code formatted the same way are: 
 `{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.alwaysShowStatus": true,
  "window.zoomLevel": 1,
  "editor.tabSize": 2
}`

**Building**
 - To build the project for production, run `yarn build` This will create a /dist folder with all the required assets and javascript ready for deployment.

 **Testing**
 - To run jest unit tests, run `yarn test` This will run jest against all files in the src directory with *.test.* in the filename.