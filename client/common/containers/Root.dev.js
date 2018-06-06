import React, {Component} from 'react'
import Common from './Common'

class Root extends Component {
    constructor() {
        super()
        this.state = {isMounted: false}
    }

    componentDidMount() {
        this.setState({isMounted: true})
    }

    render() {
        const {isMounted} = this.state,
            {children} = this.props

        return (
            <div>
                <Common>{children}</Common>
            </div>
        )
    }
}

export default Root
