import { useState } from "react"

export const useStudentsHook = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [level, setLevel] = useState('')
    const [grade, setGrade] = useState('')
    const [age, setAge] = useState('')
    const [balance, setBalance] = useState('')
  
    const [isSubmitted, setIsSubmitted] = useState(false)

    return {
        name,
        setName,
        lastName,
        setLastName,
        level,
        setLevel,
        grade,
        setGrade,
        age,
        setAge,
        balance,
        setBalance,
        isSubmitted,
        setIsSubmitted
        
    }
}