class AdminChoicesForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("Something changed");
  }

  handleSubmit(event) {
    event.preventDefault();
    // $.ajax({
    //   url: '/user_selections',
    //   method: 'put',
    //   data: {
    //     'user_selection': {
    //       'choice_id': this.state.selectionId,
    //       'survey_round_id': this.props.surveyRoundId
    //     }
    //   }
    // }).done(() => {
    //   // Get next question
    //   this.props.onUserSelection();
    //   this.setState({selectionId: ''});
    // });
  }

  render() {
    return (
      <ul className='list-group list-group-flush'>
        {this.props.choices.map(function(choice, i) {
          return (
            <li key={choice.id} className='choice-list-item list-group-item'>
              <div className='form-group'>
                <label> Choice {i} </label>
                <input type='text' className='form-control' value={choice.text}/>
              </div>
              <div  className='form-check pull-right'>
                <label className='form-check-label'>
                  Correct
                  <input type='checkbox' className='form-check-input'
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
