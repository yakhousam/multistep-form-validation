import axios from "axios";

export async function fetchUserById(id = 1) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
}
