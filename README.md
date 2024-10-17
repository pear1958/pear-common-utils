# 开发中

```
Node v19.1.0 // Vitest 需要 Vite >=v5.0.0 和 Node >=v18.0.0
```

```
我们需要使用 ts 以及新的 es6 语法，而 gulp 是不支持的，所以我们需要安装一些依赖使得 gulp 支持这些,
其中 sucras 让我们执行 gulp 可以使用最新语法并且支持 ts
```

### to-do-list

- [ ] 完善单元测试
- [ ] 完善文档
- [ ] 使用 rollup 替换 vite
- [ ] 支持 umd 使用方式

### 常用知识解释

语句覆盖率和行覆盖率在定义上十分接近，很多资料都会将其画等号。在实际开发中，如果一行代码中只有一条可执行语句，此时语句覆盖率等同于行覆盖率。如果一行代码中有多条可执行语句，并且有存在执行语句执行不到的情况下，语句覆盖率和行覆盖率就不相同。
