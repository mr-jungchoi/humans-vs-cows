function ChoiceItem(props) {
  let choice = props.choice;

  return (
    <div className='form-check'>
      <label className='form-check-label'>
        <input type='radio' class='form-check-input' name='choice[id]' value='{choice.id}'/>
        {choice.text}
      </label>
    </div>
  )
}
