class StartButton extends React.Component {
  handleClick() {
    console.log('Click')
  }

  render() {
    return (
      <button className='btn btn-default btn-lg center-block' onClick={this.handleClick}>
        Start
      </button>
    )
  }
}
