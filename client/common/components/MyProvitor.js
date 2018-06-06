import React , {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from '../actions'
class Index extends Component{
    constructor(props){
        super(props)
    }
    getChildContext(){
        return {actions:this.props.actions}
    }
    render() {
        return this.props.children;
    }
}
Index.childContextTypes = {
    actions: React.PropTypes.object.isRequired
};
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
    actions:bindActionCreators(actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)


