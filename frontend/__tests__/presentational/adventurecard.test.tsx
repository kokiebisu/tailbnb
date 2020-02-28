import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { AdventureCard } from '../../src/components/presentational/AdventureCard';

describe('AdventureCard', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      id: 'testid',
      img: 'testimg',
      country: 'testcountry',
      title: 'testtitle',
      cost: 15,
      period: 10
    };
    const component = shallow(<AdventureCard {...info} />);
    expect(component).toMatchSnapshot();
  });
});
