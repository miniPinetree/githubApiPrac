import {useState} from "react";

export default function useSearch() {
  const [input, setInput] = useState("")

  const onChange = (e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return {
    input,
    onChange
  }
}