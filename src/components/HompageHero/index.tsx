import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./styles.module.css";

const HomepageHero = () => {
  const { siteConfig } = useDocusaurusContext();
  const description = "From Zero to LLM Deployment Hero in a few commands";
  const title = "Constellaxion CLI Docs";
  const quickLinks = [
    {
      label: "Intro",
      description: "Get started with the basics",
      href: "/welcome",
      color: "#45eaf0",
    },
    {
      label: "Cloud Setup",
      description: "Get up and running with AWS or GCP prerequisites",
      href: "/category/cloud-setup",
      color: "#f0cb45",
    },
    {
      label: "Model Configuration and Deployment",
      description: "Learn how to configure cloud jobs and deploy models",
      href: "/configure/model-yaml",
      color: "#45f06d",
    },
  ];
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitle}>{title}</div>
        <div className={styles.heroDescription}>{description}</div>
      </div>
      <div className={clsx("container", styles.quickLinks)}>
        <div className={styles.heroContent}></div>
        {quickLinks.map((link) => (
          <Link key={link.href} to={link.href} className={styles.quickLink}>
            <div
              className={clsx(
                "button button--secondary button--lg",
                styles.quickLinkCard
              )}
            >
              <div className={styles.quickLinkContent}>
                <div
                  className={styles.quickLinkTab}
                  style={{ backgroundColor: link.color }}
                ></div>
                <div className={styles.quickLinkLabel}>{link.label}</div>
              </div>
              <div className={styles.quickLinkDescription}>
                {link.description}
              </div>
            </div>
          </Link>
        ))}
        {/* <Heading as="h1" className="hero__title">
          <LogoSVG width={"400px"} height={"auto"} />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/welcome">
            Start Building 🚀
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default HomepageHero;
