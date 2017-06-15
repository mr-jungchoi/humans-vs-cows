class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: this.props.questions};
  }

  render() {
    return(
      <div>
        {this.state.questions.map(function(question, i) {
          return <AdminQuestionCard key={question.id} order_position={i} question={question} />
        })}
      </div>
    );
  }
}
