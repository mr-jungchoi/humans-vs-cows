class AdminQuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {question: this.props.question}
  }

  render() {
    return(
      <div className='row'>
        <div className='col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2'>
          <div className='card admin-card'>
            <div className='card-block'>
              <h3 className='card-title'> {this.state.question.text} </h3>
            </div>
            <AdminChoicesForm choices={this.state.question.choices} />
          </div>
        </div>
      </div>
    )
  }
}
