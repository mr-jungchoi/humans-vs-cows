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
  ["ruff", "meow", "moo", "hello"],
  ["humans", "cows", "both are equal"],
  ["humans", "cows", "beavers"],
  ["humans", "cows", "neither"],
  ["true", "false", "idk"]
]

5.times do |i|
  choices_arrays[i].each do |text|
    questions[i].choices.push(Choice.create(text: text))
  end
end
