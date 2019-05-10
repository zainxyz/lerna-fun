const styled = require('styled-components').default;

const Button = styled.button`
    padding: 5px;
    background-color: red;
    content: 'this is core';
`;

Button.displayName = 'CoreButton';

module.exports = Button;
