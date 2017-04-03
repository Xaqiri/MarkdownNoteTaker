const React = require('react')
const ReactDOM = require('react-dom')
const Nav = require('./components/Nav')
const Note = require('./components/Note')

let App = React.createClass ({
  getInitialState: function () {
    return {
      notes: 0
    }
  },
  handleClick: function () {
    let numNotes = this.state.notes
    this.setState({notes: numNotes++})
  },
  render: function () {
    return (
      <div>
 	      <Nav />
	      <div className="notes-container">
	        <div className="notes-container__header">
            <div className="notes-container__title">Notes</div>
            <div className="notes-container__add" onClick={this.handleClick}>+</div>
          </div>
          <h1>{this.state.notes}</h1>
        </div> 
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
