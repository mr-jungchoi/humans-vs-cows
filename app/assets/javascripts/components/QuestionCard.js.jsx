class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {question: {},
                  choices: [],
                  answer: {}
                  }

  render() {
    return(
      <div className='row'>
        <div className='col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2'>
          <div className='card question-card'>
            <div className='card-block'>
              <h3 className='card-title'> {this.props.question.text} </h3>
            </div>
            { return <ChoicesForm /> choices={this.props.choices} }
          </div>
        </div>
      </div>
    )
  }
}
