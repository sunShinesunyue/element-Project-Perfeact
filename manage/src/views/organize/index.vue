<template>
  <div>
    <h1>当前路径：{{this.$route.path}}</h1>
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all=false
        :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.name }}</span>
          <span>
            <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
              Append
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              Delete
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>
