import React from 'react';

export default function StartMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="xp-start-menu" onMouseLeave={onClose} style={{
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(90deg, #eaf6d2 0%, #b6d07a 100%)',
      border: '2px solid #316ac5',
      borderRadius: '0 0 8px 8px',
      boxShadow: '2px 2px 8px #0004',
      width: 220,
      minHeight: 260,
      position: 'absolute',
      left: 8,
      bottom: 48,
      zIndex: 20,
      paddingBottom: 8,
      overflow: 'hidden',
    }}>
      <div style={{
        background: 'linear-gradient(90deg, #0a246a 0%, #3a6ea5 100%)',
        color: '#fff',
        padding: '10px 12px',
        fontWeight: 'bold',
        fontSize: '1.08em',
        borderBottom: '1px solid #1854b6',
        letterSpacing: '0.5px',
        textShadow: '1px 1px 0 #0008',
      }}>
        <img src="https://i.imgur.com/1b1Jw1A.png" alt="logo" style={{width:22,height:22,verticalAlign:'middle',marginRight:8,borderRadius:3,boxShadow:'0 1px 2px #0004'}} />
        <span>Windows XP</span>
      </div>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: '10px 0 0 0',
        flex: 1,
        background: 'none',
      }}>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png" alt="My Computer" style={{width:18}} />
          <span>Mi PC</span>
        </li>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-2.png" alt="My Documents" style={{width:18}} />
          <span>Mis documentos</span>
        </li>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/network_cool_two_pcs-2.png" alt="Network" style={{width:18}} />
          <span>Red</span>
        </li>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/recycle_bin_full-2.png" alt="Recycle Bin" style={{width:18}} />
          <span>Papelera de reciclaje</span>
        </li>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/notepad-2.png" alt="Notepad" style={{width:18}} />
          <span>Bloc de notas</span>
        </li>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/paint_old-2.png" alt="Paint" style={{width:18}} />
          <span>Paint</span>
        </li>
        <li style={{display:'flex',alignItems:'center',padding:'6px 18px',cursor:'pointer',borderRadius:3,gap:8}}>
          <img src="https://win98icons.alexmeub.com/icons/png/msie1-2.png" alt="Internet Explorer" style={{width:18}} />
          <span>Internet Explorer</span>
        </li>
      </ul>
      <div style={{
        background: 'linear-gradient(90deg, #eaf6d2 0%, #b6d07a 100%)',
        borderTop: '1px solid #b6d07a',
        padding: '8px 12px',
        fontSize: '0.98em',
        color: '#1854b6',
        textAlign: 'right',
      }}>
        <span style={{fontWeight:'bold'}}>Cerrar sesión</span>
      </div>
    </div>
  );
}
