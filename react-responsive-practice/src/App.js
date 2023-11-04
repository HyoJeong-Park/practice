import React from 'react';
import useMediaQuery from 'react-responsive';
import './App.css';

export default function App () {

  const isTest = useMediaQuery ({
    query : "(min-width : 800px)"
  });
  console.log(isTest);
  
  return (
    <div>
      {isTest && <p>This is Test</p>}
      <p>기본 텍스트</p>
    </div>
  )
};
