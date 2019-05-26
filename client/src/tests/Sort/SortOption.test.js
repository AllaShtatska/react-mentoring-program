import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SortOption from "../../components/Sort/SortOption";
import SORT_TYPE from "../../components/Sort/sortType";

it("renders correctly if option rating is selected", () => {
  const component = renderer.create(<SortOption currentSortType={SORT_TYPE.rating} sortType={SORT_TYPE.rating} onSwitchSortType={function () {}}/>);

  const jsonComponent = component.toJSON();
  expect(jsonComponent).toMatchSnapshot();
});

it("renders correctly if option rating is not selected", () => {
  const component = renderer.create(<SortOption currentSortType={SORT_TYPE.releaseDate} sortType={SORT_TYPE.rating} onSwitchSortType={function () {}}/>);

  const jsonComponent = component.toJSON();
  expect(jsonComponent).toMatchSnapshot();
});

it("renders correctly if option release date is selected", () => {
  const component = renderer.create(<SortOption currentSortType={SORT_TYPE.releaseDate} sortType={SORT_TYPE.releaseDate} onSwitchSortType={function () {}}/>);

  const jsonComponent = component.toJSON();
  expect(jsonComponent).toMatchSnapshot();
});

it("renders correctly if option release date is not selected", () => {
  const component = renderer.create(<SortOption currentSortType={SORT_TYPE.rating} sortType={SORT_TYPE.releaseDate} onSwitchSortType={function () {}}/>);

  const jsonComponent = component.toJSON();
  expect(jsonComponent).toMatchSnapshot();
});

it("should trigger switch sort type on click", () => {
  const switchSortType = jest.fn();
  const component = shallow(<SortOption currentSortType={SORT_TYPE.rating} sortType={SORT_TYPE.releaseDate} onSwitchSortType={switchSortType}/>);

  component.find("button").simulate("click");

  expect(switchSortType).toHaveBeenCalled();
  expect(switchSortType).toBeCalledWith(SORT_TYPE.releaseDate);
});
