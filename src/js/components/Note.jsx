const React = require('react')

const style = {
  fontSize: '2em',
  width: '90%',
  height: '100%',
  border: '1px solid black',
  margin: '0.5% auto',
  flex: 'flexBox'
}

const note = {
  height: '100%',
  display: 'inline-block',
  padding: '1em'
}

const remove = {
  display: 'inline',
  width: '5%',
  textAlign: 'center',
  background: 'green',
  color: 'white',
  padding: '1em',
  float: 'right'
}

class Note extends React.Component {
  render () {
    return (
      <div className="note">
        <div className="note__title">Note</div>
        <div className="note__delete">-</div>
      </div>
    ) 
  }
}

module.exports = Note
