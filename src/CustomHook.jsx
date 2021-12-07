import useFetch from "./useFetch";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
 const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <ul>
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </ul>
  );
};