import React, {Component} from 'react'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()
    }
    componentWillMount(){
        const {actions} = this.props
        actions.fetchUserInfo()
    }
    componentDidMount(){
    }
    render() {
        const {userInfo} = this.props
        return (
            <section className={styles.sectionMain}>
                Home
                {userInfo&&userInfo.name}
            </section>
        )
    }
}

export default SectionMain
