export const handleChange = (e, account, nameTitle, setAccount) => {
    
    setAccount({ ...account, [nameTitle.toLowerCase()] : e })
}

export const addNewAccount = (value, setValue, setAccount) => {
    
    const newAccount = {
        ...value,
        id: Date.now(),
    }

    if (value.name === '' || value.surname === '' || value.email === ''|| value.login === '' || value.password === '') {
        alert('Вы не заполили поля')
    } else {
        setValue(newAccount)
        alert('Вы успешно зарегистрировались')
        setAccount({ name: '', surname: '', email: '', login: '', password: '' })
    }
}

