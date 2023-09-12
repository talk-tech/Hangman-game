import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Mock the react-modal library
jest.mock('react-modal', () => {
  return {
    setAppElement: jest.fn(),
    default: jest.fn(),
  };
});

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});