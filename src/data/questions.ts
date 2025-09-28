export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizTopic {
  [key: string]: Question[];
}

export const quizQuestions: QuizTopic = {
  it: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language", 
        "Home Tool Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      correctAnswer: 0,
      explanation: "HTML stands for HyperText Markup Language, the standard markup language for creating web pages."
    },
    {
      id: 2,
      question: "Which programming language is known as the 'backbone' of web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: 2,
      explanation: "JavaScript is often called the backbone of web development as it runs in browsers and enables interactive websites."
    },
    {
      id: 3,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Unit", 
        "Computer Processing Unit"
      ],
      correctAnswer: 0,
      explanation: "CPU stands for Central Processing Unit, the main component that executes instructions in a computer."
    },
    {
      id: 4,
      question: "Which company developed the React JavaScript library?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      correctAnswer: 1,
      explanation: "React was developed by Facebook (now Meta) and is now maintained by Meta and the open-source community."
    },
    {
      id: 5,
      question: "What is the latest version of HTTP protocol?",
      options: ["HTTP/1.1", "HTTP/2", "HTTP/3", "HTTP/4"],
      correctAnswer: 2,
      explanation: "HTTP/3 is the latest version of the HTTP protocol, offering improved performance over its predecessors."
    }
  ],
  sports: [
    {
      id: 1,
      question: "How many players are on a basketball team on the court at once?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      explanation: "A basketball team has 5 players on the court at any given time during play."
    },
    {
      id: 2,
      question: "In which sport would you perform a slam dunk?",
      options: ["Tennis", "Football", "Basketball", "Volleyball"],
      correctAnswer: 2,
      explanation: "A slam dunk is a basketball move where a player forcefully puts the ball through the hoop."
    },
    {
      id: 3,
      question: "How often are the Summer Olympic Games held?",
      options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
      correctAnswer: 2,
      explanation: "The Summer Olympic Games are held every 4 years, with the most recent being in Tokyo 2021 (delayed from 2020)."
    },
    {
      id: 4,
      question: "What is the maximum score possible in ten-pin bowling?",
      options: ["200", "250", "300", "350"],
      correctAnswer: 2,
      explanation: "300 is the perfect score in bowling, achieved by getting 12 strikes in a row."
    },
    {
      id: 5,
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Argentina", "Brazil", "Italy"],
      correctAnswer: 2,
      explanation: "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002), more than any other country."
    }
  ],
  finance: [
    {
      id: 1,
      question: "What does GDP stand for?",
      options: [
        "Gross Domestic Product",
        "General Domestic Product", 
        "Global Domestic Product",
        "Gross Development Product"
      ],
      correctAnswer: 0,
      explanation: "GDP stands for Gross Domestic Product, a measure of a country's economic output."
    },
    {
      id: 2,
      question: "Which is considered the safest investment option?",
      options: ["Stocks", "Bonds", "Real Estate", "Government Treasury Bills"],
      correctAnswer: 3,
      explanation: "Government Treasury Bills are generally considered the safest investment as they're backed by government credit."
    },
    {
      id: 3,
      question: "What is inflation?",
      options: [
        "Decrease in prices over time",
        "Increase in prices over time",
        "Stable prices over time",
        "Fluctuating prices randomly"
      ],
      correctAnswer: 1,
      explanation: "Inflation is the general increase in prices of goods and services over time, reducing purchasing power."
    },
    {
      id: 4,
      question: "What does ROI stand for in finance?",
      options: [
        "Rate of Interest", 
        "Return on Investment",
        "Risk of Investment",
        "Ratio of Income"
      ],
      correctAnswer: 1,
      explanation: "ROI stands for Return on Investment, a measure used to evaluate the efficiency of an investment."
    },
    {
      id: 5,
      question: "Which market index tracks the top 500 US companies?",
      options: ["Dow Jones", "NASDAQ", "S&P 500", "Russell 2000"],
      correctAnswer: 2,
      explanation: "The S&P 500 tracks the stock performance of 500 large US companies listed on stock exchanges."
    }
  ],
  physics: [
    {
      id: 1,
      question: "What is the speed of light in a vacuum?",
      options: [
        "299,792,458 m/s",
        "300,000,000 m/s", 
        "186,000 miles/s",
        "Both A and C are correct"
      ],
      correctAnswer: 3,
      explanation: "The speed of light is exactly 299,792,458 m/s or approximately 186,000 miles per second."
    },
    {
      id: 2,
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: 1,
      explanation: "Albert Einstein developed both the special and general theories of relativity."
    },
    {
      id: 3,
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correctAnswer: 2,
      explanation: "The ohm is the unit of electrical resistance, named after German physicist Georg Ohm."
    },
    {
      id: 4,
      question: "Which law states that for every action, there is an equal and opposite reaction?",
      options: [
        "Newton's First Law",
        "Newton's Second Law", 
        "Newton's Third Law",
        "Law of Conservation of Energy"
      ],
      correctAnswer: 2,
      explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction."
    },
    {
      id: 5,
      question: "What is the smallest unit of matter?",
      options: ["Molecule", "Atom", "Proton", "Quark"],
      correctAnswer: 3,
      explanation: "Quarks are currently considered the smallest known units of matter, making up protons and neutrons."
    }
  ],
  astronomy: [
    {
      id: 1,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface giving it a reddish appearance."
    },
    {
      id: 2,
      question: "What is the closest star to Earth?",
      options: ["Alpha Centauri", "Sirius", "The Sun", "Proxima Centauri"],
      correctAnswer: 2,
      explanation: "The Sun is the closest star to Earth at about 93 million miles away."
    },
    {
      id: 3,
      question: "How many moons does Earth have?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 1,
      explanation: "Earth has one natural satellite, the Moon."
    },
    {
      id: 4,
      question: "What is a light-year?",
      options: [
        "The time light travels in one year",
        "The distance light travels in one year", 
        "The weight of light in one year",
        "The speed of light times one year"
      ],
      correctAnswer: 1,
      explanation: "A light-year is the distance that light travels in one year, approximately 6 trillion miles."
    },
    {
      id: 5,
      question: "Which is the largest planet in our solar system?",
      options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
      correctAnswer: 1,
      explanation: "Jupiter is the largest planet in our solar system, with a mass greater than all other planets combined."
    }
  ],
  history: [
    {
      id: 1,
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      explanation: "World War II ended in 1945 with Germany's surrender in May and Japan's surrender in September."
    },
    {
      id: 2,
      question: "Who was the first person to walk on the moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
      correctAnswer: 1,
      explanation: "Neil Armstrong was the first person to walk on the moon on July 20, 1969, during the Apollo 11 mission."
    },
    {
      id: 3,
      question: "Which ancient wonder of the world was located in Egypt?",
      options: [
        "Hanging Gardens of Babylon",
        "Colossus of Rhodes", 
        "Great Pyramid of Giza",
        "Temple of Artemis"
      ],
      correctAnswer: 2,
      explanation: "The Great Pyramid of Giza, built around 2580-2510 BC, is the only ancient wonder still largely intact."
    },
    {
      id: 4,
      question: "The Renaissance period began in which country?",
      options: ["France", "England", "Italy", "Spain"],
      correctAnswer: 2,
      explanation: "The Renaissance began in Italy in the 14th century, starting in cities like Florence and Venice."
    },
    {
      id: 5,
      question: "Who was the first President of the United States?",
      options: ["John Adams", "Thomas Jefferson", "Benjamin Franklin", "George Washington"],
      correctAnswer: 3,
      explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
    }
  ],
  literature: [
    {
      id: 1,
      question: "Who wrote the novel '1984'?",
      options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
      correctAnswer: 1,
      explanation: "George Orwell wrote '1984', a dystopian novel published in 1949."
    },
    {
      id: 2,
      question: "Which Shakespeare play features the characters Romeo and Juliet?",
      options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
      correctAnswer: 2,
      explanation: "'Romeo and Juliet' is one of Shakespeare's most famous tragedies about young star-crossed lovers."
    },
    {
      id: 3,
      question: "Who wrote 'Pride and Prejudice'?",
      options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Virginia Woolf"],
      correctAnswer: 2,
      explanation: "Jane Austen wrote 'Pride and Prejudice', published in 1813, one of the most popular novels in English literature."
    },
    {
      id: 4,
      question: "What is the first book in the Harry Potter series?",
      options: [
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Prisoner of Azkaban", 
        "Harry Potter and the Goblet of Fire"
      ],
      correctAnswer: 1,
      explanation: "'Harry Potter and the Philosopher's Stone' (or 'Sorcerer's Stone' in the US) is the first book in the series."
    },
    {
      id: 5,
      question: "Which epic poem was written by Homer?",
      options: ["The Aeneid", "The Iliad", "Beowulf", "The Divine Comedy"],
      correctAnswer: 1,
      explanation: "Homer wrote 'The Iliad' and 'The Odyssey', two of the oldest works of Western literature."
    }
  ]
};