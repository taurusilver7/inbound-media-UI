# Inbound-Media

> The client-side development of a MERN stack social media application. The marvel of social, gossip & advertisement.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
yarn create react-app@latest <app_name>
# and
cd <app_name>
# and
yarn start
```

## Build

Start the development server on localhost:3000.

Refactor the starter template to suit the application requirements. Remove the test files & unnecessary logos from public directory.

To set the default background on th application, create two blur elements & position them from absolute attribute. Set the font-family to default in root file to `Inter`

### Home

Create home page with Home component & corresponding styles file. The home component had profile, post % a right suggestions sections.

The home components has a relative grid size of: 18rem (profile), auto (max-post), and suggestions (20rem)

- Profile

Create a profile component, which has a search input element, a user profile card, and a user-followers card component. Create each for continuous integration.

Create a search component with a logo & an input element. Style the input search icon with a gradient to match the logo, for ambience.

Create a profile card component to hold the cover+user profile, user details & follower details.

Create a followers component with a mock data from /Data. Add a follower img, name, username & a custom follow button.

Create a global button for the application with default attributes.

- Results

Create a results component to occupy the center grid of the home page.
The posts section has an upload top component, and posts compoenent.

The upload component has a text input field, and a set of buttons. A hidden file input element linked to a useRef() hook calls the click event on the image-upload button.

Add a imageRef ref value to the file input. Fire a callback fn on change of the input. Search for the file existence in the ref, and add the image to the state after uploading the file to browser & converting it into an url for upload.

Attach the ref to the onClick event on the image-upload button. `onClick={() => imageRef.current.click()}`, to fire the onChange event on the file-input element.

Create another div to display the image on condition of its existance (if image === true). Add a close button to empty the state.

Creata a mockData for posts & populate them in the posts component. Populate each post in a induvidual Post component.

Each Post component has a post image, post buttons, and user info.

- Suggestions

The right corner component to carry the optional buttons, and suggestion users & trends.

Create a trends component to display mock-data on Trends, and populate them in a section.

### Profile

The profile page has 3 grids. The left grid has search, user-info & followings data.

The center grid has the user profile, and uploaded posts. The right grip has trend suggestions, with option buttons.

Add the search, infoCard, and followers components on the left side. Add the Card (userCard), and Results components on the middle grid.

Condition the `My-profile` button in the Card component to appear only on left stack. Add suggestions to the right end.

Create a modal to let the users edit their personal details on the application & modify in the database.

Use library [mantine](https://mantine.dev/guides/cra/) for creating a modal. Use a template to create the modal & mount it on the application.

Add modal for user detail modification, and post uploading in suggestions component.

### Auth

Create an auth page for login & signup accounts to the application. Add the application logo & title to the layout.

Condition the additional input fields with a state value & create handleChange callback function to load the state with the input values. Create a reset function to reset the value ot initial state on form switching.

### Redux

Import [redux](https://redux.js.org/), [react-redux](https://react-redux.js.org/) to set up global store for state-management.

Import [redux-thunk](https://www.npmjs.com/package/redux-thunk) middleware to return functions, rather than just actions, within redux.

To send requests to the API on the server side & handle responses, import axios & create /api to handle the auth related requests in `auth.js`. Add the server url `http://localhost:5000/api/v1` to the package.json as _proxy_



### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
