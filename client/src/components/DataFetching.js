import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function DataFetching() {
  const [post, setPost] = useState({});

  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        // console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <Container>
      <UserContainer>
        <InputContainer
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <ButtonContainer type="button" onClick={handleClick}>
          Fetch Post
        </ButtonContainer>
      </UserContainer>
      <TitleContainer>{post.title}</TitleContainer>
    </Container>
  );
}

export default DataFetching;

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  min-width: 600px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputContainer = styled.input`
  padding: 8px;
`;

const ButtonContainer = styled.button`
  margin-left: 15px;
  padding: 8px;
`;

const TitleContainer = styled.div`
  line-height: 1.5;
  padding: 8px;
  font-size: 20px;
  color: darslatekgray;
  border-top: 1px solid gray;
  width: 600px;
  text-align: center;
`;
