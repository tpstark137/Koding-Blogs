import React from 'react';
import './App.css';

export default function Post(){
    return(
    <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1507057889-e1688662829922.jpg?w=1390&crop=1" alt="" />
        </div>
        <div className="texts">
          <h2>Targets EV skeptics in new series</h2>
          <p className="info">
            <a href="/" className="author">Tusshar Paul</a>
            <time>2023-09-07 10:48</time>
          </p>
          <p className="summary">Marvel retiree Robert Downey Jr. has a new show: “Downeys Dream Cars.” It follows the millionaire as he seeks to reconcile two of his hobbies.</p>
        </div>
      </div>
    );

}