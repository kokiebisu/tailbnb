import React from 'react';
import { shallow } from 'enzyme';

// Component
import Explore from '../src/components/Explore';

describe('Explore', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Explore />);
    expect(component).toMatchSnapshot();
  });
});
