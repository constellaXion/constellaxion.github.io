import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

type FeatureItem = {
  title: string;
  Image: string | null;
  Video: string | null;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Configure",
    Image: "/img/config-screenshot.png",
    Video: null,
    description: <>Configure your model with a simple YAML file.</>,
  },
  {
    title: "Run",
    Video:
      "https://storage.googleapis.com/cnx-public-eu/constellaxion-commands.mp4",
    Image: null,
    description: (
      <>
        Run model fine-tuning and inference jobs on your private cloud with just
        a few simple commands.
      </>
    ),
  },
  {
    title: "Interact",
    Image: null,
    Video:
      "https://storage.googleapis.com/cnx-public-eu/constellaxion-prompt.mov",
    description: <>Prompt your model from the CLI.</>,
  },
];

function Feature({ title, Image, Video, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Video && (
          <video
            style={{ border: "1px solid black", borderRadius: "3px" }}
            src={Video}
            autoPlay
            muted
            loop
            width={"100%"}
            height={"auto"}
          />
        )}
        {Image && (
          <ThemedImage
            sources={{
              light: useBaseUrl(Image),
              dark: useBaseUrl(Image),
            }}
            alt={title}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
