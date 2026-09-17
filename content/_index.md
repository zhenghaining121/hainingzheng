---
title: "Welcome to Dr. Zheng's Lab"
date: 2022-10-24
type: landing

sections:
  # 1. 顶部大图幻灯片 (点击 Home 跳到这里)
  - block: markdown
    id: hero-banner
    content:
      title: ""
      text: |
        <div class="academic-hero-container" style="position:relative;width:100vw;height:80vh;margin-left:calc(-50vw + 50%);margin-right:calc(-50vw + 50%);overflow:hidden;background-color:#00206f;">
          <img src="./media/bg1.png" alt="Background" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:1;pointer-events:none;">
          <div class="hero-3d-wrapper" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2;overflow:hidden;">
            <canvas id="hero-three-canvas" style="width:100%;height:100%;display:block;" aria-hidden="true"></canvas>
            <div class="hero-light-glow" style="position:absolute;left:50%;top:50%;width:600px;height:600px;transform:translate(-50%, -50%);background:radial-gradient(circle, rgba(149,211,255,0.35) 0%, rgba(0,32,111,0.0) 65%);pointer-events:none;filter:blur(1px);"></div>
          </div>
          <div class="hero-overlay" style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(rgba(0,32,111,0.5),rgba(0,32,111,0.4));z-index:3;"></div>
          <div class="hero-inner-content" style="position:relative;z-index:4;text-align:center;max-width:1100px;margin:0 auto;padding:0 30px;box-sizing:border-box;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;">
            <div id="hero-page-1" class="hero-page visible">
              <h1 class="hero-main-title academic-fade-in" style="font-size: calc(1.4rem + 1.5vw) !important; font-weight: 350 !important; color: #ffffff !important; margin: 100px 0 60px 0 !important; letter-spacing: 1.5px !important; text-shadow: 0 3px 15px rgba(0, 0, 0, 0.6) !important; line-height: 1.2 !important;">
                <span class="wave-hand" style="display: inline-block; transform-origin: 70% 70%;">👋</span> Welcome to Zheng Haining's group!
              </h1>
              <hr class="line-fade-in" style="width:150px;border:none;height:1px;background:rgba(255,255,255,0.4);margin:10px auto 60px auto;">
              <p class="hero-vision-text text-fade-in" style="font-size: 1.1rem !important; font-weight: 400 !important; color: rgba(255,255,255,0.95) !important; line-height: 1.75 !important; text-shadow: 0 2px 8px rgba(24, 35, 245, 0.08) !important; text-align: center;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); backdrop-filter: blur(2px);">
                Our vision is to develop advanced flexible and ferroic systems that bridge the gap between material discovery and next-generation information technologies.
              </p>
            </div>
            <div id="hero-page-2" class="hero-page hidden">
              <h2 class="hero-second-title" style="font-family: 'Segoe UI', -apple-system, sans-serif !important; font-size: calc(1.5rem + 1vw) !important; font-weight: 400 !important; color: #ffffff !important; margin: 0 0 14px 0; letter-spacing: 0.8px !important; text-shadow: 0 2px 14px rgba(0,0,0,0.3) !important; text-align: center;">
                Flexible & Ferroic Systems Laboratory
              </h2>
              <p class="hero-subtitle" style="font-family: 'Inter', -apple-system, sans-serif !important; font-size: 1.5rem !important; font-style: italic !important; font-weight: 600 !important; color: #ffffff !important; margin: 20px 0 40px 0; text-align: center; opacity: 0; transform: translateY(10px); transition: opacity 0.75s ease, transform 0.75s ease; text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);">
                   <span style="display:inline-block; padding:6px 12px; border-radius:8px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); backdrop-filter: blur(2px);">
                    <span style="color: #77adff; font-weight:800; font-style:italic; font-size:1.05em; letter-spacing:0.0em; text-shadow: 0 6px 18px rgba(6, 57, 120, 0.2);">F</span>
                    <sup style="display:inline-block; color: #f9dd9b; font-size:0.72em; vertical-align:0.18em; margin:0 0.12em; font-weight:800; text-shadow: 0 2px 6px rgba(0,0,0,0.25);">2</sup>
                    <span style="color: #77adff; font-weight:700; font-style:italic; font-size:0.95em; margin-left:0.08em; text-shadow: 0 4px 12px rgba(6, 57, 120, 0.23);">Lab</span>
                  </span>
              </p>
              <div class="hero-keywords" style="display:flex;flex-direction:column;gap:16px;align-items:center;">
                <span class="keyword-item">1. Functional Magnetoelectric Materials</span>
                <span class="keyword-item">2. Ferroic & Multi-ferroic Physics</span>
                <span class="keyword-item">3. Flexible Wearable Devices</span>
              </div>
            </div>
          </div>
        </div>

        <style>
          #hero-three-canvas {
            width: 100%;
            height: 100%;
            display: block;
          }
          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(0,32,111,0.45), rgba(0,32,111,0.35));
            z-index: 3;
          }
          .hero-inner-content {
            position: relative;
            z-index: 4;
          }
          .hero-light-glow {
            pointer-events: none;
          }
          .hero-page {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            transition: opacity 0.75s ease, visibility 0.75s ease;
          }
          .hero-page.hidden {
            opacity: 0;
            visibility: hidden;
          }
          .hero-page.visible {
            opacity: 1;
            visibility: visible;
          }
          .hero-vision-typed {
            color: rgba(255,255,255,0.95);
            font-family: 'Inter', -apple-system, sans-serif;
            font-size: 1.1rem;
            line-height: 1.7;
            max-width: 760px;
            white-space: pre-wrap;
            letter-spacing: 0.02em;
            text-align: center;
            min-height: 100px;
            opacity: 0;
            transition: opacity 0.7s ease;
          }
          .hero-vision-typed.visible {
            opacity: 1;
          }
          .hero-second-title {
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 0.75s ease, transform 0.75s ease;
          }
          .hero-second-title.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .hero-keywords {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 18px;
            color: #c0d2fa;
            font-family: 'Inter', -apple-system, sans-serif;
            font-size: 1rem;
            line-height: 1.2;
            text-align: center;
          }
          .keyword-item {
            opacity: 0;
            transform: translateY(18px);
            transition: opacity 0.6s ease, transform 0.6s ease;
            color: #95c6ff;
            font-size: 1rem;
            font-weight: 500;
            text-shadow: 0 10px 22px rgba(2, 36, 84, 0.24);
            padding: 6px 18px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(4px);
          }
          .keyword-item.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .hero-subtitle.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        </style>

        <script type="module">
          import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.module.js';

          const canvas = document.getElementById('hero-three-canvas');
          const scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x001228, 0.0025);

          const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

          const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
          camera.position.set(0, 0, 28);

          const ambient = new THREE.AmbientLight(0x84bdfb, 0.75);
          scene.add(ambient);

          const direct = new THREE.DirectionalLight(0xa9d8ff, 1.0);
          direct.position.set(-4, 6, 10);
          scene.add(direct);

          const circuitGroup = new THREE.Group();
          const nodeMaterial = new THREE.MeshStandardMaterial({ color: 0x9be4ff, emissive: 0x1c8cff, metalness: 0.4, roughness: 0.2 });
          const nodeGeometry = new THREE.SphereGeometry(0.12, 10, 10);
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0x5ed1ff, transparent: true, opacity: 0.5 });

          const points = [];
          for (let i = 0; i < 18; i++) {
            const x = THREE.MathUtils.randFloatSpread(28);
            const y = THREE.MathUtils.randFloatSpread(14);
            const z = THREE.MathUtils.randFloat(-2, 2);
            const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
            mesh.position.set(x, y, z);
            circuitGroup.add(mesh);
            points.push(mesh.position);
          }

          const lineGeometry = new THREE.BufferGeometry();
          const linePositions = new Float32Array(points.length * points.length * 6);
          const linePairs = [];
          let linePositionCount = 0;

          for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
              if (points[i].distanceTo(points[j]) < 8.5) {
                linePairs.push(i, j);
                linePositions[linePositionCount++] = points[i].x;
                linePositions[linePositionCount++] = points[i].y;
                linePositions[linePositionCount++] = points[i].z;
                linePositions[linePositionCount++] = points[j].x;
                linePositions[linePositionCount++] = points[j].y;
                linePositions[linePositionCount++] = points[j].z;
              }
            }
          }

          lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions.subarray(0, linePositionCount), 3));
          const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
          circuitGroup.add(lineMesh);
          scene.add(circuitGroup);

          const crystalGroup = new THREE.Group();
          const crystalMaterial = new THREE.MeshStandardMaterial({
            color: 0x8ae9ff,
            emissive: 0x25b0ff,
            roughness: 0.08,
            metalness: 0.9,
            transparent: true,
            opacity: 0.95,
            envMapIntensity: 1
          });
          const crystalEdgeMaterial = new THREE.LineBasicMaterial({ color: 0xc7f4ff, transparent: true, opacity: 0.8 });

          const crystals = [];
          for (let i = 0; i < 4; i++) {
            const radius = 1.3 - i * 0.18;
            const geometry = new THREE.OctahedronGeometry(radius, 0);
            const mesh = new THREE.Mesh(geometry, crystalMaterial);
            const edges = new THREE.EdgesGeometry(geometry);
            const outline = new THREE.LineSegments(edges, crystalEdgeMaterial);
            const wrapper = new THREE.Group();
            wrapper.add(mesh, outline);
            wrapper.position.set((i - 1.5) * 4.8, (i % 2 ? -1 : 2.4), THREE.MathUtils.randFloat(-2.2, 2.2));
            wrapper.scale.setScalar(0.86 + i * 0.12);
            crystalGroup.add(wrapper);
            crystals.push(wrapper);
          }
          scene.add(crystalGroup);

          const targetMouse = new THREE.Vector2(0, 0);
          const targetRotation = new THREE.Vector2(0, 0);

          const heroPage1 = document.getElementById('hero-page-1');
          const heroPage2 = document.getElementById('hero-page-2');
          const heroTitle = document.querySelector('.hero-main-title');
          const heroLine = document.querySelector('.line-fade-in');
          const heroText = document.querySelector('.hero-vision-text');
          const heroSecondTitle = document.querySelector('.hero-second-title');
          const heroSubtitle = document.querySelector('.hero-subtitle');
          const keywordItems = document.querySelectorAll('.keyword-item');

          function resetPage1Animations() {
            heroTitle.classList.remove('academic-fade-in');
            heroLine.classList.remove('line-fade-in');
            heroText.classList.remove('text-fade-in');
            heroTitle.style.opacity = '0';
            heroLine.style.opacity = '0';
            heroText.style.opacity = '0';
            void heroTitle.offsetWidth;
            heroTitle.classList.add('academic-fade-in');
            heroLine.classList.add('line-fade-in');
            heroText.classList.add('text-fade-in');
          }

          function showPage1() {
            heroPage2.classList.add('hidden');
            heroPage2.classList.remove('visible');
            heroPage1.classList.remove('hidden');
            heroPage1.classList.add('visible');
            heroSecondTitle.classList.remove('visible');
            heroSubtitle.classList.remove('visible');
            keywordItems.forEach((item) => item.classList.remove('visible'));
            resetPage1Animations();
          }

          function showPage2() {
            heroPage1.classList.remove('visible');
            heroPage1.classList.add('hidden');
            heroPage2.classList.remove('hidden');
            heroPage2.classList.add('visible');
            heroSecondTitle.classList.remove('visible');
            heroSubtitle.classList.remove('visible');
            keywordItems.forEach((item) => item.classList.remove('visible'));

            setTimeout(() => {
              heroSecondTitle.classList.add('visible');
            }, 600);
            setTimeout(() => {
              heroSubtitle.classList.add('visible');
            }, 1200);
            keywordItems.forEach((item, index) => {
              setTimeout(() => item.classList.add('visible'), 1800 + 700 * index);
            });

            const secondPageDuration = 1800 + keywordItems.length * 700 + 2000;
            setTimeout(() => {
              showPage1();
                setTimeout(showPage2, 4500);
            }, secondPageDuration);
          }

          function cyclePages() {
            showPage1();
              setTimeout(showPage2, 4500);
          }

          function updateMouse(event) {
            const rect = canvas.getBoundingClientRect();
            targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            targetRotation.x = targetMouse.x * 0.16;
            targetRotation.y = targetMouse.y * 0.16;
          }

          window.addEventListener('pointermove', updateMouse, { passive: true });

          function resize() {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
          }

          function animate() {
            requestAnimationFrame(animate);

            circuitGroup.rotation.y += (targetRotation.x - circuitGroup.rotation.y) * 0.08;
            circuitGroup.rotation.x += (targetRotation.y * 0.5 - circuitGroup.rotation.x) * 0.06;

            crystals.forEach((crystal, index) => {
              const offsetX = targetMouse.x * (2.1 - index * 0.3);
              const offsetY = targetMouse.y * (1.2 + index * 0.3);
              crystal.position.x += (offsetX - crystal.position.x) * 0.08;
              crystal.position.y += (offsetY - crystal.position.y) * 0.06;
              crystal.rotation.x += 0.008 + index * 0.0015;
              crystal.rotation.y += 0.012 + index * 0.0018;
            });

            for (let i = 0; i < points.length; i++) {
              const fluct = Math.sin(performance.now() * 0.0012 + i) * 0.15;
              points[i].z = fluct;
            }

            const positions = lineGeometry.attributes.position.array;
            let idx = 0;
            for (let p = 0; p < linePairs.length; p += 2) {
              const a = linePairs[p];
              const b = linePairs[p + 1];
              positions[idx++] = points[a].x;
              positions[idx++] = points[a].y;
              positions[idx++] = points[a].z;
              positions[idx++] = points[b].x;
              positions[idx++] = points[b].y;
              positions[idx++] = points[b].z;
            }
            lineGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
          }

          resize();
          window.addEventListener('resize', resize);
          cyclePages();
          animate();
        </script>

        <style>
          /* 标题动效：开场淡入并舒展 */
          .academic-fade-in {
            opacity: 0;
            animation: academicFadeEffect 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            animation-delay: 0.2s;
          }
          /* 分割线动效：从中间到两边缓慢展开，同时带有温和的淡入 */
          .line-fade-in {
            opacity: 0;
            transform: scaleX(0); /* 初始状态：水平缩放到最中心的一个点 */
            transform-origin: center; /* 极其关键：确保以中心为原点向两边展开 */
            animation: lineExpandEffect 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            animation-delay: 0.8s; /* 保持你原有的延迟时间，等标题出来后再展开 */
          }
          /* 分割线由中间向两边展开的关键帧 */
          @keyframes lineExpandEffect {
            0% {
              opacity: 0;
              transform: scaleX(0);
            }
            50% {
              opacity: 0.5; /* 在展开到一半时，让它有一个逐渐亮起的平滑过渡 */
            }
            100% {
              opacity: 1;
              transform: scaleX(1); /* 完美展现出原有的 150px 宽度 */
            }
          }
          /* 愿景正文动效：稍作延迟平滑淡入 */
          .text-fade-in {
            opacity: 0;
            animation: pureFadeEffect 1.5s ease-out forwards;
            animation-delay: 1.1s;
          }

          /* ===================================================
            周期性招手机
             =================================================== */
          .wave-hand {
            /* 整个循环改为 3.5 秒（1.5秒招手 + 2秒停顿） */
            animation: autoWaveEffect 3.5s ease-in-out infinite;
            /* 等待 1.2 秒文字完全浮现后，开启第一次招手 */
            animation-delay: 1.2s; 
          }

          @keyframes autoWaveEffect {
            /* 0% 到 42.8% 之间（约 1.5 秒）：动作变慢、更柔和地连续招手 */
            0%  { transform: rotate(0deg); }
            8%  { transform: rotate(12deg); }   /* 减小了最大角度，让动作看起来更沉稳 */
            16% { transform: rotate(-3deg); }
            24% { transform: rotate(12deg); }
            32% { transform: rotate(-1deg); }
            40% { transform: rotate(8deg); }
            
            /* 42.8% 到 100%（刚好剩下 57.2% 的时间，即完整的 2.0 秒）：恢复原位静止 */
            42.8% { transform: rotate(0deg); }
            100%  { transform: rotate(0deg); }
          }

          /* 基础淡入关键帧 */
          @keyframes academicFadeEffect {
            0% {
              opacity: 0;
              letter-spacing: -2px;
              transform: translateY(5px);
            }
            100% {
              opacity: 1;
              letter-spacing: 1.5px;
              transform: translateY(0);
            }
          }
          @keyframes pureFadeEffect {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        </style>


    design:
      spacing:
        padding: ["0", "0", "0", "0"]



  # 2. 研究 (总结研究内容)
  
  - block: markdown
    id: research-highlights
    content:
      title: "Our Research"
      text: |
        <div class="research-container">
          <div class="research-card">
            <a href="./research/"><img src="./media/res1.png" alt="Research 1"style="width: 92%; height: 400px; object-fit: contain; display: block; margin: 20px auto 0px auto;"></a>
            <div class="card-text">
              <h3 style="margin-top: 0; margin-bottom: 25px; font-size: 1.1rem; text-align: center;">Design and Synthsis of Ferroic and Magnetoelectric Crystals</h3>
              <p style="text-align: justify;">We focus our attention on providing a fundamental understanding of the interplay between structural dimensionality and ferroic properties, as well as demonstrating the implementation of magnetoelectric crystals in advanced functional electronics.</p>
            </div>
          </div>
          <div class="research-card">
            <a href="./research/#Flexible"><img src="./media/res2.png" alt="Research 2"style="width: 90%; height: 400px; object-fit: contain; display: block; margin: 25px auto 0px auto;"></a>
            <div class="card-text">
              <h3 style="margin-top: 0; margin-bottom: 25px; font-size: 1.1rem; text-align: center;">AI-Driven Flexible & Wearable Magnetoelectric Devices</h3>
              <p style="text-align: justify;">Our research aims to bridge the gap between flexible magnetoelectric interfaces and intelligent signal processing. By leveraging AI-driven analytics, we develop wearable platforms capable of low-crosstalk piezoelectric sensing and closed-loop human-machine interaction.</p>
            </div>
          </div>
          <div class="research-card">
            <a href="./research/#Spintronics"><img src="./media/res3.png" alt="Research 3"style="width: 90%; height: 400px; object-fit: contain; display: block; margin: 20px auto 0px auto;"></a>
            <div class="card-text">
              <h3 style="margin-top: 0; margin-bottom: 25px; font-size: 1.1rem; text-align: center;">Spin Dynamics and Quantum Interference Effects</h3>
              <p style="text-align: justify;">Our work is dedicated to exploring spin quantum characteristics, with a primary focus on the spin relaxation dynamics and quantum interference effects. We aim to establish a robust foundation for next-generation quantum computing and advanced spintronic applications.</p>
            </div>
          </div>
        </div>

        <div class="research-container">
          </div>
        <div class="video-container" style="margin-top: 30px; margin-bottom: 60px;text-align: center;">
          <h3 style="margin-top: 0; margin-bottom: 20px; font-size: 1.1rem; text-align: center; color: #00206f;">AI + Flexible & Ferroelectric Sensing Devices</h3>
          <div style="text-align:center;">
            <div style="display: inline-block; position: relative; max-width: 1300px; margin: 0 auto; padding-top: 10px;">
              <video
                src="./media/Robotics.mp4"
                controls
                playsinline
                autoplay
                muted
                preload="metadata"
                style="display:block; width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); transform:scale(1.2); transform-origin: top center;">
              </video>
            </div>
          </div>
        </div>

        <style>
             /* ====== 移动端科研卡片适配规则 ====== */
        @media (max-width: 996px) {
          .research-container {
            display: flex !important;
            flex-direction: column !important; /* 强制手机端从网格变为纵向单列 */
            gap: 20px !important;              /* 减小卡片之间的间距，不再那么空旷 */
            padding: 0 5px !important;        /* 增加左右边距，防止贴边 */
          }

          .research-card {
            width: 100% !important;
            margin-bottom: 10px !important;
          }

          /* 核心：修复图片在手机端被死锁 400px 的问题 */
          .research-card img {
            height: auto !important;           /* 删掉 400px 限制，让图片按原比例自适应 */
            max-height: 280px !important;      /* 手机端限制图片最高 250px，避免占满全屏 */
            width: 100% !important;             /* 稍微撑开宽度 */
            margin-top:30px !important; 
            margin-bottom:30px !important; 
            object-fit: contain !important;    /* 保持原图比例 */
          }

          /* 修复文字在手机端的阅读体验 */
          .card-text {
            padding: 0 10px !important;
          }

          .card-text h3 {
            font-size: 1.1rem !important;        /* 稍微调小标题 */
            margin-bottom: 15px !important;
            padding: 0 10px !important;
          }

          .card-text p {
            font-size: 0.9rem !important;      /* 调小正文行号，阅读更紧凑 */
            line-height: 1.5 !important;
            padding: 0 10px !important;
         }
        }
        </style>
        

    design:
      spacing:
        padding: ["50px", "0", "50px", "0"]

# 3. 最新新闻 
  - block: markdown
    id: home-news-feed
    content:
      title: "Latest News"
      text: |
        <div class="home-news-container">
          <a href="./zhenghaining/news/1/" class="news-item-link">
            <div class="news-item-island">
              <div class="news-left-content">
                <div class="news-date-box">
                  <span class="day">14</span>
                  <span class="month">June</span>
                </div>
                <div class="news-main-info">
                  <h3>The Official Website for Our Research Group is Now Live!</h3>
                  <p>Welcome to our new official website! We invite you to stay updated on our latest research initiatives, team milestones, and open positions on this homepage.</p>
                </div>
              </div>
              <div class="news-right-media">
                <img src="./news/1/news1.png" alt="News Image">
                <div class="news-action-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </a>
        
        <style>
          /* 主容器：宽度扩大，适配深蓝主题 */
          .home-news-container {
            font-family: 'Inter', -apple-system, sans-serif;
            display: flex;
            flex-direction: column;
            gap: 25px;
            max-width: 1300px; /* 宽度加大 */
            margin: 0 auto;
            margin-top: 30px;
          }

          .news-item-link {
            text-decoration: none !important;
            display: block;
          }

          .news-item-island {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 25px 35px;
            background: #ffffff !important;
            border: 1.5px solid #e2e8f0; /* 默认浅色边框 */
            border-radius: 18px;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            gap: 40px;
          }

          /* 悬停效果：边框变深蓝，整体上浮 */
          .news-item-island:hover {
            transform: translateY(-5px);
            border-color: #00206f; /* 变深蓝边框 */
            box-shadow: 0 15px 40px rgba(0, 32, 111, 0.08);
          }

          /* 左侧文字区布局 */
          .news-left-content {
            display: flex;
            align-items: center;
            gap: 30px;
            flex: 1;
          }

          /* 深蓝色日期徽章 */
          .news-date-box {
            min-width: 80px;
            height: 80px;
            background: rgba(0, 32, 111, 0.05); /* 极淡的深蓝背景 */
            color: #00206f; /* 深蓝色文字 */
            border: 1px solid rgba(0, 32, 111, 0.1);
            border-radius: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .news-date-box .day { font-size: 26px; font-weight: 800; line-height: 1; }
          .news-date-box .month { font-size: 12px; font-weight: 700; margin-top: 5px; text-transform: uppercase; }

          /* 文字信息区 */
          .news-main-info h3 {
            font-size: 20px;
            color: #00206f; /* 大字使用深蓝色 */
            margin: 0 0 10px 0;
            font-weight: 700;
            line-height: 1.35;
            text-align: left;
          }
          .news-main-info p {
            font-size: 15px;
            color: #4a5568;
            margin: 0;
            line-height: 1.6;
            text-align: justify;
          }

          /* 右侧媒体区布局 */
          .news-right-media {
            display: flex;
            align-items: center;
            gap: 25px;
            flex-shrink: 0;
          }

          .news-right-media img {
            width: 140px;
            height: 90px;
            object-fit: contain;
            padding: 5px;
            border-radius: 10px;
            border: 1px solid #edf2f7;
          }

          /* 右侧指引箭头 */
          .news-action-arrow {
            color: #cbd5e0;
            font-size: 20px;
            transition: all 0.3s ease;
          }
          .news-item-island:hover .news-action-arrow {
            color: #00206f;
            transform: translateX(5px);
          }

          /* 底部 Learn More 按钮：深蓝风格 */
          .news-more-btn-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

          /* 💎 修改：View All Updates 基础样式（改为空心变饱满渐变，颜色稍浅） */
          .news-learn-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            
            /* 调整为比#00206f稍浅的高级学术蓝渐变 */
            background: linear-gradient(135deg, #2b5bf71f 0%, #9fbcff06 100%);
            color: #000000 !important; /* 文字变为纯白，凸显质感 */
            
            padding: 12px 38px;
            border: 4px #00206f; /* 移除原本的单薄线框 */
            border-radius: 50px;
            font-size: 15.5px;
            font-weight: 700;
            text-decoration: none !important;
            
            /* 加入轻量级环境投影，使其具有实体按钮的浮动感 */
            box-shadow: 0 4px 14px rgba(30, 64, 175, 0.1);
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* 💎 修改：鼠标悬停（Hover）时的状态反馈 */
          .news-learn-more-btn:hover {
            /* 悬停时渐变稍微加深，形成按压或高亮反馈 */
            background: linear-gradient(135deg, #1d4fd832 0%, #1e40af9d 100%);
            color: #ffffff !important;
            
            transform: translateY(-2px); /* 向上轻微浮动 */
            /* 阴影同步加深扩大，增强空间感 */
            box-shadow: 0 6px 16px rgba(30, 64, 175, 0.35);
          }

          /* 移动端适配 */
          @media (max-width: 992px) {
            .news-item-island { flex-direction: column; align-items: flex-start; padding: 20px; }
            .news-right-media { width: 100%; justify-content: space-between; margin-top: 15px; }
            .news-right-media img { width: 100%; height: 180px; }

          /* ==========================================================================
        【2. 主页 News 部分优化】日期融入标题行，正文小字横向全铺满
        ========================================================================== */
    
        /* 让新闻卡片内容区砸开成上下结构 */
        .home-news-container .news-item-island .news-left-content {
        flex-direction: column !important;   /* 由左右并排改为上下排列 */
        align-items: flex-start !important;
        width: 100% !important;
        }

        /* 重新规划原本过大的日期盒子 */
        .home-news-container .news-date-box {
        flex-direction: row !important;      /* 手机端让数字和月份横向并排 */
        display: inline-flex !important;
        align-items: center !important;
        background: #f0f4f8 !important;      /* 淡淡的灰色背景，形成小标签效果 */
        padding: 2px 8px !important;         /* 紧凑精致的内边距 */
        border-radius: 4px !important;
        margin-bottom: 10px !important;      /* 距离下方蓝色标题的间距 */
        border: none !important;             /* 移除原本的边框限制 */
        width: auto !important;              /* 宽度自适应，不再傻大 */
        height: auto !important;
        }

        /* 缩减日期盒子里文字的大小与间距 */
        .home-news-container .news-date-box .day {
        font-size: 1.2rem !important;
        font-weight: bold !important;
        margin-bottom: 4px !important;
        margin-right: 4px !important;       
        }

        .home-news-container .news-date-box .month {
        font-size: 0.9rem !important;
        text-transform: uppercase !important;
        }

        /* 让主信息区完全平铺并占据整个卡片的宽度 */
        .home-news-container .news-main-info {
        width: 100% !important;
        max-width: 100% !important;
        }

        /* 优化标题与正文 */
        .home-news-container .news-main-info h3 {
        font-size: 1.2rem !important;
        line-height: 1.4 !important;
        margin-top: 0 !important;
        margin-bottom: 8px !important;
        }

        .home-news-container .news-main-info p {
        width: 100% !important;              /* 【核心修改】新闻小字介绍横向 100% 全铺满 */
        max-width: 100% !important;
        text-align: justify !important;      /* 两端对齐，消除右边零碎的空隙 */
        font-size: 0.9rem !important;
        line-height: 1.5 !important;
        margin-top: 30px !important;      /* 与上方文字隔开 */
        margin-bottom: 5px !important;      /* 与下方大图隔开 */
        }

        /* 新闻底部的配图自适应放大并居中 */
        .home-news-container .news-right-media {
        width: 100% !important;
        max-width: 100% !important;
        margin-left: 0 !important;
        display: flex !important;
        justify-content: center !important;  /* 图片横向居中 */
        }

        .home-news-container .news-right-media img {
        width: 100% !important;
        max-width: 320px !important;         /* 限制最大显示宽度，防止图片撑得过大变形 */
        margin-top:20px !important;
        }

        /* 手机端隐藏右侧小箭头，释放更多纵向视觉空间 */
        .home-news-container .news-action-arrow {
        display: none !important;
        }
        
        .research-card,
        .news-item-island,
        .view-compact {
        height: auto !important;
          }

          }
        </style>
    design:
      spacing:
        padding: ["50px", "0", "50px", "0"]

# 4. 主页精英招聘直通车模块 (We Are Hiring!)
  - block: markdown
    id: home-hiring-carrier
    content:
      text: |
        <div class="hiring-hero-container">
          
          <div class="hiring-brand-side">
            <div class="hiring-badge"><i class="fas fa-briefcase"></i> We Are Hiring! 👋</div>
            <h2>Exciting Opportunities in Next -Generation Information Technologies</h2>
            <p>We are seeking highly self-motivated talent — Postdocs, Ph.D./Master Students, and RAs — to push boundaries in ferroics and flexible electronics.</p>
          </div>       
          <div class="hiring-info-side">
            <ul class="hiring-features-list">
              <li class="hiring-interactive-item">
                <div class="hiring-feat-icon"><i class="fas fa-envelope"></i></div>
                <div class="hiring-feat-text">
                  <strong>Email</strong> 
                  <a href="mailto:haining.zheng@u.nus.edu">haining.zheng@u.nus.edu</a>
                </div>
              </li>
              <li class="hiring-interactive-item">
                <div class="hiring-feat-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="hiring-feat-text">
                  <strong>Office Address</strong> 
                  School of Physics, Southeastern University, Nanjing, China
                </div>
              </li>
              <li class="hiring-interactive-item">
                <div class="hiring-feat-icon"><i class="fas fa-flask"></i></div>
                <div class="hiring-feat-text">
                  <strong>Laboratory</strong> 
                  Flexible & Ferroic Systems Laboratory (F² Lab)
                </div>
              </li>
            </ul>          
            <div class="hiring-action-area">
              <a href="./contact/" class="hiring-primary-btn">
                <span>Join Us !</span> <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>       
        </div>

        <style>
          /* 核心容器：剥离厚重白底，注入高级微透环境雾面光泽 */
          .hiring-hero-container {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            padding: 45px 50px;
            background: linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%) !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(226, 232, 240, 0.7);
            border-radius: 20px;
            box-shadow: 0 10px 30px -5px rgba(148, 163, 184, 0.08), 
                        0 4px 12px -2px rgba(226, 232, 240, 0.2) !important;
            margin: 30px auto;
            align-items: center;
          }

          /* 左侧品牌视觉设计 */
          .hiring-brand-side {
            flex: 1 1 450px;
          }
          
          .hiring-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #ebf8ff;
            color: #2c72bd;
            padding: 6px 14px;
            border-radius: 50px;
            font-size: 19px;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-top: -25px;
            margin-bottom: 25px;
            font-family: "Segoe UI", "Helvetica Neue", -apple-system, BlinkMacSystemFont,  sans-serif !important;
          }
          
          .hiring-brand-side h2 {
            font-size: 26px;
            color: #00206f;
            line-height: 1.3;
            margin: 0 0 15px 0;
            font-weight: 700;
          }
          
          .hiring-brand-side p {
            color: #64748b;
            font-size: 15px;
            padding: 10px 0 20px 0;
            line-height: 1.6;
            margin: 0;
            text-align: justify;
          }

          /* 右侧信息列表设计 */
          .hiring-info-side {
            flex: 1 1 400px;
            display: flex;
            flex-direction: column;
            gap: 25px;
          }
          
          .hiring-features-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px; /* 稍微缩紧间距以配合卡片内衬 */
          }
          
          /* 💎 新增：右侧单条联系方式的底壳与丝滑过渡基础设置 */
          .hiring-interactive-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 10px 14px;
            border-radius: 10px;
            background: transparent;
            border: 1px solid transparent;
            transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                        background 0.25s ease, 
                        box-shadow 0.25s ease,
                        border-color 0.25s ease;
          }

          /* 💎 修改：鼠标悬停在单条联系方式上时，不加背景框，仅让整体字和图标浮起 */
          .hiring-interactive-item:hover {
            transform: translateY(-3px); /* 仅向上优雅浮起 3px */
            background: transparent !important; /* 保持背景完全透明，不加底壳 */
            border-color: transparent !important; /* 保持无边框 */
            box-shadow: none !important; /* 彻底去掉外层阴影 */
          }
          
          .hiring-feat-icon {
            width: 32px;
            height: 32px;
            background: rgba(49, 130, 206, 0.08);
            color: #00206f;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            flex-shrink: 0;
            margin-top: 2px;
            transition: background 0.25s ease, color 0.25s ease;
          }

          /* 💎 修改：鼠标悬停时，图标和链接文字的颜色产生深浅变化，增强纯文字悬浮的质感 */
          .hiring-interactive-item:hover .hiring-feat-icon {
            background: rgba(49, 130, 206, 0.15); /* 图标小圆圈颜色稍微加深 */
            color: #2b6cb0;
            transform: translateY(-1px); /* 图标自身产生微悬浮的二次联动 */
          }
          
          .hiring-feat-text {
            font-size: 14.5px;
            color: #334155;
            line-height: 1.5;
            font-family: "Inter", "Helvetica Neue", -apple-system, BlinkMacSystemFont,  sans-serif !important;
          }
          
          .hiring-feat-text strong {
            color: #1e293b;
            display: block;
            margin-bottom: 2px;
          }
          
          /* 右侧替换后的邮箱链接专属样式 */
          .hiring-feat-text a {
            color: #3182ce;
            text-decoration: none;
          }
          
          .hiring-feat-text a:hover {
            text-decoration: underline !important;
          }

          /* 交互动作区域与高级按钮设计 */
          .hiring-action-area {
            margin-top: 5px;
            padding-left: 14px; /* 保持与上面卡片对齐 */
            font-family: "Montserrat", "Helvetica Neue", -apple-system, BlinkMacSystemFont,  sans-serif !important;
          }
          
          .hiring-primary-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%);
            color: #ffffff !important;
            padding: 12px 30px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            text-decoration: none !important;
            box-shadow: 0 4px 14px rgba(49, 130, 206, 0.3);
            transition: all 0.2s ease;
          }
          
          .hiring-primary-btn:hover {
            background: linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(49, 130, 206, 0.4);
          }
          
          /* 适配移动端的响应式微调 */
          @media (max-width: 768px) {
            .hiring-hero-container { padding: 20px 24px; gap: 10px; }
            .hiring-brand-side h2 { font-size: 22px; }
            .hiring-interactive-item { padding: 8px 10px; }
            .hiring-action-area { padding-left: 10px; }
          
        
        /* 1. 核心容器：对齐 Research 的饱满卡片质感 */
        .hiring-hero-container {
            display: flex !important;
            flex-direction: column !important; /* 手机端强制改为垂直单列 */
            padding: 24px 20px !important;     /* 紧凑而高级的内边距 */
            background: #ffffff !important;
            border-radius: 24px !important;    /* 完美对齐画廊和新闻的饱满圆角 */
            box-shadow: 0 10px 30px rgba(168, 180, 196, 0.12) !important;
            border: 1px solid rgba(226, 232, 240, 0.8) !important;
          }

          /* 2. 左侧品牌宣讲区字体优化 */
          .hiring-brand-side {
            text-align: left !important;      /* 手机端统一靠左对齐，视觉更规范 */
          }

          /* 顶部的 We Are Hiring 标签微调 */
          .hiring-badge {
            display: inline-flex !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            padding: 6px 14px !important;
            margin-top: 16px !important;
            margin-bottom: 14px !important;
            border-radius: 20px !important;
            letter-spacing: 0.03em !important;
          }

          /* 修复主标题（Exciting Opportunities...）换行与过大问题 */
          .hiring-brand-side h2 {
            font-size: 1.15rem !important;    /* 优化字体大小，防止单单词野蛮换行 */
            line-height: 1.35 !important;
            margin-top: 20px !important;
            margin-bottom: 20px !important;
            font-weight: 700 !important;
            color: #00206f !important;        /* 标志性的深皇家蓝 */
          }

          /* 导言小字（We are seeking...） */
          .hiring-brand-side p {
            font-size: 0.9rem !important;       /* 精致小字 */
            line-height: 1.6 !important;
            color: #5a6578 !important;        /* 柔和深灰 */
            margin: 0 !important;
          }

          /* 3. 右侧核心特征信息列表（Email, Address, Lab） */
          .hiring-info-side {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .hiring-features-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;              /* 收紧每一项信息之间的物理死间距 */
            padding: 0 !important;
            margin-bottom: 2px !important;    /* 留出给 Join Us 按钮的间距 */
            list-style: none !important;
          }

          /* 单个互动条目 */
          .hiring-interactive-item {
            display: flex !important;
            align-items: flex-start !important; /* 顶部对齐，防止地址太长时图标居中很难看 */
            gap: 14px !important;              /* 图标与右侧文字无缝贴合 */
            padding: 0 !important;
            background: transparent !important;
          }

          /* 图标外壳微调 */
          .hiring-feat-icon {
            width: 36px !important;            /* 微调小巧图标框，避免在手机上反客为主 */
            height: 36px !important;
            min-width: 36px !important;
            border-radius: 10px !important;
            font-size: 14px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* 右侧文本区域行高重构（彻底解决散乱问题） */
          .hiring-feat-text {
            display: flex !important;
            flex-direction: column !important;
            gap: 3px !important;               /* 标签（如Email）与具体地址之间的紧凑微间距 */
            text-align: left !important;
          }

          /* 项目粗体标签（Email / Office Address / Laboratory） */
          .hiring-feat-text strong {
            font-size: 13px !important;
            color: #2c3e50 !important;
            letter-spacing: 0.02em !important;
            text-transform: uppercase;        /* 引入学术微标签的高级感 */
            opacity: 0.85;
          }

          /* 对应渲染的具体具体内容文字 */
          .hiring-feat-text, 
          .hiring-feat-text a {
            font-size: 14px !important;       /* 统一手机端阅读最佳字号 */
            line-height: 1.45 !important;
            word-break: break-word !important; /* 强行防止超长邮箱在手机屏幕边缘爆出去 */
            color: #4a5568 !important;
          }

          /* 4. 底部“Join Us !”大行动按钮响应式 */
          .hiring-action-area {
            width: 100% !important;
           display: block !important;
          }

          .hiring-primary-btn {
            display: flex !important;
            width: 100% !important;            /* 手机端按钮撑满整宽，符合现代交互直觉 */
            justify-content: center !important;
            align-items: center !important;
            padding: 12px 24px !important;
            font-size: 15px !important;
            font-weight: 600 !important;
            border-radius: 30px !important;
            box-shadow: 0 4px 12px rgba(0, 32, 111, 0.15) !important;
        }

        }
        </style>
    design:
      spacing:
        padding: ["40px", "0", "40px", "0"]
---

  
