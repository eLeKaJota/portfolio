import styles from '../../styles/Skills.module.scss';
import CardSkill from "../CardSkill";
import {
  SiAmazonaws, SiAndroidstudio, SiArduino, SiBootstrap, SiC, SiCodechef, SiCss3,
  SiExpress, SiFirebase, SiGnubash, SiHtml5, SiJava,
  SiJavascript, SiLinux,
  SiMongodb, SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs, SiNx,
  SiReact, SiSass
} from "react-icons/si";
import {TbBrandReactNative} from "react-icons/tb";

const Skills = () => {
  return (
    <div className={styles.content}>
      <div className={'row'}>
        <CardSkill
          logo={<SiJavascript />}
          title={'Javascript'}
          text={''}
          link={'https://developer.mozilla.org/es/docs/Web/JavaScript'}
        />
        <CardSkill
          logo={<SiNodedotjs />}
          title={'NodeJs'}
          text={''}
          link={'https://nodejs.org/es/'}
        />
        <CardSkill
          logo={<SiReact />}
          title={'React'}
          text={''}
          link={'https://reactjs.org/'}
        />
        <CardSkill
          logo={<TbBrandReactNative />}
          title={'React Native'}
          text={''}
          link={'https://reactnative.dev/'}
        />
        <CardSkill
          logo={<SiNestjs />}
          title={'NestJs'}
          text={''}
          link={'https://nestjs.com/'}
        />
        <CardSkill
          logo={<SiMongodb />}
          title={'MongoDB'}
          text={''}
          link={'https://www.mongodb.com/'}
        />
        <CardSkill
          logo={<SiNextdotjs />}
          title={'NextJs'}
          text={''}
          link={'https://nextjs.org/'}
        />
        <CardSkill
          logo={<SiExpress />}
          title={'Express'}
          text={''}
          link={'https://expressjs.com/'}
        />
        <CardSkill
          logo={<SiHtml5 />}
          title={'HTML5'}
          text={''}
          link={'https://developer.mozilla.org/es/docs/Web/HTML'}
        />
        <CardSkill
          logo={<SiCss3 />}
          title={'CSS3'}
          text={''}
          link={'https://developer.mozilla.org/es/docs/Web/CSS'}
        />
        <CardSkill
          logo={<SiBootstrap />}
          title={'Bootstrap'}
          text={''}
          link={'https://getbootstrap.com/'}
        />
        <CardSkill
          logo={<SiSass />}
          title={'SASS'}
          text={''}
          link={'https://sass-lang.com/'}
        />
        <CardSkill
          logo={<SiMysql />}
          title={'MySQL'}
          text={''}
          link={'https://www.mysql.com/'}
        />
        <CardSkill
          logo={<SiFirebase />}
          title={'Firebase'}
          text={''}
          link={'https://firebase.google.com/'}
        />
        <CardSkill
          logo={<SiCodechef />}
          title={'Gran cocinero'}
          text={''}
          link={'#'}
        />
        <CardSkill
          logo={<SiC />}
          title={'C'}
          text={''}
          link={'https://en.wikipedia.org/wiki/C_(programming_language)'}
        />
        <CardSkill
          logo={<SiJava />}
          title={'Java'}
          text={''}
          link={'https://www.java.com/'}
        />
        <CardSkill
          logo={<SiAmazonaws />}
          title={'Amazon AWS'}
          text={''}
          link={'https://aws.amazon.com/'}
        />
        <CardSkill
          logo={<SiNx />}
          title={'Nx Monorepo'}
          text={''}
          link={'https://nx.dev/'}
        />
        <CardSkill
          logo={<SiAndroidstudio />}
          title={'Android Studio'}
          text={''}
          link={'https://developer.android.com/studio'}
        />
        <CardSkill
          logo={<SiArduino />}
          title={'Arduino'}
          text={''}
          link={'https://www.arduino.cc/'}
        />
        <CardSkill
          logo={<SiGnubash />}
          title={'Bash'}
          text={''}
          link={'https://www.gnu.org/software/bash/'}
        />
        <CardSkill
          logo={<SiLinux />}
          title={'Linux'}
          text={''}
          link={'https://www.linux.org/'}
        />
      </div>
    </div>
  );
}

export default Skills;
