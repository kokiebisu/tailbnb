import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { Explore } from '../../src/components/containers/Explore';

describe('Explore', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Explore />);
    expect(component).toMatchSnapshot();
  });
});
