import * as React from 'react';
import { shallow } from 'enzyme';

// Components
import { CharacteristicCard } from '../../src/components/presentational/CharacteristicCard';

describe('Characteristics Card', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      type: 'testtype',
      title: 'testtitle',
      description: 'testdescription',
      guestnumber: 1,
      hostName: 'testhost',
      percentage: 30
    };
    const components = shallow(<CharacteristicCard {...info} />);
    expect(components).toMatchSnapshot();
  });
});
