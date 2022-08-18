import {useTheme} from "next-themes";
import ContentBlock from "../components/ContentBlock";
import Skills from "../components/Skills";
import WhoAmI from "../components/WhoAmI";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carlos Cifuentes - Portafolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentBlock title="¿Quién soy?" content={<WhoAmI/>} />
      {/*<div className="separator"></div>*/}
      <ContentBlock title="Alguno de mis proyectos" content={<Projects/>} />
      <ContentBlock title="Tecnologías que utilizo" content={<Skills />} />
      <ContentBlock title="Contacta conmigo" content={<Contact />} />
    </>
  );
}
