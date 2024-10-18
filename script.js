const glassesImage = document.getElementById('glasses-image');

// 颜色选择器的事件监听
document.getElementById('colorPicker').addEventListener('input', function (e) {
    const color = e.target.value;

    // 更新眼镜的颜色
    glassesImage.style.borderColor = color; // 更新边框颜色
});

// 重置按钮的事件监听
document.getElementById('reset').addEventListener('click', function () {
    glassesImage.style.borderColor = '#000000'; // 重置为黑色
    document.getElementById('colorPicker').value = '#000000'; // 重置颜色选择器
});
