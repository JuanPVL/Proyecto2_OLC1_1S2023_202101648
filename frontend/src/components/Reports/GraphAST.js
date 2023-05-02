import React,{useEffect} from 'react';
import Graphviz from 'graphviz-react';
function Graph({dot}){
    /*useEffect(() => {
        d3.select("#graph-body").graphviz().renderDot(dot);
    }, [dot]);
    return ( <div
        id="graph-body"
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    />);*/
    return <Graphviz dot={dot} />;
};

export default Graph;