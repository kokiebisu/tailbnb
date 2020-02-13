import React from 'react';
import { shallow } from 'enzyme';

// Component
import AdventureCard from '../../src/components/presentational/AdventureCard';

describe('AdventureCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AdventureCard />);
    expect(component).toMatchSnapshot();
  });
});
