import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter';


function HeroSection() {
  const [text] = useTypewriter({
    words: [' What is the definition of a non-filer according to the Companies Ordinance, 1984 as stated in the Finance Act of 2021?',
     'What changes have been made to the definition of Officer of Inland Revenue in the Ordinance and when did they become effective? ',
      'What is the definition of a public company according to the Companies Ordinance and the Finance Act?',
      'What is meant by the term taxpayer under the Finance Act, and who does it include? ',
      'What is the tax rate specified in the First Schedule for taxable income under this Ordinance? '
    ],
    loop:{},
    typeSpeed: 50,
    deleteSpeed: 20,

  });
 
 
  return (
    <div className='hero-container'>
      <video src='/videos/video (2160p).mp4' autoPlay loop muted />
      <h1>Your Personal Consultant</h1>
      <p>Ask us anything related to income tax:</p>
      <h2 style={{margin:'50px'}}>
        {''}
        <span style={{fontWeight: 'bold', color:'white'}}>
          {text}
        </span>
        <span style={{color:'Black'}}>
        <Cursor cursorStyle = '|'/>
        </span>

      </h2>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
