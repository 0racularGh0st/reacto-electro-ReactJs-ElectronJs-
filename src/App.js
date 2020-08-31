import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div style={{textAlign:'center'}}>
                ReactJs + ElectronJs :  A starter project for a Cross Platform app (Windows,Linux,MacOS)
                <br/>

                 Edit src/App.js to make changes

                 <br/>
                 To export your app as an executable, run command 'npm run ebuild' and files will be in the dist folder. 
            </div>
        );
    }
}