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
/*const Box=()=>{
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
    );*/

    //Using Props
    /*const Box=(props)=>{
        return (
            <div className="box">
                <h1 id='abc'>{props.heading}</h1>
                <p>This is a paragraph</p>
            </div>
        );
    };
    const App=()=>{
        return(
            <div className='row'>
                <div className='col'>
                    <Box heading='First Heading'/>
                </div>
                <div className='col'>
                    <Box heading='Second Heading'/>
                </div>
            </div>
        );
    };
        ReactDOM.render(
            <App />,
            document.getElementById('react-container')
        );*/

//Class component and states
/*class Box extends React.Component{
    state={
        color:"black"
    };
    changeColor(color)
    {
        this.setState({color:color});
    };
    render(){
    return (
        <div className="box">
            <h1 className={this.state.color}>{this.props.heading}</h1>
            <p>This is a paragraph</p>
            <button onClick={()=>this.changeColor("red")}>Red</button>
            <button onClick={()=>this.changeColor("blue")}>Blue</button>
            <button onClick={()=>this.changeColor("yellow")}>Yellow</button>
            <button onClick={()=>this.changeColor("green")}>Green</button>
        </div>
    );
    }
    //()=> is being added to make it into a anonymous function.If not added this. will call it
    //immediatly which should not happen 
};
const App=()=>{
    return(
        <div className='row'>
            <div className='col'>
                <Box heading='First Heading'/>
            </div>
            <div className='col'>
                <Box heading='Second Heading'/>
            </div>
            <div className='col'>
                <Box heading='Third Heading'/>
            </div>
            <div className='col'>
                <Box heading='Fourth Heading'/>
            </div>
        </div>
    );
};
    ReactDOM.render(
        <App />,
        document.getElementById('react-container')
    );*/