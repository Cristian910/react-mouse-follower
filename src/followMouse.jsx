import {useEffect,useState} from "react"

export const FollowMouse = () => {
  const [enabled,setEnabled] = useState(false)
  const [position,setPosition] = useState({x:0,y:0})

  useEffect(() => {

    const handleMove = (event) => {
      const {clientX,clientY} = event
      setPosition({x:clientX,y:clientY})
    }
    if(enabled) {
    window.addEventListener('pointermove',handleMove)
    }
    //se ejecuta cuando cambia la dependencia
    return() => {
      window.removeEventListener('pointermove',handleMove)
    }
  },[enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor',enabled)

    return()=> {
      document.body.classList.remove('no-cursor')
    }
  })
  return (
    <>
    <div className='cursor' style={{transform:` translate(${position.x}px,${position.y}px)`}}/>
      <h2>Sigue el cursor</h2>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar':'Activar'} cursor</button>
    </>
  );
}