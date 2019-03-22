<template>
  <div class="info_container">
    <div class="area" v-for="(item,index)  in userList" :key="index">
      <div class="dataarea">
        <p :class="item.style" class="gtitle">
          <i class="el-icon-date el-icon--left"></i>
          {{item.name}}工作内容
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [
        { name: "张三", index: "1",style:'awardsSecondary' },
        { name: "李四", index: "1" ,style:'awardsSerious'},
        { name: "王五", index: "1" ,style:'awardsNormal'},
        { name: "老郑", index: "1" ,style:'awardsNormal'},
        { name: "大个", index: "1" ,style:'awardsNormal'},
        { name: "大圣", index: "1" ,style:'awardsNormal'},
        { name: "茂", index: "1" ,style:'awardsNormal'},
        { name: "大黄", index: "1" ,style:'awardsNormal'},
        { name: "张三", index: "1",style:'awardsNormal'},
        { name: "李四", index: "1" ,style:'awardsNormal'},
        { name: "王五", index: "1" ,style:'awardsNormal'},
        { name: "老郑", index: "1",style:'awardsNormal'},
        { name: "大个", index: "1" ,style:'awardsNormal'},
        { name: "大圣", index: "1" ,style:'awardsNormal'},
        { name: "茂", index: "1" ,style:'awardsNormal'},
        { name: "大黄", index: "1",style:'awardsNormal'},
        { name: "张三", index: "1" ,style:'awardsNormal'},
        { name: "李四", index: "1" ,style:'awardsNormal'},
        { name: "王五", index: "1",style:'awardsNormal'},
        { name: "老郑", index: "1" ,style:'awardsNormal'},
        { name: "大个", index: "1" ,style:'awardsNormal'},
        { name: "大圣", index: "1",style:'awardsNormal'},
        { name: "茂", index: "1" ,style:'awardsNormal'},
        { name: "大黄", index: "1" }
      ]
    };
  }
};
</script>

<style lang="less">
.info_container {
  width: 400px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 20px;
  overflow-y: auto;
  height: 750px;
  border: 1px solid black;
}
.row {
  margin: 20px;
}

.area {
  margin: 10px;
  float: left;
  border: 1px solid #dfdfdf;
  height: 178px;
  width: 300px;
  overflow: hidden;
  .imgarea {
    text-align: center;
    padding: 10px;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  .namearea {
    padding: 10px;
    font-size: 14px;
    p {
      line-height: 24px;
    }
    .awards {
      text-align: center;
      width: 100%;
      height: 30px;
      line-height: 30px;
      cursor: pointer;

      color: white;
      display: block;
    }
    .awards:hover {
      background-color: #f9c855;
      border: 1px solid #f9c855;

    }
  }
  .awardsSerious {
    background-color: red;
    border: 1px solid red;
          color: white;
  }

  .awardsSecondary {
    background-color: yellow;
    border: 1px solid yellow;
    color:black
  }

  .awardsNormal {
    background-color: #3bc5ff;
    border: 1px solid #3bc5ff;
          color: white;
  }

  .moneyarea {
    padding: 10px;
    float: left;
    .title {
      font-size: 15px;
      font-weight: bolder;
      line-height: 50px;
      .money {
        color: #c10000;
        margin-right: 5px;
      }
      .yuan {
        font-weight: 100;
        font-size: 13px;
      }
    }
  }
  .chongzhiarea {
    padding: 10px;
    text-align: center;
    img {
      width: 80%;
      height: 40px;
    }
    .chongzhi {
      margin-top: 10px;
    }
  }
  .tipsarea {
    clear: both;
    font-size: 14px;
    padding: 10px;
    padding-top: 15px;
    a {
      color: #3bc5ff;
    }
  }
  .dataarea {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    .gtitle {
      width: 100%;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
     

      display: block;
    }
    .gdataarea {
      padding-left: 25px;
      p {
        line-height: 38px;
      }
      .num {
        font-weight: bolder;
        color: #c10000;
      }
      .title {
        color: #3bc5ff;
      }
      .gdata {
        margin: 10px;
      }
    }
    .morearea {
      a {
        color: #3bc5ff;
      }
    }
  }
}
</style>

