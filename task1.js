const DEFAULT_URL = "https://jsonplaceholder.typicode.com/";
const content = document.getElementById("content");
const pagination = document.getElementById("pagination");
const posts = document.getElementById("posts-menu");
const coments = document.getElementById("coments-menu");
const albums = document.getElementById("albums-menu");
const photos = document.getElementById("photos-menu");
const todos = document.getElementById("todos-menu");

const getPosts = async () => {
  const getPostsByPage = async (page) => {
    const response = await fetch(
      `${DEFAULT_URL}posts?_limit = 10&_page=${page}`
    );
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
      data,
      total: headers.get("x-total-count") || null,
    };
  };

  const getStartPage = async (url) => {
    content.innerHTML = "";
    pagination.innerHTML = "";
    const response = await fetch(`${url}posts?_limit = 10&_page=1`);
    const data = await response.json();
    [...data].forEach((post) => {
      const page = document.createElement("h3");
      page.innerHTML = `Post ${post.id}`;

      const packageDiv = document.createElement("div");
      packageDiv.classList.add("package-div");

      const title = document.createElement("div");
      title.innerHTML = `title : ${post.title}`;

      const body = document.createElement("div");
      body.innerHTML = `body : ${post.body}`;

      content.append(page);
      packageDiv.append(title);
      packageDiv.append(body);
      content.append(packageDiv);
    });
    getPaginator();
  };
  getStartPage(DEFAULT_URL);

  const getPaginator = () => {
    const responsePaginator = getPostsByPage(1);
    responsePaginator.then((res) => {
      const pagesCount = res.total / res.data.length;
      let startPage = 1;

      const prev = document.createElement("div");
      prev.innerHTML = "ПРЕДЫДУЩАЯ";
      prev.classList.add("prev");
      pagination.append(prev);

      const current = document.createElement("div");
      current.innerHTML = `${startPage} из ${pagesCount}`;
      pagination.append(current);

      const next = document.createElement("div");
      next.innerHTML = "СЛЕДУЮЩАЯ";
      next.classList.add("next");
      pagination.append(next);

      prev.addEventListener("click", () => {
        content.innerHTML = "";
        startPage--;

        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getPostsByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Post ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `Title : ${post.title}`;

            const body = document.createElement("div");
            body.innerHTML = `Body : ${post.body}`;
            content.append(page);
            packageDiv.append(title);
            packageDiv.append(body);
            content.append(packageDiv);
          });
        });
      });

      next.addEventListener("click", () => {
        content.innerHTML = "";
        startPage++;
        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getPostsByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Post ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `Title : ${post.title}`;

            const body = document.createElement("div");
            body.innerHTML = `Body : ${post.body}`;
            content.append(page);
            packageDiv.append(title);
            packageDiv.append(body);
            content.append(packageDiv);
          });
        });
      });
    });
  };
};

const getComments = async () => {
  const getCommentsByPage = async (page) => {
    const response = await fetch(
      `${DEFAULT_URL}comments?_limit = 10&_page=${page}`
    );
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
      data,
      total: headers.get("x-total-count") || null,
    };
  };

  const getStartPage = async (url) => {
    content.innerHTML = "";
    pagination.innerHTML = "";
    const response = await fetch(`${url}comments?_limit = 10&_page=1`);
    const data = await response.json();
    [...data].forEach((post) => {
      const page = document.createElement("h3");
      page.innerHTML = `Comment ${post.id}`;
      const packageDiv = document.createElement("div");
      packageDiv.classList.add("package-div");

      const name = document.createElement("div");
      name.innerHTML = `name : ${post.name}`;

      const email = document.createElement("div");
      email.innerHTML = `email : ${post.email}`;

      const body = document.createElement("div");
      body.innerHTML = `body : ${post.body}`;

      content.append(page);
      packageDiv.append(name);
      packageDiv.append(email);
      packageDiv.append(body);
      content.append(packageDiv);
    });
    getPaginator();
  };
  getStartPage(DEFAULT_URL);

  const getPaginator = () => {
    const responsePaginator = getCommentsByPage(1);
    responsePaginator.then((res) => {
      const pagesCount = res.total / res.data.length;
      let startPage = 1;

      const prev = document.createElement("div");
      prev.innerHTML = "ПРЕДЫДУЩАЯ";
      prev.classList.add("prev");
      pagination.append(prev);

      const current = document.createElement("div");
      current.innerHTML = `${startPage} из ${pagesCount}`;
      pagination.append(current);

      const next = document.createElement("div");
      next.innerHTML = "СЛЕДУЮЩАЯ";
      next.classList.add("next");
      pagination.append(next);

      prev.addEventListener("click", () => {
        content.innerHTML = "";
        startPage--;

        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getCommentsByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Comment ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `Title : ${post.title}`;

            const body = document.createElement("div");
            body.innerHTML = `Body : ${post.body}`;
            content.append(page);
            packageDiv.append(title);
            packageDiv.append(body);
            content.append(packageDiv);
          });
        });
      });

      next.addEventListener("click", () => {
        content.innerHTML = "";
        startPage++;
        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getCommentsByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Comment ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `Title : ${post.title}`;

            const body = document.createElement("div");
            body.innerHTML = `Body : ${post.body}`;
            content.append(page);
            packageDiv.append(title);
            packageDiv.append(body);
            content.append(packageDiv);
          });
        });
      });
    });
  };
};

const getAlbums = async () => {
  const getAlbumsByPage = async (page) => {
    const response = await fetch(
      `${DEFAULT_URL}albums?_limit = 10&_page=${page}`
    );
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
      data,
      total: headers.get("x-total-count") || null,
    };
  };

  const getStartPage = async (url) => {
    content.innerHTML = "";
    pagination.innerHTML = "";
    const response = await fetch(`${url}albums?_limit = 10&_page=1`);
    const data = await response.json();
    [...data].forEach((post) => {
      const page = document.createElement("h3");
      page.innerHTML = `Album ${post.id}`;

      const packageDiv = document.createElement("div");
      packageDiv.classList.add("package-div");

      const title = document.createElement("div");
      title.innerHTML = `title : ${post.title}`;

      content.append(page);
      packageDiv.append(title);
      content.append(packageDiv);
    });
    getPaginator();
  };
  getStartPage(DEFAULT_URL);

  const getPaginator = () => {
    const responsePaginator = getAlbumsByPage(1);
    responsePaginator.then((res) => {
      const pagesCount = res.total / res.data.length;
      let startPage = 1;

      const prev = document.createElement("div");
      prev.innerHTML = "ПРЕДЫДУЩАЯ";
      prev.classList.add("prev");
      pagination.append(prev);

      const current = document.createElement("div");
      current.innerHTML = `${startPage} из ${pagesCount}`;
      pagination.append(current);

      const next = document.createElement("div");
      next.innerHTML = "СЛЕДУЮЩАЯ";
      next.classList.add("next");
      pagination.append(next);

      prev.addEventListener("click", () => {
        content.innerHTML = "";
        startPage--;

        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getAlbumsByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Album ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `title : ${post.title}`;

            content.append(page);
            packageDiv.append(title);
            content.append(packageDiv);
          });
        });
      });

      next.addEventListener("click", () => {
        content.innerHTML = "";
        startPage++;
        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getAlbumsByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Album ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `title : ${post.title}`;

            content.append(page);
            packageDiv.append(title);
            content.append(packageDiv);
          });
        });
      });
    });
  };
};

const getPhotos = async () => {
  const getPhotosByPage = async (page) => {
    const response = await fetch(
      `${DEFAULT_URL}photos?_limit = 10&_page=${page}`
    );
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
      data,
      total: headers.get("x-total-count") || null,
    };
  };

  const getStartPage = async (url) => {
    content.innerHTML = "";
    pagination.innerHTML = "";
    const response = await fetch(`${url}photos?_limit = 10&_page=1`);
    const data = await response.json();

    [...data].forEach((post) => {
      const page = document.createElement("h3");
      page.innerHTML = `Photo ${post.id}`;

      const packageDiv = document.createElement("div");
      packageDiv.classList.add("package-div");

      const title = document.createElement("div");
      title.innerHTML = `title : ${post.title}`;

      const url = document.createElement("div");
      url.innerHTML = `url : ${post.url}`;

      const thumbnailUrl = document.createElement("div");
      thumbnailUrl.innerHTML = `thumbnailUrl : ${post.thumbnailUrl}`;

      content.append(page);
      packageDiv.append(title);
      packageDiv.append(url);
      packageDiv.append(thumbnailUrl);

      content.append(packageDiv);
    });
    getPaginator();
  };
  getStartPage(DEFAULT_URL);

  const getPaginator = () => {
    const responsePaginator = getPhotosByPage(1);
    responsePaginator.then((res) => {
      const pagesCount = res.total / res.data.length;
      let startPage = 1;

      const prev = document.createElement("div");
      prev.innerHTML = "ПРЕДЫДУЩАЯ";
      prev.classList.add("prev");
      pagination.append(prev);

      const current = document.createElement("div");
      current.innerHTML = `${startPage} из ${pagesCount}`;
      pagination.append(current);

      const next = document.createElement("div");
      next.innerHTML = "СЛЕДУЮЩАЯ";
      next.classList.add("next");
      pagination.append(next);

      prev.addEventListener("click", () => {
        content.innerHTML = "";
        startPage--;

        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getPhotosByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Photo ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `title : ${post.title}`;

            const url = document.createElement("div");
            url.innerHTML = `url : ${post.url}`;

            const thumbnailUrl = document.createElement("div");
            thumbnailUrl.innerHTML = `thumbnailUrl : ${post.thumbnailUrl}`;

            content.append(page);
            packageDiv.append(title);
            packageDiv.append(url);
            packageDiv.append(thumbnailUrl);

            content.append(packageDiv);
          });
        });
      });

      next.addEventListener("click", () => {
        content.innerHTML = "";
        startPage++;
        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getPhotosByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Photo ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const title = document.createElement("div");
            title.innerHTML = `title : ${post.title}`;

            const url = document.createElement("div");
            url.innerHTML = `url : ${post.url}`;

            const thumbnailUrl = document.createElement("div");
            thumbnailUrl.innerHTML = `thumbnailUrl : ${post.thumbnailUrl}`;

            content.append(page);
            packageDiv.append(title);
            packageDiv.append(url);
            packageDiv.append(thumbnailUrl);

            content.append(packageDiv);
          });
        });
      });
    });
  };
};

const getTodos = async () => {
  const getTodosByPage = async (page) => {
    const response = await fetch(
      `${DEFAULT_URL}todos?_limit = 10&_page=${page}`
    );
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
      data,
      total: headers.get("x-total-count") || null,
    };
  };

  const getStartPage = async (url) => {
    content.innerHTML = "";
    pagination.innerHTML = "";
    const response = await fetch(`${url}todos?_limit = 10&_page=1`);
    const data = await response.json();

    [...data].forEach((post) => {
      const page = document.createElement("h3");
      page.innerHTML = `Todo ${post.id}`;

      const packageDiv = document.createElement("div");
      packageDiv.classList.add("package-div");

      const completed = document.createElement("div");
      completed.innerHTML = `completed : ${post.completed}`;

      const title = document.createElement("div");
      title.innerHTML = `title : ${post.title}`;

      content.append(page);
      packageDiv.append(title);
      packageDiv.append(completed);
      content.append(packageDiv);
    });
    getPaginator();
  };
  getStartPage(DEFAULT_URL);

  const getPaginator = () => {
    const responsePaginator = getTodosByPage(1);
    responsePaginator.then((res) => {
      const pagesCount = res.total / res.data.length;
      let startPage = 1;

      const prev = document.createElement("div");
      prev.innerHTML = "ПРЕДЫДУЩАЯ";
      prev.classList.add("prev");
      pagination.append(prev);

      const current = document.createElement("div");
      current.innerHTML = `${startPage} из ${pagesCount}`;
      pagination.append(current);

      const next = document.createElement("div");
      next.innerHTML = "СЛЕДУЮЩАЯ";
      next.classList.add("next");
      pagination.append(next);

      prev.addEventListener("click", () => {
        content.innerHTML = "";
        startPage--;

        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getTodosByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Todo ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const completed = document.createElement("div");
            completed.innerHTML = `completed : ${post.completed}`;

            const title = document.createElement("div");
            title.innerHTML = `title : ${post.title}`;

            content.append(page);
            packageDiv.append(title);
            packageDiv.append(completed);
            content.append(packageDiv);
          });
        });
      });

      next.addEventListener("click", () => {
        content.innerHTML = "";
        startPage++;
        current.innerHTML = `${startPage} из ${pagesCount}`;
        let data = getTodosByPage(startPage);
        data.then((res) => {
          [...res.data].forEach((post) => {
            const page = document.createElement("h3");
            page.innerHTML = `Todo ${post.id}`;

            const packageDiv = document.createElement("div");
            packageDiv.classList.add("package-div");

            const completed = document.createElement("div");
            completed.innerHTML = `completed : ${post.completed}`;

            const title = document.createElement("div");
            title.innerHTML = `title : ${post.title}`;

            content.append(page);
            packageDiv.append(title);
            packageDiv.append(completed);
            content.append(packageDiv);
          });
        });
      });
    });
  };
};

posts.addEventListener("click", getPosts);
coments.addEventListener("click", getComments);
albums.addEventListener("click", getAlbums);
photos.addEventListener("click", getPhotos);
todos.addEventListener("click", getTodos);
