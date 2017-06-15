class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: this.props.questions};
  }

  render() {
    return(
      <div>
        {this.state.questions.map(function(question) {
          return (
            <div className='row'>
              <div className='col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2'>
                <div className='card question-card'>
                  <div className='card-block'>
                    <h3 className='card-title'> {question.text} </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        }, this)}
      </div>
    );
  }
}
