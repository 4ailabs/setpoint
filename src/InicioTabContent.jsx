import React from 'react';

export default function InicioTabContent() {
    return (
        <>
            <header className="hero">
                <div className="container">
                    <span className="stat-label">Instituto Centrobioenergetica</span>
                    <h1>SET POINT</h1>
                    <p className="hero-author">Dr. Miguel Ojeda Rios</p>
                    <p>Descubre el secreto que cada kilo cuenta. Los conflictos emocionales se revelan en el tiempo y el cuerpo.</p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">33</span>
                            <span className="stat-label">Conflictos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">7</span>
                            <span className="stat-label">Marcas Clave</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">3</span>
                            <span className="stat-label">Datos Vitales</span>
                        </div>
                    </div>
                </div>
            </header>
            <section id="formula">
                <div className="container">
                    <div className="section-title">
                        <h2>La Fórmula de Diagnóstico</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '20px' }}>
                            ¿CUÁNDO? + ¿DÓNDE? + ¿QUÉ PASABA? = CONFLICTO
                        </h3>
                        <p>La grasa no aparece al azar. Es una solución biológica inteligente a un estrés específico.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
