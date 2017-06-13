class ChoicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {choice_id: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({choice_id: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/choices_questions',
      method: 'post',
      data: {

      }
    })
  }
  return (
    <form action='/choices_questions' method='post'>
      <input type='hidden' name='question[id]' value='{this.props.question.id}'/>
      <fieldset className='form-group'>
        {this.props.choices.map(function(choice, i) {
          return <ChoiceItem key={i} choice={choice} />
        })}
      </fieldset>
      <button type='submit' class='btn btn-primary'>Submit</button>
    </form>
  )
}
