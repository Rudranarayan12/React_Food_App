import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



const Settings = () => {
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
})
useEffect(()=>{
  const root=document.documentElement
  for(let key in settings){
    root.style.setProperty(key,settings[key])
  }
},[settings])

  const [theme, SetTheme] = useState("light")
    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]
  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
  ]
  function changeTheme(i){
    const _theme={...themes[i]}
    SetTheme(i==0 ? "light" : "dark")
    // update settings
    let _settings ={...settings}
    for(let key in _theme){
      _settings[key] = _theme[key]
    }
    setSettings(_settings)
  }
  function changeColor(i){
    const _color = primaryColors[i]
    let _settings={...settings}
    _settings["--primary-color"]=_color
    SetPrimaryColor(i)
    setSettings(_settings)
  }

  function changeFontSize(i){
    const _size = fontSizes[i]
    let _settings = {...settings}
    _settings["--font-size"] = _size.value
    setFontSize(i)
    setSettings(_settings)
}
  const fontSizes = [
    {
        title: "Small",
        value: "12px"
    },
    {
        title: "Medium",
        value: "16px"
    },
    {
        title: "Large",
        value: "20px"
    }
]
  const [primaryColor, SetPrimaryColor] = useState(0)
  const[fontSize,setFontSize]=useState(1)
  return (
    <div>
      <div className="section d-block">
        <h2>Preferred Theme</h2>
        <div className='option-container'>
          <div className="option light" onClick={()=>changeTheme(0)}>

            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>

            )}
          </div>
          <div className="option dark"  onClick={()=>changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>

            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Prefered color</h2>
        <div className='option-container'>
          {primaryColors.map((color, index) => (
            <div className="option light" style={{ backgroundColor: color }} onClick={()=>changeColor(index)}>
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>

              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Font Size</h2>
        <div className='option-container'>
          {fontSizes.map((size, index) => (
            // <div className="option light" style={{ backgroundColor: color }}>
            //   {primaryColor === index && (
            //     <div className="check">
            //       <FontAwesomeIcon icon={faCheck} />
            //     </div>

            //   )}
            // </div>
            <button className="btn" onClick={()=>changeFontSize(index)}>
              {size.title}
            {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
              </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Settings
