import { useEffect, useState } from "react";
import { getFromLocalStorage, storageKey } from "../utils/storageUtils";
import { RepositoryForDisplay } from "../model/Repository";
import { getIssues } from "../apis/IssueApi";
import { Issue } from "../model/Issue";
import { useParams } from "react-router-dom";
import {
  Grid,
  List,
  ListItem,
  makeStyles,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";

export default function RepositoryIssues() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [issues, setIssues] = useState<Issue[]>([]);
  const repository = getFromLocalStorage(storageKey.Repositories).find(
    (repository: RepositoryForDisplay) => repository.id === Number(id)
  );

  useEffect(() => {
    (async () => {
      const result = await getIssues(repository.owner, repository.name);
      setIssues(result);
    })();
  }, [id]);

  return (
    <div>
      <Typography variant={"h4"}>이슈 목록</Typography>
      <MenuList>
        {issues.map((issue) => (
          <MenuItem>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction={"column"}
            >
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {issue.title}
              </a>
              <div>
                <Typography variant={"subtitle2"}>{repository.name}</Typography>
                <Typography variant={"caption"}>{issue.created_at}</Typography>
              </div>
            </Grid>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}
