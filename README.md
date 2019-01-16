This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To start run the following commands
### `npm install`
### `npm start`

Notes
--------

Aimed to fulfill the main steps of the challenge under time limits.

Built with create-react-app to avoid using time on setting-up, although for all new projects it did still take a little bit just to figure out dependencies.

Used only the basics of material UI just to build something to hold the info.

For data fetching went with basic fetch on component mount and saved state on both components.

Found it easier to navigate through router so built 2 routes, one for the main app and individual details.

Added some images on the main page to have something other than names, unfortunately this may cause the pokedex API to quickly reach the individual call limit.

For future work that page may load only some of the images and load more as the user scrolls/sees another page.

Went really basic with styles and just added a global one at the App level to have all routes look kind of similar.

There is some repeated logic such as manipulating names (which is done when setting the state to avoid setting it individually).

Immediate steps would have included adding more data on the individual Pokemon page, improving styles, and avoiding calling the API when it was not necessary.
