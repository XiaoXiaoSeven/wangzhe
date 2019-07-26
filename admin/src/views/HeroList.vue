<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="_id" label="ID" width="240"></el-table-column>
    <el-table-column prop="name" label="英雄名称"></el-table-column>
     <el-table-column prop="title" label="称号"></el-table-column>
    <el-table-column prop="icon" label="头像">
      <template slot-scope="scope">
        <img :src="scope.row.avatar" alt="" style="height:3rem;">
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="180">
      <template slot-scope="scope">
        <el-button
          @click="$router.push(`/heroes/create/${scope.row._id}`)"
          type="text"
          size="small"
        >编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heroes");
      this.tableData = res.data;
    },
    async remove(row) {
      this.$confirm(` 是否确定删除该分类 "${row.name}" ? `, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/heroes/${row._id}`);
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        }
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>