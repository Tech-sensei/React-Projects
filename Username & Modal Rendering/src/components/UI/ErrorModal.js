import React from 'react';
import Card from '../UI/Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onErrorHandler }) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={onErrorHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
