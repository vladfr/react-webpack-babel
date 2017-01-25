import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
        <div>
        	<h1 className="display-1">Display 1</h1>
        	<h1 className="display-2">Display 2</h1>
        	<h1 className="display-3">Display 3</h1>
        	<h1 className="display-4">Display 4</h1>
        </div>
      </div>
    )
  }
}
