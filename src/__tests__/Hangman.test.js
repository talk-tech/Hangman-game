import React from 'react';
import { shallow } from 'enzyme';
import Hangman from '../components/Hangman';

describe('Hangman Component', () => {
  it('renders the initial hangman figure when incorrectGuesses is 0', () => {
    const wrapper = shallow(<Hangman incorrectGuesses={0} />);
    const initialHangmanFigure = `
     _______
    |       |
    |       
    |       
    |       
    |       
   _|_______`;
    expect(wrapper.find('.hangman pre').text()).toEqual(initialHangmanFigure);
  });

  it('renders the hangman figure with 1 incorrect guess', () => {
    const wrapper = shallow(<Hangman incorrectGuesses={1} />);
    const hangmanFigure = `
     _______
    |       |
    |       O
    |       
    |       
    |       
   _|_______`;
    expect(wrapper.find('.hangman pre').text()).toEqual(hangmanFigure);
  });

  it('renders the hangman figure with 2 incorrect guesses', () => {
    const wrapper = shallow(<Hangman incorrectGuesses={2} />);
    const hangmanFigure = `
     _______
    |       |
    |       O
    |       |
    |       
    |       
   _|_______`;
    expect(wrapper.find('.hangman pre').text()).toEqual(hangmanFigure);
  });


});