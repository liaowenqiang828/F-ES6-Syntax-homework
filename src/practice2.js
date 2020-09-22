// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO 不是map的使用场景，查查map的用法
    sections.map((section, ind) => {
        items.splice(section.index + ind, 0, section.content);
    });
    return items;
}
export { inject };
