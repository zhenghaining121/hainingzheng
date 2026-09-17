---
title: Gallery
---

<style>
@media (max-width: 768px) {
    /* 1. 全局内边距微调，使手机端左右不留死白 */
    .gallery-body-wrapper {
        padding: 20px 12px !important;
    }

    /* 2. 核心：强制重置网格，在手机端变为单列垂直平铺 */
    .gallery-grid.active-grid {
        grid-template-columns: 1fr !important; /* 单列平铺 */
        gap: 20px !important;                 /* 规范照片之间的纵向间距 */
    }

    /* 3. 核心：彻底砸碎 aspect-ratio 比例锁死造成的严重重叠问题 */
    .gallery-item {
        aspect-ratio: auto !important;         /* 取消 4/3 锁定，允许容器根据图片高矮自由延展 */
        height: auto !important;               /* 高度完全自适应 */
        border-radius: 16px !important;        /* 手机端更加精致的小圆角 */
    }

    /* 4. 彻底解决图片被强行拉伸挤压的问题 */
    .gallery-item img {
        height: auto !important;               /* 拔掉原来的 height: 100% 枷锁，防止拉伸 */
        max-height: 600px !important;          /* 限制单张图片最大高度 */
        object-fit: cover !important;          /* 【关键】改为 cover，让多张图在单列中裁剪撑满，视觉上非常整齐漂亮 */
    }

    /* 5. 优化手机端文字蒙版，让文字常驻或更明显（手机端无法像鼠标那样 hover） */
    .item-overlay {
        opacity: 1 !important;                 /* 手机端直接让文字描述常驻显示，无需等待滑过 */
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.75)) !important; /* 加深蒙版黑度保证文字清晰 */
        padding: 12px 15px !important;
    }
  }

  /* ====== 1. 全局样式与字体初始化 ====== */
  .gallery-body-wrapper {
    font-family: 'Inter', -apple-system, sans-serif;
    background-color: #fafbfc;
    margin: 0;
    padding: 40px 20px;
    color: #2c3e50;
  }

  .gallery-container {
    max-width: 1200px;
    min-height: 400px;
    margin: 0 auto;
  }

  /* ====== 2. 完美对齐图中的分页面选项卡（Tabs） ====== */
  .gallery-tabs {
    display: flex;
    justify-content: center;
    background: #f1f3f5;
    padding: 4px;
    border-radius: 30px;
    width: fit-content;
    margin: 0 auto 40px auto;
  }

  .tab-btn {
    padding: 10px 36px;
    font-size: 14px;
    font-weight: 500;
    color: #5a6578;
    border: none;
    background: transparent;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* 激活状态对齐图中：深皇家蓝背景、纯白文字 */
  .tab-btn.active {
    background-color: #00206f;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 32, 111, 0.15);
  }

  /* ====== 3. 响应式照片网格布局 ====== */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
    /* 默认隐藏，通过 JS 切换 */
    display: none; 
  }

  .gallery-grid.active-grid {
    display: grid;
  }

  /* ====== 4. 💎 核心视觉：对齐图中的卡片、圆角、阴影与浮起特效 ====== */
  .gallery-item {
    background: #ffffff;
    border-radius: 24px; /* 饱满的高级圆角 */
    overflow: hidden;
    cursor: pointer;
    position: relative;
    
    /* 🔒 精准还原图中的高端学术质感微阴影 */
    box-shadow: 0 10px 30px rgba(168, 180, 196, 0.15), 0 1px 3px rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(226, 232, 240, 0.8);
    
    /* 物理宽高比锁定，确保不管原图比例如何，网格排版都极其整齐 */
    aspect-ratio: 4 / 3; 
    
    /* 平滑过渡动画 */
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* 鼠标悬停时的优雅浮起和阴影加深效果 */
  .gallery-item:hover {
    transform: translateY(-6px) scale(1.015);
    box-shadow: 0 20px 38px rgba(168, 180, 196, 0.25), 0 4px 10px rgba(0, 0, 0, 0.04);
  }

  /* 图片填充容器样式 */
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 保证图片不变形 */
    display: block;
    transition: transform 0.4s ease;
  }

  /* 悬停时图片内部微放大的呼吸感 */
  .gallery-item:hover img {
    transform: scale(1.03);
  }

  /* 文字蒙版（可选，鼠标滑过图片时可优雅显示一段描述） */
  .item-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(37, 79, 186, 0.46));
    padding: 20px;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .gallery-item:hover .item-overlay {
    opacity: 1;
  }
  .item-overlay p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, sans-serif;
    color: rgb(255, 255, 255) !important;
  }

  /* ====== 5. 高清图片放大弹窗（Lightbox） ====== */
  .lightbox-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 8, 28, 0.9); /* 深蓝黑色半透明滤镜 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .lightbox-modal.open {
    opacity: 1;
    pointer-events: auto;
  }

  .lightbox-content {
    max-width: 85%;
    max-height: 85%;
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .lightbox-modal.open .lightbox-content {
    transform: scale(1);
  }

  /* 关闭按钮 */
  .lightbox-close {
    position: absolute;
    top: 30px;
    right: 40px;
    color: #ffffff;
    font-size: 35px;
    font-weight: 300;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    user-select: none;
  }
  .lightbox-close:hover {
    opacity: 1;
  }
</style>

<div class="gallery-body-wrapper">
  <div class="gallery-container">    
    <div class="gallery-tabs">
      <button class="tab-btn active" style="text-transform: none !important;font-size: 15px;" onclick="switchGallery('activities')">Activities</button>
      <button class="tab-btn" style="text-transform: none !important;font-size: 15px;" onclick="switchGallery('facilities')">Facilities</button>
    </div>
    <div id="activities-grid" class="gallery-grid active-grid">
      <div class="gallery-item" onclick="openLightbox(this)">
        <img src="activity1.jpg" alt="ICONN 2026">
        <div class="item-overlay"><p>2026 ICONN, in Sydney, Australia </p></div>
      </div>
      <div class="gallery-item" onclick="openLightbox(this)">
        <img src="activity2.jpg" alt="MRS Spring 2024">
        <div class="item-overlay"><p>2024 MRS Spring, in Seattle, USA</p></div>
      </div>
      <div class="gallery-item" onclick="openLightbox(this)">
        <img src="activity3.jpg" alt="MRS Spring 2023">
        <div class="item-overlay"><p>2023 MRS Spring, in San Francisco, USA</p></div>
      </div>
    </div>
    <div id="facilities-grid" class="gallery-grid">
      <div class="gallery-item" onclick="openLightbox(this)">
        <img src="facility1.png" alt="To be continued...">
        <div class="item-overlay"><p>To be continued...</p></div>
      </div>
    </div>
  </div>
</div>

<div id="lightboxModal" class="lightbox-modal" onclick="closeLightbox()">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" id="lightboxImg" src="" alt="Enlarged view">
</div>

<script>
  // 选项卡无缝切换逻辑
  function switchGallery(tabName) {
    // 切换按钮高亮样式
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // 切换对应的照片网格显示
    const grids = document.querySelectorAll('.gallery-grid');
    grids.forEach(grid => grid.classList.remove('active-grid'));
    document.getElementById(`${tabName}-grid`).classList.add('active-grid');
  }

  // 点击放大成高清图逻辑
  function openLightbox(element) {
    const imgSrc = element.querySelector('img').src;
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    
    modalImg.src = imgSrc; // 将小图路径直接赋给大图标签
    modal.classList.add('open');
  }

  // 关闭放大弹窗逻辑
  function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('open');
  }
</script>
