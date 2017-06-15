class AdminChoiceCorrectness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_correct: this.props.choice.is_correct
    };

    this.timeoutId = null;
    this.updateChoiceCorrectness = this.updateChoiceCorrectness.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.choice.is_correct !== this.props.choice.is_correct) {
      this.setState({
        is_correct: nextProps.props.choice.is_correct
      });
    }
  }

  updateChoiceCorrectness(event) {
    const is_correct = event.target.value;
    this.setState({ is_correct });
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(this.saveChoiceCorrectness.bind(this, is_correct), 500);
  }

  saveChoiceCorrectness(is_correct) {
    $.ajax({
      url: `/choices/${this.props.choice.id}`,
      method: 'put',
      data: {choice: { is_correct }}
    }).done(() => {
      // log that change was saved
      console.log('Changes saved')
    })
  }

  render() {
    return(
      <div  className='form-check pull-right'>
        <label className='form-check-label'>
          Correct
          <input onChange={this.updateChoiceCorrectness} type='checkbox' className='form-check-input' value={this.state.is_correct} />
        </label>
      </div>
    )
  }
}
