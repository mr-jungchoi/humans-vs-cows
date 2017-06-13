class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='card question-card'>
        <div className='card-block'>
          <h3 className='card-title'> {this.props.question.text} </h3>
        </div>
        <ul className='list-group list-group-flush'>
          {this.props.choices.map(function(choice, i) {
            return (
              <ChoiceItem key={i} choice={choice} />
            )
          })}
        </ul>
      </div>
    )
  }
}
