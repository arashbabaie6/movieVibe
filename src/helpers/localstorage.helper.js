function toggle(data, key) {
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

  return JSON.parse(localStorage.getItem(key));
}

function read(key) {
  return JSON.parse(localStorage.getItem(key));
}

function initiate() {
  const favorites = JSON.parse(localStorage.getItem("fav"));
  const watchLater = JSON.parse(localStorage.getItem("wl"));
  const initialValue = {};

  if (!Array.isArray(favorites)) {
    localStorage.setItem("fav", JSON.stringify([]));
    initialValue["favorites"] = [];
  } else {
    initialValue["favorites"] = favorites;
  }
  if (!Array.isArray(watchLater)) {
    localStorage.setItem("wl", JSON.stringify([]));
    initialValue["watchLater"] = [];
  } else {
    initialValue["watchLater"] = watchLater;
  }

  return initialValue;
}

export { toggle, read, initiate };
