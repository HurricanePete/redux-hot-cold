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
        const value = "10";
        const input = wrapper.find('input[type="text"]');
        input.simulate('change', {target: {value: value}});
        wrapper.simulate('submit');
        setTimeout(function() {
            expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
        }, 0);
    });

    it('Should reset the input when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const input = wrapper.find('input[id="userGuess"]');
        input.value = '10';
        wrapper.simulate('submit');
        setTimeout(function() {
            expect(input.value).toEqual('');
        }, 0);
    });
});
