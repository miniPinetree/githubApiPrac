import { Button, Grid, Input, List, ListItem, Typography } from "@mui/material";
import useSearch from "../hooks/useSearch";
import { useEffect, useState } from "react";
import { Item } from "../model/Search";
import useRepository from "../hooks/useRepository";
import { getRepositories } from "../apis/RepositoryApi";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { input, onChange } = useSearch();
  const navigate = useNavigate();
  const { repositories, addRepository, deleteRepository, isMaxRepositories } =
    useRepository();
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  const disable = isMaxRepositories();

  useEffect(() => {
    if (!input) return;
    (async () => {
      const result = await getRepositories(input);
      setSearchResults(result.items);
    })();
  }, [input]);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant={"h4"}>검색</Typography>
        <Input value={input} onChange={onChange}></Input>
        <List>
          {searchResults.map(({ id, name, owner }) => (
            <ListItem disabled={disable}>
              {name}
              <Button
                disabled={disable}
                color={"success"}
                onClick={() => {
                  if (disable) return;
                  return addRepository(id, name, owner.login);
                }}
              >
                추가
              </Button>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"h4"}>저장</Typography>
        <List>
          {repositories.map(({ id, name }) => (
            <ListItem>
              {name}
              <Button color={"secondary"} onClick={() => navigate(`/${id}`)}>
                상세
              </Button>
              <Button color={"error"} onClick={() => deleteRepository(id)}>
                삭제
              </Button>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
