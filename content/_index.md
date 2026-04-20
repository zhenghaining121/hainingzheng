---
# 首页全能版 - 解决 404 导航问题
title: ""
date: 2022-10-24
type: landing

sections:
  # 1. 顶部大图幻灯片 (点击 Home 跳到这里)
  - block: slider
    id: slider 
    content:
      slides:
        - title: 👋 Welcome to the F² Lab
          content: Flexible and Ferroic Systems Laboratory
          align: center
          background:
            color: '#666' # 建议上传图片到 content/ 文件夹后改回 image 模式
        - title: World-Class Semiconductor Research
          content: 'Advancing the future of soft robotics.'
          align: right
          background:
            color: '#333'
          link:
            icon: graduation-cap
            icon_pack: fas
            text: Join Us
            url: ./joinus/ # 对应您菜单里的 Join Us
    design:
      is_fullscreen: true
      loop: true
      interval: 5000

  # 2. 实验室简介 (Hero 模块)
  - block: hero
    content:
      title: |
        Zheng Haining
        Research Group
      text: |
        The **Zheng Research Group** has been a center of excellence for materials science research since its founding.
    design:
      background:
        color: '#f7f7f7'

  # 3. 最新新闻 (点击 News 跳到这里)
  - block: collection
    id: news
    content:
      title: Latest News
      subtitle: "Recent updates from our lab"
      count: 5
      page_type: post
    design:
      view: card
      columns: '1'

  # 4. 论文展示 (点击 Publications 跳到这里)
  - block: collection
    id: publications
    content:
      title: Latest Preprints
      count: 5
      filters:
        folders:
          - publication
    design:
      view: citation
      columns: '1'

  # 5. 团队入口
  - block: markdown
    id: people
    content:
      title: ""
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
      spacing:
        padding: ['50px', '0', '50px', '0']
---
