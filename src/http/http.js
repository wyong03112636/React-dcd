import axios from 'axios'
const get = ({url, params={}}) => {
  return axios(url, {
   params
  }).then((result) => {
    return result.data.data
  });
}
export default get;
