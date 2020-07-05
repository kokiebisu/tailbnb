import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { FeaturedCard } from '../../src/components/functions/FeaturedCard';

describe('FeaturedCard', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      img: 'testimg',
      verified: 10,
      description: 'testdescription'
    };
    const component = shallow(<FeaturedCard {...info} />);
    expect(component).toMatchSnapshot();
  });
});
