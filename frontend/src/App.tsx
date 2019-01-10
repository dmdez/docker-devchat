import React from "react";
import "./App.css";
import { useFetchEmployees } from "./useFetch";
import { Grid } from "./Grid";
import useInput from "./useInput";
import { useDebounce } from "use-debounce";

function App() {
  const { value, onChange } = useInput();
  const debouncedValue = useDebounce(value, 500);
  const { data, loading } = useFetchEmployees(debouncedValue);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <hr />
      {loading && "Loading..."}
      <Grid>
        {data.map(({ name, title, image }, i) => (
          <div key={i}>
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "auto" }}
            />
            <div>{name}</div>
            <div>
              <small>{title}</small>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default App;
