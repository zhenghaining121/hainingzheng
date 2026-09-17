---
title: "News"
---

<div class="universal-wrapper" style="max-width: 1160px !important; margin-left: auto !important; margin-right: auto !important;">


  <!-- 第1个新闻 -->
  <div class="view-compact" style="padding: 30px 30px !important; margin-bottom: 50px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="/news/1/">The Official Website for Our Research Group is Now Live!</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      Welcome to our new official website! We invite you to stay updated on our latest research initiatives, team milestones, and open positions on this homepage.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 10px; color: #666;">
      June 14, 2026
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 180px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="../news/1/news1.png" alt="Featured Image" 
           style="width: 110%; max-height: 240px; margin-top: 25px; margin-bottom: 10px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

<style>
@media (max-width: 768px) {
    /* ------ 1. 打破容器宽度枷锁：让 News 与 Publications 卡片在手机端拉伸并居中 ------ */
    .universal-wrapper {
        max-width: 100% !important;
        width: 100% !important;
        padding-left: 10px !important;  /* 规范页面边缘死边距 */
        padding-right: 10px !important;
        margin: 0 auto !important;
    }

    /* ------ 2. 强行重置为上下排布，彻底解除全局弹性比例的束缚 ------ */
    .universal-wrapper .view-compact {
        display: flex !important;
        flex-direction: column !important; /* 强制改变：由左右改为上下垂直排列 */
        align-items: stretch !important;    /* 让内部文字、图片区横向充满白框 */
        width: 100% !important;
        max-width: 100% !important;
        padding: 15px 15px !important;      /* 重新均衡移动端的内边距 */
        box-sizing: border-box !important;
    }

    /* ------ 3. 核心修复：文字区释放，解除原先限制的 1.5 比例和右边距 ------ */
    .universal-wrapper .view-compact .media-body {
        flex: none !important;              /* 废除全局的弹性空间争夺 */
        padding-right: 0 !important;        /* 拔掉之前残留的 60px 间距 */
        width: 100% !important;             /* 横向撑满 */
        max-width: 100% !important;
        display: block !important;
    }

    /* 提高新闻标题、正文等文本在手机端的利用率，排版更加大气 */
    .universal-wrapper .section-subheading.article-title,
    .universal-wrapper .article-style,
    .universal-wrapper .summary-text {
        width: 100% !important;
        max-width: 100% !important;
        text-align: justify !important;     /* 文本两端对齐，消除零碎空隙 */
        word-wrap: break-word !important;
    }

    /* 适当微调手机端新闻标题大小，使其阅读更舒适 */
    .universal-wrapper .section-subheading.article-title a {
        font-size: 1.1rem !important;
        line-height: 1.4 !important;
    }

    /* ------ 4. 核心修复：重置图片容器，打破全局 max-width: 30% 枷锁 ------ */
    .universal-wrapper .view-compact .ml-3 {
        flex: none !important;              /* 废除内联和全局的宽度约束 */
        max-width: 100% !important;         /* 斩断限制 */
        margin-left: 0 !important;
        margin-top: 16px !important;        /* 紧跟在日期/正文下方，不产生过大断层 */
        margin-bottom: 0 !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center !important; /* 使图片在白框卡片内水平正中央居中 */
    }

    /* ------ 5. 让图片变得更大，保持原本的圆角与比例 ------ */
    .universal-wrapper .view-compact .ml-3 img {
        width: 100% !important;
        max-width: 320px !important;        /* 【图片放大】限制最大宽度，在保证放大的同时不过于臃肿 */
        height: auto !important;
        max-height: none !important;        /* 解除原先内联的 max-height: 240px */
        margin-top: 0 !important;           /* 清理原先内联多余的 margin 干扰 */
        margin-bottom: 0 !important;
        object-fit: contain !important;
        border-radius: 4px !important;      /* 保持精致的小圆角 */
    }
}

</style>