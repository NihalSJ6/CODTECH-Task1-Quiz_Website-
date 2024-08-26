const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest ocean?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.D. Salinger"],
        answer: "Harper Lee"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1918", "1923"],
        answer: "1912"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Christopher Marlowe", "John Milton", "Ben Jonson"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["France", "Italy", "Spain", "Germany"],
        answer: "France"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["50°C", "75°C", "100°C", "125°C"],
        answer: "100°C"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
        answer: "Antarctic Desert"
    },
    {
        question: "Which language is the most spoken in the world?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
        answer: "Thomas Edison"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Venice", "Rome", "Florence", "Milan"],
        answer: "Rome"
    },
    {
        question: "What is the symbol for potassium on the periodic table?",
        options: ["K", "P", "Pt", "Po"],
        answer: "K"
    },
    {
        question: "Which famous scientist is known for his laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"],
        answer: "George Orwell"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Elephant", "Tiger", "Lion", "Bear"],
        answer: "Lion"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Australia", "Greenland", "New Guinea", "Borneo"],
        answer: "Greenland"
    },
    {
        question: "Which element is known as the 'king of chemicals'?",
        options: ["Gold", "Silver", "Iron", "Platinum"],
        answer: "Platinum"
    },
    {
        question: "Who was the first man to walk on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the name of the galaxy that contains our Solar System?",
        options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"],
        answer: "Milky Way"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Which chemical element has the symbol 'O'?",
        options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
        answer: "Oxygen"
    },
    {
        question: "What is the primary language spoken in Argentina?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Spanish"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin"
    },
    {
        question: "What is the currency used in the United Kingdom?",
        options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
        answer: "Pound Sterling"
    },
    {
        question: "Which city is known as the 'City of Angels'?",
        options: ["Los Angeles", "Paris", "New York", "Rome"],
        answer: "Los Angeles"
    },
    {
        question: "Who is the author of 'Harry Potter'?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
        answer: "J.K. Rowling"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "S", "N", "So"],
        answer: "Na"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
        {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Venus"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
        answer: "Vatican City"
    },
    {
        question: "Which famous scientist is known for his theory of evolution?",
        options: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "James Watson"],
        answer: "Charles Darwin"
    },
    {
        question: "What is the capital city of Egypt?",
        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
        answer: "Cairo"
    },
    {
        question: "Which ocean is the largest in terms of surface area?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote the famous novel 'Moby-Dick'?",
        options: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Edgar Allan Poe"],
        answer: "Herman Melville"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Fluorine", "Francium", "Fermium"],
        answer: "Iron"
    },
    {
        question: "What is the largest city by population in the world?",
        options: ["Tokyo", "New York", "Shanghai", "Mumbai"],
        answer: "Tokyo"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "John von Neumann"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Pb", "Si"],
        answer: "Ag"
    },
    {
        question: "Which famous artist is known for his work 'Starry Night'?",
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Paul Cézanne"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the hardest natural material known to man?",
        options: ["Diamond", "Graphene", "Steel", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "What is the longest river in Asia?",
        options: ["Yangtze", "Ganges", "Mekong", "Yellow River"],
        answer: "Yangtze"
    },
    {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        options: ["Sweden", "Norway", "Finland", "Iceland"],
        answer: "Norway"
    },
    {
        question: "Which famous battle was fought in 1066?",
        options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Gettysburg", "Battle of Trafalgar"],
        answer: "Battle of Hastings"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Pluto"],
        answer: "Mercury"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Gallium", "Lead", "Tin"],
        answer: "Mercury"
    },
    {
        question: "Which planet is known for having the Great Red Spot?",
        options: ["Jupiter", "Mars", "Saturn", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "Who is the Greek goddess of wisdom?",
        options: ["Athena", "Aphrodite", "Hera", "Artemis"],
        answer: "Athena"
    },
    {
        question: "What is the name of the closest star to Earth?",
        options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"],
        answer: "Proxima Centauri"
    },
    {
        question: "Which famous physicist developed the theory of quantum mechanics?",
        options: ["Max Planck", "Albert Einstein", "Niels Bohr", "Richard Feynman"],
        answer: "Max Planck"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        answer: "Madrid"
    },
    {
        question: "Which animal is known for its black and white stripes?",
        options: ["Tiger", "Lion", "Zebra", "Elephant"],
        answer: "Zebra"
    },
    {
        question: "Who is known for his contributions to the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Mako Shark"],
        answer: "Whale Shark"
    },
    {
        question: "What is the symbol for the chemical element mercury?",
        options: ["Hg", "Mn", "Mo", "Mg"],
        answer: "Hg"
    },
    {
        question: "Which famous landmark is located in Paris, France?",
        options: ["Eiffel Tower", "Statue of Liberty", "Colosseum", "Big Ben"],
        answer: "Eiffel Tower"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Pepper", "Onion"],
        answer: "Avocado"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Kilimanjaro", "Everest", "Denali", "Kangchenjunga"],
        answer: "Everest"
    },
    {
        question: "Which famous musician is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
        answer: "Michael Jackson"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        answer: "Berlin"
    },
    {
        question: "What is the name of the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        answer: "Photosynthesis"
    },
    {
        question: "Which planet is known for its prominent rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: ["C", "Ca", "Co", "Cl"],
        answer: "C"
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Camel", "Horse", "Elephant", "Ox"],
        answer: "Camel"
    },
    {
        question: "What is the primary ingredient in traditional sushi?",
        options: ["Beef", "Chicken", "Fish", "Pork"],
        answer: "Fish"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Mary Shelley"],
        answer: "Jane Austen"
    },
    {
        question: "Which element is represented by the symbol 'Na'?",
        options: ["Sodium", "Neon", "Nickel", "Nitrogen"],
        answer: "Sodium"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        answer: "Greenland"
    },
    {
        question: "Which ocean is the smallest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
        answer: "Arctic Ocean"
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "What is the longest river in Africa?",
        options: ["Nile", "Congo", "Zambezi", "Niger"],
        answer: "Nile"
    },
    {
        question: "Which artist is famous for the sculpture 'David'?",
        options: ["Michelangelo", "Leonardo da Vinci", "Donatello", "Raphael"],
        answer: "Michelangelo"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Graphite", "Quartz", "Topaz"],
        answer: "Diamond"
    },
    {
        question: "Which animal is known for its ability to change colors?",
        options: ["Chameleon", "Octopus", "Squid", "Cuttlefish"],
        answer: "Chameleon"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the largest land mammal?",
        options: ["Elephant", "Rhinoceros", "Hippopotamus", "Giraffe"],
        answer: "Elephant"
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic"],
        answer: "Antarctic"
    },
    {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese"
    },
    {
        question: "Who developed the theory of general relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        answer: "Albert Einstein"
    },
    {
        question: "Which city is known as the 'City of Angels'?",
        options: ["Los Angeles", "New York", "Paris", "Rome"],
        answer: "Los Angeles"
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Cell", "Tissue", "Organ", "Organism"],
        answer: "Cell"
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["China", "Japan", "India", "South Korea"],
        answer: "China"
    },
    {
        question: "Who is known as the 'Father of Physics'?",
        options: ["Isaac Newton", "Albert Einstein", "James Clerk Maxwell", "Michael Faraday"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the largest volcano in the world?",
        options: ["Mauna Loa", "Mount Fuji", "Mount Vesuvius", "Mount St. Helens"],
        answer: "Mauna Loa"
    },
    {
        question: "Which chemical element has the symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Milton"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice", "Florence"],
        answer: "Rome"
    },
    {
        question: "Which planet is known for its giant storm, the Great Red Spot?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the main language spoken in France?",
        options: ["French", "Spanish", "Italian", "German"],
        answer: "French"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Titian"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
        answer: "Pound Sterling"
    },
    {
        question: "Which planet is known for its tilted rotation axis?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
        answer: "Uranus"
    },
    {
        question: "What is the chemical symbol for lead?",
        options: ["Pb", "Fe", "Hg", "Au"],
        answer: "Pb"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner"],
        answer: "J.D. Salinger"
    },
    {
        question: "Which planet is known as the 'Giant Planet'?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Heart", "Lungs"],
        answer: "Skin"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        answer: "Hydrogen"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Which sea is known for its high salinity?",
        options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Baltic Sea"],
        answer: "Dead Sea"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Barbara McClintock"],
        answer: "Marie Curie"
    },
    {
        question: "What is the hardest natural material on Earth?",
        options: ["Diamond", "Topaz", "Quartz", "Corundum"],
        answer: "Diamond"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the name of the river that runs through Egypt?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Who was the 16th President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Jackson"],
        answer: "Abraham Lincoln"
    },
    {
        question: "What is the largest city in Australia by population?",
        options: ["Sydney", "Melbourne", "Brisbane", "Perth"],
        answer: "Sydney"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 60; // 60 seconds for each question

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startTimer();
    showQuestion();
}

function startTimer() {
    timeRemaining = 60; // Reset timer for each question
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer').textContent = `Time Remaining: ${timeRemaining}s`;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const questionCountElement = document.getElementById('question-count');
    const feedbackElement = document.getElementById('feedback');

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    feedbackElement.style.display = 'none';

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.className = 'option';
        optionElement.onclick = () => handleOptionClick(optionElement, option);
        optionsElement.appendChild(optionElement);
    });

    questionCountElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function handleOptionClick(optionElement, selectedOption) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
        if (option.textContent === questions[currentQuestionIndex].answer) {
            option.classList.add('correct');
        } else if (option === optionElement) {
            option.classList.add('incorrect');
        }
    });

    document.querySelector('#next-button').disabled = false;

    const feedbackElement = document.getElementById('feedback');
    if (selectedOption === questions[currentQuestionIndex].answer) {
        feedbackElement.textContent = 'Correct Answer!';
        feedbackElement.className = 'feedback correct';
        score++;
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer was ${questions[currentQuestionIndex].answer}.`;
        feedbackElement.className = 'feedback incorrect';
    }
    feedbackElement.style.display = 'block';
}

function nextQuestion() {
    clearInterval(timer);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        startTimer();
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `Your score is ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startTimer();
    showQuestion();
};