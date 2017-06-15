function ChoiceItem(props) {
  let choice = props.choice;

  return (
    <div className='form-check'>
      <label className='form-check-label'>
        <input type='radio' className='form-check-input'
          name='choiceId' value={choice.id}
          checked={this.state.selectionId == choice.id}
          onChange={this.handleChange} />
        {choice.text}
      </label>
    </div>
  )
}
