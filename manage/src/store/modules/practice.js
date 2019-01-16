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
            updateUserInfo(data).then(res => {
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
    deleteUser({commit},data) {
        return new Promise((resolve,reject) => {
            delegteUserInfo(data).then(res => {
                if(res.data.code === 1) {
                    resolve(res.data.msg);
                } else {
                    reject(res.data.msg)
                }
            }).catch(err => {
                reject(err);
            })
        })
    },
    /**更新用户信息 */
    SetNewUserInfo({commit},data) {
        return new Promise((resolve,reject) => {
            if(res.data.code === 1) {
                resolve(res.data.msg);
            } else {
                reject(res.data.msg)
            }
        }).catch(err => {
            reject(err)
        })
    },
    modifyRule({commit},data) {
        return new Promise((resolve,reject) => {
            if(res.data.code === 1) {
            resolve(res.data.msg);
        } else {
            reject(res.data.msg)
        }
    }).catch(err => {
        reject(err)
    })
        
    }
}