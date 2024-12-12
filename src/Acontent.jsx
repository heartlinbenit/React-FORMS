import React, { useState } from 'react';
import Button from './Button';
import randomQuotes from 'random-quotes';
import Tab from './Tab';
import QuoteModal from './QuoteModal';

function Acontent() {
  const [quoteEmoji, setQuoteEmoji] = useState(true)
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [closeQuote, setCloseQuote] = useState(false);

  function closeQuotes() {
    setCloseQuote(!closeQuote);
  }

  function handleClick() {
    const randomQuote = randomQuotes();
    // console.log(randomQuote); 
    setQuoteData({
      quote: randomQuote.body || 'No quote available', 
      author: randomQuote.author || 'Unknown author'
    });
    setCloseQuote(true); 
  }

  return (
    <div className='m-4 p-40 flex flex-col items-center h-80'>
      
      {closeQuote && <QuoteModal onClick={handleClick} quoteEmoji={quoteEmoji} setQuoteEmoji={setQuoteEmoji} quoteData={quoteData} closeQuotes={closeQuotes} />}
      <Button onClick={handleClick} button="Click for random quotes" />
      <div className='p-10 h-20 flex justify-center items-center'>
           {quoteEmoji && <img className="h-10 w-10" src='./smile.jpg'/>}
           {!quoteEmoji && <img className="h-10 w-10" src='./sad.jpg'/>}
      </div>
      <div className='py-10'>
           <Tab />
      </div> 
      
    </div>
  );
}

export default Acontent;
