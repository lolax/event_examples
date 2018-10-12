import React from 'react';

class Son extends Component {
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
            <div onClick={this.bakeCookies}>Click to bake cookies</div>
        )
    }
}

export default Son;