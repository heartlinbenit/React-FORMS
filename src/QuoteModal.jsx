import React, {useState} from 'react';
import Button from './Button';

function QuoteModal({ quoteEmoji, onClick={handleClick}, setQuoteEmoji, quoteData, closeQuotes }) {
    
    function quoteLike(){
        setQuoteEmoji(true)
        closeQuotes();
    }

    function quoteDislike(){
        setQuoteEmoji(false)
        closeQuotes();
    }
  return (
    <div>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        className="flex flex-wrap fixed z-50 justify-center items-center w-full md:inset-0 h-50"
      >
        <div className="shadow-2xl shadow-cyan-900 rounded-3xl relative  w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow p-4 dark:bg-gray-700">
            <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Quote is...
              </h3>
              <button
                onClick={closeQuotes}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

           <div className="w-30 px-4 flex flex-col items-center">
              <div className='p-5'>
                <p className='italic text-cyan-600  text-xl'>"{quoteData.quote}"</p>
                <p className='text-end font-bold'>- {quoteData.author}</p>
              </div>
              <div className='flex'>
                <Button onClick={quoteLike} button="I like it!"/>
                <Button onClick={quoteDislike} button="I dont like it!"/>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteModal;
