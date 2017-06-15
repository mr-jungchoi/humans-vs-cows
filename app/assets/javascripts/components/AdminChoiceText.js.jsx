class AdminChoiceText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.choice.text
    };

    this.timeoutId = null;
    this.updateChoiceText = this.updateChoiceText.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.choice.text !== this.props.choice.text) {
      this.setState({
        text: nextProps.props.choice.text
      });
    }
  }

  updateChoiceText(event) {
    const text = event.target.value;
    this.setState({ text });
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(this.saveChoiceState.bind(this, text), 500);
  }

  saveChoiceState(text) {
    $.ajax({
      url: `/choices/${this.props.choice.id}`,
      method: 'put',
      data: {choice: { text }}
    }).done(() => {
      // log that change was saved
      console.log('Changes saved');
    });
  }

  render() {
    return (
      <div className='form-group'>
        <label> Choice {this.props.order_position + 1} </label>
        <input onChange={this.updateChoiceText} type='text' className='form-control' value={this.state.text}/>
      </div>
    )
  }
}
