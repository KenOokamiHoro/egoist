# SilverBlog Semi Theme

介于简洁与复杂（？）的主题

## 安装

`git clone` 再 `yarn`

## 编译

```bash
# 编译（调试用）
yarn run build-test

# 编译（发布用）
yarn run build

# 清理编译生成的文件
yarn run clean
```

## 使用说明

### 手机菜单项目图标

你需要在菜单项里指定 `mobile_prefix` 字段，以便为手机菜单项目增加前缀（通常是 Font Awesome 图标）。

```json
[
    {
        "mobile_prefix": "<i class=\"fas fa-fw fa-user\"></i>",
        "title": "关于 & 留言",
        "name": "about"
    },
    {
        "mobile_prefix": "<i class=\"fas fa-fw fa-archive\"></i>",
        "title": "归档",
        "name": "archive"
    },
    {
        "mobile_prefix": "<i class=\"fas fa-fw fa-link\"></i>",
        "title": "链接",
        "name": "links"
    }
]
```

### 灯箱

正文的图片，默认开启灯箱支持，你可以点击图片调出所对应的灯箱。如果不需要灯箱，需要在图片中添加 `no-lightbox` 这个 class。

### 归档页面

新建一个页面，内容如下：

```html
<div id="archive-container"></div>
```

### 首页头图

你需要在主题的 `config.json` 指定头图地址（`Cover_Image`）。

```json
{
    "Cover_Image": ""
}
```

## 总结

本主题是为我自己的 [博客](https://www.tcdw.net) 量身订制的，你可以在遵循许可证的前提下使用，但是恐怕不会得到太多支持。

## 许可证

BSD3
