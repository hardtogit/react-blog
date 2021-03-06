import React from 'react'
import {connect} from 'react-redux'
import styles from './index.scss'
import Component from '../../../common/components/MyComponent'
import { DatePicker } from 'antd';
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
        return(
            <div className={styles.sectionBg}>
                {this.props.userInfo&&this.props.userInfo.message}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.userInfo.get('data'));
    return ({
        userInfo:state.userInfo.get('data')&&state.userInfo.get('data').toJS()
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
