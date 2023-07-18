//React and React DOM
/*const heading = React.createElement(
    'h1',
    { id:'abc' },
    'This is a heading.'
);

ReactDOM.render(
    heading,
    document.getElementById('react-container')
);
const paragraph = React.createElement(
    'p',
    null,
    'This is a paragraph'
);
const box=React.createElement(
    'div',
    {className:'box'},
    heading,
    paragraph
);*/
//JSX
/*
const box=
(
    <div className="box">
    <h1 id='abc'>This is a heading</h1>
    <p>This is a paragraph</p>
</div>
);
ReactDOM.render(
    box,
    document.getElementById('react-container')
);*/

//Creating a component
/*function Box(){
return (
    <div className="box">
    <h1 id='abc'>This is a heading</h1>
    <p>This is a paragraph</p>
</div>
);
}
ReactDOM.render(
    <Box />,
    document.getElementById('react-container')
);*/

//Using arrow functions as its only property is to return 
const Box=()=>{
    return (
        <div className="box">
            <h1 id='abc'>This is a heading</h1>
            <p>This is a paragraph</p>
        </div>
    );
};
const App=()=>{
    return(
        <div className='row'>
            <div className='col'>
                <Box />
            </div>
            <div className='col'>
                <Box />
            </div>
        </div>
    );
};
    ReactDOM.render(
        <App />,
        document.getElementById('react-container')
    );