const parseData = (input) => {
    const output = [];
    const columns = [];

    const setDataIntoColumn = (data) => {
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
