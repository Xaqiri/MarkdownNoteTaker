const React = require('react')
const ReactDOM = require('react-dom')
const Nav = require('./components/Nav')

const noteSectionStyle = {
  margin: '0 auto',
  padding: '1%',
  width: '80%',
  background: '#DDD'
}

let App = React.createClass ({
  render: function () {
    return (
      <div>
 	<Nav />
	<div style={noteSectionStyle}>
	  <h1>Notes</h1>
	  <h2>1. Note</h2>
	  <h2>2. Note</h2>
	  <h2>3. Note</h2>
	  <h2>4. Note</h2>
	</div> 
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
