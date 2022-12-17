# CRA Directory Structure Application

### Directory Structure

- assets
  - audio
  - data
  - fonts
  - images
  - styles
  - video
- components
- configs
- layouts
- context
- helpers
- hooks
- interfaces
- languages
- pages
- services
- redux

### Assets
As the name says, it contains assets of our project like images, styles, fonts, ...

### Components
Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, etc., that can be used across various files in the project. Each component should consist of a test file to do a unit test as it will be widely used in the project.

### Configs 
A place to store application configuration, for example: API url, default languages, routes, ...

### Layouts 
This is just a special folder for placing any layout based components. This would be things like a sidebar, navbar, container, etc.

### Context
The context folder stores all your React context files that are used across multiple pages. I find on larger projects you will have multiple context you use across your application and having a single folder to store them is really useful.

### Helpers
It contains the reusable helper functions.

### Hooks
The hooks folder contains every single custom hook in your entire project. This is a useful folder to have in any size project since almost every project will have multiple custom hooks so having a single place to put them all is really useful.

### Interfaces
A place to store interfaces and types in Typescript.

### Languages
A place to store multi language files. 

### Pages
The files in the pages folder indicate the route of the React application. Each file in this folder contains its route. A page can contain its subfolder. Each page has its state and is usually used to call an async operation. It usually consists of various components grouped.

### Services
It contains the http request function using axios or ...

### Redux
A place to store Redux files.