function classname(obj: any): string  {
    let classAvailible = ''
    const keys = Object.keys(obj)
    
    keys.forEach((item: string) => {
        if(item && obj[item]) {
            classAvailible = `${classAvailible} ${item}`
        }
    })
    return classAvailible
}

export default classname