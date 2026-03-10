import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav style={styles.navbar}>

      <h2 style={styles.logo}>🌿 Paradise Nursery</h2>

      <div style={styles.links}>
        <a href="/">Home</a>
        <a href="/plants">Plants</a>
        <a href="/cart">Cart 🛒 ({cartCount})</a>
      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#2e7d32",
    padding: "15px",
    color: "white"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};

export default Navbar;
