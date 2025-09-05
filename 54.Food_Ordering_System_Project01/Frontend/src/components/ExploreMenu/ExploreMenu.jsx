import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menus</h1>
        <p className="explore-menu-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          enim cupiditate suscipit, eos debitis a dolore autem dolorem tenetur
          libero provident? Magni corpo
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, i) => {
            return (
              <>
                <div
                  className="explore-menu-list-item"
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    )
                  }
                  key={i}
                >
                  <img
                    src={item.menu_image}
                    className={category === item.menu_name ? "activemenu" : ""}
                    alt="item image not found...."
                  />
                  <p>{item.menu_name}</p>
                </div>
              </>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ExploreMenu;
