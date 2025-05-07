import React from "react";
import Table from "@site/src/components/molecules/Table/Table";
import PlatformHighlight from "@site/src/components/atoms/PlatformHighlight/PlatformHighlight";

const SupportedModelsTable = () => {
  const awsColor = "#E38383";
  const gcpColor = "#8391CC";
  const aws = <PlatformHighlight color={awsColor}>AWS</PlatformHighlight>;
  const gcp = <PlatformHighlight color={gcpColor}>GCP</PlatformHighlight>;
  const headers = ["Model", "Deploy", "Fine Tune"];
  const rows = [
    [
      "TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T",
      <div style={{ display: "flex", gap: "10px" }}>
        {aws}
        {gcp}
      </div>,
      "Coming Soon",
    ],
    [
      "tiiuae/falcon-7b-instruct",
      <div style={{ display: "flex", gap: "10px" }}>
        {aws}
        {gcp}
      </div>,
      "Coming Soon",
    ],
    [
      "google/gemma-3-4b-it",
      <div style={{ display: "flex", gap: "10px" }}>
        {aws}
        {gcp}
      </div>,
      "Coming Soon",
    ],
  ];
  return (
    <div>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default SupportedModelsTable;
