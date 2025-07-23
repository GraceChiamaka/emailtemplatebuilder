import { IconButton } from "@core/index";
import { useThemeContext } from "@theme/ThemeProvider";
import { Container, LeftNav, ThemeSwitch } from "./style";

type NavbarProps = {
    onExport: () => void;
    onSend: () => void;
    onSave: () => void;
};

export const Navbar = ({ onExport, onSend, onSave }: NavbarProps) => {
    const { theme, toggleTheme } = useThemeContext();
    const isDarkMode = theme.mode === "dark";

    return (
        <Container>
            <LeftNav>
                <div>Logo</div>

                <IconButton iconName={"preview"} label={"Preview"} size={24} />
                <IconButton iconName={"send"} label={"Send a test"} size={24} onClick={onSend} />
                <IconButton iconName={"save"} label={"Save changes"} size={24} onClick={onSave} />
                <IconButton
                    iconName={"export"}
                    label={"Export html"}
                    size={24}
                    onClick={onExport}
                />
            </LeftNav>
            <ThemeSwitch>
                <IconButton
                    iconName={"dark"}
                    active={isDarkMode}
                    onClick={() => toggleTheme("dark")}
                    label={"dark mode"}
                    size={24}
                />
                <IconButton
                    iconName={"light"}
                    active={!isDarkMode}
                    onClick={() => toggleTheme("light")}
                    label={"light mode"}
                    size={24}
                />
            </ThemeSwitch>
        </Container>
    );
};
