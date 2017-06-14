class ChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: this.props.choices,
      questionId: this.props.question.id,
      selectionId: '',
      surveyRoundId: this.props.survey_round.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({selectionId: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/user_selections',
      method: 'post',
      data: {
        'user_selection': {
          'question_id': this.state.questionId,
          'choice_id': this.state.selectionId,
          'survey_round_id': this.state.surveyRoundId
        }
      }
    }).done(() => {
      console.log('GREAT SUCCESS!')
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className='form-group'>
          {this.state.choices.map(function(choice) {
            return (
              <div className='form-check'>
                <label className='form-check-label'>
                  <input type='radio' className='form-check-input'
                    name='choiceId' value={choice.id}
                    checked={this.state.selectionId == choice.id}
                    onChange={this.handleChange} />
                  {choice.text}
                </label>
              </div>
            );
          }, this)}
        </fieldset>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}
