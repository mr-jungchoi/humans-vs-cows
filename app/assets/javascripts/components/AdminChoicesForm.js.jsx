class AdminChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {choices: this.props.choices};
  }

  render() {
    return (
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
    );
  }
}
