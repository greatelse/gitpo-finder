import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from "../components/Pagination/Pagination";
import renderer from "react-test-renderer";

test("Should render Pagination correctly", () => {
  const props = {
    totalItems: 2,
    nextPage: jest.fn,
    prevPage: jest.fn,
    theme: "light"
  };
  const tree = renderer.create(<Pagination {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
