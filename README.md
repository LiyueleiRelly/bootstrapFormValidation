# bootstrapFormValidation
boostrap的jQuery表单验证插件

##使用示例

    <link rel="stylesheet" href="/static/css/bootstrap.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="/static/js/validation.js"></script>


    $('#form1').validation({
         formElement: [
         {
         id : 'form-name',//name id 二选一即可 都有的id优先
         name: 'a',
         notNull : true,
         nullMessage : '用户名不能为空',
         reg : /^.{3,20}$/,
         regMessage : '用户名长度为3-20',
         },
         {
         name: 'form-domain',
         notNull : true,
         nullMessage : '主域不能为空',
         reg : /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/,
         regMessage : '主域格式不合法',
         },
         {
         name: 'form-background',
         notNull : true,
         nullMessage : '背景不能为空',
         reg : [
         {
         reg : /^.{3,20}$/,
         regMessage: '长度不能低于3',
         },
         {
         reg : /^.{6,20}$/,
         regMessage: '长度不能低于6',
         },
         ]
         },
         ]
     });