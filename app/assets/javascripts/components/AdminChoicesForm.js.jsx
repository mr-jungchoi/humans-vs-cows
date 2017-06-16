class AdminChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {choices: this.props.choices};

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.choices !== this.props.choices) {
      this.setState({
        choices: nextProps.props.choices
      });
    }
  }

  handleClick() {
    var question_id = this.state.choices[1].question_id;
    $.ajax({
      url: '/choices',
      method: 'post',
      data: {question_id: question_id}
    }).done(response => {
      this.setState({ response })
    })
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.handleClick} className='btn btn-default btn-sm'>
            <span className='glyphicon glyphicon-plus'></span> Choice
          </button>
        </p>
        <ul className='list-group list-group-flush'>
          {this.props.choices.map(function(choice, i) {
            return (
              <li key={choice.id} className='choice-list-item list-group-item'>
                <AdminChoiceText order_position={i} choice={choice} />
                <AdminChoiceCorrectness order_position={i} choice={choice} />
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
