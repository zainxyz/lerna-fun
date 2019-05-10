const styled = require('styled-components').default;
const core = require('@fun/core');

const SuperButton = styled(core)`
    color: blue;
    width: 150px;
    content: 'this is components';
`;

SuperButton.displayName = 'ComponentsSuperButton';

module.exports = SuperButton;
