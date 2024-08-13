import React, { useState, useEffect } from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [bmi, setBMI] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleAnswer = (questionId, answer) => {
    if (questionId === 3 || questionId === 4) {
      // If height or weight question
      setBMI(calculateBMI(questionId === 3 ? answer : answers[3], questionId === 4 ? answer : answers[4]));
    }
    setAnswers({ ...answers, [questionId]: answer });
  };

  const calculateBMI = (height, weight) => {
    // Calculate BMI
    const heightMeters = height / 100;
    return (weight / (heightMeters * heightMeters)).toFixed(2);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setShowQuestion(false);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setShowQuestion(true);
      }, 100);
    }
  };

  const handleSubmit = () => {
    console.log('Answers:', answers);
    console.log('BMI:', bmi);
    window.location.href = '/home';
  };

  const questions = [
    { id: 1, question: 'What is your Gender?', type: 'select', options: ['Male', 'Female', 'Other'] },
    { id: 2, question: 'What is your age?', type: 'select', options: ['18-25', '26-35', '36-45', '46+'] },
    { id: 3, question: 'What is your height (in cm)?', type: 'text', placeholder: 'Enter height in cm' },
    { id: 4, question: 'What is your weight (in kg)?', type: 'text', placeholder: 'Enter weight in kg' },
    { id: 5, question: 'What are your allergies to food?', type: 'multiple-select', options: ['None', 'Peanuts', 'Dairy', 'Gluten', 'Soy', 'Nuts', 'Seafood', 'Almonds', 'Dairy', 'Milk', 'Wheat', 'Alcohol'] },
  ];

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-card">
        <div className="progress-line" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
        <div className="question-container">
          {questions.map((q, index) => (
            <div key={q.id} className={`question ${index === currentQuestion && showQuestion ? 'active' : 'hidden'}`}>
              <h2 className={index === currentQuestion && showQuestion ? 'typing-animation' : ''}>{`${index + 1}: ${q.question}`}</h2>
              {q.type === 'select' ? (
                <div className="options-container">
                  {q.options.map((option, optionIndex) => (
                    <button 
                      key={optionIndex} 
                      className={`option-button ${answers[q.id] === option ? 'selected' : ''}`} 
                      onClick={() => handleAnswer(q.id, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : q.type === 'multiple-select' ? (
                <div className="multiple-select">
                  {q.options.map((option, optionIndex) => (
                    <label key={optionIndex} className={`chip ${answers[q.id]?.includes(option) ? 'selected' : ''}`}>
                      <input
                        type="checkbox"
                        value={option}
                        onChange={(e) => handleAnswer(q.id, e.target.checked ? [...(answers[q.id] || []), option] : (answers[q.id] || []).filter(a => a !== option))}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={q.type || "text"}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  className="input-field"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {bmi && (
        <div className="bmi-container">
          <p>Your Body Mass Index (BMI) is: {bmi}</p>
        </div>
      )}
      <div className="button-container">
        {currentQuestion < questions.length - 1 ? (
          <button className="next-button" onClick={handleNext} disabled={!showQuestion || !answers[questions[currentQuestion].id]}>
            Next
          </button>
        ) : (
          <button className="next-button" onClick={handleSubmit} disabled={!showQuestion || !answers[questions[currentQuestion].id]}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
