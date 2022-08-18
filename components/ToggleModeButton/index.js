import styles from '../../styles/Index.module.scss';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import {MdLightMode, MdNightlight} from "react-icons/md";

const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="">
      <button
        type="button"
        aria-label="Modo"
        className={styles.toggleButton}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? <MdLightMode /> : <MdNightlight />}
      </button>
    </div>
  );
};

export default ToggleButton;
