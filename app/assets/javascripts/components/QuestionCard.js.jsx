class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='card' style={width: '500px'}>
        <div className='card-block'>
          <h3 class='card-title'> {this.props.question.text} </h3>
        </div>
      </div>
    )
  }
}
