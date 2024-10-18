const defaultGlasses = document.getElementById('default-glasses');

// 颜色选择器的事件监听
document.getElementById('colorPicker').addEventListener('input', function (e) {
    const color = e.target.value;
    
    // 更新眼镜的样式
    defaultGlasses.style.backgroundColor = color; // 修改背景颜色
    
    // 如果需要在这里更改图像，请使用以下代码
    // defaultGlasses.src = 'your-image-path-based-on-color.png';
});
