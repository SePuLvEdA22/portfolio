
import { useState } from 'react';
import './App.css';
import DesktopIcon from './components/DesktopIcon';
import Desktop from './components/Desktop';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';

// XP icon URLs
const xpIcons = {
  about: 'https://win98icons.alexmeub.com/icons/png/msagent-1.png',
  projects: 'https://win98icons.alexmeub.com/icons/png/directory_closed-3.png',
  contact: 'https://win98icons.alexmeub.com/icons/png/write_yellow-1.png', // fixed icon
  myComputer: 'https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png',
  myDocuments: 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-2.png',
  network: 'https://win98icons.alexmeub.com/icons/png/network_cool_two_pcs-2.png',
  recycle: 'https://win98icons.alexmeub.com/icons/png/recycle_bin_full-2.png',
  paint: 'https://win98icons.alexmeub.com/icons/png/paint_old-2.png',
  notepad: 'https://win98icons.alexmeub.com/icons/png/notepad-2.png',
  games: 'https://win98icons.alexmeub.com/icons/png/minesweeper-0.png',
  media: 'https://win98icons.alexmeub.com/icons/png/multimedia-0.png',
  ie: 'https://win98icons.alexmeub.com/icons/png/msie1-2.png',
  help: 'https://win98icons.alexmeub.com/icons/png/help_book_cool-2.png',

};

// useDraggable moved to hooks/useDraggable.js




const projectsList = [
  {
    name: 'Portfolio Web',
    url: 'https://github.com/youruser/portfolio-web',
    icon: 'https://win98icons.alexmeub.com/icons/png/html-2.png',
  },
  {
    name: 'ToDo App',
    url: 'https://github.com/youruser/todo-app',
    icon: 'https://win98icons.alexmeub.com/icons/png/notepad-2.png',
  },
  {
    name: 'Blog Platform',
    url: 'https://github.com/youruser/blog-platform',
    icon: 'https://win98icons.alexmeub.com/icons/png/world-2.png',
  },
  {
    name: 'Data Augmentation Tool',
    url: 'https://github.com/SePuLvEdA22/data-augmentation',
    icon: 'https://win98icons.alexmeub.com/icons/png/hardware-1.png',
  },
];

const initialWindows = {
  about: {
    title: 'About Me',
    initialPos: { top: 60, left: 60 },
    visible: false,
    icon: xpIcons.about,
    content: (
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <img src="/profile-placeholder.png" alt="Profile" style={{width:80,height:80,borderRadius:8,objectFit:'cover',border:'2px solid #316ac5',background:'#fff'}} />
        <div>
          <p style={{margin:0}}>Hello! I'm <b>[Your Name]</b>, a web developer passionate about building beautiful and functional web experiences.</p>
        </div>
      </div>
    ),
  },
  projects: {
    title: 'Projects',
    initialPos: { top: 260, left: 120 },
    visible: false,
    icon: xpIcons.projects,
    content: (
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
          <img src={xpIcons.projects} alt="Folder" style={{width:24}} />
          <span style={{fontWeight:'bold'}}>My Projects</span>
        </div>
        <ul style={{listStyle:'none',padding:0,margin:0}}>
          {projectsList.map((proj) => (
            <li key={proj.name} style={{marginBottom:6}}>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:6,textDecoration:'none',color:'#222'}}>
                <img src={proj.icon} alt="icon" style={{width:18}} />
                {proj.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  contact: {
    title: 'Contact',
    initialPos: { top: 180, left: 400 },
    visible: false,
    icon: xpIcons.contact,
    content: (
      <>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </>
    ),
  },
};

function App() {
  const [windows, setWindows] = useState(initialWindows);
  const [focused, setFocused] = useState('about');
  const [startOpen, setStartOpen] = useState(false);

  const handleMinimize = (key) => {
    setWindows((prev) => ({ ...prev, [key]: { ...prev[key], visible: false } }));
  };
  const handleClose = (key) => {
    setWindows((prev) => ({ ...prev, [key]: { ...prev[key], visible: false } }));
  };
  const handleTaskClick = (key) => {
    setWindows((prev) => ({ ...prev, [key]: { ...prev[key], visible: true } }));
    setFocused(key);
  };
  const handleStart = () => setStartOpen((v) => !v);

  // All desktop icons, only About, Projects, Contact are interactive
  const desktopIcons = [
    // Íconos principales XP
    { key: 'myDocuments', label: 'Mis documentos', icon: 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-2.png', openable: false },
    { key: 'myComputer', label: 'Mi PC', icon: 'https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png', openable: false },
    { key: 'network', label: 'Entorno de red', icon: 'https://win98icons.alexmeub.com/icons/png/network_cool_two_pcs-2.png', openable: false },
    { key: 'recycle', label: 'Papelera de reciclaje', icon: 'https://win98icons.alexmeub.com/icons/png/recycle_bin_full-2.png', openable: false },
    // Accesos directos personalizados (como en la imagen)
    { key: 'about', label: 'Sobre mí', icon: xpIcons.about, openable: true },
    { key: 'projects', label: 'Proyectos', icon: xpIcons.projects, openable: true },
    { key: 'contact', label: 'Contacto', icon: xpIcons.contact, openable: true },
    { key: 'word', label: 'Microsoft Word', icon: 'https://win98icons.alexmeub.com/icons/png/word-2.png', openable: false },
    { key: 'excel', label: 'Microsoft Excel', icon: 'https://win98icons.alexmeub.com/icons/png/excel-2.png', openable: false },
    { key: 'powerpoint', label: 'PowerPoint', icon: 'https://win98icons.alexmeub.com/icons/png/powerpnt-2.png', openable: false },
    { key: 'access', label: 'Access', icon: 'https://win98icons.alexmeub.com/icons/png/access-2.png', openable: false },
    { key: 'paint', label: 'Paint Shop Pro 7', icon: 'https://win98icons.alexmeub.com/icons/png/paint_old-2.png', openable: false },
    { key: 'ie', label: 'Internet Explorer', icon: xpIcons.ie, openable: false },
    { key: 'notepad', label: 'Bloc de notas', icon: xpIcons.notepad, openable: false },
    { key: 'games', label: 'Juegos', icon: xpIcons.games, openable: false },
    { key: 'media', label: 'Media Player', icon: xpIcons.media, openable: false },
    { key: 'help', label: 'Ayuda', icon: xpIcons.help, openable: false },
  ];

  return (
    <div className="xp-desktop">
      <Desktop
        icons={desktopIcons.map(icon => ({
          ...icon,
          Component: DesktopIcon,
          onOpen: icon.openable ? () => {
            setWindows((prev) => ({ ...prev, [icon.key]: { ...prev[icon.key], visible: true } }));
            setFocused(icon.key);
          } : undefined,
        }))}
      />
      {Object.entries(windows).map(([key, win]) => (
        <Window
          key={key}
          title={win.title}
          initialPos={win.initialPos}
          visible={win.visible}
          onMinimize={() => handleMinimize(key)}
          onClose={() => handleClose(key)}
          onFocus={() => setFocused(key)}
          focused={focused === key}
        >
          {win.content}
        </Window>
      ))}
  <StartMenu open={startOpen} onClose={() => setStartOpen(false)} />
  <Taskbar onStart={handleStart} startOpen={startOpen} windows={windows} onTaskClick={handleTaskClick} />
    </div>
  );
}

export default App;
