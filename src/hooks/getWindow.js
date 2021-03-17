/* eslint-disable import/no-anonymous-default-export */
const {outerHeight} = window;
const {outerWidth} = window;
export const Width = outerWidth;
export const Height = outerHeight;

export default (ratio, w, h) => {
    let { outerWidth } = window;
    let widthP = outerWidth;
    const width = widthP * ratio / 100
    const height = widthP * ratio / 100 / w * h;
    return {
      width,
      height
    };
}