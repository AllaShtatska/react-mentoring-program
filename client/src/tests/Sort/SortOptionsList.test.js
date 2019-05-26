import React from "react";
import renderer from "react-test-renderer";
import SortOptionsList from "../../components/Sort/SortOptionsList";
import SORT_TYPE from "../../components/Sort/sortType";

it("renders correctly", () => {
  const component = renderer.create(<SortOptionsList currentSortType={SORT_TYPE.rating} onSwitchSortType={function () {}}/>);

  const jsonComponent = component.toJSON();
  expect(jsonComponent).toMatchSnapshot();
});
