import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { StayCard } from '../../src/components/functions/StayCard';

describe('StayCard', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      id: 'testid',
      host_is_superhost: 'testhost_is_superhost',
      name: 'testname',
      price: 10,
      country: 'testcountry',
      reviews_per_month: 10,
      picture_url: 'testpicture_url'
    };
    const component = shallow(<StayCard {...info} />);
    expect(component).toMatchSnapshot();
  });
});
