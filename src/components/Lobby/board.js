import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../common/plain';
import styled from 'styled-components';
import {AreaChart, XAxis, Area, Tooltip, CartesianGrid, Line} from 'recharts';

//datas
import dow from '../data/dow';
import kospi from '../data/kospi';
import wti from '../data/wti';
import gold from '../data/gold';
import kosdaq from '../data/kosdaq';
import us30 from '../data/us30';
import korea3 from '../data/korea3';
import korea from '../data/korea';
import usd from '../data/usd';
import cny from '../data/cny';
import jpy from '../data/jpy';
import interest from '../data/interests';

//images
import finance_now_logo from '../../images/finance_now.png'
import stockpic from '../../images/stock.png';
import dowpic from '../../images/dow.png';
import nasdaqpic from '../../images/nasdaq.png';
import kospipic from '../../images/kospi.png';
import commoditiespic from '../../images/commodities.png';
import goldpic from '../../images/gold.png';
import wtipic from '../../images/wti.png';
import interestspic from '../../images/interests.png';
import cd91pic from '../../images/cd91.png';
import cb3pic from '../../images/cb3.png';
import korea3pic from '../../images/korea3.png';
import exchangepic from '../../images/exchange_rates.png'
import usdpic from '../../images/usd:krw.png';
import jpypic from '../../images/jpy:krw.png';
import cnypic from '../../images/cny:krw.png';
import kosdaqpic from '../../images/kosdaq.png';



export const Box = styled(Col)`
    margin: 10px 0px;
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
`;

export const Board = () => {
    return (
        <Col width="100%" align="center" margin="margin-bottom: 20px;">
            <Image src={finance_now_logo} height="35px" of="contain" margin="margin: 10px 0px; margin-top: 18px;" />
            <Col align="flex-start" width="100%">
                <Image src={stockpic} height="28px" of="contain" margin="margin: 20px 0px; margin-top: 10px;" />
                <Row align="flex-start" justify="space-between" width="100%" margin="margin-bottom: 15px;">
                    <MiddleBoard img={kospipic} data={kospi} title="KOSPI" />
                    <MiddleBoard img={kosdaqpic} data={kosdaq} title="KOSDAQ" />
                    <MiddleBoard img={dowpic} data={dow} title="DOW" />
                </Row>
                <Image src={interestspic} height="28px" of="contain" margin="margin: 20px 0px;" />
                <Row align="flex-start" justify="space-between" width="100%" margin="margin-bottom: 15px;">
                    <MiddleBoard img={korea3pic} data={interest[1]} title="Korea 3 Year Bond Yield" />
                    <MiddleBoard img={cb3pic} data={interest[2]} title="Korea Corporate 3 Year Bond Yield" />
                    <MiddleBoard img={cd91pic} data={interest[0]} title="Korea CD 91" />
                </Row>
                <Image src={exchangepic} height="28px" of="contain" margin="margin: 20px 0px;" />
                <Row align="flex-start" justify="space-between" width="100%" margin="margin-bottom: 15px;">
                    <MiddleBoard img={usdpic} data={usd} title="USD_KRW" />
                    <MiddleBoard img={cnypic} data={cny} title="CNY_KRW" />
                    <MiddleBoard img={jpypic} data={jpy} title="JPY_KRW" />
                </Row>
                <Image src={commoditiespic} height="35px" of="contain" margin="margin: 20px 0px;" />
                <Row align="flex-start" justify="space-between" width="100%" margin="margin-bottom: 15px;">                
                    <LongBoard img={wtipic} data={wti} title="WTI" />
                    <LongBoard img={goldpic} data={gold} title="Gold" />
                </Row>
            </Col>
        </Col>
    )
};

/*

<Row margin="margin: 20px;"  style={{zIndex: 1000, position: 'relative'}}align="center" justify="space-between">
                <Image src={finance_now_logo} height="30px" />
                <To onClick={() => setToday(!today)} margin="margin-top: 5px;">
                    <Text weight="400" size="17" color="#00dcff">{today ? "See 1 year Board" : "오늘 Board 보기"}</Text>
                </To>
            </Row>
            <Row height={today ? '50%' : '60%'}>
                <Col style={{flex: 1}}>
                    <MiddleBoard today={today} data={kospi} title="KOSPI" />
                    <MiddleBoard today={today} data={kosdaq} title="KOSDAQ" />
                    <MiddleBoard today={today} data={kosdaq} title="KOSDAQ" />
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
                    <MinorBoard on={false} today={today} data={korea} title="Korea CD" />
                    <MinorBoard on={false} today={today} data={usd} title="USD_KRW" />
                    <MinorBoard on={false} today={today} data={cny} title="CNY_KRW" />
                    <MinorBoard on={false} today={today} data={jpy} title="JPY_KRW" />
                </Row>}
            </Col>
*/

const TodayBox = styled(Row)`
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: ${props => props.today ? 10 : -1};
    opacity: ${props => props.today ? 1: 0};
    display: flex;
    flex-direction: row;
    font-weight: 500;
    top: 0;
    height: 100%;
    transition: all 300ms;
    cursor: pointer;
    ${props => props.padding && props.padding};
    padding-top: 40px;
`;

export const Today = ({title, data, today, padding, fontsize = "12.8"}) => {
    return (
        <TodayBox fontsize={fontsize} today={today} padding={padding}>
            {title !== "Korea CD" ? <>
            {data.price && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Price</Text>
                <Text size={fontsize}>{data.price}</Text>
            </Col>}
            {data.open && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Open</Text>
                <Text size={fontsize}>{data.open === undefined ? "-" : data.open}</Text>
            </Col>}
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
                <Text size={fontsize}>{data.vol === "-------" ? "-" : data.vol}</Text>
            </Col>}
            <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Change</Text>
                <Text color={String(data.change).slice(0,1) === "-" ? 'blue' : 'red'} size={fontsize}>{data.change === undefined ? "-" : data.change}</Text>
            </Col>
            </> :
            <>
            {data.cd91 && <Col align="center" style={{flex: 1}}>
                <Text size={fontsize} margin="margin-bottom: 10px;">Interest</Text>
                <Text size={fontsize}>{data.cd91}</Text>
            </Col>}
            </>}
        </TodayBox>
    )
}


  //stroke="#ff7300"
export const MainBoard = ({title, data, today}) => {
    return (
        <Box height={'94.5%'}>
            <Link>
                <Row align="center" justify="space-between" style={{zIndex: 1000, position: 'relative'}}>
                <Text weight="500" size="20">{title}</Text>
                <Text weight="300" color="white">{today ? "2021 March 22" : "Last 1 Year"}</Text>
                </Row>
            </Link>
            <Today title={title} data={data[data.length -1]} today={today} />
            <AreaChart
                width={825}
                height={285}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#FFA03B" fill="#2119C2" />
            </AreaChart>
        </Box>
    )
}

export const MiddleBoard = ({title, data, img}) => {
    const [today, setToday] = useState(false)
    return (
        <Box>
            <Row zIndex={100} to="cursor" onMouseOver={() => setToday(true)} onMouseLeave={() => setToday(false)} align="center" justify="space-between" margin="margin-bottom: 20px;">
                <Image src={img} height="25px" of="contain" />
                <Text weight="500">{today ? "2021 March 22" : title === "KOSDAQ" ? "Last 1 Year" : "Recent 3 Month"}</Text>
            </Row>
            <Today title={title} data={data[data.length -1]} today={today} />
            <AreaChart
                width={390}
                height={110}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey={title === "KOSDAQ" ? "name" : "date"} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="black" fill="rgb(232,170,90)" fillOpacity={0.51} />
            </AreaChart>
        </Box>
    )
}

export const LongBoard = ({title, data, img}) => {
    const [today, setToday] = useState(false)
    return (
        <Box>
            <Row zIndex={100} to="cursor" onMouseOver={() => setToday(true)} onMouseLeave={() => setToday(false)} align="center" justify="space-between" margin="margin-bottom: 20px;">
                <Image src={img} height="25px" of="contain" />
                <Text weight="500">{today ? "2021 March 22" : "Last 1 Year"}</Text>
            </Row>
            <Today title={title} fontsize={12.8} padding="padding: 0px 5px;" data={data[data.length -1]} today={today} />
            <AreaChart
                width={600}
                height={100}
                data={data}
                margin={{top: 0}}
                >
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey={title === "Korea CD" ? "cd91" : "price"} stroke="black" fill="rgb(232,170,90)" fillOpacity={0.55} />
            </AreaChart>
        </Box>
    )
}

export default Board;