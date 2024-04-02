const base = {
    get() {
        return {
            url : "http://localhost:8080/zxsguanliyuyue/",
            name: "zxsguanliyuyue",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zxsguanliyuyue/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "自习室管理和预约系统"
        } 
    }
}
export default base
