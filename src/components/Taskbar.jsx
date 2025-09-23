import React from 'react';

export default function Taskbar({ onStart, startOpen, windows, onTaskClick }) {
  return (
    <div className="xp-taskbar" style={{display:'flex',alignItems:'center',width:'100vw',height:'32px',position:'absolute',left:0,bottom:0}}>
      <button className={`xp-start-btn${startOpen ? ' xp-start-btn-active' : ''}`} onClick={onStart} style={{
        boxShadow: '0 2px 6px #0006',
        border: '2px outset #fff',
        background: 'linear-gradient(180deg, #eaf6d2 0%, #b6d07a 100%)',
        color: '#1854b6',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Tahoma',
        fontSize: '1.08rem',
        padding: '2px 18px 2px 8px',
        borderRadius: 6,
        minWidth: 90,
        height: 28,
        position: 'relative',
        outline: startOpen ? '2px solid #316ac5' : 'none',
        marginRight: 6,
      }}>
        <img src="https://i.imgur.com/1b1Jw1A.png" alt="Start" style={{width:22,height:22,marginRight:6,verticalAlign:'middle',borderRadius:3,boxShadow:'0 1px 2px #0004'}} />
        <span style={{
          verticalAlign:'middle',
          fontWeight:'bold',
          fontFamily:'Tahoma',
          color:'#1854b6',
          textShadow:'1px 1px 0 #fff, 0 1px 0 #fff, 1px 0 0 #fff',
          fontSize:'1.08rem',
          letterSpacing:'0.5px',
        }}>Inicio</span>
      </button>
      <div style={{flex:1}} />
      <div className="xp-taskbar-items">
        {Object.entries(windows)
          .filter(([, win]) => win.visible)
          .map(([key, win]) => (
            <span
              key={key}
              className={`xp-taskbar-item xp-taskbar-item-active`}
              onClick={() => onTaskClick(key)}
            >
              {win.title}
            </span>
          ))}
      </div>
      <div style={{display:'flex',alignItems:'center',gap:2,marginLeft:8}}>
        {/* Área de notificación (bandeja del sistema) */}
        <img src="https://win98icons.alexmeub.com/icons/png/speaker-2.png" alt="Volumen" style={{width:18,height:18,marginRight:2}} />
        <img src="https://win98icons.alexmeub.com/icons/png/battery-2.png" alt="Batería" style={{width:18,height:18,marginRight:2}} />
        <img src="https://win98icons.alexmeub.com/icons/png/network_cool_two_pcs-2.png" alt="Red" style={{width:18,height:18,marginRight:2}} />
        <img src="https://win98icons.alexmeub.com/icons/png/defrag-2.png" alt="Antivirus" style={{width:18,height:18,marginRight:2}} />
        <img src="https://win98icons.alexmeub.com/icons/png/clock-2.png" alt="Reloj" style={{width:18,height:18,marginRight:2}} />
        <div className="xp-taskbar-clock">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    </div>
  );
}
