# NWC Frontend
This frontend is based off of [create_react_app](https://create-react-app.dev/). See README_CREATE_REACT_APP.md for the markdown generated defaultly by create-react app.

## Contents
- [Installing](#installing)
- [Organization](#organization)

## Installing <a id="installing"></a>
To install, run the following:

    git clone https://github.com/DataAnalyticsinStudentHands/NWC_frontend.git nwc_front
    cd nwc_front
    npm install

## Organization <a id="organization"></a>

### src/
This directory is where roughly all code exists. It is a slimmed down version of Create-React-App's src/ folder.

### src/index.js
Mounts the application. Also serves some functionality as the highest-level js file in the application.

### src/router.js
Uses [react router](https://reactrouter.com/web/guides/quick-start) to set up the routes of the application.

### src/Custom.css
Imported by index.js; is used to import and set things like themes and fonts. Handles the :root.

### src/pages/
Holds the actual pages. src/pages/*page_name*/*page_name.js* is the main js file of each given page.

### src/components/
Where reusable snippets live. Things like navbars, style textboxes, and all that good stuff.

### src/res/
Holds (preferably) light resources, like images.

### src/config/
Things like environment variables will get tinkered with here; effectively a settings folder.