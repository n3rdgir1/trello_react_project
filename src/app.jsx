import ReactDOM from 'react-dom';
import React from 'react';

import CardColumn from './components.jsx';

class MainPage extends React.Component {
    render () {
        return (
            <CardColumn />
        );
    }
}

ReactDOM.render(
    <MainPage />,
    document.getElementById('main')
);
