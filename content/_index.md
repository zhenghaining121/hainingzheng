---
# 首页配置文件 - F² Lab
title: ""
date: 2022-10-24
type: landing

sections:
  # --- 第一部分：顶部全屏幻灯片 (Slider) ---
  - block: slider
    content:
      slides:
        - title: 👋 Welcome to the F² Lab
          content: Flexible and Ferroic Systems Laboratory
          align: center
          background:
            image:
              filename: coders.jpg
              filters:
                brightness: 0.7
            position: right
            color: '#666'
        - title: Lunch & Learn ☕️
          content: 'Share your knowledge with the group and explore exciting new topics together!'
          align: left
          background:
            image:
              filename: contact.jpg
              filters:
                brightness: 0.7
            position: center
            color: '#555'
        - title: World-Class Semiconductor Lab
          content: 'Advancing the future of soft robotics.'
          align: right
          background:
            image:
              filename: welcome.jpg
              filters:
                brightness: 0.5
            position: center
            color: '#333'
          link:
            icon: graduation-cap
            icon_pack: fas
            text: Join Us
            url: ../contact/
    design:
      slide_height: ''
      is_fullscreen: true
      loop: true
      interval: 5000

  # --- 第二部分：文字简介 (Hero) ---
  - block: hero
    content:
      title: |
        Zheng Haining
        Research Group
      image:
        filename: welcome.jpg
      text: |
        The **Zheng Research Group** focuses on flexible electronics and ferroic systems, striving for excellence in research and practice.
    design:
      background:
        color: '#f7f7f7' # 稍微带一点灰，区分开上面的大图

  # --- 第三部分：最新新闻 (Latest News) ---
  - block: collection
    content:
      title: Latest News
      count: 5
      page_type: post
    design:
      view: card
      columns: '1'

  # --- 第四部分：视差背景过渡 ---
  - block: markdown
    content:
      title: ""
      text: ""
    design:
      columns: '1'
      background:
        image: 
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: true
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['100px', '0', '100px', '0']

  # --- 第五部分：论文列表 (Preprints) ---
  - block: collection
    content:
      title: Latest Preprints
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  # --- 第六部分：加入我们按钮 ---
  - block: markdown
    content:
      title: ""
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
