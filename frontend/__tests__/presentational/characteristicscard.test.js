import React from 'react';
import { shallow } from 'enzyme';

// Components
import CharactersiticCard from '../../src/components/presentational/CharacteristicCard';
import { isType } from 'graphql';

describe('Characteristic Card', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CharactersiticCard />);
    expect(component).toMatchSnapshot();
  });
});
