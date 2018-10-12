import React, { Component } from 'react';
import Dad from './Dad';

class Grandma extends Component {
    constructor() {
      super();
      this.state = {
        cookies: 0
      }
    }

    bakeCookies = () => {
        this.setState({
            cookies: 12
        })
    }

    render() {
        return (
            <Dad bakeCookies={this.bakeCookies}/>
        )
    }
}

export default Grandma;