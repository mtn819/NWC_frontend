# NWC Frontend

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

All other folders under src/, such as Home/ and MappingNWC/, represent different routes. This helps break down webpages into smaller, page-specific sections. The entry for each of these routes is the respective .js file. For instance, Home/'s entry is Home/Home.js. MappingNWC/'s entry is MappingNWC.js.

Some smaller, html customizations can be handled in public/, though this area of the codebase is rather uneventful; almost entirely defined by the defaults of npx create-react-app.