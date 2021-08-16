import { searchMovies } from "./api.helper";

const mockGet = jest.fn(() => "movies");

jest.mock("./axios.helper", () => () => ({
  get: mockGet,
}));

describe("When called with searchQuery and page", () => {
  it("Calls axios with correct URL and returns the result", () => {
    expect(searchMovies("black", 2)).toBe("movies");
    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveBeenCalledWith("/search/movie?query=black&page=2");
  });
});
