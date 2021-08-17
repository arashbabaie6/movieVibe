import { searchMovies } from "./api.helper";

const mockGet = jest.fn(() => "movies");

jest.mock("./axios.helper", () => () => ({
  get: mockGet,
}));

describe("When called searchMovies", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("with searchQuery and page returns correct result", () => {
    expect(searchMovies("black", 2)).toBe("movies");
    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveBeenCalledWith("/search/movie?query=black&page=2");
  });

  it("with searchQuery and initial page returns correct result", () => {
    expect(searchMovies("black", 1)).toBe("movies");
    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveBeenCalledWith("/search/movie?query=black&page=1");
  });
});
