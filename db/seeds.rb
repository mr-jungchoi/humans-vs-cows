questions_text = [
  "What sound does a cow make?",
  "What species consumes the most food on Earth?",
  "Climate change is most affected by...",
  "American's eat __ times more meat than people in other countries",
  "Meat is a necessary component to a healthy diet"
]

questions = []

questions_text.each do |text|
  questions << Question.create(text: text)
end

choices_arrays = [
  [{text: "woof"}, {text: "kakao"}, {text: "moo", is_correct: true}, {text: "toot", is_correct: true}],
  [{text: "humans"}, {text: "cows", is_correct: true}, {text: "chickens"}, {text: "cows and humans are equal"}],
  [{text: "beef and dairy production", is_correct: true}, {text: "transportation"}, {text: "burning fossil fuels for energy"}, {text: "cats"}],
  [{text: "0.5"}, {text: "1"}, {text: "2"}, {text: "3", is_correct: true}],
  [{text: "true"}, {text: "false", is_correct: true}, {text: "tofu sucks"}]
]

5.times do |i|
  choices_arrays[i].each do |choice|
    questions[i].choices.push(Choice.create(choice))
  end
end
