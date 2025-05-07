---
sidebar_position: 3
---
# Supported Models and Platforms

export const PlatformHighlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '10px',
      color: '#fff',
      padding: '10px',
      fontSize: '12px',
      margin: '5px',
    }}>
    {children}
  </span>
);

export const ModelHighlight = ({children}) => (
  <span
    style={{
      backgroundColor: '#DDDFE6',
      borderRadius: '10px',
      color: '#000',
      padding: '10px',
      fontSize: '12px',
      margin: '5px',
    }}>
    {children}
  </span>
);

export const awsColor = "#E38383";
export const gcpColor = "#8391CC";

export const models = [
  {
    name: "TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T",
    aws: false,
    gcp: true,
    fineTune: "Coming Soon",
  },
  {
    name: "tiiuae/falcon-7b-instruct",
    aws: true,
    gcp: true,
    fineTune: "Coming Soon",
  },
  {
    name: "google/gemma-3-4b-it",
    aws: false,
    gcp: true,
    fineTune: "Coming Soon",
  },
];

export const Table = () => {
  return (
    <table style={{ fontFamily: 'Monospace' }}>
      <thead>
        <tr>
          <th>Model</th>
          <th>Deploy</th>
          <th>Fine Tune</th>
        </tr>
      </thead>
      <tbody>
        {models.map((model) => (
          <tr>
            <td><ModelHighlight>{model.name}</ModelHighlight></td>
            <td>{model.aws && <PlatformHighlight color={awsColor}>AWS</PlatformHighlight>}{model.gcp && <PlatformHighlight color={gcpColor}>GCP</PlatformHighlight>}</td>
            <td>Coming Soon</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

<Table />