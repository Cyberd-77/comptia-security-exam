import React, { useState, useEffect } from 'react';

// Tailwind CSS is assumed to be configured in a modern React project
// You'll also need lucide-react for the icons. You can install it with:
// npm install lucide-react

import {
  CheckCircle2, XCircle, ArrowLeft, ArrowRight, Flag, Play, Pause
} from 'lucide-react';

// The question pool has been moved inside the component for simplicity
const questionsPool = [
  // --- Domain 1.0: General Security Concepts ---
  {
    id: 'q1-1',
    domain: '1.0 General Security Concepts',
    question: "What is the primary purpose of a compensating control?",
    options: ["To prevent an incident from occurring.", "To recover from an incident.", "To provide an alternative to a primary control that is not feasible.", "To deter potential attackers."],
    correctAnswers: ["To provide an alternative to a primary control that is not feasible."],
    difficulty: "Easy",
    hint: "Think about a situation where you can't implement the ideal security measure. What do you do instead?"
  },
  {
    id: 'q1-2',
    domain: '1.0 General Security Concepts',
    question: "Which of the following describes the 'Integrity' principle of the CIA triad?",
    options: ["Ensuring data is accessible to authorized users when needed.", "Ensuring data is not altered or destroyed in an unauthorized manner.", "Ensuring data is not disclosed to unauthorized individuals.", "Ensuring the identity of a user is verified."],
    correctAnswers: ["Ensuring data is not altered or destroyed in an unauthorized manner."],
    difficulty: "Medium",
    hint: "Integrity is about the trustworthiness and correctness of data."
  },
  // --- Domain 2.0: Threats, Vulnerabilities, and Mitigations ---
  {
    id: 'q2-1',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "A user receives an email from their bank asking them to click a link and verify their account details to avoid suspension. The link directs them to a fake website that looks identical to the bank's login page. This is an example of what type of social engineering attack?",
    options: ["Vishing", "Smishing", "Phishing", "Whaling"],
    correctAnswers: ["Phishing"],
    difficulty: "Easy",
    hint: "This attack is typically done via email and targets a broad range of people."
  },
  {
    id: 'q2-2',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which type of malware relies on a host program to spread and often executes malicious code when the host program is run?",
    options: ["Virus", "Trojan Horse", "Worm", "Spyware"],
    correctAnswers: ["Trojan Horse"],
    difficulty: "Medium",
    hint: "Think of the famous Greek story about a wooden horse."
  },
  // --- Domain 3.0: Security Architecture ---
  {
    id: 'q3-1',
    domain: '3.0 Security Architecture',
    question: "What is the primary benefit of a firewall in a network?",
    options: ["To encrypt all network traffic.", "To filter network traffic based on a set of security rules.", "To prevent all unauthorized access.", "To monitor all user activities."],
    correctAnswers: ["To filter network traffic based on a set of security rules."],
    difficulty: "Easy",
    hint: "A firewall acts like a gatekeeper for network traffic."
  },
  {
    id: 'q3-2',
    domain: '3.0 Security Architecture',
    question: "A company wants to prevent a single point of failure and ensure high availability for its critical services. Which of the following concepts is most relevant?",
    options: ["Load balancing", "Failover clustering", "RAID", "Virtualization"],
    correctAnswers: ["Failover clustering"],
    difficulty: "Hard",
    hint: "This involves having a secondary system ready to take over if the primary system fails."
  },
  // --- Domain 4.0: Security Operations ---
  {
    id: 'q4-1',
    domain: '4.0 Security Operations',
    question: "Which of the following is a common practice to detect malicious activity on a network by analyzing logs and network traffic?",
    options: ["Penetration testing", "Vulnerability scanning", "Security Information and Event Management (SIEM)", "Physical security controls"],
    correctAnswers: ["Security Information and Event Management (SIEM)"],
    difficulty: "Medium",
    hint: "This is a system that centralizes security data for analysis."
  },
  {
    id: 'q4-2',
    domain: '4.0 Security Operations',
    question: "What is the primary goal of a disaster recovery plan (DRP)?",
    options: ["To prevent all disasters from occurring.", "To restore critical business functions after a disaster.", "To identify all potential vulnerabilities.", "To ensure data backups are created daily."],
    correctAnswers: ["To restore critical business functions after a disaster."],
    difficulty: "Easy",
    hint: "The name says it all. What is the plan for after a disaster?"
  },
  // --- Domain 5.0: Security Program Management and Risk Management ---
  {
    id: 'q5-1',
    domain: '5.0 Security Program Management and Risk Management',
    question: "Which of the following describes the process of systematically evaluating the security posture of an organization and its controls?",
    options: ["Incident response", "Risk assessment", "Vulnerability management", "Change management"],
    correctAnswers: ["Risk assessment"],
    difficulty: "Medium",
    hint: "This process is about identifying, analyzing, and evaluating risks."
  },
  {
    id: 'q5-2',
    domain: '5.0 Security Program Management and Risk Management',
    question: "What is the purpose of a Business Impact Analysis (BIA)?",
    options: ["To identify all threats to the business.", "To determine the financial and operational impact of a disaster.", "To create a list of all security controls.", "To establish the company's security policy."],
    correctAnswers: ["To determine the financial and operational impact of a disaster."],
    difficulty: "Hard",
    hint: "This analysis focuses on the consequences of a disruption to business operations."
  },
];

const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const getUniqueRandomQuestions = (pool, count) => {
  if (count >= pool.length) return pool;
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, count);
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const App = () => {
  const totalQuestions = 10; // Change this to 100 for the final exam
  const examDuration = 75 * 60; // 75 minutes in seconds

  const [examQuestions, setExamQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [timer, setTimer] = useState(examDuration);
  const [isPaused, setIsPaused] = useState(false);
  const [showExplanation, setShowExplanation] = useState({});
  const [finalScore, setFinalScore] = useState(null);

  const startNewExam = () => {
    const newQuestions = getUniqueRandomQuestions(questionsPool, totalQuestions);
    setExamQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setExamStarted(true);
    setExamFinished(false);
    setTimer(examDuration);
    setIsPaused(false);
    setShowExplanation({});
    setFinalScore(null);
  };

  useEffect(() => {
    let interval = null;
    if (examStarted && !examFinished && !isPaused) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            endExam();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStarted, examFinished, isPaused]);

  const endExam = () => {
    setExamFinished(true);
    setIsPaused(true);
    let score = 0;
    examQuestions.forEach(q => {
      const userAnswer = userAnswers[q.id];
      if (userAnswer && q.correctAnswers.includes(userAnswer)) {
        score += 1;
      }
    });
    setFinalScore(score);
  };

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const toggleFlag = (questionId) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const navigateQuestion = (direction) => {
    if (direction === 'next' && currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const toggleShowExplanation = (questionId) => {
    setShowExplanation(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  if (isPaused) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4 animate-pulse">
          Exam Paused
        </h2>
        <p className="text-lg text-center mb-6 max-w-md">
          Your exam is currently paused. Take a break and resume when you are ready.
        </p>
        <button
          onClick={() => setIsPaused(false)}
          className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Play size={24} />
          <span>Resume Exam</span>
        </button>
      </div>
    );
  }

  if (!examStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 text-center">
          CompTIA Security+ SY0-701 Practice Exam
        </h1>
        <p className="text-lg text-center mb-6 max-w-md">
          This practice exam consists of {totalQuestions} questions pulled from a pool of {questionsPool.length},
          covering all the key objectives for the SY0-701 certification. You will have {examDuration / 60} minutes to complete the test.
        </p>
        <button
          onClick={startNewExam}
          className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200"
        >
          Start Exam
        </button>
      </div>
    );
  }

  if (examFinished) {
    const scorePercentage = ((finalScore / totalQuestions) * 100).toFixed(0);
    const passStatus = scorePercentage >= 75 ? "Pass" : "Fail";
    const passColor = scorePercentage >= 75 ? "text-green-400" : "text-red-400";

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4">Exam Results</h1>
        <div className="text-center mb-6">
          <p className="text-xl">You answered {finalScore} out of {totalQuestions} questions correctly.</p>
          <p className={`text-5xl font-bold mt-4 ${passColor}`}>
            {scorePercentage}%
          </p>
          <p className={`text-3xl font-bold mt-2 ${passColor}`}>
            {passStatus}
          </p>
        </div>
        <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-inner overflow-y-auto max-h-96">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Review Your Answers</h2>
          {examQuestions.map((question, index) => {
            const userAnswer = userAnswers[question.id];
            const isCorrect = question.correctAnswers.includes(userAnswer);
            const statusIcon = isCorrect
              ? <CheckCircle2 size={24} className="text-green-500" />
              : <XCircle size={24} className="text-red-500" />;

            return (
              <div key={question.id} className="mb-6 p-4 rounded-lg bg-gray-700 shadow-md">
                <div className="flex items-start mb-2">
                  <span className="text-lg font-bold mr-2 text-blue-400">Q{index + 1}:</span>
                  <p className="text-lg flex-1">{question.question}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {statusIcon}
                  <p className="text-md">
                    Your Answer: <span className={isCorrect ? 'text-green-300' : 'text-red-300'}>{userAnswer || 'Not Answered'}</span>
                  </p>
                </div>
                <div className="mt-2 text-md text-green-300">
                  <p>Correct Answer: <span className="font-semibold">{question.correctAnswers.join(', ')}</span></p>
                </div>
                <button
                  onClick={() => toggleShowExplanation(question.id)}
                  className="mt-2 text-sm text-yellow-300 hover:text-yellow-200"
                >
                  {showExplanation[question.id] ? 'Hide Explanation' : 'Show Explanation'}
                </button>
                {showExplanation[question.id] && (
                  <div className="mt-2 p-3 bg-gray-600 rounded-md">
                    <p className="text-sm italic">{question.hint}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={startNewExam}
          className="mt-8 p-4 rounded-lg bg-blue-600 text-white text-xl font-bold hover:bg-blue-700 transition-colors duration-200"
        >
          Retake Exam
        </button>
      </div>
    );
  }

  const currentQuestion = examQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];
  const isFlagged = !!flaggedQuestions[currentQuestion.id];

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-100 p-6 font-sans">
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-900 rounded-lg shadow-xl mb-6">
        <h1 className="text-2xl font-bold text-blue-400 mb-2 md:mb-0">CompTIA Security+ SY0-701 Practice Exam</h1>
        <div className="flex items-center space-x-4">
          <div className="text-xl font-mono text-yellow-400">
            Time Remaining: {formatTime(timer)}
          </div>
          <button
            onClick={() => setIsPaused(true)}
            className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
            aria-label="Pause Exam"
          >
            <Pause size={24} />
          </button>
          <button
            onClick={endExam}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            End Exam
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row flex-1 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-3/4 flex flex-col bg-gray-900 p-6 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-blue-300">
              Question {currentQuestionIndex + 1} of {examQuestions.length}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleFlag(currentQuestion.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
                  isFlagged
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                    : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                }`}
              >
                <Flag size={18} />
                <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto pr-2">
            <p className="text-xl text-gray-200 mb-6">{currentQuestion.question}</p>
            <div className="space-y-4">
              {shuffleArray(currentQuestion.options).map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedAnswer === option
                      ? 'bg-blue-600 ring-2 ring-blue-400'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => handleAnswerChange(currentQuestion.id, option)}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerChange(currentQuestion.id, option)}
                    className="form-radio h-5 w-5 text-blue-600 bg-gray-900 border-gray-500 focus:ring-blue-500"
                  />
                  <span className="ml-4 text-md text-gray-200">{option}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between">
            <button
              onClick={() => navigateQuestion('prev')}
              disabled={currentQuestionIndex === 0}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-700 text-gray-100 font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
            >
              <ArrowLeft size={20} />
              <span>Previous</span>
            </button>
            <button
              onClick={() => navigateQuestion('next')}
              disabled={currentQuestionIndex === examQuestions.length - 1}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
            >
              <span>Next</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/4 bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col">
          <h3 className="text-xl font-bold text-blue-300 mb-4 pb-4 border-b border-gray-700">Question Navigation</h3>
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-5 gap-3">
              {examQuestions.map((q, index) => {
                const isCurrent = index === currentQuestionIndex;
                const isAnswered = !!userAnswers[q.id];
                const isQuestionFlagged = !!flaggedQuestions[q.id];

                const baseClasses = 'relative w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all duration-200';
                let stateClasses = 'bg-gray-700 hover:bg-gray-600 text-gray-100';

                if (isAnswered) {
                  stateClasses = 'bg-blue-600 hover:bg-blue-500 text-white';
                }

                if (isCurrent) {
                  stateClasses = 'bg-yellow-400 text-gray-900 ring-2 ring-yellow-300 transform scale-110';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(index)}
                    className={`${baseClasses} ${stateClasses}`}
                  >
                    {index + 1}
                    {isQuestionFlagged && (
                      <span className="absolute top-0 right-0 -mt-1 -mr-1 text-yellow-300">
                        <Flag size={12} fill="currentColor" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={endExam}
              className="w-full py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors duration-200"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
