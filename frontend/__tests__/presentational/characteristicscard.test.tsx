import * as React from 'react';
import { shallow } from 'enzyme';

// Components
import { CharacteristicCard } from '../../src/components/presentational/CharacteristicCard';

describe('Characteristics Card', () => {
  it('should render correctly in "debug" mode', () => {
    const components = shallow(<CharacteristicCard />);
    expect(components).toMatchSnapshot();
  });
});
