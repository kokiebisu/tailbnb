import React from 'react';
import { shallow } from 'enzyme';

import PlusCard from '../src/components/PlusCard';

describe('PlusCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PlusCard />);
    expect(component).toMatchSnapshot();
  });
});
