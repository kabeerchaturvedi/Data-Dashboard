// import React from "react";
// import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

// const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
//   return (
//     <SparklineComponent
//       id={id}
//       height={height}
//       width={width}
//       lineWidth={1}
//       valueType="Numeric"
//       fill={color}
//       border={{ color: currentColor, width: 2 }}
//       dataSource={data}
//       xName="x"
//       yName="y"
//       type={type}
//       // eslint-disable-next-line no-template-curly-in-string
//       tooltipSettings={{ visible: true, format: "${x} : data ${y}", trackLineSettings: { visible: true } }}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   );
// };

// export default SparkLine;

import React from "react";

import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

export default class SparkLine extends React.PureComponent {
  render() {
    const { id, type, height, width, data, currentColor, color } = this.props;

    return (
      <>
      <p>Hello there</p>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth="1"
        valueType="Numeric"
        type={type}
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="yval"
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: "${x} : data ${yval}",
          trackLineSettings: { visible: true },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
      </>
    );
  }
}
