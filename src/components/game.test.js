import React from 'react';
import {shallow} from 'enzyme';
var enzyme = require('enzyme');

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});
