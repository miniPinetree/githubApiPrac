import { useState } from "react";
import { MAX_LENGTH_STORABLE_REPOSITORY } from "../policy";
import {
  getFromLocalStorage,
  setToLocalStorage,
  storageKey,
} from "../utils/storageUtils";
import { RepositoryForDisplay } from "../model/Repository";

export default function useRepository() {
  const [repositories, setRepositories] = useState<RepositoryForDisplay[]>(
    getFromLocalStorage(storageKey.Repositories) ?? []
  );

  const isMaxRepositories = () => {
    return repositories.length >= MAX_LENGTH_STORABLE_REPOSITORY;
  };

  const addRepository = (id: number, name: string, owner: string) => {
    const newResults = [...repositories, { id, name, owner }];
    setRepositories(newResults);
    setToLocalStorage(storageKey.Repositories, newResults);
  };

  const deleteRepository = (id: number) => {
    const newResults = repositories.filter(
      (repository) => repository.id !== id
    );
    setRepositories(newResults);
    setToLocalStorage("repositories", newResults);
  };

  return {
    repositories,
    addRepository,
    deleteRepository,
    isMaxRepositories,
  };
}
