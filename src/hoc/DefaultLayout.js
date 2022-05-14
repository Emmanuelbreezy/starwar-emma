import React from 'react';
import styled from 'styled-components';


export default function DefaultLayout(props) {
  return (
    <Container className="h-screen w-100 bg-black">
        {props.children}
      
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: block;
    padding: 10px 0px;
`;