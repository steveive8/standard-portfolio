import React, {useState, useEffect} from 'react';
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
    margin: 10px;
    height: ${props => props.height ? props.height : '100%'};
    position: relative;
    transition: all 300ms;
    overflow: hidden;
`;

const Link = styled.a`
    cursor: pointer;
    :hover {
        opacity: 0.85;
    };
    margin: 15px;
    display: block;
`;

const To = styled.div`
    :hover {
        cursor: pointer;
        opacity: 0.85;
    };
`;

export const Board = () => {
    const [today, setToday] = useState(false);
    return (
        <Col width="100vw" height="90vh" padding="padding: 10px;" style={{flex: 1}}>
            <Row  margin="margin: 20px; margin-top: 47px;"  style={{zIndex: 1000, position: 'relative'}}align="center" justify="space-between">
                <Text weight="500" size="30" color="#FFA03B">Financial Board</Text>
                <To onClick={() => setToday(!today)} margin="margin-top: 5px;">
                    <Text weight="400" size="17" color="#00dcff">{today ? "See 1 year Board" : "오늘 Board 보기"}</Text>
                </To>
            </Row>
            <Row height={today ? '50%' : '60%'}>
                <MainBoard data={dow} today={today} title="DOW" />
                <Col style={{flex: 1}}>
                    <RightBoard today={today} data={kospi} title="KOSPI" />
                    <RightBoard today={today} data={kosdaq} title="KOSDAQ" />
                </Col>
            </Row>
            <Col style={{flex: 1}}>
                <Row style={{flex: 1}}>
                    <MinorBoard today={today} data={us30} title="US 30 Futures" />
                    <MinorBoard today={today} data={korea3} title="Korea 3 Futures" />
                    <MinorBoard today={today} data={wti} title="WTI" />
                    <MinorBoard today={today} data={gold} title="Gold" />
                </Row>
                {today && 
                <Row style={{flex: 1}}>
                    <MinorBoard on={false} today={today} data={us30} title="US 30 Futures" />
                    <MinorBoard on={false} today={today} data={korea3} title="Korea 3 Futures" />
                    <MinorBoard on={false} today={today} data={wti} title="WTI" />
                    <MinorBoard on={false} today={today} data={gold} title="Gold" />
                </Row>}
            </Col>
        </Col>
    )
};

const TodayBox = styled(Row)`
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: ${props => props.today ? 10 : -1};
    opacity: ${props => props.today ? 1: 0};
    display: flex;
    flex-direction: row;
    color: white;
    top: 0;
    height: 100%;
    transition: all 300ms;
    ${props => props.padding && props.padding};
    padding-top: 40px;
    background-color: rgba(0,0,0,${props => props.today ? '0.7' : 0});
`;

export const Today = ({data, today, padding, fontsize = "14"}) => {
    return (
        <TodayBox fontsize={fontsize} today={today} padding={padding}>
            <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Price</Text>
                <Text size={fontsize} color="#00dcff">{data.price}</Text>
            </Col>
            <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Open</Text>
                <Text size={fontsize}>{data.open === undefined ? "-" : data.open}</Text>
            </Col>
            {data.close && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Close</Text>
                <Text size={fontsize}>{data.close === undefined ? "-" : data.close}</Text>
            </Col>}
            {data.high && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">High</Text>
                <Text size={fontsize}>{data.high}</Text>
            </Col>}
            {data.low && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Low</Text>
                <Text size={fontsize}>{data.low}</Text>
            </Col>}
            {data.vol && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Vol</Text>
                <Text size={fontsize} color="#00dcff">{data.vol === "-------" ? "-" : data.vol}</Text>
            </Col>}
            <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Change</Text>
                <Text color={String(data.change).slice(0,1) === "-" ? 'red' : '#00dcff'} size={fontsize}>{data.change === undefined ? "-" : data.change}</Text>
            </Col>
        </TodayBox>
    )
}


  //stroke="#ff7300"
export const MainBoard = ({title, data, today}) => {
    return (
        <Box height={'94.5%'}>
            <Link>
                <Row align="center" justify="space-between" style={{zIndex: 1000, position: 'relative'}}>
                <Text weight="500" size="20" color="#FFA03B">{title}</Text>
                <Text weight="300" color="white">{today ? "2021 March 17" : "Last 1 Year"}</Text>
                </Row>
            </Link>
            <Today data={data[data.length -1]} today={today} />
            <AreaChart
                width={825}
                height={285}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#FFA03B" fill="#2119C2" />
            </AreaChart>
        </Box>
    )
}

export const RightBoard = ({title, data, today}) => {
    return (
        <Box style={{flex: today ? 1 : 'auto'}} height={today ? 60 : 100}>
            <Link>
                <Row align="center" justify="space-between" style={{zIndex: 1000, position: 'relative'}}>
                <Text weight="500" size="20" color="#FFA03B">{title}</Text>
                <Text weight="300" color="white">{today ? "2021 March 17" : "Last 1 Year"}</Text>
                </Row>
            </Link>
            <Today data={data[data.length -1]} today={today} />
            <AreaChart
                width={390}
                height={110}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#FFA03B" fill="#C60056" />
            </AreaChart>
        </Box>
    )
}

export const MinorBoard = ({title, data, today, on = true}) => {
    return (
        <Box style={{flex: today ? 1 : 'auto'}} height={today ? '100px' : '150px'}>
            <Link>
                <Row align="center" justify="space-between" style={{zIndex: 1000, position: 'relative'}}>
                <Text weight="500" size="20" color="#FFA03B">{title}</Text>
                <Text weight="300" color="white">{today ? "2021 March 17" : "Last 1 Year"}</Text>
                </Row>
            </Link>
            <Today fontsize={12.8} padding="padding: 0px 5px;" data={data[data.length -1]} today={today} />
            {on && <AreaChart
                width={300}
                height={100}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#FFA03B" fill="#9500C3" />
            </AreaChart>}
        </Box>
    )
}

export default Board;