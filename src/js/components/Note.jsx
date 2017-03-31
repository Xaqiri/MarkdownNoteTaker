const React = require('react')

const style = {
  fontSize: '2em',
  //width: '100%',
  width: '90%',
  height: '100%',
  border: '1px solid black',
  margin: '0.5% auto',
 // marginBottom: '1%',
  //padding: '0.5rem'
}

const note = {
  height: '100%',
  display: 'inline-block',
  padding: '1em'
  //float: 'left'
}

const remove = {
  display: 'inline',
  width: '5%',
  //height: '3em',
  textAlign: 'center',
  //background: 'orange',
  color: 'red',
  padding: '1em',
  float: 'right'
}

class Note extends React.Component {
  render () {
    return (
      <div style={style}>
        <div style={note}>Note</div>
	<div style={remove}>-</div>
      </div>
    ) 
  }
}

module.exports = Note
