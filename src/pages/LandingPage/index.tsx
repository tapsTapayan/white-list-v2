import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

import backdrop from "../../assets/svg/startupPage.svg";
import title from "../../assets/svg/white-list-text-black.svg";
import { FeatureList } from "../../components";
import { setHeader } from "../../lib/hooks";
import { menuData } from "../../lib/json";
import styles from "./index.module.scss";

function LandingPage() {
  const [status, setStatus] = useState(window.scrollY >= 100 ? "row" : "col");

  useEffect(() => {
    window.addEventListener("scroll", () => setHeader(setStatus), {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", () => setHeader(setStatus));
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper} data-value={status}>
        <div className={styles.head} data-value={status}>
          <img
            className={styles.title}
            data-value={status}
            src={title}
            alt="WhiteList"
          />
          <h1 className={styles.slogan} data-value={status}>
            Discover the perfect home away from home
          </h1>
        </div>
        <div className={styles.button} data-value={status}>
          <Button
            variant="gradient"
            gradient={{ from: "#085272", to: "#b3d6bb", deg: 40 }}
            size="md"
            my="10px"
            mx="40px"
            px="50px"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.foot}>
          <img className={styles.backdrop} src={backdrop} alt="" />
        </div>
      </div>
      <div className={styles.body} id="snap">
        <div className={styles.parallax}>
          <FeatureList
            menuData={menuData}
            header="FIND YOUR HOME"
            subheader="Easy and convenient. Find what you need."
            description="Save your time travelling and looking for available spaces in Cebu."
            description2="You can browse it all here!"
          />
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default LandingPage;
