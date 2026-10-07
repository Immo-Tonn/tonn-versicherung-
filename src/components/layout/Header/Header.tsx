import { headerCta } from "@/data/navigation";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import Logo from "@/components/ui/Logo/Logo";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <HeaderNav />
        <div className={styles.actions}>
          <Button href={headerCta.href} className={styles.cta}>
            {headerCta.label}
          </Button>
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
