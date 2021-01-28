export default {
    state: {
        tableList: [],
        selectList: [],
        dialogType: "add",
        dialogShow: false,
        searchForm: {
            name: ""
        },
        dialogData: {
            id: "",   // (integer, optional): 主键id ,
            orgId: "",
            roleList: [],
            name: "",
            account: "",
            mobile: "",
            password: "",
            passwordNew: "",
            email: "",
            address : ""
        }
    }
}