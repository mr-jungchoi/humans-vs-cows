questions_text = [
  "What sound do cows make?",
  "Who eats more, cows or humans?",
  "We contribute to climate change more than any other species on Earth",
  "Most of the farmland in America is used to grow food for...",
  "Meat is a key component to a healthy diet"
]

questions = []

questions_text.each do |text|
  questions << Question.create(text: text)
end

choices_arrays = [
  [{text: "ruff"}, {text: "meow"}, {text: "moo", is_correct: true}, {text: "hello"}],
  [{text: "humans"}, {text: "cows", is_correct: true}, {text: "both are equal"}],
  [{text: "humans"}, {text: "cows", is_correct: true}, {text: "beavers"}],
  [{text: "humans"}, {text: "cows", is_correct: true}, {text: "neither"}],
  [{text: "true"}, {text: "false", is_correct: true}, {text: "idk"}]
]

5.times do |i|
  choices_arrays[i].each do |choice|
    questions[i].choices.push(Choice.create(choice))
  end
end
