import React from "react";
import { useFetchEmployees } from "../../hooks/useFetch";
import Grid, { GridItem } from "../Grid";
import useInput from "../../hooks/useInput";
import { useDebounce } from "use-debounce";
import GlobalStyle from "../GlobalStyle";

function App() {
  const { value, onChange } = useInput();
  const debouncedValue = useDebounce(value, 500);
  const { data, loading } = useFetchEmployees(debouncedValue);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <GlobalStyle />
      <form>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
          style={{
            border: 0,
            background: "white",
            fontSize: "2em",
            margin: ".5em .5em 2em",
            padding: ".5em"
          }}
        />
      </form>

      {loading && "Loading..."}
      <Grid>
        {data.map(({ name, title, image }, i) => (
          <GridItem key={i}>
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "auto" }}
            />
            <div>{name}</div>
            <div>
              <small>{title}</small>
            </div>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export default App;
