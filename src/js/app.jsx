const React = require('react')
const ReactDOM = require('react-dom')
const Nav = require('./components/Nav')

let App = React.createClass ({
  render: function () {
    return (
      <div>
 	<Nav />
        <h1>Hello React</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
