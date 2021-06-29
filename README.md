# NWC Frontend Scaling Branch

This branch is going to redo things because I was not a terribly bright architect when I first embarked on this.

This is the client-side interface for the 1977 NWC project. It is built with Create-React-App, React-Router, React-Bootstrap, and Axios. The backend it interacts could be found here: https://github.com/DataAnalyticsinStudentHands/NWC_backend.

### To run:
    git clone https://github.com/DataAnalyticsinStudentHands/NWC_frontend.git
    cd NWC_frontend
    npm install
    npm start

### Structure:
The meat of the code can be found in src/. This codebase is the product of [npx create-react-app](https://github.com/facebook/create-react-app)

In folder src/, App.js hosts the [react-router routing](https://reactrouter.com/web/guides/quick-start). It also imports critical files. One should note Custom.scss. [This is the css customizer for Bootstrap. It also hosts convenient utility classes](https://getbootstrap.com/docs/4.0/getting-started/theming/).

The src/Components/ folder hosts page-unspecific components that will be reused throughout the site. Custom card components, for instance, would be built and exported here.

src/config harbors things like the axios configuration for this given project, found in src/config/axios.js. Axios must and should be configured before starting this front end for proper functionality.

src/res harbors local resources, like some .png files, that will be used in the project.

The src/Custom.css file hosts themes, fonts, and some deal of responsive code. The Home page is styled specifically by src/Home/Home.css. The HowToContribute page is styled specifically by src/HowToContribute/HowToContribute.css. So on and so forth.

All other folders under src/, such as Home/ and MappingNWC/, represent different routes. This helps break down webpages into smaller, page-specific sections. The entry for each of these routes is the respective .js file. For instance, Home/'s entry is Home/Home.js. MappingNWC/'s entry is MappingNWC.js. These entry points also are the servers of their respective axios data. Each of these pages will have their own res/ folder where things like images will be contained.

Note: The naming convention used for CSS classes in this project follow the BEM naming conventions, with a very small modification. Format: .page_block_elementOne--modifierTwo.

Some smaller, html customizations can be handled in public/, though this area of the codebase is rather uneventful; almost entirely defined by the defaults of npx create-react-app.


### How the Home Map Works:
res/Home/Home_InteractiveMap_Map.js accepts a list of points. A point is defined by [name, x, y]. The Y axis is flipped here.


Note: Will likely switch to plain CSS and BEM soon, potentially using JSON-styling for components