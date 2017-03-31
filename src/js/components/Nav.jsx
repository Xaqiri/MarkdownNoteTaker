const React = require('react')

const styles = {
  background: 'black',
  color: 'white',
  opacity: '90%',
  width: '100%',
  height: '100%',
  //float: 'left',
  //display: 'inline',
  //position: 'fixed',
  padding: '1%',
  marginTop: 0,
  marginBottom: '5%'
  //display: 'block'
}

const brand = {
  display: 'inline',
  float: 'left'
}

const navitem = {
  display: 'inline',
  //margin: '5%',
  //float: 'right'
}

class Nav extends React.Component {
  render () {
    return (
      <div style={styles}>
        <h1>TakeNote</h1>
	<a style={navitem} href="#">All</a>
      </div>
    )
  }
}

module.exports = Nav
