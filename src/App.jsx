import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false); 

  return (
    <div className={`layout ${isCollapsed ? 'sidebar-hidden' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sfc-logo">SFC</div>
          <span>Digital Portal</span>
        </div>
        <nav className="side-menu">
          <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
            <span className="nav-icon">📊</span> Dashboard
          </button>
          <button className={activeTab === 'training' ? 'active' : ''} onClick={() => setActiveTab('training')}>
            <span className="nav-icon">📖</span> Training
          </button>
          <button className={activeTab === 'certs' ? 'active' : ''} onClick={() => setActiveTab('certs')}>
            <span className="nav-icon">📜</span> Certificates
          </button>
        </nav>
        <div style={{marginTop: 'auto', padding: '30px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
          <p style={{color: '#95a5a6', fontSize: '0.8rem'}}>System: SFC-V1.0</p>
        </div>
      </aside>

      <main className="main-container">
        <header className="top-nav">
          <div className="left-header">
            <button className="menu-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed ? '☰' : '✕'}
            </button>
            <div className="breadcrumb">SFC / {activeTab.toUpperCase()}</div>
          </div>
          <div className="user-info">
            <div className="user-circle">U1</div>
          </div>
        </header>

        <div className="page-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-view">
              <div className="welcome-card">
                <h1 style={{margin: 0}}>SFC Guide Center</h1>
                <p style={{opacity: 0.8}}>Professional digital training and certification for Sarawak's parks.</p>
              </div>
              <div className="status-grid">
                <div className="stat-box">
                  <span className="stat-title">Current Progress</span>
                  <div className="big-text">75%</div>
                  <div className="progress-bar"><div className="fill" style={{width: '75%'}}></div></div>
                  <p style={{fontSize: '0.8rem', color: '#888'}}>Module: Biodiversity</p>
                </div>
                <div className="stat-box">
                  <span className="stat-title">Credentials</span>
                  <div className="big-text">02</div>
                  <p style={{marginTop: '10px', fontSize: '0.8rem'}}>Verified Certificates</p>
                </div>
                <div className="stat-box">
                  <span className="stat-title">Status</span>
                  <div className="big-text" style={{color: '#27ae60'}}>Active</div>
                  <p style={{marginTop: '10px', fontSize: '0.8rem'}}>Guide ID: SFC-USER1</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App