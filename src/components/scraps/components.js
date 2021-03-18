import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Col, Row, Flex, Text, Image} from '../common/plain';

const Box = styled(Flex)`
    border-radius: 20px;
    background-color: rgb(30,30,30);
    width: 400px;
    height: 250px;
    position: relative;
    overflow: hidden;
    :hover {
        cursor: pointer;
        opacity: 0.85;
    };
    margin: 10px;
`;

export const ScrapBox = ({setScrap, index, data}) => {
    const {title, description, src} = data;
    return (
        <Box onClick={() => setScrap(index)}>
            <Image src={src} width="100%" height="100%" of="cover" />
            <Col padding="padding: 10px" bg="rgba(0,0,0,0.85)" style={{width: '100%', height: '50%', position: 'absolute', bottom: 0}}>
                <Text color="white" weight="700">{title}</Text>
                <Text lh="20" color="white" margin="margin-top: 10px">{description}</Text>
            </Col>
        </Box>
    )
}

export const Slide = ({scrap, setScrap, data = {title: "", description: "", src: ""}, article}) => {
    const {title, description, src} = data;
    return (
        <Col width="25%" height="90%" position="fixed" bg="rgb(10,10,10)" zIndex={1000} style={{opacity: scrap ? 1 : 0, right: scrap ? '0%' : '-25%', transition: 'all 300ms', top: 90}}>
            <Row padding="padding: 15px;">
                <Text color="white" weight="700">{title ? title : null}</Text>
                <Text color="white" onClick={() => setScrap(false)}>닫기</Text>
            </Row>
            <Image src={src ? src : null} width="100%" height="220px" of="cover" />
            <Col padding="padding: 15px;">
                <Text color="white" lh="20">{description ? description : null}</Text>
            </Col>
        </Col>
    )
}