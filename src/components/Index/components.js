import React, {useState} from 'react';
import {Col, Row, Flex, Image, Text} from '../common/plain';

import DailyIndexPic from '../../images/daily_index.png';
import MonthlyIndexPic from '../../images/monthly_index.png';
import Finance_index_pic from '../../images/finance_index_black.png';

import day from '../data/day';
import interests from '../data/interests';
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

export const FinanceIndex = ({}) => {
    return (
        <Col width="100%">
            <Image src={Finance_index_pic} height="35px" of="contain" margin="margin: 18px 0px;" />
            <Col style={{overflowX: 'scroll', width: '100%'}}>
                <Daily />
                <Monthly />
            </Col>
        </Col>
    )
}

export const Daily = ({}) => {
    return (
        <Row margin="margin: 20px 0px;">
            <Image src={DailyIndexPic} width="220px" of="contain" />
            <Col margin="margin-left: 10px">
                <Stock />
                <Interest />
                <Commodities />
                <KRW />
            </Col>
        </Row>
    )
}

export const Monthly = ({}) => {
    return (
        <Row margin="margin: 20px 0px;">
            <Image src={MonthlyIndexPic} width="220px" of="contain" />
            <Col margin="margin-left: 10px">
                <Month />
            </Col>
        </Row>
    )
}

export const Interest = ({}) => {
    return (
        <Col margin="margin-top: 12.5px;">
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {interests[0].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.date}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {interests[0].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {interests[1].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {interests[2].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
        </Col>
    )
}

export const Commodities = ({}) => {
    return (
        <Col margin="margin-top: 20px;">
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {gold.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.date}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {gold.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {wti.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
        </Col>
    )
}

export const Stock = ({}) => {
    return (
        <Col margin="margin-top: 50px;">
            <Row margin="margin: 5px 0px;">
                {kospi.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.date}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 40px;">
                {kospi.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 20px;">
                {dow.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
        </Col>
    )
}

export const KRW = ({}) => {
    return (
        <Col margin="margin-top: 20px;">
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {usd.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.date}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {usd.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {jpy.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px; margin-top: 10px;">
                {cny.map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item.price}</Text>
                    </Flex>)}
            </Row>
        </Col>
    )
}

export const Month = ({}) => {
    return (
        <Col>
            <Row margin="margin-top: 0px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">2021/3</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">2021/4</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">2021/5</Text></Flex>
            </Row>
            <Row margin="margin-top: 37px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">1.24</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">1.28</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600"></Text></Flex>
            </Row>
            <Row margin="margin-top: 17px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">31.67</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">32.60</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600"></Text></Flex>
            </Row>
            <Row margin="margin-top: 17px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">2133373184</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">2196644814</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">2240204442</Text></Flex>
            </Row>
            <Row margin="margin-top: 17px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.75%</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.75%</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.50%</Text></Flex>
            </Row>
            <Row margin="margin-top: 17px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.1526</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.1545</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.1570</Text></Flex>
            </Row>
            <Row margin="margin-top: 17px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.903</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.914</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">0.912</Text></Flex>
            </Row>
            <Row margin="margin-top: 17px;">
                <Flex width="100px" align="center" justify="center"><Text weight="600">3.99</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">4.45</Text></Flex>
                <Flex width="100px" align="center" justify="center"><Text weight="600">4.67</Text></Flex>
            </Row>
        </Col>
    )
}

export default FinanceIndex;