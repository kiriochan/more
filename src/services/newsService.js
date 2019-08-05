import axios from "axios";
import api from '../request/api'
const requestHomeNavData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(api.HOME_NAV_URL, {
        method: 'GET',
        baseURL: 'http://localhost:8080',
        transformRequest: (data)=>{
          return data;
        }
      })
      .then(response => {
        if (response.status === 200 && response.data.code === 0) {
          //请求成功，
          // 先过滤数据
          let newData = response.data.data.map(({ id, name }) => ({
            id,
            name
          }));
          //赋值给组件
          resolve(newData);
        } else {
          console.log("失败");
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
};

const requestHomeBannerData = async () => {
  let response = await axios.get(api.HOME_BANNER_URL);
  if (response.status === 200 && response.data.code === 0) {
    let newData = response.data.data.map(({ id, picUrl }) => ({
      id,
      picUrl
    }));
    return newData;
  }else{
      console.log('请求失败');
  }
};

export default {
  requestHomeNavData,
  requestHomeBannerData
};
