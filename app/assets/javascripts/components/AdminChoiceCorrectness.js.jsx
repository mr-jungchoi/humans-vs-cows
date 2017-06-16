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
    const is_correct = !event.target.value;
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

  var checkbox;
  if (this.state.is_correct) {
    checkbox = <CheckedBox onCheck={this.updateChoiceCorrectness} is_correct={this.state.is_correct} />
  } else {
    checkbox = <UncheckedBox onCheck={this.updateChoiceCorrectness} is_correct={this.state.is_correct} />
  };

  render() {
    return(
      <div  className='form-check pull-right'>
        <label className='form-check-label'>
          Correct
          {checkbox}
        </label>
      </div>
    )
  }
}

function CheckedBox(props) {
  return(
    <input onChange={this.props.onCheck} type='checkbox' className='form-check-input' value={this.props.is_correct} checked/>
  )
}

function UncheckedBox(props) {
  return(
    <input onChange={this.props.onCheck} type='checkbox' className='form-check-input' value={this.props.is_correct}/>
  )
}
