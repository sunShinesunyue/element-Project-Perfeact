<template>
  <div>
    <h1>当前路径：{{this.$route.path}}</h1>
    <div class="block">
      <p>使用 scoped slot</p>
      <!-- 加上ref -->
      <el-tree
        :data="data"
        show-checkbox
        ref="tree"
        node-key="id"
         default-expand-all
  @node-drag-start="handleDragStart"
  @node-drag-enter="handleDragEnter"
  @node-drag-leave="handleDragLeave"
  @node-drag-over="handleDragOver"
  @node-drag-end="handleDragEnd"
  @node-drop="handleDrop"
  draggable
  :allow-drop="allowDrop"
  :allow-drag="allowDrag"
     
        :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.data.name }}</span>
          <span>
            <!-- 添加权限 -->
            <el-button
              v-permission = "['admin']"
              type="text"
              size="mini"
              @click="() => append(data)">
              Append
            </el-button>
            <el-button
              v-permission = "['staff']"
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              Delete
            </el-button>
          </span>
        </span>
      </el-tree>
      <!-- 添加弹框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="70%">
         <!-- 添加的内容 用到了v-model -->
        <el-input placeholder="请输入你要添加的职位" v-model="temp"/>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="SureDialog">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      path: this.$route,
      dialogVisible:false, // 弹框是否可见

      data: [],
      // 参考某轮
      organize: [{
          id: 1, name: '***事业部', parentid: ''
        },{
          id: 2, name: '***事业部', parentid: ''
        },{
          id: 3, name: '总经办', parentid: ''
        },{
          id: 4, name: '技术研发', parentid: 1
        },{
          id: 5, name: '产品研发', parentid: 1
        },{
          id: 6, name: '市场渠道', parentid: 1
        },{
          id: 7, name: '商业合作', parentid: 1
        },{
          id: 8, name: '前端开发', parentid: 4
        },{
          id: 9, name: '后端开发', parentid: 4
        },{
          id: 10, name: 'ios开发', parentid: 4
        },{
          id: 11, name: 'android开发', parentid: 4
        },{
          id: 12, name: '测试', parentid: 4
        },{
          id: 13, name: '运维', parentid: 4
        },{
          id: 14, name: '设计', parentid: 4
        },{
          id: 15, name: '产品', parentid: 5
        },{
          id: 16, name: '运营', parentid: 5
        },{
          id: 17, name: '产品总监', parentid: 15
        },{
          id: 18, name: '产品经理', parentid: 15
        },{
          id: 19, name: '资深前端开发', parentid: 8
        },{
          id: 20, name: '高级前端开发', parentid: 8
        },{
          id: 21, name: '初级前端开发', parentid: 8
        },{
          id: 22, name: '孙月', parentid: 20
        }],
        temp:''
    }
  },
  methods: {
    formatData(arr){
      let newArr = [];
      arr.forEach((item, index)=>{
        if (!item.parentid){
          newArr.push(item);
        }else{
          this.findItem(newArr, item);
        }
      })
      console.log('newArr...', newArr);
      this.data = newArr;
    },
    findItem(arr, item){
      arr.forEach((value, key)=>{
        if (item.parentid == value.id){
          if (value.children){
            value.children.push(item);
          }else{
            value.children = [item];
          }
        }else if(value.children){
          this.findItem(value.children, item);
        }
      })
    },
    // 添加元素
  append(node,data) {
      console.log(node,'--添加元素--',data);
      // 弹框显示出来
      this.dialogVisible = true;
      // 将node ,data 值赋给
      this.current = {
        node,
        data
      }
  },
  // 移除节点
  remove(node,data) {
      console.log(node,'--移除节点--',data);
      this.$refs.tree.remove(node)   // 将当前点击的这个节点删除
  },
  // 添加职位
  SureDialog() {
    // 内容框里面是否写内容了
    if(this.temp) {
      // 创建你点击的这一个
      let newNode = {
        id:this.organize[this.organize.length-1].id+1,
        name:this.temp,
        parentid:this.current.node.id || ''
      }
      this.organize.push(newNode)   // 添加进去
      this.$refs.tree.append(newNode,this.current.node)   // 获取节点添加进去
      this.dialogVisible = false;   // 关闭弹窗
      this.temp = '';
    }
  }
  },
  // 调用方法
  created() {
    this.formatData(this.organize);
  }
}
</script>