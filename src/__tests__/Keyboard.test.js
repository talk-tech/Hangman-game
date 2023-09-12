import React from 'react';
import { shallow } from 'enzyme';
import Keyboard from '../components/Keyboard';

describe('Keyboard Component', () => {
  it('renders all letters of the alphabet', () => {
    const onClickLetterMock = jest.fn();
    const wrapper = shallow(<Keyboard onClickLetter={onClickLetterMock} />);

    // Find all letter buttons
    const letterButtons = wrapper.find('.letter-button');

    // Check if the number of letter buttons matches the alphabet length
    expect(letterButtons).toHaveLength(26);

    // Simulate clicking each letter button
    letterButtons.forEach((button) => {
      button.simulate('click');
    });

    // Ensure that the onClickLetterMock function was called 26 times (once for each letter)
    expect(onClickLetterMock).toHaveBeenCalledTimes(26);

    // Ensure that the clicked letter matches the button text
    letterButtons.forEach((button) => {
      const letter = button.text();
      expect(onClickLetterMock).toHaveBeenCalledWith(letter);
    });
  });
});
