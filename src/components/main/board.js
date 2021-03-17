import React from 'react';
import {Flex, Col, Row, Text} from '../common/plain';
import styled from 'styled-components';
import {AreaChart, XAxis, Area, Tooltip, CartesianGrid, Line} from 'recharts';
import dow from '../data/dow';
import kospi from '../data/kospi';
import wti from '../data/wti';
import gold from '../data/gold';
import kosdaq from '../data/kosdaq';
import us30 from '../data/us30';
import korea3 from '../data/korea3';

export const Box = styled(Col)`
    border-radius: 18px;
    background-color: rgb(30,30,30);
    overflow: hidden;
    margin: 10px;
`;

const Link = styled.a`
    cursor: pointer;
    :hover {
        opacity: 0.85;
    };
    margin: 15px;
    display: block;
`;

export const Board = ({}) => {
    return (
        <Col width="100vw" height="84vh" padding="padding: 10px;">
            <Text weight="500" size="30" color="#FFA03B" margin="margin: 20px; margin-top: 47px;">Financial Board</Text>
            <Row style={{flex: 2}}>
                <MainBoard data={dow} title="DOW" />
                <Col style={{flex: 1}}>
                    <RightBoard data={kospi} title="KOSPI" />
                    <RightBoard data={kosdaq} title="KOSDAQ" />
                </Col>
            </Row>
            <Row style={{flex: 1}}>
                <MinorBoard data={us30} title="US 30 Futures" />
                <MinorBoard data={korea3} title="Korea 3 Futures" />
                <MinorBoard data={wti} title="WTI" />
                <MinorBoard data={gold} title="Gold" />
            </Row>
        </Col>
    )
};


  //stroke="#ff7300"
export const MainBoard = ({title, data}) => {
    return (
        <Box style={{flex: 2}}>
            <Link>
                <Text weight="500" size="20" color="#FFA03B">{title}</Text>
            </Link>
            <AreaChart
                width={825}
                height={270}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#2119C2" fill="#2119C2" />
            </AreaChart>
        </Box>
    )
}

export const RightBoard = ({title, data}) => {
    return (
        <Box style={{flex: 1}}>
            <Link>
                <Text weight="500" size="20" color="#FFA03B">{title}</Text>
            </Link>
            <AreaChart
                width={390}
                height={100}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#C21951" fill="#C21951" />
            </AreaChart>
        </Box>
    )
}

export const MinorBoard = ({title, data}) => {
    return (
        <Box style={{flex: 1}}>
            <Link>
                <Text weight="500" size="20" color="#FFA03B">{title}</Text>
            </Link>
            <AreaChart
                width={300}
                height={100}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#9500C3" fill="#9500C3" />
            </AreaChart>
        </Box>
    )
}

export default Board;