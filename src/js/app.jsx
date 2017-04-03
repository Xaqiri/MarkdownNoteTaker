const React = require('react')
const ReactDOM = require('react-dom')
const Nav = require('./components/Nav')
const Note = require('./components/Note')

let App = React.createClass ({
  getInitialState: function () {
    return {
      notes: []
    }
  },
  handleAdd: function () {
    let numNotes = this.state.notes.length
    numNotes++
    let notes = this.state.notes
    notes.push(<Note key={numNotes} num={numNotes}/>)
    this.setState({notes: notes})
  },
  render: function () {
    // let notes = [<Note/>, <Note/>]
    return (
      <div>
 	      <Nav />
	      <div className="notes-container">
	        <div className="notes-container__header">
            <div className="notes-container__title">Notes</div>
            <div className="notes-container__add" onClick={this.handleAdd}>+</div>
          </div>
          {this.state.notes}
        </div> 
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
