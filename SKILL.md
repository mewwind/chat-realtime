name: 智能图片类型识别

description: 智能识别图片类型（照片、截图、表情包、二维码等），并提供相应的处理建议

tags:
  - 图片识别
  - 类型分类
  - 图像处理
  - AI识别

parameters:
  - name: image_url
    type: string
    description: 图片的URL地址或本地路径
    required: true
  - name: need_suggestion
    type: boolean
    description: 是否需要提供处理建议
    required: false
    default: true

examples:
  - input: "识别这张图片的类型 https://example.com/photo.jpg"
    output: |
      这是一张**人物照片**。
      
      📸 **识别特征**：
      - 包含人脸特征
      - 背景为户外场景
      - 拍摄角度自然
      
      💡 **建议**：
      - 适合用于人像展示
      - 可以进行美颜处理
      - 建议保留原始分辨率

  - input: "这是什么类型的图片 screenshot.png"
    output: |
      这是一张**软件截图**。
      
      🖥️ **识别特征**：
      - 包含UI界面元素
      - 边缘平整，有圆角
      - 文字内容清晰
      
      💡 **建议**：
      - 适合用于教程文档
      - 可以标注重点区域
      - 建议保持清晰度

  - input: "分析这个表情包 meme.gif"
    output: |
      这是一个**表情包**。
      
      😄 **识别特征**：
      - 包含搞笑图片或文字
      - 适合社交传播
      - 风格活泼有趣
      
      💡 **建议**：
      - 适合社交平台使用
      - 可以添加动态效果
      - 建议压缩文件大小
