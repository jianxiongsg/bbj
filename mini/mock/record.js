const record = [
    {
        id: 1, //'主键'
        user_id:'',// 发布人
        user_nick:'',// 发布人名称
        org_id:'',// 地区id
        org_name:'',// 地区名称
        state:'',// 回复状态
        content:'',// 内容
        image_url:'',// 图片
        publish_time:'',// 发布时间
        is_top:'false',// 是非置顶
        like:'',// 点赞
    },
    {
        id: 1, //'主键'
        leave_id:'',//外键>>对应留言表主键id=
        user_id:'',// 发布人
        user_nick:'',// 发布人名称
        org_id:'',// 地区id
        org_name:'',// 地区名称
        state:'',// 回复状态
        content:'',// 内容
        image_url:'',// 图片
        publish_time:'',// 发布时间
        is_top:'false',// 是非置顶
        like:'',// 点赞
        feedback_sup_id:'',//回复上级id
        feedback_name:'',//回复人名称
        feedback_id:'',//回复人id
        feedback_time:''//回复时间
    }
]