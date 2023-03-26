import MenuItem from "./MenuItem";

import { menuList } from "./../data/MenuList";

function Menu() {
    return (
        <nav>
            {menuList &&
                menuList.map((item, index) => (
                    <MenuItem
                        key={index}
                        title={item.title}
                        to={item.to}
                        icon={item.icon}
                        iconActive={item.iconActive || null}
                    />
                ))}
        </nav>
    );
}
export default Menu;
