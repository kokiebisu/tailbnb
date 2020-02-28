import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { HeaderCard } from '../../src/components/presentational/HeaderCard';

describe('HeaderCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HeaderCard />);
    expect(component).toMatchSnapshot();
  });
});
