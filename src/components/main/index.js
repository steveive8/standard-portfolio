import React, {useState, useEffect} from 'react';
import {Flex, Col, Row} from '../common/plain';
import Board from './board';

export const Index = ({}) => {
    return (
        <div style={{width: '100vw', height: '92vh', overflow: 'hidden', paddingTop: 50}}>
            <Board />
        </div>
    )
};

export default Index;