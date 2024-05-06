const acc = document.querySelectorAll('.nav-tree');

// Lặp qua mỗi nav tree và thêm sự kiện 'click'
acc.forEach(function(tree) {
    tree.addEventListener('click', function() {
        // Loại bỏ class 'active' từ tất cả các nav items
        acc.forEach(function(item) {
            item.classList.remove('active');
            // item.style.backgroundColor = '#222D32'; // Đặt lại màu nền mặc định
        });
        // Thêm class 'active' cho nav tree được click
        tree.classList.add('active');
        // tree.style.backgroundColor = '#3A3F41'; // Đặt màu nền mới
    });
});



