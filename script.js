document.getElementById('color-picker').addEventListener('change', function() {
    const color = this.value;
    const glassesImage = document.getElementById('glasses-image');
    glassesImage.style.borderColor = color; // 改变预览眼镜的边框颜色
});

document.getElementById('save-design').addEventListener('click', function() {
    alert('设计已保存！');
});
