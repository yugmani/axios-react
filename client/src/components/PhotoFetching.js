import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function PhotoFetching() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        console.log(res);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <PhotoContainer>
        {photos.map((photo) => (
          <Photo key={photo.id}>
            <PhotoTitle>{photo.title}</PhotoTitle>
            <Photoimg src={photo.url} alt="photo" />
          </Photo>
        ))}
      </PhotoContainer>
    </Container>
  );
}

export default PhotoFetching;

const Container = styled.div``;

const PhotoContainer = styled.ul``;

const Photo = styled.li`
  list-style-type: none;
  background-color: lightgray;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhotoTitle = styled.h2`
  text-transform: capitalize;
  padding-top: 15px;
  color: black;
`;

const Photoimg = styled.img`
  min-width: 600px;
  height: 250px;
  margin-top: 8px;
  margin-bottom: 15px;
  // padding-bottom: 15px;
`;
