import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage className="home-page">
      <IonHeader className="home-header">
        <IonToolbar>
          <IonTitle>
            <div className="brand-header">
              <div className="brand-mark">IS</div>
              <div className="brand-copy">
                <span className="brand-caption">Flujo de trabajo</span>
                <span className="brand-name">Git + tareas</span>
              </div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-content">
        <main className="presentation-shell">
          <header className="presentation-header">
            <div className="header-chip">GIT · DESARROLLO</div>
            <div className="branch-banner branch-banner-dev">Rama desarrollo • integración y nuevas funciones</div>
            <h1>
              La práctica demuestra
              <span className="title-highlight">subir un proyecto, crear ramas y organizar tareas</span>
              <span className="title-inline">claro</span>
            </h1>
            <p className="lead-copy">
              Un flujo sencillo para trabajar en equipo, separar avances y mantener el proyecto ordenado.
            </p>
          </header>

          <section className="evidence-panel" aria-label="Resumen del proceso">
            <div className="evidence-label">SEGUIMIENTO DEL PROYECTO</div>
            <p>
              El usuario debe poder subir cambios, crear ramas y mantener tareas de manera ordenada con Git.
            </p>
          </section>

          <section className="info-grid" aria-label="Pasos del flujo">
            <article className="info-card">
              <h2>
                <span className="card-index">1</span>
                Subir
              </h2>
              <ul>
                <li>Subir proyecto a Git</li>
                <li>Guardar cambios locales</li>
                <li>Preparar el repositorio</li>
                <li>Crear un punto de inicio</li>
                <li>Organizar el trabajo</li>
              </ul>
            </article>

            <article className="info-card">
              <h2>
                <span className="card-index">2</span>
                Ramas
              </h2>
              <ul>
                <li>Crear rama principal</li>
                <li>Crear rama de desarrollo</li>
                <li>Separar tareas por avance</li>
                <li>Revisar cambios</li>
                <li>Unir trabajo final</li>
              </ul>
            </article>

            <article className="info-card">
              <h2>
                <span className="card-index">3</span>
                Entrega
              </h2>
              <ul>
                <li>Resumen del progreso</li>
                <li>Pruebas y validación</li>
                <li>Objetivo del sprint</li>
                <li>Reporte final</li>
                <li>Conclusión breve</li>
              </ul>
            </article>
          </section>

          <footer className="presentation-footer">
            <span>GIT · TRABAJO EN EQUIPO</span>
            <div className="footer-badge" aria-label="Logo del proyecto">
              <span>&lt;/&gt;</span>
            </div>
          </footer>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
