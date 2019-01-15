<template>
    <div>
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column
            label="Date"
            prop="date">
            </el-table-column>
            <el-table-column
            label="Name"
            prop="name">
            </el-table-column>
               <el-table-column
            label="Address"
            prop="address">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
            </el-table-column>
        </el-table>

        <!-- 点击出现弹框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">

            <!-- 对话框中的内容 -->
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="日期" prop="pass">
                    <el-input type="date" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="名字" prop="checkPass">
                    <el-input type="text" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
            </el-form>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
      </div>  
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: '',
        dialogVisible: false, // 对话框  是否出现
        /**弹框中的表单的方法 */
        ruleForm2: {
          pass: '4',
          checkPass: '54',
          age: '9'
        //   pass: [{trigger:'blur',validate:dateValidate}],
        //   checkPass: [{trigger:'blur',required:'true'}],
        //   age: [{trigger:'blur',required:'true'}],
        }
        /**点击这一项的所有内容 */

      }
    },
    methods: {
      handleEdit(index, row) {
        console.log('----点击这一项的所有内容',row);
        this.dialogVisible = true;
        this.ruleForm2.pass = row.date;
        this.ruleForm2.checkPass = row.name;
        this.ruleForm2.age = row.address;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    /**弹框中的方法*/ 
      handleClose() {
           console.log('我是弹框中的方法') 
      },
      /**加样式的方法 */
     tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>