// TODO 方法过长，嵌套也过深，可以想想怎么优化
const parseData = (input) => {
    // TODO 使用解构的方式取出data与column
    // TODO 使用map做数组与数组的转化，不用声明新数组
    const output = [];
    const columns = [];

    // TODO 方法可以定义在外面
    const setDataIntoColumn = (data) => {
        // TODO 不是map的使用场景，查查map的用法
        data.map(item => {
            let obj = [];
            item.map((field, index) => {
                obj.push({name: input.column[index].name, note: field})
            });
            columns.push(obj)
        });
    }

    const convertColumnIntoObj = columns => {
        columns.map(column => {
            let obj = {};
            column.map(item => {
                obj[item.name] = item.note
            });
            output.push(obj);
        });
    }

    setDataIntoColumn(input.data);
    convertColumnIntoObj(columns);
    return output;
}

export { parseData };
