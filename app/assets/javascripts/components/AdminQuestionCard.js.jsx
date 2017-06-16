class AdminQuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      text: this.props.question.text
    }

    this.timeoutId = null;
    this.updateQuestionText = this.updateQuestionText.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.question.text !== this.props.question.text) {
      this.setState({
        text: nextProps.props.question.text
      });
    }
  }

  updateQuestionText(event) {
    const text = event.target.value;
    this.setState({ text });
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(this.saveQuestionText.bind(this, text), 500);
  }

  saveQuestionText(text) {
    var text = text;
    $.ajax({
      url: `/questions/${this.state.question.id}`,
      method: 'put',
      data: {'question': { text }}
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
                <input onChange={this.updateQuestionText} type='text' className='form-control' value={this.state.text} />
              </div>
            </div>
            <AdminChoicesForm choices={this.state.question.choices} />
          </div>
        </div>
      </div>
    )
  }
}
