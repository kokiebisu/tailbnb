import React from 'react';
import { shallow } from 'enzyme';

// Component
import HostCard from '../../src/components/presentational/HostCard';

describe('Host Card', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HostCard />);
    expect(component).toMatchSnapshot();
  });
});
