import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { HostCard } from '../../src/components/functions/HostCard';

describe('Host Card', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      title: 'testtitle',
      location: 'testlocation',
      country: 'testcountry',
      img: 'testimg'
    };
    const component = shallow(<HostCard {...info} />);
    expect(component).toMatchSnapshot();
  });
});
