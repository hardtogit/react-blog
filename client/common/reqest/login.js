export default  function (Fetch) {
    Fetch.login=()=>{return Fetch('api/depositSupervise/projectLists','get')}
}