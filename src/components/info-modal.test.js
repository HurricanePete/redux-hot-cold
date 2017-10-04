import React from 'react';
import {shallow} from 'enzyme';

import {InfoModal} from './info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Fires the onClose callback when the close button is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={dispatch} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });
});
