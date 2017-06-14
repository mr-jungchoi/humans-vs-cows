class ChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: this.props.choices,
      questionId: this.props.question.id,
      choiceId: '',
      surveyRoundId: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({choiceId: event.target.value});
  }

  render() {
    return (
      <form action='/choices_questions' method='post'>
        <fieldset className='form-group'>
          {this.state.choices.map(function(choice) {
            return (
              <div className='form-check'>
                <label className='form-check-label'>
                  <input type='radio' className='form-check-input'
                    name='choiceId' value={choice.id}
                    checked={this.state.choiceId == choice.id}
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
