export const handleChange = (e, account, nameTitle, setAccount) => {
    setAccount({ ...account, [nameTitle]: e })
}

export const addNewAccount = (value, accounts, setValue) => {
    debugger
    const newAccount = {
        id: Date.now(),
        name: [value.name],
        surname: [value.surname],
        age: [value.age],
        login: [value.login],
        password: [value.password]
    }

    setValue([...accounts, newAccount])
}

export const selectButton = (value, accounts, setValue) => {
    setValue(value)
}