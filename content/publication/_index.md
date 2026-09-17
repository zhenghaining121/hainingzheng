---
title: "Publications"
---

<style>
/* 隐藏搜索栏*/
.universal-wrapper .form-row.mb-4 { display: none !important; }
/* 仅对页面最后一个 wrapper 增加底部间距，避免影响顶部间距 */
.universal-wrapper { padding-bottom: 3px; }

@media (max-width: 768px) {
    /* ------ 1. 让外层白框左右拓宽，充满手机屏幕 ------ */
    .universal-wrapper {
        max-width: 100% !important;
        width: 100% !important;
        padding-left: 6px !important;  /* 缩小卡片与手机边缘的死边距 */
        padding-right: 6px !important;
        margin: 0 auto !important;
    }

    /* ------ 2. 让 view-compact 容器重置为上下排列，并强制解除全局的弹性比例 ------ */
    .universal-wrapper .view-compact {
        display: flex !important;
        flex-direction: column !important; /* 砸开左右并排，改为上下排布 */
        align-items: stretch !important;    /* 强制内部所有元素横向拉伸撑满整个白框 */
        width: 100% !important;
        max-width: 100% !important;
        padding: 4px 4px !important;      /* 重新规范白框内边距 */
        box-sizing: border-box !important;
    }

    /* ------ 3. 【核心修复】强制全局的文字区权重和右边距失效 ------ */
    .universal-wrapper .view-compact .media-body {
        flex: none !important;              /* 彻底废除全局的 flex: 1.5 权重限制 */
        padding-right: 0 !important;        /* 彻底拔掉全局自带的 60px 右侧大空档 */
        width: 100% !important;             /* 横向 100% 铺满 */
        max-width: 100% !important;
        display: block !important;
    }

    /* 让标题、期刊、作者文本在纵向上完全自适应横向空间 */
    .section-subheading.article-title,
    .article-style,
    .summary-text {
        width: 100% !important;
        max-width: 100% !important;
        text-align: justify !important;     /* 文本左右对齐，排版更丰满 */
        word-wrap: break-word !important;
    }

    /* ------ 4. 【核心修复】强制全局的图片容器限制失效 ------ */
    .universal-wrapper .view-compact .ml-3 {
        flex: none !important;              /* 彻底废除全局的 flex: 1 权重限制 */
        max-width: 100% !important;         /* 斩断全局限制的 max-width: 30% 枷锁 */
        margin-left: 0 !important;
        margin-top: 16px !important;        /* 紧跟在作者名字下方，保持精致间距 */
        margin-bottom: 0 !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center !important; /* 图片在白框正中央居中 */
    }

    /* 控制手机端图片本身的显示尺寸 */
    .universal-wrapper .view-compact .ml-3 img {
        width: 100% !important;
        max-width: 340px !important;        /* 限制最大显示宽度，防止图片撑得过大变形 */
        height: auto !important;
        margin: 0 !important;               /* 剥离图片自带的内联上下 margin 干扰 */
        object-fit: contain !important;
    }
}
</style>

<div class="universal-wrapper">

  <!-- 第10篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://www.nature.com/articles/s41467-024-49708-w">10. Chiral multiferroicity in two-dimensional hybrid organic-inorganic perovskites</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Nature Communications.</strong></em> 2024, <em>10</em>, 5556.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      <strong>Haining Zheng</strong>, Arup Ghosh, M. J. Swamynadhan, Qihan Zhang, Walter P. D. Wong, Zhenyue Wu, Rongrong Zhang, Jingsheng Chen, Fanica Cimpoesu, Saurabh Ghosh, Branton J. Campbell, Kai Wang*, Alessandro Stroppa*, Kai Wang*, Ramanathan Mahendiran*, Kian Ping Loh*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication10.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 15px; margin-bottom: 15px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第9篇文献 -->
  <div class="view-compact" style="padding: 30px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://pubs.acs.org/doi/10.1021/jacs.3c05503">9. Electron Spin Decoherence Dynamics in Magnetic Manganese Hybrid Organic-Inorganic Crystals: the Effect of Lattice Dimensionality</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Journal of the American Chemical Society.</strong></em> 2023, <em>145</em>, 18549-18559.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      <strong>Haining Zheng</strong>, Arup Ghosh, M. J. Swamynadhan, Gang Wang, Qihan Zhang, Xiao Wu, Ibrahim Abdelwahab, Walter P. D. Wong, Qing-Hua Xu, Saurabh Ghosh, Jingsheng Chen, Branton J. Campbell, Alessandro Stroppa*, Junhao Lin*, Ramanathan Mahendiran*, Kian Ping Loh*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 180px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication9.png" alt="Featured Image" 
           style="width: 110%; max-height: 240px; margin-top: 25px; margin-bottom: 25px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第8篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://pubs.acs.org/doi/10.1021/jacs.2c12525">8. Strain-Driven Solid–Solid Crystal Conversion in Chiral Hybrid Pseudo-Perovskites with Paramagnetic-to-Ferromagnetic Transition</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Journal of the American Chemical Society.</strong></em> 2023, <em>145</em>, 3569-3576.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      <strong>Haining Zheng</strong>, Rongrong Zhang, Xiao Wu, Qihan Zhang, Zhenyue Wu, Walter P. D. Wong, Jingsheng Chen, Qing-Hua Xu, Kian Ping Loh*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 200px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication8.png" alt="Featured Image" 
           style="width: 130%; margin-top: 10px; margin-bottom: 10px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第7篇文献 -->
  <div class="view-compact" style="padding: 20px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202308051">7. Ferroics in Hybrid Organic‐Inorganic Perovskites: Fundamentals, Design Strategies and Implementation</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Advanced Materials.</strong></em> 2024, <em>36</em>, 2308051.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      <strong>Haining Zheng</strong>, Kian Ping Loh*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication7.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 0px; margin-bottom: 0px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第6篇文献 -->
  <div class="view-compact" style="padding: 30px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://www.nature.com/articles/s41467-019-13389-7">6. Room-temperature Quantum Interference in Single Perovskite Quantum Dot Junctions</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Nature Communications.</strong></em> 2019, <em>10</em>, 5458.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      <strong>Haining Zheng</strong>, Songjun Hou, Chenguang Xin, Qingqing Wu, Feng Jiang, Zhibing Tan, Xin Zhou, Wenxiang He, Qingmin Li, Jueting Zheng, Longyi Zhang, Junyang Liu, Yang Yang, Jia Shi, Xiaodan Zhang, Ying Zhao, Yuelong Li*, Colin Lambert*, Wenjing Hong*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication6.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 18px; margin-bottom: 18px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第5篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/cjoc.201900245">5. Charge Transport through Peptides in Single-Molecule Electrical Measurements</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Chinese Journal of Chemistry.</strong></em> 2019, <em>37</em>, 1082-1096.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      <strong>Haining Zheng</strong>, Feng Jiang, Renze He, Yang Yang, Jia Shi, Wenjing Hong*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication5.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 10px; margin-bottom: 10px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

   <!-- 第4篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://www.sciencedirect.com/science/article/pii/S2590238519304060">4. Giant Conductance Enhancement of Intramolecular Circuits through Interchannel Gating</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Matter.</strong></em> 2020, <em>2</em>, 378-389.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      Hongliang Chen, <strong>Haining Zheng (co-first author)</strong>, Chen Hu, Kang Cai, Yang Jiao, Long Zhang, Feng Jiang, Indranil Roy, Yunyan Qiu, Dengke Shen, Yuanning Feng, Fehaid M. Alsubaie, Hong Guo*, Wenjing Hong*, J. Fraser Stoddart*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication4.jpg" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 10px; margin-bottom: 10px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第3篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://www.science.org/doi/10.1126/science.adq0967">3. Two-Dimensional Chiral Perovskites with Large Spin Hall Angle and Collinear Spin Hall Conductivity</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Science.</strong></em> 2024, <em>385</em>, 311-317.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      Ibrahim Abdelwahab, Dushyant Kumar, Tieyuan Bian, <strong>Haining Zheng</strong>, Heng Gao, Fanrui Hu, Arthur McClelland, Kai Leng, William L. Wilson, Jun Yin*, Hyunsoo Yang*, Kian Ping Loh*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication3.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 15px; margin-bottom: 15px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第2篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201909461">2. Turning on the Taps: Conformational Control of Quantum Interference to Modulate Single-Molecule Conductance</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Angewandte Chemie International Edition.</strong></em> 2019, <em>58</em>, 18987-18993.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      Feng Jiang, Douglas I. Trupp, Norah Algethami, <strong>Haining Zheng</strong>, Wenxiang He, Afaf Alqorashi, Chenxu Zhu, Chun Tang, Ruihao Li, Junyang Liu, Hatef Sadeghi, Jia Shi, Ross Davidson, Marcus Korb, Alexandre N. Sobolev, Masnun Naher, Sara Sangtarash*, Paul J. Low*, Wenjing Hong*, Colin J. Lambert*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication2.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 15px; margin-bottom: 15px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>

  <!-- 第1篇文献 -->
  <div class="view-compact" style="padding: 15px 40px !important; min-height: 0 !important; align-items: center !important;margin-bottom: 50px !important;">
    <div class="media-body">
      <div class="section-subheading article-title mb-0 mt-0">
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0013468621015942">1. The influence of water on the charge transport through self-assembled monolayers junctions fabricated by EGaIn technique</a>
      </div>
      <div class="article-style" style="font-size: 0.8rem">
      <em><strong>Electrochimica Acta.</strong></em> 2021, <em>398</em>, 139304.
      </div>
      <p class="summary-text" style="font-size: 0.7rem; line-height: 1.6; margin-top: 15px; margin-bottom: 15px; color: #666;">
      Jie Shi, Feng Jiang, Shichuan Long, Zhixing Lu, Tianshuo Liu, <strong>Haining Zheng</strong>, Jia Shi, Yang Yang*, Wenjing Hong*.
      </p>
    </div>
    <div class="ml-3" style="flex: 0 0 150px; margin-top: 0; margin-bottom: 0; display: flex; align-items: center;">
      <!-- 图片引用 -->
      <img src="publication1.png" alt="Featured Image" 
           style="width: 100%; max-height: 220px; margin-top: 18px; margin-bottom: 18px; object-fit: contain; border-radius: 4px;">
    </div>
  </div>