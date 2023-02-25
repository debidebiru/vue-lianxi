
//获取表格数的封装
export function getData(root, url, params) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status == 200) {
                root.tableData = res.data.data
                root.total = res.data.total
            }
        })
        .catch(err => {
            throw err
        })
}
//新增修改方法的封装
import qs from 'qs'
export function changeInfo(root, method, url, form, callback) {
    let data = qs.stringify(form)
    root.service[method](url, data)
        .then(res => {
            if (res.data.status == 200) {
                callback(root, url)
                root.dialogFormVisible = false
                root.$refs['form'].resetFields()
                root.$message({ type: 'success', message: res.data.message })
            }
        })
        .catch(err => {
            throw err
        })
}
//删除方法的封装
export function delData(root, url, id, callback) {
    root.$alert('你确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        callback: () => {
            root.service.delete(`${url}/${id}`).then(res => {
                if (res.data.status == 200) {
                    callback(root, url)
                    root.$message({ type: 'success', message: res.data.message })
                }
            })
                .catch(err => {
                    throw err
                })
        }
    })
}
//作业信息的获取和封装
export function getTableData(root, url, params, arr) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status == 200) {
                root.tableData = res.data.data
                root.total = res.data.total
                root.tableData.map(item => {
                    arr.map(aItem => {
                        item[aItem] ? item[aItem + '_text'] = '是' : item[aItem + '_text'] = '否'
                    })
                })
                root.loading=false
            }
        })
}