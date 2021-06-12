import React, {useState} from 'react';
import {Flex, Col, Row, Text, Image} from '../common/plain';
import {ScrapBox, Slide} from './components';
import finance_scrap from '../../images/finance_scraps_black.png';

const data = [
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    },
    {
        src: "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_261007_16160572744578480.jpg",
        title: "'한탕의 환상'…투자중독 청년 3배 급증",
        description: `큰 수익 경험 못 잊고 투기로
        주변 돈 번 소식도 애타게 해
        군인도 24시간 코인판에 빠져
        
        도박상담 전년대비 56% 증가
        투자중독 全연령층 72% 늘어`,
    }
]

/*
export const Scrap = ({}) => {
    const [scrap, setScrap] = useState(false);
    return (
        <Col width="100vw" height="90vh" justify="flex-start">
            <Text weight="500" size="30" color="#FFA03B" margin="margin: 30px;">Financial Scraps</Text>
            <Col align="center" justify="center" margin="margin-top: 50px;">
                <Text weight="700" size="50" color="rgb(170,170,170)" margin="margin: 20px 0px;">Coming Soon</Text>
                <Text weight="700" size="30" color="rgb(170,170,170)" margin="margin: 10px 0px;">Website Plan</Text>
                <Text weight="700" size="20" color="rgb(170,170,170)" margin="margin: 10px 0px;">1. Scrap Section</Text>
                <Text weight="700" size="20" color="rgb(170,170,170)" margin="margin: 10px 0px;">2. Korea CD, CB, Future Compare Section</Text>
                <Text weight="700" size="20" color="rgb(170,170,170)" margin="margin: 10px 0px;">3. Daily Table Section</Text>
            </Col>
        </Col>
    )
}
*/

export const Scrap = ({}) => {
    const [scrap, setScrap] = useState(false);
    return (
        <Col width="100%" justify="center">
            <Slide setScrap={setScrap} scrap={scrap} data={data[scrap]} />
            <Image src={finance_scrap} height="35px" of="contain" margin="margin: 10px 0px; margin-top: 18px;" />
            <Col width="100%" align="center" justify="center" margin="margin-top: 20px;">
                <Row width="100%" height="100%" align="center">
                    {data.slice(0,4).map((item, index) => <ScrapBox setScrap={setScrap} index={index} data={item} key={index}/>)}
                </Row>
                <Row width="100%" height="100%" align="center">
                    {data.slice(4,).map((item, index) => <ScrapBox setScrap={setScrap} index={index} data={item} key={index}/>)}
                </Row>
            </Col>
        </Col>
    )
}

export default Scrap;