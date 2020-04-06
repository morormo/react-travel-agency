import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  remainingDays: '.countdown',
};

const mockProps = {
  title: 'testTitle',
  summerTime: 'It is summer!',
};

const daysToSummerDescription = ' days to summer';
const oneDayToSummerDescription = ' days to summer';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);

    expect(component).toBeTruthy();
  });

  it('should render header and remaining days', () => {
    const component = shallow(<DaysToSummer />);

    expect(component.exists(select.title)).toBeTruthy();
    expect(component.exists(select.remainingDays)).toBeTruthy();
  });

  it('should render correct title', () => {
    const expectedTitle = mockProps.title;
    const component = shallow(<DaysToSummer {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(expectedTitle);
  });
});

const trueDate = Date;
const mockDate = customDate =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }

    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtDay = (date, expectedDate) => {
  it(`should show correct at ${date}`, () => {
    
    global.Date = mockDate(`${date}T00:00:00.000Z`);//eslint-disable-line no-undef

    const component = shallow(<DaysToSummer {...mockProps} />);
    //console.log(component.debug());
    const renderedTime = component.find(select.remainingDays).text();
    expect(renderedTime).toEqual(expectedDate);

    global.Date = trueDate;//eslint-disable-line no-undef
  });
};

describe('Component DaysToSummer with mocked date', () => {
  // testy przed rozpoczęciem lata
  checkDescriptionAtDay('2019-06-20', '1' + oneDayToSummerDescription); // dzień przed rozpoczęciem lata
  checkDescriptionAtDay('2019-06-19', '2' + daysToSummerDescription); // 2 dni przed rozpoczęciem lata
  checkDescriptionAtDay('2019-01-01', '171' + daysToSummerDescription); // days*hours*minutes*seconds*milliseconds

  //testy po zakończeniu lata
  checkDescriptionAtDay('2019-09-24', '271' + daysToSummerDescription); // dzień po zakończeniu lata
  checkDescriptionAtDay('2019-10-20', '245' + daysToSummerDescription);

  // testy w czasie trwania lata
  checkDescriptionAtDay('2019-06-21', mockProps.summerTime);
  checkDescriptionAtDay('2019-07-21', mockProps.summerTime);
  checkDescriptionAtDay('2019-09-23', mockProps.summerTime);
});