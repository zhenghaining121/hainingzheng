---
title: "F² Lab: Flexible & Ferroic Systems"
date: 2022-10-24
type: landing

sections:
  # 1. 顶部大图幻灯片 (保留你最喜欢的动态效果)
  - block: slider
    content:
      slides:
        - title: 👋 Welcome to the F² Lab
          content: "Flexible and Ferroic Systems Laboratory"
          align: center
          background:
            image:
              filename: welcome.jpg # 建议换成你最美的实验室照片
              filters:
                brightness: 0.7
        - title: "World-Class Semiconductor Research"
          content: "Advancing the future of soft robotics and tactile sensing."
          align: right
          background:
            image:
              filename: coders.jpg
              filters:
                brightness: 0.5
          link:
            icon: graduation-cap
            icon_pack: fas
            text: Join Us
            url: ./contact/
    design:
      is_fullscreen: true
      loop: true
      interval: 5000

  # 2. 实验室动态 (自动抓取 news 文件夹)
  - block: collection
    content:
      title: Latest News
      subtitle: "Recent updates from our lab"
      count: 3
      page_type: post
    design:
      view: card # 卡片式布局，看起来更现代
      columns: '3'

  # 3. 视觉间隔 (插入一张全屏质感图，增加滚动时的呼吸感)
  - block: markdown
    content:
      title:
      text: ""
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          parallax: true # 开启开启视差滚动效果
          filters:
            brightness: 0.6
      spacing:
        padding: ['100px', '0', '100px', '0']

  # 4. 最新论文展示
  - block: collection
    content:
      title: Featured Publications
      count: 5
      filters:
        folders:
          - publication
    design:
      view: citation # 学术引用格式
      columns: '1'

  # 5. 底部呼吁按钮 (跳转到成员页面)
  - block: markdown
    content:
      title:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet our team →" %}}
    design:
      columns: '1'
      spacing:
        padding: ['50px', '0', '50px', '0']
---
