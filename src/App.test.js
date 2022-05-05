import { render } from "@testing-library/react";
import App from "./App";
// Adding @emotion/jest doesn't work either
// uncomment the next two lines to try it
// import { createSerializer } from "@emotion/jest";
// expect.addSnapshotSerializer(createSerializer());

test("renders Select", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
