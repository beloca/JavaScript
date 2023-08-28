const headingGenerator=(title, typeOfHeading)=> {
    return `
        <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
}

headingGenerator('kaixo',2); //?            

headingGenerator('Zelan',1);