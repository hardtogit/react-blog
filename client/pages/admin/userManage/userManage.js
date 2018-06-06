import React from 'react'
import {connect} from 'react-redux'
import styles from './index.scss'
import Component from '../../../common/components/MyComponent'
class Index extends Component{

    constructor(props){
        super(props)
    }
    // static contextTypes={
    //     color: React.PropTypes.string.isRequired
    // }
    componentWillMount(){
        this.context.actions.fetchUserInfo();
    }
    componentDidMount(){

    }
    render(){
        console.log(this.props.userInfo)
        return(
            <div className={styles.sectionBg}>
                {this.props.userInfo.message}
                我是usermanage
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return ({
        userInfo:state.userInfo.get('data')
    })
}
const mapDisPatchToProps=(dispatch)=>({
    getUserInfo(){
        dispatch({
            type:'LOGIN'
        })
    }
})
export default connect(mapStateToProps,mapDisPatchToProps)(Index)
