---
# 首页长页面配置 - F² Lab
title: ""
date: 2022-10-24
type: landing

sections:
  # 1. 顶部全屏幻灯片 (Slider)
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
          content: 'Just opened last month!'
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

  # 2. 文字简介模块 (Hero)
  - block: hero
    content:
      title: |
        Zheng Haining
        Research Group
      image:
        filename: welcome.jpg
      text: |
        The **Zheng Research Group** has been a center of excellence for Artificial Intelligence research, teaching, and practice since its founding in 2016.
    design:
      background:
        color: '#f7f7f7'

  # 3. 最新动态 (Latest News)
  - block: collection
    content:
      title: Latest News
      subtitle: ""
      text: ""
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'

  # 4. 视觉过渡背景 (Markdown + Background)
  - block: markdown
    content:
      title: ""
      subtitle: ''
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
      css_class: fullscreen

  # 5. 最新论文 (Latest Preprints)
  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  # 6. 底部团队跳转按钮
  - block: markdown
    content:
      title: ""
      subtitle: ""
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
