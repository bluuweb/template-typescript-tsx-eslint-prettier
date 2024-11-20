const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1000';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      // throw new Error(`${response.status} error`);
      throw { ok: false, msg: `${response.status} error` };
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
