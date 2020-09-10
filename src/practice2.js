const inject = (items, sections) => {
    sections.map((section, ind) => {
        items.splice(section.index + ind, 0, section.content);
    });
    return items;
}
export { inject };
