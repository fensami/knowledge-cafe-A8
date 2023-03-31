import React from 'react';
import './QuestionAndAnswer.css'

const QuestionAndAnswer = () => {
    return (
        <div className='question'>
            <h1>Question And Answer</h1>
            <div>
                <h2>Question -1 :  What is different between props and state ?</h2>
                <p>Answer: Props allow you to pass data from one component to other components as an argument. State holds information about the components. </p>

                <h2>Question -2 :  How to work useState ?</h2>
                <p>Answer: const [state, setState] = useState(initialValue);
                    Here, the initialValue is the value you want to start with, and state is the current state value that can be used in your component.</p>

                <h2>Question -3 :  What does useEffect do without data load ?</h2>
                <p>Answer: useEffect is Fetching data,
                    Reading from local storage,
                    Registering and deregistering event listeners ... 
                    without data load useEffect you can not use</p>

                <h2>Question -4 : How does react work ?</h2>
                <p>Answer: React is basically built on top of components.React is much easier to use because of components.React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. </p>
            </div>
        </div>
    );
};

export default QuestionAndAnswer;