import request from 'superagent'
import fetch from 'isomorphic-fetch';

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
    const defaults = {
        url: null,
        type: 'post',
        data: {}
    }
    let promise, action
    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url).withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key])
        }
    })
    action = options.type === 'get' ? 'query' : 'send';
    let rootUrl='http://localhost:3000';
    return new Promise(resolve => {
        fetch(rootUrl+options.url).then((response) => {
            return response.json();
        })
            .then(
                response => {console.log(response); resolve(response)},
                error => resolve(error)
            )
    })
}

/**
 * @return {Object} Return url params
 */
function getURLParams() {
    const search = location.search.slice(1),
        rParam = /([^&]*)=([^&]*)/g
    let ret = {},
        param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

export default {
    ajax,
    getURLParams
}
