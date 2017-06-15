class AdminQuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      questionText: this.props.question.text
    }

    this.saveQuestionText = this.saveQuestionText.bind(this);
  }

  saveQuestionText(event) {
    this.setState({questionText: event.target.value});
    $.ajax({
      url: `/questions/${this.state.question.id}`,
      method: 'put',
      data: {'question': {'text': this.state.questionText}}
    }).done(() => {
      // log that change was made
      console.log("Changes saved");
    })
  }

  render() {
    return(
      <div className='row'>
        <div className='col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2'>
          <div className='card admin-card'>
            <div className='card-block'>
              <div className='form-group'>
                <label>Question {this.props.order_position + 1}</label>
                <input onChange={this.saveQuestionText} type='text' className='form-control' value={this.state.questionText} />
              </div>
            </div>
            <AdminChoicesForm choices={this.state.question.choices} />
          </div>
        </div>
      </div>
    )
  }
}
