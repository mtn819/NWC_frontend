# NWC Frontend 

This is the client-side interface for the 1977 NWC project. It is built with Create-React-App, React-Router, React-Bootstrap, and Axios. The backend it interacts could be found here: https://github.com/DataAnalyticsinStudentHands/NWC_backend.

This branch has been used for the release version v02.

## Deployment

We are following standard procedures for a Create-React-App [deployment](https://create-react-app.dev/docs/deployment/) following a [build](https://create-react-app.dev/docs/production-build/). 

In a nutshell run: `npm run build`

Copy the `\build`directory into Apache root directory.

## Configuring axios in deployment:

Change the variable found in config/.env.js e.g.:

```
const VARIABLES = {
	fetchBaseUrl: "http://localhost:1337",
}

export default VARIABLES;
```
