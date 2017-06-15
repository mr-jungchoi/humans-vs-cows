class AdminChoicesForm extends React.Component {
  constructor(props) {
    super(props);

    this.saveChoiceText = this.saveChoiceText.bind(this);
    this.saveChoiceCorrectness = this.saveChoiceCorrectness.bind(this);
  }

  saveChoiceText(event) {
    console.log("Choice text changed");
  }

  saveChoiceCorrectness(event) {
    console.log("Correctness changed")
  }

  render() {
    return (
      <ul className='list-group list-group-flush'>
        {this.props.choices.map(function(choice, i) {
          return (
            <li key={choice.id} className='choice-list-item list-group-item'>
              <div className='form-group'>
                <label> Choice {i} </label>
                <input onChange={this.saveChoiceText} type='text' className='form-control' value={choice.text}/>
              </div>
              <div  className='form-check pull-right'>
                <label className='form-check-label'>
                  Correct
                  <input onChange={this.saveChoiceCorrectness} type='checkbox' className='form-check-input'
                    name='choiceId' value={choice.id} />
                </label>
              </div>
            </li>
          );
        }, this)}
      </ul>
    );
  }
}
