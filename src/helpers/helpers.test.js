import { searchMovies } from "./api.helper";

describe("API:", () => {
  const mockMovies = jest.fn(searchMovies);
  const searchQuery = "bLack";
  function handleCompare(item) {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  }

  it("mock searchMovies testing resolve", () => {
    mockMovies.mockResolvedValue({
      data: { results: [{ title: "black", title: "black 2" }] },
    });

    return mockMovies(searchQuery).then((res) => {
      const assertion = res.data.results.every(handleCompare);
      expect(assertion).toBeTruthy();
    });
  });

  it("mock searchMovies testing reject", () => {
    mockMovies.mockRejectedValue({
      response: { data: { status_message: "not found", status_code: 404 } },
    });

    return mockMovies(searchQuery).catch((error) => {
      expect.assertions(2);
      expect(error.response.data.status_message).toBe("not found");
      expect(error.response.data.status_code).toBe(404);
    });
  });

  it("real api searchMovies testing", () => {
    return searchMovies(searchQuery).then((res) => {
      const assertion = res.data.results.every(handleCompare);
      expect(assertion).toBeTruthy();
    });
  });
});
