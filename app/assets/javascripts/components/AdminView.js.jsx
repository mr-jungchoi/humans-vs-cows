class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: this.props.questions};
  }

  render() {
    return(
      <div>
        {this.state.questions.map(function(question) {
          return <AdminQuestionCard key={question.id} question={question} />
        })}
      </div>
    );
  }
}
