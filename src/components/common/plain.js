import React from "react";
import styled from "styled-components";

export const Text = styled.span`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    ${props => props.margin};
    ${props => props.padding};
    flex: ${props => props.flex};
    font-family: ${props => props.ff};
    ${props => props.to ? "cursor: pointer;" : null};
    ${props => props.to ? ":hover { opacity: 0.85 }" : null};
    ${props => props.us === "none" ? "user-select: none" : null};
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    ${props => props.margin};
    width: ${props => props.size ? props.size : props.width};
    height: ${props => props.size ? props.size : props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    ${props => props.to ? "cursor: pointer;" : null};
    ${props => props.to ? ":hover { opacity: 0.85 }" : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    opacity: ${props => props.opacity};
    position: ${props => props.position};
    flex: ${props => props.flex && props.flex};
`;

export const Row = styled(Flex)`
    flex-direction: row;
`;

export const Col = styled(Flex)`
    flex-direction: column;
`;

export const IconWrap = styled.div`
    svg {
        opacity: 0.85;
        :hover {
            opacity: 1;
        };
    };
    cursor: pointer;
    display: flex;
    align-items: center;
    z-index: ${props => props.zIndex};
    justify-content: center;
    ${props => props.margin};
    flex: ${props => props.flex};
`;

export const Image = styled.img`
    object-fit: ${props => props.of};
    ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    opacity: ${props => props.opacity};
`;

export const ImageWrapper = styled(Flex)`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
`;

export const CirclePic = ({image, size, flex, margin}) => {
    return (
        <ImageWrapper margin={margin} width={size} height={size} flex={flex}>
            <Image width={size} height={size} src={image}/>
        </ImageWrapper>
    )
}
