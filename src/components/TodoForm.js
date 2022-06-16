import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setinput] = useState('');


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setinput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setinput('')
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Edite a sua tarefa'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    /> 
                    <button className='todo-button edit'>Atualizar</button>
                </>    
            ) : (
                <>
                    <input 
                        type='text'
                        placeholder='Adicione uma Tarefa'
                        value={input}
                        name='text' 
                        className='todo-input' 
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Adicionar</button>
                </>
            )
            }
    </form>
    )
}

export default TodoForm
