---
# 这是你的主入口，合并了幻灯片和长页面
title: ""
date: 2022-10-24
type: landing

sections:
  # 第一部分：从原 home/index.md 搬过来的 Slider
  - block: slider
    content:
      slides:
        - title: 👋 Welcome to the F² Lab
          content: Flexible and Ferroic Systems Laboratory
          align: center
          background:
            color: '#666' # 先用颜色保命，防止没图片报错
        - title: World-Class Semiconductor Lab
          content: 'Advancing the future of soft robotics.'
          align: right
          background:
            color: '#333'
          link:
            icon: graduation-cap
            icon_pack: fas
            text: Join Us
            url: ./contact/
    design:
      is_fullscreen: true
      loop: true
      interval: 5000

  # 第二部分：从原 _index.md 搬过来的 Hero
  - block: hero
    content:
      title: |
        Zheng Haining
        Research Group
      text: |
        The **Zheng Research Group** has been a center of excellence for materials research since 2016.
    design:
      background:
        color: '#f7f7f7'

  # 第三部分：新闻列表
  - block: collection
    content:
      title: Latest News
      count: 5
      page_type: post
    design:
      view: card
      columns: '1'

  # 第四部分：论文列表
  - block: collection
    content:
      title: Latest Preprints
      count: 5
      filters:
        folders:
          - publication
    design:
      view: citation
      columns: '1'

  # 第五部分：按钮
  - block: markdown
    content:
      title:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
---
