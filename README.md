### Quick start

```
# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

Go to [http://localhost:8080](http://localhost:8080) in your browser.

### Build files for production
* single run: `npm run build`
* build files and watch: `npm start`

## Dependencies
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Notes
* If you need some helper function from Underscore.js, please import it similar to this:
```
import { isUndefined } from 'underscore';
```
