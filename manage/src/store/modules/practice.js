import {getUserList, updateUserInfo, deleteUser, modifyRule} from '@/api/list';

const state = {
    list:[],
    current:1
}

/**辅助属性 */
const mutations = {
    upDateList(state,list) {
        state.list = list;
    }
}

/**辅助属性 */
const actions = {
    // 获取用户列表
    GetUserList({commit},query) {
        return new Promise((resolve,reject) => {
            getUserList(query).then(res => {
                if(res.data.code === 1) {
                    commit('upDateList',res.data.data.list)
                    resolve();
                } else {
                    reject();
                }
            }).catch(err => {
                reject(err);
            })
        })
    },
    /**更新用户信息 */
    UpdateUserInfo({commit},data) {
        return new Promise((resolve,reject) => {
            updateUserInfo(data) .then(res => {
                if(res.data.code ===1) {
                    resolve(res.data.msg);
                } else {
                    reject(res.data.msg);
                }
            }).catch(err => {
                reject(err);
            })
        })
    },
    /**删除用户 */
    Delete({commit},data) {
        return new Promise((resolve,reject) => {
            deleteUser(data).then(res => {
                if(res.data.code === 1) {
                    resolve(res.data.msg);
                } else {
                    reject(res.data.msg);
                }
            }).catch(err => {
                reject(err);
            })
        })
    },
    /**分配角色 */
    ModuleRule({commit},data) {
        return new Promise((resolve,reject) => {
            moduleRule(data).then(res => {
                if(res.data.code === 1) {
                    resolve(res.data.msg);
                } else {
                    reject(res.data.msg);
                }
            }).catch(err => {
                reject(err)
            }) 
        })
    }
}

export default {
    namescaped:true,
    state,
    actions,
    mutations
}