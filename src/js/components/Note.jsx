const React = require('react')

class Note extends React.Component {
  constructor(props) {
    super(props)
    this.num = this.props.num
  }
  handleRemove() {
    this.delete()
  }
  render () {
    return (
      <div className="note">
        <div className="note__title">{this.num}</div>
        <div className="note__delete" onClick={this.handleRemove}>-</div>
      </div>
    ) 
  }
}

module.exports = Note
