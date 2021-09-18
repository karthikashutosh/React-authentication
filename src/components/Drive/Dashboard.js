import React from "react";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../../Hooks/useFolder";

export default function Dashboard() {
  const {folder}= useFolder();
  console.log(folder)
 

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </>
  );
}
