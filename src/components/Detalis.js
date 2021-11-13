import React from 'react'
import styled from 'styled-components'

function Detalis() {
    return (
        <Container>
            <Background>
                <img src="https://www.themoviedb.org/t/p/original/uE101CHyKzeK4UU2j9LVqWfC2hN.jpg"/>
            </Background>
            <Box>
            <ImageTitle>
                <img src="https://www.themoviedb.org/t/p/original/iHBWwRSyTSRIxPCyZ8nkNLc1woz.png"/>
            </ImageTitle>
            <Control>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Control>
            <SubTitle>
                    Action and Adventure, Animation, Sci-Fi and Fantasy 25m
                </SubTitle>
                <Description>
                Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.
                </Description>
            </Box>
        </Container>
    )
}

export default Detalis


const Container = styled.div`
    min-height: calc(90vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Box = styled.div`
    max-width:500px;
    margin-top:30px;
`;
    

const ImageTitle = styled.div`
    z-index: 1;
    height: 20vh;
    min-height: 170px;
    max-width: 300px;
    margin-bottom:30px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Control = styled.div`
    display:flex;
    align-items: center;
`

const PlayButton = styled.button`
    display: flex;
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    align-items: center;
    height: 56px;
    border:none;
    background: rgb(249,249,249);
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
`;

const AddButton = styled.button`
    margin-right: 16px;
    width:48px;
    height:48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    span{
        font-size:30px;
        color:white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background:rgba(0,0,0);
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`;

const Description = styled.div`
    font-size:20px;
    margin-top:16px;
    line-height:1.4;
    color:rgb(249,249,249);
`;