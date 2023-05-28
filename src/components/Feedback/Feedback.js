import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
    }

    

    goodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
            total: prevState.total + 1,
        }), () => {
            this.countPositiveFeedbackPercentage();
        });
    };
    
    neuturalFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
            total: prevState.total + 1,
        }), () => {
            this.countPositiveFeedbackPercentage();
        });
    };
    
    badFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
            total: prevState.total + 1,
        }), () => {
            this.countPositiveFeedbackPercentage();
        });
    };

countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
        positiveFeedback: (prevState.good / prevState.total) * 100
    }));
}

    render() {
        const { good, neutral, bad, total, positiveFeedback } = this.state;
        const ShortingNumber = positiveFeedback.toFixed(3);
        return (
            <div className={css.container}>
                <h1>Please leave feedback</h1>
                <div className={css.buttonStyle}>
                    <button className={css.button} type='button' onClick={this.goodFeedback}>Good</button>
                    <button className={css.button} type='button' onClick={this.neuturalFeedback}>Neutral</button>
                    <button className={css.button} type='button' onClick={this.badFeedback}>Bad</button>
                </div>
                <p className={css.statisticsStyle}>Statistics</p>
                <div className={css.statistickStyle}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>total: {total}</p>
                    <p>positiveFeedback: {ShortingNumber}%</p>
                </div>
            </div>
        )
    }
}

export default Feedback