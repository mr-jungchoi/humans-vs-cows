class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {question: this.props.question,
                  choices: this.props.choices,
                  survey_round: this.props.survey_round}
  }

  render() {
    return(
      <div className='row'>
        <div className='col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2'>
          <div className='card question-card'>
            <div className='card-block'>
              <h3 className='card-title'> {this.state.question.text} </h3>
            </div>
            <ChoicesForm choices={this.state.choices}
              question={this.state.question}
              survey_round={this.state.survey_round} />
          </div>
        </div>
      </div>
    )
  }
}
