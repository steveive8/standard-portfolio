import React, {useState} from 'react';
import {Flex, Col, Row, Text, Image} from './common/plain';
import Logo from '../images/standard_portfolio_logo.png';
import Lobby from '../images/lobby.png';
import Daily from '../images/finance_index.png';
import Scraps from '../images/finance_scraps.png';


export const Header = ({setPage}) => {
    const [hover, setHover] = useState(0);
    return (
        <Row align="center" position="fixed" zIndex={1001} bg="rgb(10,10,0)" justify="space-between" width="100%" padding="padding: 20px; padding-bottom: 17px; padding-right: 0px;">
            <Flex flex={1}>
                <a>
                    <Image src={Logo} height="50px;" />
                </a>
            </Flex>
            <Row align="center" justify="space-between" padding="padding-bottom: 10px;" flex={1}>
                <a onClick={() => setPage(0)} style={{flex: 1, marginRight: 20}} onMouseOver={() => setHover(1)} onMouseLeave={() => setHover(false)}>
                    <Flex style={{overflow: 'hidden'}} position="relative" padding="padding: 10px; padding-left: 0px;">
                        <Image src={Lobby} height="12px;" />
                        <Flex style={{left: hover === 1 ? 0 : '-100%', transition: 'all 200ms'}} margin="margin-top: 20px;" width="100%" height="1px" bg="rgb(255, 255, 240)" position='absolute'></Flex>
                    </Flex>
                </a>
                <a onClick={() => setPage(1)} style={{flex: 1.5, marginRight: 20}} onMouseOver={() => setHover(2)} onMouseLeave={() => setHover(false)}>
                    <Flex style={{overflow: 'hidden'}} position="relative" padding="padding: 10px; padding-left: 0px;">
                        <Image src={Daily} height="12px;" />
                        <Flex style={{left: hover === 2 ? 0 : '-100%', transition: 'all 200ms'}} margin="margin-top: 20px;" width="100%" height="1px" bg="rgb(255, 255, 240)" position='absolute'></Flex>
                    </Flex>
                </a>
                <a onClick={() => setPage(2)} style={{flex: 1.5, marginRight: 20}} onMouseOver={() => setHover(3)} onMouseLeave={() => setHover(false)}>
                    <Flex style={{overflow: 'hidden'}} position="relative" padding="padding: 10px; padding-left: 0px;">
                        <Image src={Scraps} height="12px;" />
                        <Flex style={{left: hover === 3 ? 0 : '-100%', transition: 'all 200ms'}} margin="margin-top: 20px;" width="100%" height="1px" bg="rgb(255, 255, 240)" position='absolute'></Flex>
                    </Flex>
                </a>
            </Row>
        </Row>
    )
}

export default Header;