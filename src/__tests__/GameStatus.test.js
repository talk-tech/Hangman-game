import React from 'react';
import { shallow } from 'enzyme';
import GameStatus from '../components/GameStatus';

describe('GameStatus Component', () => {
  it('renders "You Win!" message when gameStatus is "win"', () => {
    const wrapper = shallow(<GameStatus gameStatus="win" />);
    expect(wrapper.find('.win').text()).toEqual('You Win!');
  });

  it('renders "You Lose!" message when gameStatus is "lose"', () => {
    const wrapper = shallow(<GameStatus gameStatus="lose" />);
    expect(wrapper.find('.lose').text()).toEqual('You Lose!');
  });

  it('renders "Keep guessing..." message when gameStatus is "in-progress"', () => {
    const wrapper = shallow(<GameStatus gameStatus="in-progress" />);
    expect(wrapper.find('.in-progress').text()).toEqual('Keep guessing...');
  });

  it('calls the onRestart function when the "Restart Game" button is clicked', () => {
    const onRestartMock = jest.fn();
    const wrapper = shallow(<GameStatus gameStatus="in-progress" onRestart={onRestartMock} />);
    
    // Simulate a button click
    wrapper.find('.restart-button').simulate('click');

    // Check if the onRestart function was called
    expect(onRestartMock).toHaveBeenCalled();
  });
});
