import React from "react";

function Header() {
  return (
    <div>
      <header
        data-cy="header-background"
        className="bg-BgBlue w-full h-16 lg:h-24"
      >
        <h1
          data-cy="header-title"
          className="text-white text-lg lg:text-2xl font-bold pl-5 py-4 lg:pl-56 lg:py-9"
        >
          TO DO LIST APP
        </h1>
      </header>
    </div>
  );
}

export default Header;
