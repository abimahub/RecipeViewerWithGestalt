A react app, made using my ReactAppFromScratchv3. 
This is an adventure into using different packages and libraries with React - hence using my own stripped-out version of a react app to kick off with.
This app will pull dummy data from dummyjson.com, to be displayed using my own custom components.
Styling will be via a ui/css package called Gestalt, which is the design package for Pinterest.
(I have never used Gestalt before, so let the adventure begin!)


Action log:
 *create recipeviewer folder and open in vscode.
 *in vscode terminal type npm init -y, generating package.json.
 *copy package.json code from ReactAppFromScratchv3, removing jest and react testing library.
 *in vscode terminal type npm i, to install using the package.json, generating package-lock.json file and node_modules folder.
 *in laptop file explorer, copy and paste src folder, public folder, .husky folder, and .babelrc, .eslintrc.json, .gitignore, index.js, prettierrc.json, and webpack.config.js files into recipeviewer folder.
 (because I didn't want to clone the repo, so did it the long way.)
 *in vscode terminal type npm run start, to check all works ok. 
 *installed gestalt (npm i gestalt --save), chart graphs (npm i gestalt-charts --save), date picker (npm i gestalt-datepicker --save) and ESLint-plugin-gestalt (npm i eslint-plugin-gestalt).
 *Have a sample Masonry component running ok.
 *some locsl css works, but fonts do not, background color does not.Working on a fix.