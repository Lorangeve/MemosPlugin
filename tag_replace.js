debugger
(function (params) {
    ['https://code.jquery.com/jquery-3.7.1.min.js'].forEach((s) => {
        const script = document.createElement('script');
        script.src = s;
        document.head.appendChild(script);
    })
    debugger
    window.onload = () => {
        // 这里的代码会在整个页面（包括图片）加载完成后执行
        console.log("页面完全加载完成");
        jQuery && console.log("注入 jQuery 成功！");
        const $ = jQuery;
        debugger
    };
})()