import{_ as a,o as e,c as t,N as o}from"./chunks/framework.8d08cc2f.js";const b=JSON.parse('{"title":"搭建记录","description":null,"frontmatter":{"title":"搭建记录","description":null,"date":"2023-08-08T00:00:00.000Z","tags":["日记"]},"headers":[],"relativePath":"archives/搭建记录.md"}'),r={name:"archives/搭建记录.md"},l=o('<h1 id="搭建记录" tabindex="-1">搭建记录 <a class="header-anchor" href="#搭建记录" aria-label="Permalink to &quot;搭建记录&quot;">​</a></h1><h2 id="为啥搭建blog" tabindex="-1">为啥搭建blog <a class="header-anchor" href="#为啥搭建blog" aria-label="Permalink to &quot;为啥搭建blog&quot;">​</a></h2><p>啊，很突然的，原因是猫猫的友链帖子（距离这个帖子居然已经过去两个月了，拖延懒狗）。 看到猫猫的blog，感觉好有意思。</p><p>工作至今，一直有想搭建自己blog的想法，从未付诸于行动。看到鱼排里大佬们的帖子，也只是默默想着下次一定，就抛诸脑后。 但想想自己去年在鱼排写的年终期望，心里想着，不行，好歹得有点进步吧。加上很喜欢猫猫的友链板块（谢谢猫猫！）。于是，快乐的建站开始（踩坑(╬▔皿▔)╯）了。</p><h2 id="搭建技术" tabindex="-1">搭建技术 <a class="header-anchor" href="#搭建技术" aria-label="Permalink to &quot;搭建技术&quot;">​</a></h2><p>vitepress</p><p>主题-clark-cui</p><p>github Pages</p><p>以上对我这个菜鸡来说都是两眼一抹黑，只好硬着头皮上(看文档.jpg)。</p><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><p>仿照着猫猫和clark-cui的页面。删删改改。我总能写出让自己百度不到的bug ¯_(ツ)_/¯。</p><ol><li><p>config.ts 中使用 <strong>await</strong> 报错 Top-level await is currently not supported with the &quot;cjs&quot; output format</p><p>把package.josn 的type配置为module即可。（这个bug卡了我好久，我太菜了＞︿＜）。</p></li><li><p>打包后遇到页面样式丢失，还有跳转链接失效问题，把 vitepress 版本从 1.0.0-beta.2 换成猫猫老师的 1.0.0-alpha.60 就没问题了。不知道更底层的原因。</p></li></ol>',12),i=[l];function s(p,n,c,_,h,d){return e(),t("div",null,i)}const g=a(r,[["render",s]]);export{b as __pageData,g as default};
