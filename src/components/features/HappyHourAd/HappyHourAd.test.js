import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};
const mockProps = {
  title: 'Happy Hour',
  promoDescription: '10h',
};

describe('Component HapyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render correct header and description', () => {
    const expectTitle = mockProps.title;
    const expectPromoDescription = mockProps.promoDescription;

    const component = shallow(
      <HappyHourAd 
        title={expectTitle}
        promoDescription={expectPromoDescription} 
      />
    );
    const renderTitle = component.find('.title').text();
    const renderPromoDescription = component.find('.promoDescription').text();
    expect(renderTitle).toEqual(expectTitle);
    expect(renderPromoDescription).toEqual(expectPromoDescription);
  });
});