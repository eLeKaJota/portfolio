import styles from '../../styles/Projects.module.scss';
import centrobst from '../../public/assets/img/portfolio/centrobst.jpg';
import CardProject from "../CardProjects";

const Projects = () => {
  return (
    <div className={styles.content}>
      <div className={'row'}>
        <CardProject
          image={"../../assets/img/portfolio/centrobst.jpg"}
          title={'Centro BST'}
          text={<>Página web del centro deportivo Basque Sport Trainers ubicado en Elgoibar (Guipuzkoa).<br />
            Desarrollado en mayor parte con HTML5 y CSS3 con Bootstrap, consta de varias páginas estáticas maquetadas con ayuda de php y algún efecto visual incluido en la librería animate.css</>}
          link={'https://www.centrobst.com'}
        />
        <CardProject
          image={"../../assets/img/portfolio/sei1.gif"}
          title={'SEI - Sport Exercise Innovation'}
          text={<>Plataforma completa de gestión de centros deportivos y software para ejercicios.<br />
            Desarrollado con React, NestJs y MongoDB entre otras tecnologías y alojado en los servidores de AWS, se trata de una muy potente herramienta capaz de gestionar cientos de centros deportivos con todos sus clientes, máquinas y ejercicios.</>}
          link={'https://sei.alifuhkv.com'}
        />
        <CardProject
          image={"../../assets/img/portfolio/getxobono.png"}
          title={'Getxo Bono 2022'}
          text={<>Plataforma de gestión de bonos descuento para los comercios locales de Getxo.<br />
            Haciendo uso de <i>Nx monorepo</i> el cual brinda una tecnología excelente para reutilizar librerías en diferentes campañas, consta de varias aplicaciones para la gestión y uso de los bonos descuento proporcionados por el ayuntamiento para incentivar el comercio local.</>}
          link={'https://www.getxobono.com'}
        />
        <CardProject
          image={"../../assets/img/portfolio/ciex1.gif"}
          title={'CIEX'}
          text={<>Software para la máquina de gimnasio con el mismo nombre.<br />
            Gracias a Arduino que convierte las señales analógicas en digitales y utilizando NodeJs para manejar los datos recibidos de este, a través de sensores conectados por bluetooth, gestiona todos los usuarios y estadísticas de la máquina.</>}
          link={'https://ciex.alifuhkv.com'}
        />
        <CardProject
          image={"../../assets/img/portfolio/mendibil3.gif"}
          title={'Mendibil: Gestión de cocina'}
          text={<>Software enfocado a la hostelería para la gestión completa de una cocina.<br />
            Aplicación nativa para Android escrita en Java con Sqlite y apoyandose en firebase para los servicios en la nube, que permite administrar recetas, costes, proveedores, listas de la compra y control de ingredientes entre otras funciones.</>}
          link={'https://play.google.com/store/apps/details?id=com.zifu.mendibile'}
        />
      </div>
    </div>
  );
}

export default Projects;
