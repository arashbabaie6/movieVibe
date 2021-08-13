function addToStorage(data, key) {
  const storedList = JSON.parse(localStorage.getItem(key));
  if (!storedList?.length) {
    localStorage.setItem(
      key,
      JSON.stringify([
        {
          id: data.id,
          vote_average: data.vote_average,
          poster_path: data.poster_path,
        },
      ])
    );
  } else {
    const exist = storedList.findIndex((item) => item.id === data.id);
    if (exist !== -1) {
      storedList.splice(exist, 1);
      localStorage.setItem(key, JSON.stringify(storedList));
    } else {
      storedList.push({
        id: data.id,
        vote_average: data.vote_average,
        poster_path: data.poster_path,
      });
      localStorage.setItem(key, JSON.stringify(storedList));
    }
  }
}

function readFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export { addToStorage, readFromStorage };
