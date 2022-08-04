# Inbound-Media

> The client-side development of a MERN stack social media application.

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

The profile page has user information, and a means to modify & update the user information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
