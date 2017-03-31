const React = require('react')
const ReactDOM = require('react-dom')
const Nav = require('./components/Nav')
const Note = require('./components/Note')

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
	  <Note />
	  <Note />
	  <Note />
	  <Note />
	</div> 
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
