import React from 'react';
import {Flex, Col, Row, Text, Image} from './common/plain';
import Logo from '../images/logo.png';

export const Header = ({}) => {
    return (
        <Row align="center" position="fixed" zIndex={1001} width="100%" bg="rgba(10,10,10,0.85)" padding="padding: 10px 22px;">
            <Image src={Logo} height="70px;" />
            <Col style={{flex: 1}} align="flex-end" justify="flex-end" margin="margin-right: 20px;">
                <Text color="#FFA03B" margin="margin-bottom: 5px;" size="15">Prof. Jung Rae Kim</Text>
                <Text color="rgb(120,120,120)" size="15">John Leo</Text>
            </Col>
        </Row>
    )
}

export default Header;