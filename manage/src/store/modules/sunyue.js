import {getUserList, updateUserInfo, deleteUser, modifyRule} from '@/api/list';
 
/**内部状态 */
const state = {
    list:[],
    curent:1
}

/**辅助属性 */
const mutations = {
    upDateList(state,list) {
        state.list = list;
    }
}

const actions = {
    // 获取用户列表
    GrtUserList({commit},query) {
        return new Promise((resolve,reject) => {
            getUserList(query).then(res => {
                if(res.data.code ===1) {
                    commit('upDateList',res.data.data.list)
                    resolve()
                } else {
                    reject();
                }
            }) .catch(err => {
                reject(err)
            })
        })
    },
    // 更新用户信息
    UpdateUserInfo({commit},query) {
        return new Promise((resolve,reject) => {
            updateUserInfo(query).then(res => {
                if(res.data.code ===1) {
                    commit('upDateList',res.data.data.list)
                    resolve()
                } else {
                    reject()
                }
            }).catch(err => {
                reject(err)
            })
        })
    }

}