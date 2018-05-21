import React,{Component} from 'react'
import {connect} from 'react-redux'
import styles from './index.scss'

class Index extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUserInfo()
    }
    render(){
        console.log(this.props.userInfo)
        return(
            <div className={styles.sectionBg}>
                ssdsadas
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    userInfo:state.userInfo
})
const mapDisPatchToProps=(dispatch)=>({
    getUserInfo(){
        dispatch({
            type:'GET_USER_INFO'
        })
    }
})
export default connect(mapStateToProps,mapDisPatchToProps)(Index)
