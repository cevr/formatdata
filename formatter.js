function isSubmodule(data) {
    return data.toLowerCase() === 'module';
}

function formatData(data) {
    let parentModule;
    let submodules = [];
    let formattedData = [];

    for (let element of Data) {
        if (isSubmodule(element.type)) {
            submodules = submodules.concat(element);
        }
        if (!isSubmodule(element.type)) {
            parentModule = element;

            if (parentModule && submodules.length > 0) {
                formattedData = formattedData.concat({
                    ...parentModule,
                    submodules
                });
                submodules = [];
                continue;
            }

            formattedData = formattedData.concat(element);
            submodules = [];
        }
    }
}
