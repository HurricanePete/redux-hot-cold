import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';

import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should dispatch the makeGuess action on submit', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '10';
        const input = wrapper.find('input[id="userGuess"]');
        input.value = value;
        console.log(input.value);
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });

    it('Should reset the input when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const input = wrapper.find('input[id="userGuess"]');
        input.value = '10';
        wrapper.simulate('submit');
        expect(input.value).toEqual('');
    });
});
