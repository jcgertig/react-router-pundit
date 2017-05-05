# react-router-pundit

[![build status](https://img.shields.io/travis/jcgertig/react-router-pundit/master.svg?style=flat-square)](https://travis-ci.org/jcgertig/react-router-pundit)
![Downloads](https://img.shields.io/npm/dm/react-router-pundit.svg)
![Downloads](https://img.shields.io/npm/dt/react-router-pundit.svg)
![npm version](https://img.shields.io/npm/v/react-router-pundit.svg)
![dependencies](https://img.shields.io/david/jcgertig/react-router-pundit.svg)
![dev dependencies](https://img.shields.io/david/dev/jcgertig/react-router-pundit.svg)
![License](https://img.shields.io/npm/l/react-router-pundit.svg)

React component that works with react-pundit and react-router-dom.

> With inspiration from
[React Pundit](https://github.com/jcgertig/react-pundit).

## Pre-requisites

You need react-pundit and react-router-dom (React Router V4).

## Getting Started

Install it via npm:

```shell
npm install --save react-pundit react-router-pundit react-router-dom
```

## PunditRoute

`PunditRoute` will pass the original location to the Redirect via the location
state as a from. `this.props.location.state.from`

`PunditRoute` can handle redirect paths as the return from the pundit check
as well as the default boolean return.

## Example

```html
import { PunditContainer } from 'react-pundit';
import { PunditRoute, PassPropsRoute } from 'react-router-pundit';
import { Route } from 'react-router-dom';

import ReceiptView from '../ReceiptView';
import TacoView from '../TacoView';
import BasicView from '../BasicView';

import policies from './policies.js';
import './App.css';

class App extends Component {
  render() {
    const user = { id: 1, role: 'basic', activated: true };
    const receipt = { user: { id: 1 }, id: 45389, body: 'test', title: 'Receipt for 1/1/2017.' };

    return (
      <div className="App">
        <PunditContainer policies={policies} user={userOne}>
          <PunditRoute
            path={`/receipt/${receipt.id}`}
            exact
            component={ReceiptView}
            type="Receipt"
            action="View"
            model={receipt}
            user={user}
            redirectPath="/login"
            componentProps={{ receipt }}
          />
          <PassPropsRoute
            path="/tocos"
            exact
            componentProps={{ magic: true }}
            component={TacoView}
          />
          <Route path="/basic" component={BasicView} />
        </PunditContainer>
      </div>
    );
  }
}
```

## API reference
```javascript
// Available components
import {
  PunditRoute,
  PassPropsRoute
} from 'react-router-pundit';
```

> Work in progress

## Examples

See examples folder.

## Testing changes locally
You can test changes by importing the library directly from a folder:

1. Do changes to the library
2. On your test project: `npm install /path/to/your/react-router-pundit/ --save`
3. For easy development, you can `npm link react-router-pundit` on your application
4. And finally `npm run compile` the react-router-pundit to have the changes in your application

## License

MIT
