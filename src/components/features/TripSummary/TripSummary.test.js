import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component Hero', () => {
  it('should render correct link if id="abc"', () => {
    const linkId = 'abc';
    const component = shallow(<TripSummary id={linkId} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${linkId}`);
  });

  it('should render correct image name and alt', () => {
    const expectedSRC = 'image';
    const expectedALT = 'image title';
    const component = shallow(<TripSummary image = {expectedSRC} name = {expectedALT} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedSRC);
    expect(component.find('img').prop('alt')).toEqual(expectedALT);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = '$50';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span:first-child').text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span:last-child').text()).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags without crashing', () => {
    const tagsArray = ['first', 'second', 'third'];
    const component = shallow(<TripSummary tags={tagsArray} />);
    expect(component.find('.tag').at(0)).toEqual[tagsArray[0]];
    expect(component.find('.tag').at(1)).toEqual[tagsArray[1]];
    expect(component.find('.tag').at(2)).toEqual[tagsArray[2]];
  });

  it('should render tags without crashing', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags').exists()).toEqual(true);
    console.log(component.debug());
  });
});
