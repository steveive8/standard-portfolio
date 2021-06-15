import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Col, Row, Flex, Text, Image} from '../common/plain';
import {Close} from '../../images/close';

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

export const ScrapBox = ({setScrap, setOn, on, index, data}) => {
    const {title, description, src} = data;
    return (
        <Box onClick={() => {setScrap(data); setOn(!on)}}>
            <Image src={src} width="100%" height="100%" of="cover" />
            <Col padding="padding: 10px" bg="rgba(0,0,0,0.85)" style={{width: '100%', height: '50%', position: 'absolute', bottom: 0}}>
                <Text color="white" weight="700" lh={21}>{title}</Text>
                <Text lh="20" color="white" margin="margin-top: 10px">{description}</Text>
            </Col>
        </Box>
    )
}

export const Slide = ({on, setOn, scrap = {title: "", description: "", src: ""}, article}) => {
    const {title, description, src, date} = scrap;
    return (
        <Col width="30%" height="100%" position="fixed" bg="rgb(10,10,10)" zIndex={1002} style={{opacity: on ? 1 : 0, right: on ? '0%' : '-30%', transition: 'all 300ms', top: 0, overflowY: 'scroll'}}>
            <Row padding="padding: 15px;">
                <Text color="white" size={21} lh={25} weight="700">{title ? title : null}<Text color="rgb(200,200,200)" size={15} margin="margin-left: 10px" weight={"500"}>{date ? date : null}</Text></Text>
                <Flex onClick={() => setOn(false)} to="cursor" position="absolute" style={{right: 10, top: 17}}>
                    <Close size={20} />
                </Flex>
            </Row>
            <Image src={src ? src : null} width="100%" height="220px" of="cover" />
            <Col padding="padding: 15px;">
                <Text color="white" lh="25">{description ? description : null}</Text>
            </Col>
        </Col>
    )
}