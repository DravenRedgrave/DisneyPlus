import React from 'react'
import styled from 'styled-components'
import {selectMovies} from "../features/movie/movieSlice";
import {useSelector} from "react-redux";

function Movies() {

    const movies = useSelector(selectMovies);


    return (
        <Container>
            <h4>Recomended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iWsYpPTBvsXxXQcP5imjPZ8F8UX.jpg"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgba(0 0 0 / 80%) 0px 49px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`;