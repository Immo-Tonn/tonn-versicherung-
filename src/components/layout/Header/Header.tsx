import CallButton from "@/components/ui/CallButton/CallButton";
import Container from "@/components/ui/Container/Container";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import Logo from "@/components/ui/Logo/Logo";
import { getDictionary } from "@/i18n/dictionaries";
import HeaderNav from "./HeaderNav";
import HeaderScrollState from "./HeaderScrollState";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const header = getDictionary("de").header;
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <HeaderNav />
        <div className={styles.actions}>
          <CallButton label={header.call} ariaLabel={header.callAria} className={styles.cta} />
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </Container>
      <HeaderScrollState />
    </header>
  );
}
