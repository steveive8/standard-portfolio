import React, {useState} from 'react';
import {Col, Row, Flex, Image, Text} from '../common/plain';

import DailyIndexPic from '../../images/daily_index.png';
import MonthlyIndexPic from '../../images/monthly_index.png';
import Finance_index_pic from '../../images/finance_index_black.png';

import day from '../data/day';
import interests from '../data/interests';

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
                <Day />
                <Interest />
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
        <Col>
            <Row margin="margin: 5px 0px;">
                {interests[0].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px;">
                {interests[1].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item}</Text>
                    </Flex>)}
            </Row>
            <Row margin="margin: 5px 0px;">
                {interests[2].map((item) => 
                    <Flex width="100px" align="center" justify="center">
                        <Text>{item}</Text>
                    </Flex>)}
            </Row>
        </Col>
    )
}

export const Day = ({}) => {
    return (
        <Row>
            {day.map((item) => <Flex width="100px" align="center" justify="center"><Text weight="600">{item}</Text></Flex>)}
        </Row>
    )
}

export const Month = ({}) => {
    return (
        <Row>
            <Flex width="100px" align="center" justify="center"><Text weight="600">2021/3</Text></Flex>
            <Flex width="100px" align="center" justify="center"><Text weight="600">2021/4</Text></Flex>
            <Flex width="100px" align="center" justify="center"><Text weight="600">2021/5</Text></Flex>
        </Row>
    )
}

export default FinanceIndex;