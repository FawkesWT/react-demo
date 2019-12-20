import axios from 'axios'
import { serverUrl } from './env'

let http = {}

axios.defaults.baseURL = serverUrl

http.get = (url, param) => {
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params: addTimeStrToParam(param)
    }).then((res) => {
      resolve(res.data)
    },(res) => {
      reject(res.data)
    })
  })
}

http.post = (url, param) => {
  return new Promise((resolve,reject) => {
    axios.post(url,{
      params: addTimeStrToParam(param)
    }).then((res) => {
      resolve(res.data)
    },(res) => {
      reject(res.data)
    })
  })
}

const addTimeStrToParam = (param) => {
  if(typeof param === 'undefined'){
    return {
      t: new Date().getTime()
    }
  }
  param.t = new Date().getTime()
  return param;
}

export default http